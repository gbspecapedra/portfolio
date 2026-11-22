"use client";

import { type TUseForm, useForm, ValidationError } from "@formspree/react";
import { Send } from "lucide-react";
import { useEffect, useRef, type SubmitEventHandler } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createContactDraft } from "@/lib/contact-draft";
import { cn } from "@/lib/utils";

const fieldClassName = "grid min-w-0 gap-[0.35rem]";
const labelClassName = "text-[length:clamp(0.875rem,1.1vw,1rem)] font-bold";
const controlClassName =
  "min-h-11 w-full min-w-0 rounded-[0.625rem] border border-(--contact-field-border) bg-(--contact-panel) px-3.5 py-2 text-base leading-6 placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring aria-invalid:border-destructive";
const cardClassName =
  "grid grid-cols-1 gap-5 rounded-[clamp(1.25rem,2.35vw,2rem)] border-border/45 bg-(--contact-panel) p-[clamp(1rem,2.25vw,1.75rem)] shadow-[0_12px_32px_-20px_var(--hero-grad-1),0_5px_18px_var(--hero-grad-1)] [--contact-panel:#fcf8f4] [--contact-field-border:color-mix(in_srgb,var(--muted-foreground)_78%,var(--contact-panel))] dark:[--contact-panel:var(--card)] dark:[--contact-field-border:#877571]";

type ContactFields = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm({ email, formId }: { email: string; formId?: string }) {
  if (formId) {
    return <FormspreeContactForm formId={formId} />;
  }

  return (
    <ContactFormCard
      action={`mailto:${email}`}
      onSubmit={(event) => {
        event.preventDefault();
        window.location.href = createContactDraft(email, new FormData(event.currentTarget));
      }}
    />
  );
}

function FormspreeContactForm({ formId }: { formId: string }) {
  const [submission, handleSubmit] = useForm<ContactFields>(formId);

  return (
    <ContactFormCard
      action={`https://formspree.io/f/${formId}`}
      onSubmit={handleSubmit}
      submission={submission}
    />
  );
}

function ContactFormCard({
  action,
  onSubmit,
  submission,
}: {
  action: string;
  onSubmit: SubmitEventHandler<HTMLFormElement>;
  submission?: TUseForm<ContactFields>[0];
}) {
  const { errors, submitting, succeeded } = submission ?? {};
  const opensEmailApp = submission === undefined;
  const invalidName = Boolean(errors?.getFieldErrors("name").length);
  const invalidEmail = Boolean(errors?.getFieldErrors("email").length);
  const invalidMessage = Boolean(errors?.getFieldErrors("message").length);
  const statusRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const status = statusRef.current;
    if (!succeeded || !status) return;

    const focusedElement = document.activeElement;
    if (focusedElement === document.body || status.parentElement?.contains(focusedElement)) {
      status.focus();
    }
  }, [succeeded]);

  return (
    <Card className={cardClassName}>
      <form
        aria-label="Contact form"
        aria-busy={submitting || undefined}
        action={action}
        method="post"
        encType={opensEmailApp ? "text/plain" : undefined}
        onSubmit={onSubmit}
        className={succeeded ? "hidden" : "grid gap-5"}
      >
        <div className="relative z-10 grid gap-x-[clamp(1rem,1.8vw,1.625rem)] gap-y-3 min-[30rem]:grid-cols-2">
          <div className={fieldClassName}>
            <label className={labelClassName} htmlFor="contact-name">
              Name <span className="text-destructive" aria-hidden="true">*</span>
            </label>
            <input
              className={controlClassName}
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              aria-invalid={invalidName || undefined}
              aria-describedby={invalidName ? "contact-name-error" : undefined}
              required
            />
          </div>
          <div className={fieldClassName}>
            <label className={labelClassName} htmlFor="contact-email">
              Email <span className="text-destructive" aria-hidden="true">*</span>
            </label>
            <input
              className={controlClassName}
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your@email.com"
              aria-invalid={invalidEmail || undefined}
              aria-describedby={invalidEmail ? "contact-email-error" : undefined}
              required
            />
          </div>
          <div className={`col-span-full ${fieldClassName}`}>
            <label className={labelClassName} htmlFor="contact-message">
              Message <span className="text-destructive" aria-hidden="true">*</span>
            </label>
            <textarea
              className={cn(controlClassName, "min-h-26 resize-y leading-[1.4]")}
              id="contact-message"
              name="message"
              placeholder="Tell me about the opportunity, project or idea..."
              rows={4}
              aria-invalid={invalidMessage || undefined}
              aria-describedby={invalidMessage ? "contact-message-error" : undefined}
              required
            />
          </div>
        </div>
        {errors && (
          <div className="text-sm text-destructive" role="alert">
            <p>Couldn’t send your message. Please check your details and try again.</p>
            <ValidationError id="contact-name-error" errors={errors} field="name" prefix="Name" />
            <ValidationError id="contact-email-error" errors={errors} field="email" prefix="Email" />
            <ValidationError id="contact-message-error" errors={errors} field="message" prefix="Message" />
          </div>
        )}
        <div className="relative z-10 flex flex-wrap items-center gap-x-4 gap-y-2.5">
          <Button
            type="submit"
            aria-describedby={opensEmailApp ? "contact-send-hint" : undefined}
            disabled={submitting}
            size="lg"
            className="h-[clamp(2.75rem,3.5vw,3.25rem)] w-52 max-w-full gap-2.5 rounded-[0.625rem] text-base font-[650] disabled:bg-secondary disabled:text-secondary-foreground disabled:opacity-100"
          >
            <Send aria-hidden="true" className="size-5" />
            {submitting ? "Sending message…" : "Send message"}
          </Button>
          {opensEmailApp && (
            <p id="contact-send-hint" className="text-[0.8125rem] text-muted-foreground">
              Opens your email app.
            </p>
          )}
        </div>
      </form>
      {submission && (
        <p
          ref={statusRef}
          className={succeeded ? "scroll-mt-32 rounded-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" : "sr-only"}
          role="status"
          tabIndex={succeeded ? -1 : undefined}
        >
          {submitting && "Sending message…"}
          {succeeded && "Message sent. Thank you for reaching out!"}
        </p>
      )}
    </Card>
  );
}
