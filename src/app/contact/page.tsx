"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Column,
  Heading,
  Text,
  Button,
  RevealFx,
} from "@once-ui-system/core";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_xf60lq1",
        "template_pep1qtp",
        form,
        "Wd29Lmssln3dwFTyV"
      );

      setSuccess("Message sent successfully!");
      form.reset();
    } catch (error) {
      setSuccess("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <Column maxWidth="s" horizontal="center" gap="l" paddingY="12">

      <RevealFx>
        <Heading variant="display-strong-m">
          Contact Me
        </Heading>
      </RevealFx>

      <RevealFx delay={0.2}>
        <Text variant="heading-default-l" onBackground="neutral-weak">
          Send me a message directly.
        </Text>
      </RevealFx>

      <RevealFx delay={0.3}>
        <form onSubmit={sendEmail} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "transparent",
              color: "white"
            }}
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "transparent",
              color: "white"
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "transparent",
              color: "white"
            }}
          />

          <Button
            type="submit"
            variant="primary"
            size="m"
            weight="strong"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>

        </form>
      </RevealFx>

      {success && (
        <Text onBackground="brand-strong">
          {success}
        </Text>
      )}

    </Column>
  );
}