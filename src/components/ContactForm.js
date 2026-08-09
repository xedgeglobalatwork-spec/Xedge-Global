"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/data/services";

const emptyForm = { name: "", email: "", phone: "", service: "", message: "" };

export default function ContactForm({ rows = 5 }) {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState(emptyForm);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-emerald/30 bg-emerald/5 p-10 text-center"
      >
        <CheckCircle2 className="mx-auto mb-4 text-emerald" size={40} />
        <h3 className="text-lg font-bold text-slate-dark">Thank you — message received.</h3>
        <p className="mt-2 text-sm text-slate-body">A senior partner will be in touch shortly.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-purple hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          value={form.name}
          onChange={update("name")}
          type="text"
          placeholder="Full Name"
          className="input"
        />
        <input
          required
          value={form.email}
          onChange={update("email")}
          type="email"
          placeholder="Corporate Email"
          className="input"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          value={form.phone}
          onChange={update("phone")}
          type="tel"
          placeholder="Phone Number"
          className="input"
        />
        <select required value={form.service} onChange={update("service")} className="input">
          <option value="" disabled>
            Select a Service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>
      <textarea
        required
        value={form.message}
        onChange={update("message")}
        rows={rows}
        placeholder="Tell us about your business needs"
        className="input resize-none"
      />
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong — please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative inline-flex w-full items-center justify-center gap-3 rounded-full bg-purple px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4338ca] disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" && <Loader2 className="animate-spin" size={18} />}
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
