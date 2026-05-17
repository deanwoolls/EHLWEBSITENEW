export interface DemoResponse {
  message: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: "consulting" | "engineering" | "project-management" | "operations" | "general" | "other";
  message: string;
}

export interface ContactResponse {
  message: string;
}

export interface ApiError {
  error: string;
  details?: Record<string, string[]>;
}
