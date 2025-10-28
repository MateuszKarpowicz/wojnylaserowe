// Validation schemas using Zod
import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Imię musi mieć co najmniej 2 znaki')
    .max(100, 'Imię nie może być dłuższe niż 100 znaków')
    .regex(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/, 'Imię może zawierać tylko litery i spacje'),
  
  email: z.string()
    .email('Nieprawidłowy adres email')
    .max(255, 'Email nie może być dłuższy niż 255 znaków'),
  
  phone: z.string()
    .regex(/^[0-9+\-\s()]+$/, 'Nieprawidłowy numer telefonu')
    .min(9, 'Numer telefonu musi mieć co najmniej 9 znaków')
    .max(20, 'Numer telefonu nie może być dłuższy niż 20 znaków')
    .optional(),
  
  service: z.string()
    .min(1, 'Wybierz rodzaj usługi')
    .refine((val) => ['Usunięcie tatuażu', 'Usunięcie blizny', 'Konsultacja', 'Inne'].includes(val), {
      message: 'Wybierz prawidłowy rodzaj usługi'
    }),
  
  description: z.string()
    .min(10, 'Opis musi mieć co najmniej 10 znaków')
    .max(1000, 'Opis nie może być dłuższy niż 1000 znaków')
    .regex(/^[^<>]*$/, 'Opis nie może zawierać znaków < i >'),
  
  dates: z.string()
    .max(500, 'Terminy nie mogą być dłuższe niż 500 znaków')
    .optional(),
  
  photos: z.array(z.string().url('Nieprawidłowy URL zdjęcia'))
    .max(5, 'Maksymalnie 5 zdjęć')
    .optional(),
});

// Effect validation schema
export const effectSchema = z.object({
  title: z.string()
    .min(1, 'Tytuł jest wymagany')
    .max(200, 'Tytuł nie może być dłuższy niż 200 znaków')
    .regex(/^[^<>]*$/, 'Tytuł nie może zawierać znaków < i >'),
  
  description: z.string()
    .max(1000, 'Opis nie może być dłuższy niż 1000 znaków')
    .optional(),
  
  imageUrl: z.string()
    .url('Nieprawidłowy URL obrazu')
    .regex(/\.(jpg|jpeg|png|webp)$/i, 'Obraz musi być w formacie JPG, PNG lub WebP'),
  
  altText: z.string()
    .min(1, 'Alt text jest wymagany')
    .max(200, 'Alt text nie może być dłuższy niż 200 znaków')
    .regex(/^[^<>]*$/, 'Alt text nie może zawierać znaków < i >'),
  
  category: z.string()
    .max(100, 'Kategoria nie może być dłuższa niż 100 znaków')
    .optional(),
  
  isActive: z.boolean().default(true)
});

// FAQ validation schema
export const faqSchema = z.object({
  question: z.string()
    .min(5, 'Pytanie musi mieć co najmniej 5 znaków')
    .max(500, 'Pytanie nie może być dłuższe niż 500 znaków')
    .regex(/^[^<>]*$/, 'Pytanie nie może zawierać znaków < i >'),
  
  answer: z.string()
    .min(10, 'Odpowiedź musi mieć co najmniej 10 znaków')
    .max(2000, 'Odpowiedź nie może być dłuższa niż 2000 znaków')
    .regex(/^[^<>]*$/, 'Odpowiedź nie może zawierać znaków < i >'),
  
  category: z.string()
    .min(1, 'Kategoria jest wymagana')
    .max(100, 'Kategoria nie może być dłuższa niż 100 znaków'),
  
  order: z.number()
    .int('Kolejność musi być liczbą całkowitą')
    .min(0, 'Kolejność nie może być ujemna')
    .max(1000, 'Kolejność nie może być większa niż 1000'),
  
  isActive: z.boolean().default(true)
});

// User validation schema
export const userSchema = z.object({
  email: z.string()
    .email('Nieprawidłowy adres email')
    .max(255, 'Email nie może być dłuższy niż 255 znaków'),
  
  password: z.string()
    .min(8, 'Hasło musi mieć co najmniej 8 znaków')
    .max(128, 'Hasło nie może być dłuższe niż 128 znaków')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Hasło musi zawierać małą literę, wielką literę i cyfrę'),
  
  role: z.string()
    .refine((val) => ['USER', 'ADMIN'].includes(val), {
      message: 'Rola musi być USER lub ADMIN'
    })
    .default('USER')
});

// File upload validation schema
export const fileUploadSchema = z.object({
  file: z.instanceof(File, 'Plik jest wymagany')
    .refine((file) => file.size <= 10 * 1024 * 1024, 'Plik nie może być większy niż 10MB')
    .refine(
      (file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
      'Plik musi być w formacie JPG, PNG lub WebP'
    ),
  
  alt: z.string()
    .min(1, 'Alt text jest wymagany')
    .max(200, 'Alt text nie może być dłuższy niż 200 znaków')
    .regex(/^[^<>]*$/, 'Alt text nie może zawierać znaków < i >')
});

// API response validation schemas
export const apiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  data: z.any().optional(),
  errors: z.array(z.string()).optional()
});

// Health check response schema
export const healthCheckSchema = z.object({
  status: z.string()
    .refine((val) => ['healthy', 'unhealthy'].includes(val), {
      message: 'Status musi być healthy lub unhealthy'
    }),
  timestamp: z.string().datetime(),
  uptime: z.number().positive(),
  version: z.string(),
  environment: z.string(),
  services: z.object({
    database: z.object({
      status: z.string()
        .refine((val) => ['healthy', 'unhealthy'].includes(val), {
          message: 'Database status musi być healthy lub unhealthy'
        }),
      responseTime: z.string().optional(),
      error: z.string().optional()
    }),
    redis: z.object({
      status: z.string()
        .refine((val) => ['healthy', 'unhealthy'].includes(val), {
          message: 'Redis status musi być healthy lub unhealthy'
        }),
      responseTime: z.string().optional(),
      error: z.string().optional()
    }),
    storage: z.object({
      status: z.string()
        .refine((val) => ['healthy', 'unhealthy'].includes(val), {
          message: 'Storage status musi być healthy lub unhealthy'
        }),
      available: z.boolean().optional(),
      error: z.string().optional()
    })
  })
});

// Export types for TypeScript (commented out for JavaScript compatibility)
// export type ContactFormData = z.infer<typeof contactFormSchema>;
// export type EffectData = z.infer<typeof effectSchema>;
// export type FAQData = z.infer<typeof faqSchema>;
// export type UserData = z.infer<typeof userSchema>;
// export type FileUploadData = z.infer<typeof fileUploadSchema>;
// export type ApiResponse = z.infer<typeof apiResponseSchema>;
// export type HealthCheckResponse = z.infer<typeof healthCheckSchema>;
