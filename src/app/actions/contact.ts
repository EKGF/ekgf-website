"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters"),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: "Please correct the errors below",
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    // In production, you would send this via Resend or similar service
    // For now, we'll just log it (you can integrate Resend later)
    console.log("Contact form submission:", result.data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Integrate with Resend API
    // const { data: emailData, error } = await resend.emails.send({
    //   from: 'EKGF <noreply@ekgf.org>',
    //   to: ['contact@ekgf.org'],
    //   subject: `Contact Form: ${result.data.subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${result.data.name}</p>
    //     <p><strong>Email:</strong> ${result.data.email}</p>
    //     <p><strong>Subject:</strong> ${result.data.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${result.data.message}</p>
    //   `,
    // })

    return {
      success: true,
      message:
        "Thank you for your message! We will get back to you as soon as possible.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
