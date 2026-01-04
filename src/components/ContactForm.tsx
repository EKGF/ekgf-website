"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
      className="w-full sm:w-auto"
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-6">
      {state.message && (
        <Alert variant={state.success ? "default" : "destructive"}>
          {state.success ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            aria-invalid={state.errors?.name ? "true" : "false"}
          />
          {state.errors?.name && (
            <p className="text-sm text-destructive">
              {state.errors.name[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            aria-invalid={state.errors?.email ? "true" : "false"}
          />
          {state.errors?.email && (
            <p className="text-sm text-destructive">
              {state.errors.email[0]}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject *</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="What would you like to discuss?"
          required
          aria-invalid={state.errors?.subject ? "true" : "false"}
        />
        {state.errors?.subject && (
          <p className="text-sm text-destructive">
            {state.errors.subject[0]}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us more about your inquiry..."
          rows={6}
          required
          aria-invalid={state.errors?.message ? "true" : "false"}
        />
        {state.errors?.message && (
          <p className="text-sm text-destructive">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}
