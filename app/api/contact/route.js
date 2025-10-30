// API endpoint for contact form with CSRF protection
import { getCsrfToken, verifyCsrfToken } from '@/lib/csrf';
import { contactFormSchema } from '@/lib/validation';
import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();

    // Verify CSRF token
    const csrfToken = request.headers.get('x-csrf-token');
    if (!csrfToken || !verifyCsrfToken(csrfToken)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid CSRF token',
        },
        { status: 403 }
      );
    }

    // Validate input data
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validationResult.error.errors.map(err => ({
            field: err.path[0],
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;

    // Sanitize data (additional security layer)
    const sanitizedData = {
      name: sanitizeString(validatedData.name),
      email: sanitizeEmail(validatedData.email),
      phone: validatedData.phone ? sanitizePhone(validatedData.phone) : '',
      service: validatedData.service,
      description: sanitizeString(validatedData.description),
      dates: validatedData.dates ? sanitizeString(validatedData.dates) : '',
      photos: validatedData.photos || [],
    };

    // TODO: Save to database
    // await saveContactForm(sanitizedData);

    // TODO: Send email notification
    // await sendEmailNotification(sanitizedData);

    // TODO: Log the submission (wyciszone w produkcji)
    logger.log('Contact form submitted:', {
      timestamp: new Date().toISOString(),
      ip: request.ip || request.headers.get('x-forwarded-for'),
      userAgent: request.headers.get('user-agent'),
      data: sanitizedData,
    });

    return NextResponse.json({
      success: true,
      message: 'Formularz został wysłany pomyślnie',
      data: {
        id: `contact_${Date.now()}`,
        submittedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    logger.error('Contact form error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Wystąpił błąd podczas przetwarzania formularza',
      },
      { status: 500 }
    );
  }
}

// CSRF token endpoint
export async function GET() {
  try {
    const token = getCsrfToken();

    return NextResponse.json({
      success: true,
      csrfToken: token,
    });
  } catch (error) {
    logger.error('CSRF token generation error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to generate CSRF token',
      },
      { status: 500 }
    );
  }
}

// Helper functions for data sanitization
function sanitizeString(str) {
  return str
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
}

function sanitizeEmail(email) {
  return email
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9@._-]/g, ''); // Keep only valid email characters
}

function sanitizePhone(phone) {
  return phone.trim().replace(/[^0-9+\-\s()]/g, ''); // Keep only valid phone characters
}
