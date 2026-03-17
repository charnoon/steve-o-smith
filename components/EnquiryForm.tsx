"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  civilityOptions,
  contactMethodOptions,
} from "@/data/config";

const PRIVACY_COPY =
  "INFORMATION ENTERED ABOVE WILL ONLY BE USED TO GIVE AN ACCURATE RESPONSE TO YOUR INQUIRY. STEVE O SMITH WILL NEVER RELEASE PERSONAL DATA. FOR MORE DETAILS, PLEASE READ OUR PRIVACY POLICY. PLEASE NOTE THAT YOUR CONTACT DETAILS WILL ONLY BE USED TO GET IN TOUCH WITH YOU REGARDING YOUR APPOINTMENT.";

interface FormData {
  civility: string;
  firstName: string;
  lastName: string;
  email: string;
  prefix: string;
  mobile: string;
  contactMethod: string;
  enquiry: string;
}

const initialForm: FormData = {
  civility: "",
  firstName: "",
  lastName: "",
  email: "",
  prefix: "",
  mobile: "",
  contactMethod: "",
  enquiry: "",
};

export function EnquiryForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.firstName.trim()) next.firstName = "Required";
    if (!form.lastName.trim()) next.lastName = "Required";
    if (!form.email.trim()) next.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Invalid email";
    if (!form.enquiry.trim()) next.enquiry = "Required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Enquiry submitted:", form);
    setForm(initialForm);
    setErrors({});
  };

  const inputClass =
    "w-full appearance-none border-b border-neutral-300 bg-transparent py-2 font-serif text-body text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-neutral-600";

  const selectClass = `${inputClass} cursor-pointer`;

  const labelClass = "mb-1 block font-serif text-label text-neutral-500";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="civility" className={labelClass}>
            CIVILITY
          </label>
          <select
            id="civility"
            value={form.civility}
            onChange={(e) => update("civility", e.target.value)}
            className={selectClass}
            aria-required={false}
          >
            {civilityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            FIRST NAME <span className="text-neutral-400">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            className={inputClass}
            placeholder=""
            aria-required
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1 text-label text-neutral-500">
              {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            LAST NAME <span className="text-neutral-400">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            className={inputClass}
            placeholder=""
            aria-required
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <p id="lastName-error" className="mt-1 text-label text-neutral-500">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          EMAIL <span className="text-neutral-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass}
          placeholder=""
          aria-required
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-label text-neutral-500">
            {errors.email}
          </p>
        )}
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-4">
        <div className="w-20">
          <label htmlFor="prefix" className={labelClass}>
            PREFIX
          </label>
          <input
            id="prefix"
            type="text"
            value={form.prefix}
            onChange={(e) => update("prefix", e.target.value)}
            className={inputClass}
            placeholder="+44"
            aria-required={false}
          />
        </div>
        <div>
          <label htmlFor="mobile" className={labelClass}>
            MOBILE NUMBER
          </label>
          <input
            id="mobile"
            type="tel"
            value={form.mobile}
            onChange={(e) => update("mobile", e.target.value)}
            className={inputClass}
            placeholder=""
            aria-required={false}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contactMethod" className={labelClass}>
          PREFERRED CONTACT METHOD
        </label>
        <select
          id="contactMethod"
          value={form.contactMethod}
          onChange={(e) => update("contactMethod", e.target.value)}
            className={selectClass}
            aria-required={false}
        >
          {contactMethodOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="enquiry" className={labelClass}>
          YOUR ENQUIRY <span className="text-neutral-400">*</span>
        </label>
        <textarea
          id="enquiry"
          value={form.enquiry}
          onChange={(e) => update("enquiry", e.target.value)}
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder=""
          aria-required
          aria-invalid={!!errors.enquiry}
        />
        {errors.enquiry && (
          <p id="enquiry-error" className="mt-1 text-label text-neutral-500">
            {errors.enquiry}
          </p>
        )}
      </div>

      <p className="font-serif text-[0.625rem] leading-relaxed tracking-[0.02em] text-neutral-500">
        {PRIVACY_COPY}
      </p>

      <button
        type="submit"
        className="mt-6 border border-neutral-900 px-8 py-3 font-serif text-nav text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
      >
        SUBMIT
      </button>
    </motion.form>
  );
}
