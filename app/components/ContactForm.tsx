"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message",
      );
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-mono text-green-600 dark:text-green-500 mb-2"
        >
          $ name:
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-3 py-2 font-mono bg-white/10 dark:bg-black/20 border border-green-500/20 rounded-md text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-mono text-green-600 dark:text-green-500 mb-2"
        >
          $ email:
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-3 py-2 font-mono bg-white/10 dark:bg-black/20 border border-green-500/20 rounded-md text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-mono text-green-600 dark:text-green-500 mb-2"
        >
          $ message:
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full px-3 py-2 font-mono bg-white/10 dark:bg-black/20 border border-green-500/20 rounded-md text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors resize-none"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3 font-mono text-white font-medium bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "SendMessage()"}
      </button>

      {status === "success" && (
        <p className="text-green-600 dark:text-green-400 text-center font-mono">
          Message sent successfully!
        </p>
      )}

      {status === "error" && (
        <p className="text-red-500 text-center font-mono">{errorMessage}</p>
      )}
    </form>
  );
}
