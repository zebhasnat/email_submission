// Load environment variables from .env file
import "dotenv/config";
// Web framework for creating the server
import express from "express";
// Middleware to allow cross-origin requests (frontend on different domain)
import cors from "cors";
// Email sending service
import { Resend } from "resend";

// Create the Express app
const app = express();

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Enable CORS so frontend can make requests from different domain
app.use(cors());

// Parse incoming JSON data from request body
app.use(express.json());

// Handle POST request to /api/contact endpoint
app.post("/api/contact", async (req, res) => {
  // Extract form data from request body
  const { name, email, message } = req.body;

  // Send email using Resend service
  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev", // Sender email (Resend default)
    to: [process.env.CONTACT_EMAIL], // Your email (receives the message)
    replyTo: [email], // User's email (so you can reply directly)
    subject: `Contact form: ${name}`, // Email subject line
    html: `<p>${name}: ${message}</p>`, // Email body content
  });

  // Return error response if email failed
  if (error) {
    return res.status(500).json({ message: "Failed to send" });
  }

  // Return success response
  return res.status(200).json({ ok: true });
});

// Export app for Vercel serverless function
export default app;