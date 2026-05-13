import { useState } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your Public Key
emailjs.init("Bl7VTVYE7GJyeQlxf");

function CtaSection({ t }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // "success", "error", or null

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus(null);

        try {
            await emailjs.send(
                "service_awv8t5s", // Your Service ID
                "template_1518ipq", // Your Template ID
                {
                    to_email: "kudaibergen.margulan67@gmail.com",
                    name: formData.name,
                    email: formData.email,
                    role: formData.role,
                    message: formData.message,
                }
            );

            setSubmitStatus("success");
            setFormData({ name: "", email: "", role: "", message: "" });

            // Auto-clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="cta" className="relative bg-[#0D0B08] py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(200,151,74,0.10) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-12 reveal">
                    <div className="flex justify-center items-center gap-4 mb-5">
                        <div className="h-px w-8 bg-[#C8974A]" />
                        <span className="font-display text-[10px] tracking-[0.45em] uppercase text-[#C8974A] font-light">
                            {t.ctaSectionLabel}
                        </span>
                        <div className="h-px w-8 bg-[#C8974A]" />
                    </div>

                    <h2 className="font-serif text-5xl lg:text-6xl leading-[1.06] text-[#FDFAF5] font-light mb-6">
                        {t.ctaHeadingLine1}<br />
                        {t.ctaHeadingLine2} <em className="text-[#C8974A] italic font-light">{t.ctaHeadingAccent}</em>
                    </h2>

                    <p className="max-w-[700px] mx-auto font-body text-[1.02rem] leading-[1.85] text-[#F5E4C3]/65 font-light">
                        {t.ctaDescription}
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="reveal reveal-delay-1 border border-[#C8974A]/18 bg-[#1A1510]/70 p-6 lg:p-10 space-y-5"
                >
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="font-display text-[10px] tracking-[0.2em] uppercase text-[#C8974A] font-light" htmlFor="cta-name">
                                {t.formNameLabel}
                            </label>
                            <input
                                id="cta-name"
                                name="name"
                                type="text"
                                placeholder={t.formNamePlaceholder}
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full border border-[#C8974A]/20 bg-[#0D0B08] px-4 py-3 text-[#F7F0E6] placeholder:text-[#F5E4C3]/35 focus:outline-none focus:border-[#C8974A]/55"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="font-display text-[10px] tracking-[0.2em] uppercase text-[#C8974A] font-light" htmlFor="cta-email">
                                {t.formEmailLabel}
                            </label>
                            <input
                                id="cta-email"
                                name="email"
                                type="email"
                                placeholder={t.formEmailPlaceholder}
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full border border-[#C8974A]/20 bg-[#0D0B08] px-4 py-3 text-[#F7F0E6] placeholder:text-[#F5E4C3]/35 focus:outline-none focus:border-[#C8974A]/55"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="font-display text-[10px] tracking-[0.2em] uppercase text-[#C8974A] font-light" htmlFor="cta-role">
                            {t.formRoleLabel}
                        </label>
                        <select
                            id="cta-role"
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            className="w-full border border-[#C8974A]/20 bg-[#0D0B08] px-4 py-3 text-[#F7F0E6] focus:outline-none focus:border-[#C8974A]/55"
                            required
                        >
                            <option value="" disabled>
                                {t.formRoleLabel}
                            </option>
                            <option value="teacher">{t.formRoleTeacher}</option>
                            <option value="parent">{t.formRoleParent}</option>
                            <option value="student">{t.formRoleStudent}</option>
                            <option value="other">{t.formRoleOther}</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="font-display text-[10px] tracking-[0.2em] uppercase text-[#C8974A] font-light" htmlFor="cta-message">
                            {t.formMessageLabel}
                        </label>
                        <textarea
                            id="cta-message"
                            name="message"
                            rows="4"
                            placeholder={t.formMessagePlaceholder}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full border border-[#C8974A]/20 bg-[#0D0B08] px-4 py-3 text-[#F7F0E6] placeholder:text-[#F5E4C3]/35 focus:outline-none focus:border-[#C8974A]/55"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full inline-flex items-center justify-center font-display text-[0.66rem] tracking-[0.22em] uppercase text-[#0D0B08] bg-[#C8974A] px-10 py-4 hover:bg-[#E8BE7A] transition-colors duration-300 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                        {loading ? t.formSubmitting : t.formSubmitButton}
                    </button>

                    {submitStatus === "success" && (
                        <div className="p-3 border border-green-500/45 bg-green-500/12 text-green-300 text-sm text-center">
                            {t.formSuccess}
                        </div>
                    )}

                    {submitStatus === "error" && (
                        <div className="p-3 border border-red-500/45 bg-red-500/12 text-red-300 text-sm text-center">
                            {t.formError}
                        </div>
                    )}

                    <p className="text-xs text-[#F5E4C3]/55 font-body">{t.formDisclaimer}</p>
                </form>
            </div>
        </section>
    );
}

export default CtaSection;
