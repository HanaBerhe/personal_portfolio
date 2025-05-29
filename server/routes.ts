import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, message: "Contact form submitted successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit contact form. Please try again." 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    // In a real implementation, this would serve the actual resume file
    // For now, we'll simulate the download by sending a response
    const resumePath = path.join(__dirname, "../assets/Hana_Berhe_Girmay_Resume.pdf");
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Hana_Berhe_Girmay_Resume.pdf"');
    
    // Since we don't have an actual PDF file, we'll send a message
    res.status(200).json({ 
      message: "Resume download initiated", 
      filename: "Hana_Berhe_Girmay_Resume.pdf" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
