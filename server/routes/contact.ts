import { RequestHandler } from "express";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(30).optional(),
  company: z.string().max(100).optional(),
  subject: z.enum(["consulting", "engineering", "project-management", "operations", "general", "other"]),
  message: z.string().min(10).max(5000),
});

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

export const handleContact: RequestHandler = (req, res) => {
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ??
    req.socket.remoteAddress ??
    "";

  if (isRateLimited(ip)) {
    res.status(429).json({ error: "Too many requests. Please try again later." });
    return;
  }

  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: "Invalid form data.", details: result.error.flatten().fieldErrors });
    return;
  }

  console.info("[contact]", {
    name: result.data.name,
    email: result.data.email,
    subject: result.data.subject,
  });

  res.status(200).json({ message: "Thank you. We'll be in touch shortly." });
};
