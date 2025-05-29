import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { sendEmail } from "./email";
import path from "path";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // Send email to Hana
      const emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject || 'No subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `;
      
      const emailSent = await sendEmail({
        to: "hananahberhe@gmail.com",
        from: "noreply@portfolio.com",
        subject: `Portfolio Contact: ${validatedData.subject || 'New Message'} from ${validatedData.name}`,
        text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nSubject: ${validatedData.subject || 'No subject'}\nMessage: ${validatedData.message}`,
        html: emailHtml
      });
      
      if (emailSent) {
        res.json({ 
          success: true, 
          message: "Thank you for your message! I'll get back to you soon." 
        });
      } else {
        res.json({ 
          success: true, 
          message: "Message received! I'll get back to you soon." 
        });
      }
      
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data. Please check your inputs." 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    res.json({
      success: true,
      message: "Resume download would start here",
      downloadUrl: "/resume/Hana_Berhe_Girmay_Resume.pdf"
    });
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "healthy", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
