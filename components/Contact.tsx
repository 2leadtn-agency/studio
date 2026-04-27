"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", projet: "" });
  const [sent, setSent] = useState(false);

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-32 md:py-44 bg-cream border-t border-ink/6">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium tracking-[0.35em] text-mint uppercase mb-8"
        >
          05 / Contact
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: 0.05 }}
          >
            <h2
              className="font-heading font-bold leading-[0.92] text-ink mb-7"
              style={{ fontSize: "clamp(2.4rem, 5vw, 5.5rem)" }}
            >
              Un projet en tête ?
            </h2>
            <p className="text-ink/55 leading-relaxed mb-10 max-w-sm">
              Pas de formulaire interminable. Juste une conversation pour voir si
              on peut construire quelque chose ensemble.
            </p>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-ink/35 tracking-wider uppercase">
                ou directement sur
              </span>
              <a
                href="mailto:dali@medaly.studio"
                className="text-mint font-medium text-base hover:opacity-75 transition-opacity duration-200"
              >
                dali@medaly.studio
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-center py-16"
                >
                  <div className="w-10 h-10 border border-mint flex items-center justify-center mb-6">
                    <span className="text-mint text-lg">✓</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-ink mb-2">
                    Message envoyé.
                  </h3>
                  <p className="text-ink/50">
                    Je vous reviens dans les 24 heures.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8"
                >
                  {[
                    {
                      id: "nom",
                      label: "Nom",
                      type: "text",
                      placeholder: "Votre nom",
                    },
                    {
                      id: "email",
                      label: "Email",
                      type: "email",
                      placeholder: "vous@exemple.com",
                    },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id} className="flex flex-col gap-2">
                      <label
                        htmlFor={id}
                        className="text-[10px] font-medium text-ink/35 tracking-[0.25em] uppercase"
                      >
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[id as keyof typeof form]}
                        onChange={handleChange(id as keyof typeof form)}
                        className="bg-transparent border-b border-ink/15 py-3 text-ink placeholder:text-ink/25 outline-none focus:border-mint transition-colors duration-200 text-sm"
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="projet"
                      className="text-[10px] font-medium text-ink/35 tracking-[0.25em] uppercase"
                    >
                      Votre projet
                    </label>
                    <textarea
                      id="projet"
                      required
                      rows={4}
                      placeholder="Décrivez votre projet en quelques mots…"
                      value={form.projet}
                      onChange={handleChange("projet")}
                      className="bg-transparent border-b border-ink/15 py-3 text-ink placeholder:text-ink/25 outline-none focus:border-mint transition-colors duration-200 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full bg-mint text-white font-medium py-4 rounded transition-all duration-300 hover:opacity-90"
                  >
                    Envoyer
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
