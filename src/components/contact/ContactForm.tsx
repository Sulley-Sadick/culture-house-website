"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FieldName = "name" | "phone" | "interest" | "message";

type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  interest: "",
  message: "",
};

function validateField(name: FieldName, value: string): string {
  const trimmed = value.trim();

  if (!trimmed) {
    return "This field is required";
  }

  if (trimmed.length <= 2) {
    return "Must be greater than 2 characters";
  }

  return "";
}

function validateForm(values: FormValues): FormErrors {
  const nextErrors: FormErrors = {};

  (Object.keys(values) as FieldName[]).forEach((field) => {
    const message = validateField(field, values[field]);
    if (message) nextErrors[field] = message;
  });

  return nextErrors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    const field = name as FieldName;

    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const message = validateField(field, value);
      if (!message) {
        const rest = { ...prev };
        delete rest[field];
        return rest;
      }
      return { ...prev, [field]: message };
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-culture-sand bg-culture-sand/50 p-8">
        <p className="font-display text-xl font-bold text-culture-brown-dark">
          Thank you for reaching out
        </p>
        <p className="mt-2 text-culture-brown/80">
          For the fastest reply, message us on WhatsApp — we&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-culture-brown">
          Your name
        </label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-1 w-full rounded border border-culture-sand bg-white px-4 py-3 text-culture-brown-dark outline-none focus:border-culture-brown"
        />
        {errors.name ? (
          <p id="name-error" className="mt-1.5 text-sm text-red-500">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-culture-brown">
          Phone / WhatsApp number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="mt-1 w-full rounded border border-culture-sand bg-white px-4 py-3 text-culture-brown-dark outline-none focus:border-culture-brown"
        />
        {errors.phone ? (
          <p id="phone-error" className="mt-1.5 text-sm text-red-500">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-bold text-culture-brown">
          I&apos;m looking for
        </label>
        <select
          id="interest"
          name="interest"
          value={values.interest}
          onChange={handleChange}
          aria-invalid={Boolean(errors.interest)}
          aria-describedby={errors.interest ? "interest-error" : undefined}
          className="mt-1 w-full rounded border border-culture-sand bg-white px-4 py-3 text-culture-brown-dark outline-none focus:border-culture-brown"
        >
          <option value="">Select an option</option>
          <option value="Single room">Single room</option>
          <option value="Self-contained">Self-contained</option>
          <option value="Land for sale">Land for sale</option>
          <option value="Land for lease">Land for lease</option>
          <option value="Other">Other</option>
        </select>
        {errors.interest ? (
          <p id="interest-error" className="mt-1.5 text-sm text-red-500">
            {errors.interest}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-culture-brown">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us about budget, area, or a listing you saw..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1 w-full rounded border border-culture-sand bg-white px-4 py-3 text-culture-brown-dark outline-none focus:border-culture-brown"
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-500">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center justify-center rounded bg-culture-gold px-10 py-4 text-[15px] font-bold text-culture-brown-dark transition-colors hover:bg-culture-gold-dark"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
