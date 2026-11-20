"use client";

import type { SubmitEvent } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createContactDraft } from "@/lib/contact-draft";
import { cn } from "@/lib/utils";

const fieldClassName = "grid min-w-0 gap-[0.35rem]";
const labelClassName = "text-[length:clamp(0.875rem,1.1vw,1rem)] font-bold";
const controlClassName =
  "w-full min-w-0 rounded-[0.625rem] border border-[#a18f84] bg-(--contact-panel) px-3.5 py-2 text-base leading-6 placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring dark:border-[#877571]";

export function ContactForm({ email }: { email: string }) {
  const action = `mailto:${email}`;

  function openEmailDraft(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    window.location.href = createContactDraft(email, new FormData(event.currentTarget));
  }

  return (
    <Card
      asChild
      className="grid grid-cols-1 gap-5 rounded-[clamp(1.25rem,2.35vw,2rem)] border-border/45 bg-(--contact-panel) p-[clamp(1rem,2.25vw,1.75rem)] shadow-[0_12px_32px_-20px_var(--hero-grad-1),0_5px_18px_var(--hero-grad-1)] [--contact-panel:#fcf8f4] dark:[--contact-panel:var(--card)]"
    >
      <form
        aria-label="Contact form"
        action={action}
        method="post"
        encType="text/plain"
        onSubmit={openEmailDraft}
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
              required
            />
          </div>
        </div>
        <div className="relative z-10 flex flex-wrap items-center gap-x-4 gap-y-2.5">
          <Button
            type="submit"
            aria-describedby="contact-send-hint"
            size="lg"
            className="h-[clamp(2.75rem,3.5vw,3.25rem)] w-52 max-w-full gap-2.5 rounded-[0.625rem] text-base font-[650]"
          >
            <Send aria-hidden="true" className="size-5" />
            Send message
          </Button>
          <p id="contact-send-hint" className="text-[0.8125rem] text-muted-foreground">
            Opens your email app.
          </p>
        </div>
      </form>
    </Card>
  );
}
