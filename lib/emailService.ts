/**
 * Email Service
 * Handles sending emails for various form submissions across the MUIAA platform
 * Supports: Career Applications, Investment Applications, Partnership Applications, Contact Forms, and Hackathon Applications
 */

export type FormType = "career" | "invest" | "partners" | "contact" | "hackathon";

// Career Application Email Types
export interface CareerApplicationData {
  fullName: string;
  email: string;
  phone?: string;
  position: string;
  experience: string;
  location?: string;
  availability?: string;
  skills: string[];
  portfolio?: string;
  coverLetter: string;
  resume?: string;
}

// Investment Application Email Types
export interface InvestmentApplicationData {
  name: string;
  email: string;
  organization?: string;
  phone?: string;
  investmentType: string;
  investmentAmount: string;
  timeline?: string;
  message: string;
}

// Partnership Application Email Types
export interface PartnershipApplicationData {
  organizationName: string;
  contactName: string;
  email: string;
  phone?: string;
  website?: string;
  partnershipType: string;
  sector?: string;
  location?: string;
  scale?: string;
  partnershipGoals: string[];
  description: string;
}

// Contact Form Email Types
export interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  message: string;
}

// Hackathon Application Email Types
export interface HackathonApplicationData {
  fullName: string;
  email: string;
  phone?: string;
  teamName: string;
  teamSize?: string;
  projectIdea: string;
  experienceLevel?: string;
  technologies?: string;
}

export type FormData =
  | CareerApplicationData
  | InvestmentApplicationData
  | PartnershipApplicationData
  | ContactFormData
  | HackathonApplicationData;

// Email Response Type
export interface EmailResponse {
  success: boolean;
  message: string;
  data?: {
    messageId?: string;
    timestamp?: string;
  };
  error?: string;
}

/**
 * Verify email address format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Format phone number with country code
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "");

  // If it's a Kenya number without country code, add it
  if (digits.length === 10 && digits.startsWith("7")) {
    return `+254${digits.substring(1)}`;
  }

  // If it already has country code, format it
  if (digits.length === 12 && digits.startsWith("254")) {
    return `+${digits}`;
  }

  return phone;
}

/**
 * Main Email Service Class
 */
class EmailService {
  private apiBaseUrl: string;

  constructor(apiBaseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000") {
    this.apiBaseUrl = apiBaseUrl;
  }

  /**
   * Send Career Application Email
   */
  async sendCareerApplicationEmail(data: CareerApplicationData): Promise<EmailResponse> {
    return this.sendEmail("career", data);
  }

  /**
   * Send Investment Application Email
   */
  async sendInvestmentApplicationEmail(data: InvestmentApplicationData): Promise<EmailResponse> {
    return this.sendEmail("invest", data);
  }

  /**
   * Send Partnership Application Email
   */
  async sendPartnershipApplicationEmail(data: PartnershipApplicationData): Promise<EmailResponse> {
    return this.sendEmail("partners", data);
  }

  /**
   * Send Contact Form Email
   */
  async sendContactEmail(data: ContactFormData): Promise<EmailResponse> {
    return this.sendEmail("contact", data);
  }

  /**
   * Send Hackathon Application Email
   */
  async sendHackathonApplicationEmail(data: HackathonApplicationData): Promise<EmailResponse> {
    return this.sendEmail("hackathon", data);
  }

  /**
   * Generic Email Sender
   */
  private async sendEmail(formType: FormType, data: FormData): Promise<EmailResponse> {
    try {
      // For now, simulate email sending without backend
      // TODO: Implement actual email API endpoint
      console.log(`[EMAIL SERVICE] Sending ${formType} email:`, data);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For development, just log and return success
      return {
        success: true,
        message: `${formType} email sent successfully`,
        data: {
          messageId: `msg_${Date.now()}`,
          timestamp: new Date().toISOString(),
        },
      };

      // Uncomment this when you have a backend API endpoint
      /*
      const response = await fetch(`${this.apiBaseUrl}/api/email/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType,
          data,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to send ${formType} email`);
      }

      const result = await response.json();
      return {
        success: true,
        message: `${formType} email sent successfully`,
        data: result,
      };
      */
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      console.error(`Email send error (${formType}):`, errorMessage);
      return {
        success: false,
        message: `Failed to send ${formType} email`,
        error: errorMessage,
      };
    }
  }

  /**
   * Verify email address format (instance method)
   */
  static isValidEmail(email: string): boolean {
    return isValidEmail(email);
  }

  /**
   * Format phone number with country code (instance method)
   */
  static formatPhoneNumber(phone: string): string {
    return formatPhoneNumber(phone);
  }
}

// Export singleton instance
export const emailService = new EmailService();

export default emailService;

