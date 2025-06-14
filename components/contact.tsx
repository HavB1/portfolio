"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Whatsapp } from "@/lib/icons";

const ACCENT = "#FFD166";
const BG_GRADIENT =
  "bg-gradient-to-br from-[#23243a] via-[#36394F] to-[#23243a]";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className={`py-24 px-4 relative ${BG_GRADIENT} rounded-b-2xl shadow-xl`}
    >
      {/* Subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='%23FFD166' fill-opacity='0.07'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-white text-center mb-4 tracking-tight"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          I'm always interested in new opportunities and exciting projects.
          Let's discuss how we can work together!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-[#23243a]/80 rounded-2xl shadow-lg p-8 flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:business@ditolab.com"
                className="flex items-center gap-3"
              >
                <Mail
                  className="text-[var(--accent-color,#FFD166)]"
                  size={20}
                />
                <span className="text-gray-300">business@ditolab.com</span>
              </a>
              {/* <div className="flex items-center gap-3">
                <Phone
                  className="text-[var(--accent-color,#FFD166)]"
                  size={20}
                />
                <span className="text-gray-300">+1 (438) 883-5286</span>
              </div> */}
              <a
                href="https://wa.me/886966211851"
                className="flex items-center gap-3"
              >
                {/* <MapPin
                  className="text-[var(--accent-color,#FFD166)]"
                  size={20}
                /> */}
                <div className="[&>svg]:size-4 [&>svg]:fill-[#FFD166]">
                  <Whatsapp />
                </div>
                <span className="text-gray-300">+886 966 211 851</span>
              </a>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://github.com/HavB1"
                className="flex items-center gap-2 text-gray-400 hover:text-[var(--accent-color,#FFD166)] transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/dedfegens"
                className="flex items-center gap-2 text-gray-400 hover:text-[var(--accent-color,#FFD166)] transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-[#23243a]/80 border-none shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white">Send me a message</CardTitle>
              <CardDescription className="text-gray-400">
                I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="bg-[#23243a] border-gray-700 text-white placeholder:text-gray-500"
                  />
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="bg-[#23243a] border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="bg-[#23243a] border-gray-700 text-white placeholder:text-gray-500"
                />
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-[#23243a] border-gray-700 text-white placeholder:text-gray-500"
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  className="min-h-[120px] bg-[#23243a] border-gray-700 text-white placeholder:text-gray-500"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[var(--accent-color,#FFD166)] text-[#23243a] font-bold hover:bg-[#ffe299] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
