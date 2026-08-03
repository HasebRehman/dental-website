"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitAppointment, AppointmentFormData } from "@/lib/appointment";

export default function AppointmentForm() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "Morning (10:00 AM - 12:00 PM)",
    service: "Dental Exams & Cleanings",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const res = await submitAppointment(formData);
      if (res.success) {
        setSuccessMessage(res.message);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          preferredDate: "",
          preferredTime: "Morning (10:00 AM - 12:00 PM)",
          service: "Dental Exams & Cleanings",
          message: "",
        });
      } else {
        setError(res.message);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please call us directly at 469-809-1919.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#173868] p-8 md:p-12 rounded-3xl border border-[#FFFFFF]/10 shadow-2xl">
      <div className="mb-8">
        <h3 className="font-serif text-3xl font-normal text-[#F8F9FA] mb-2">
          Reserve Your Family&apos;s Spot Now
        </h3>
        <p className="text-xs text-[#CBD5E1] font-normal">
          Fill out your information below and our Dallas staff will contact you to confirm your visit.
        </p>
      </div>

      {successMessage ? (
        <div className="p-8 rounded-2xl bg-[#FF6B00]/20 border-2 border-[#FF6B00] text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-[#FF6B00] mx-auto" />
          <h4 className="font-serif text-2xl text-[#F8F9FA]">Request Received!</h4>
          <p className="text-xs text-[#F8F9FA] font-normal leading-relaxed">
            {successMessage}
          </p>
          <button
            onClick={() => setSuccessMessage(null)}
            className="px-6 py-2.5 rounded-full bg-[#FFFFFF] text-[#0F2C59] text-xs font-bold uppercase tracking-widest hover:bg-[#FF6B00] hover:text-[#FFFFFF] transition-colors mt-4"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-300" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-[11px] uppercase tracking-widest font-extrabold text-[#CBD5E1] mb-2"
              >
                Full Name <span className="text-[#FF6B00]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-[#0F2C59] border border-[#FFFFFF]/15 text-[#F8F9FA] placeholder-[#64748B] text-sm focus:outline-none focus:border-[#FF6B00] transition-colors font-sans"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[11px] uppercase tracking-widest font-extrabold text-[#CBD5E1] mb-2"
              >
                Email Address <span className="text-[#FF6B00]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-[#0F2C59] border border-[#FFFFFF]/15 text-[#F8F9FA] placeholder-[#64748B] text-sm focus:outline-none focus:border-[#FF6B00] transition-colors font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[11px] uppercase tracking-widest font-extrabold text-[#CBD5E1] mb-2"
              >
                Phone Number <span className="text-[#FF6B00]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="469-809-1919"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-[#0F2C59] border border-[#FFFFFF]/15 text-[#F8F9FA] placeholder-[#64748B] text-sm focus:outline-none focus:border-[#FF6B00] transition-colors font-sans"
              />
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="service"
                className="block text-[11px] uppercase tracking-widest font-extrabold text-[#CBD5E1] mb-2"
              >
                Desired Service <span className="text-[#FF6B00]">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-[#0F2C59] border border-[#FFFFFF]/15 text-[#F8F9FA] text-sm focus:outline-none focus:border-[#FF6B00] transition-colors font-sans"
              >
                <option value="Dental Exams & Cleanings">Dental Exams & Cleanings</option>
                <option value="Children's Dentistry">Children&apos;s Dentistry</option>
                <option value="Cosmetic Whitening">Teeth Whitening & Cosmetic</option>
                <option value="Invisalign">Invisalign® Clear Aligners</option>
                <option value="Dental Emergency">Same-Day Emergency Relief</option>
                <option value="Restorative Crowns">Crowns, Bridges & Implants</option>
                <option value="Root Canal">Root Canal & Periodontal Care</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Preferred Date */}
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-[11px] uppercase tracking-widest font-extrabold text-[#CBD5E1] mb-2"
              >
                Preferred Date <span className="text-[#FF6B00]">*</span>
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                required
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-[#0F2C59] border border-[#FFFFFF]/15 text-[#F8F9FA] text-sm focus:outline-none focus:border-[#FF6B00] transition-colors font-sans"
              />
            </div>

            {/* Preferred Time */}
            <div>
              <label
                htmlFor="preferredTime"
                className="block text-[11px] uppercase tracking-widest font-extrabold text-[#CBD5E1] mb-2"
              >
                Preferred Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-[#0F2C59] border border-[#FFFFFF]/15 text-[#F8F9FA] text-sm focus:outline-none focus:border-[#FF6B00] transition-colors font-sans"
              >
                <option value="Morning (10:00 AM - 12:00 PM)">Morning (10:00 AM - 12:00 PM)</option>
                <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                <option value="Saturday (10:00 AM - 2:00 PM)">Saturday (10:00 AM - 2:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-[11px] uppercase tracking-widest font-extrabold text-[#CBD5E1] mb-2"
            >
              Additional Message or Special Requests (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Tell us about your dental goals, questions, or specific concerns..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-[#0F2C59] border border-[#FFFFFF]/15 text-[#F8F9FA] placeholder-[#64748B] text-sm focus:outline-none focus:border-[#FF6B00] transition-colors font-sans"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full bg-[#FF6B00] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest hover:bg-[#E05D00] transition-all flex items-center justify-center gap-2 shadow-xl disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Request Appointment</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
