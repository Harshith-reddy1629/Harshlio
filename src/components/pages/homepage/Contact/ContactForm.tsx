"use client";
import { ArrowBigRightDash } from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import clsx from "clsx";
import useTriggerAction from "triggerAction";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm({
  className = "",
}: {
  className?: string;
}) {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const { handleClickAction: handleClick } = useTriggerAction();

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.email.trim()) newErrors.email = "Required";
    if (!form.message.trim()) newErrors.message = "Required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClick(
      `Submit ${form.name} ${form.email} ${form.message} {contact form} `,
    );
    if (status === "loading" || status === "success") return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_KEY ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_KEY ?? "",
        form,
        process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "",
      );

      setStatus("success");
      handleClick(`Form Submitted ${form.name} ${form.email} {contact form}`);
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
      setForm(INITIAL_FORM);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <div className={className} data-scroll-effect>
      <form
        onFocus={(e) => {
          handleClick(`${e.target.name} focused ${e.isTrusted} {contact form}`);
        }}
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-3 text-sm"
      >
        <div className="flex flex-wrap gap-3 *:flex-[1_1_45%]">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Name</label>
            <input
              className="rounded-md bg-[#191919] p-3 outline-0"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors?.name && (
              <span className="text-xs text-red-700">Required</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Email</label>
            <input
              onChange={handleChange}
              className="rounded-md bg-[#191919] p-3 outline-0"
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              id="email"
            />{" "}
            {errors?.email && (
              <span className="text-xs text-red-700">Required</span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Message</label>
          <textarea
            onChange={handleChange}
            name="message"
            value={form.message}
            id="message"
            rows={4}
            placeholder="Message"
            className="resize-none rounded-md bg-[#191919] p-3 outline-0"
          ></textarea>{" "}
          {errors?.message && (
            <span className="text-xs text-red-700">Required</span>
          )}
        </div>
        <button
          className={clsx(
            "group relative ml-auto flex w-fit cursor-pointer items-center gap-1 rounded-lg border border-white/10 p-3 px-8 transition-all duration-300 hover:bg-black/20 disabled:cursor-not-allowed disabled:opacity-50",

            {
              "bg-green-700/20 text-green-500": status === "success",
              "bg-red-600/10 text-red-500": status === "error",
            },
          )}
          disabled={status === "loading"}
          type="submit"
        >
          {status === "loading"
            ? "Sending..."
            : status === "success"
              ? "Sent"
              : "Send Message"}
          {status !== "loading" && status !== "success" && (
            <ArrowBigRightDash
              size={16}
              className="mt-0.5 transition-all duration-300 group-hover:translate-x-1"
            />
          )}
        </button>
        {status === "error" && (
          <span className="text-center text-xs text-red-700">
            {" "}
            Something went wrong
          </span>
        )}
      </form>
    </div>
  );
}
