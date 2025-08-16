"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import ContactForm from "../../Contact/ContactForm";
import useTriggerAction from "triggerAction";

export default function ContactDialog({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { handleClickAction: handleClick } = useTriggerAction();

  return (
    <Dialog>
      <DialogTrigger
        onClick={() => handleClick("CONTACT DIALOG")}
        aria-label="Contact Me"
        className={className}
      >
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">Connect with Me</DialogTitle>
          <DialogDescription className="p-0"></DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
