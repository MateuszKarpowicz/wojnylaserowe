-- PostgreSQL initialization script

-- Create database if not exists
CREATE DATABASE wojny_laserowe_dev;

-- Create user if not exists
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'wojny_laserowe') THEN
        CREATE ROLE wojny_laserowe LOGIN PASSWORD 'wojny_laserowe_password';
    END IF;
END
$$;

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE wojny_laserowe_dev TO wojny_laserowe;

-- Connect to the database
\c wojny_laserowe_dev;

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Create tables (basic structure)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS effects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    src VARCHAR(500) NOT NULL,
    alt VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    tags TEXT[],
    is_active BOOLEAN DEFAULT true,
    user_id UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'PENDING',
    user_id UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_effects_category ON effects(category);
CREATE INDEX IF NOT EXISTS idx_effects_user_id ON effects(user_id);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);

-- Insert sample data
INSERT INTO users (email, password, name, role) VALUES 
('admin@wojny-laserowe.pl', '$2b$10$example_hash', 'Admin', 'ADMIN')
ON CONFLICT (email) DO NOTHING;

INSERT INTO effects (title, description, src, alt, category) VALUES 
('Efekt Laserowy 1', 'Opis efektu laserowego', '/images/effects/efekty1.jpg', 'Efekt laserowy 1', 'laser'),
('Efekt Laserowy 2', 'Opis efektu laserowego', '/images/effects/efekty2.jpg', 'Efekt laserowy 2', 'laser'),
('Efekt Laserowy 3', 'Opis efektu laserowego', '/images/effects/efekty3.jpg', 'Efekt laserowy 3', 'laser')
ON CONFLICT DO NOTHING;
