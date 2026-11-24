"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@ui-sdk/react/button";
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/react/dialog";
import { Field, FieldLabel } from "@ui-sdk/react/field";
import { Input } from "@ui-sdk/react/input";
import { Textarea } from "@ui-sdk/react/textarea";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactDialog({
  trigger,
  triggerClassName,
  title,
  description,
}: {
  trigger: string;
  triggerClassName?: string;
  title: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.get("firstName"),
          lastName: form.get("lastName"),
          email: form.get("email"),
          subject: title,
          message: form.get("message"),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) setStatus("idle");
      }}
    >
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
      <DialogBackdrop className="dl-backdrop" />
      <DialogContent className="dl-dialog">
        <DialogTitle className="dl-dialog-title">
          {status === "sent" ? "Message sent" : title}
        </DialogTitle>
        <DialogDescription className="dl-dialog-desc">
          {status === "sent"
            ? "Thanks. I'll get back to you within one working day."
            : description}
        </DialogDescription>
        {status === "sent" ? (
          <div className="dl-form-actions">
            <DialogClose className="dl-btn dl-btn-primary">Done</DialogClose>
          </div>
        ) : (
          <form className="dl-form" onSubmit={submit}>
            <div className="dl-form-row">
              <Field name="firstName">
                <FieldLabel>First name</FieldLabel>
                <Input autoComplete="given-name" required />
              </Field>
              <Field name="lastName">
                <FieldLabel>Last name</FieldLabel>
                <Input autoComplete="family-name" required />
              </Field>
            </div>
            <Field name="email">
              <FieldLabel>Email</FieldLabel>
              <Input type="email" autoComplete="email" required />
            </Field>
            <Field name="message">
              <FieldLabel>What are you building?</FieldLabel>
              <Textarea rows={4} required />
            </Field>
            {status === "error" && (
              <p role="alert" className="dl-form-error">
                That didn&apos;t send. Try again, or email me directly.
              </p>
            )}
            <div className="dl-form-actions">
              <DialogClose className="dl-btn">Cancel</DialogClose>
              <Button
                type="submit"
                className="dl-btn dl-btn-primary"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
