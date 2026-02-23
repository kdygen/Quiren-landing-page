import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your Public Key
emailjs.init("Bl7VTVYE7GJyeQlxf");

function CtaSection({ t, activeAccent }) {
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
        <section
            className={`relative py-24 px-4 ${activeAccent.ui.cta.section}`}
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`relative rounded-3xl overflow-hidden p-12 md:p-16 ${activeAccent.ui.cta.container} border border-[color:var(--accent-border)]`}
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[color:var(--accent-soft)] rounded-full blur-3xl -z-0" />

                    <div className="relative z-10 space-y-10">
                        <div className="space-y-6">
                            <h2
                                className={`text-4xl md:text-5xl font-bold ${activeAccent.ui.cta.heading}`}
                            >
                                {t.ctaTitle}
                            </h2>
                            <p className="text-lg text-[color:var(--accent-text)]">
                                {t.ctaDescription}
                            </p>
                            <div className="space-y-3">
                                {t.ctaBenefits.map((benefit, idx) => (
                                    <motion.p
                                        key={benefit}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className={`text-base font-medium ${activeAccent.ui.cta.benefit}`}
                                    >
                                        {benefit}
                                    </motion.p>
                                ))}
                            </div>
                        </div>

                        <motion.form
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className={`rounded-2xl border border-[color:var(--accent-border)] ${activeAccent.ui.cta.form} p-6 md:p-8 space-y-5 backdrop-blur`}
                        >
                            <div className="space-y-2">
                                <label
                                    className={`text-sm font-semibold ${activeAccent.ui.cta.label}`}
                                    htmlFor="cta-name"
                                >
                                    {t.formNameLabel}
                                </label>
                                <input
                                    id="cta-name"
                                    name="name"
                                    type="text"
                                    placeholder={t.formNamePlaceholder}
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`w-full rounded-lg border border-transparent px-4 py-3 ${activeAccent.ui.cta.input} focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-1)]`}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    className={`text-sm font-semibold ${activeAccent.ui.cta.label}`}
                                    htmlFor="cta-email"
                                >
                                    {t.formEmailLabel}
                                </label>
                                <input
                                    id="cta-email"
                                    name="email"
                                    type="email"
                                    placeholder={t.formEmailPlaceholder}
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full rounded-lg border border-transparent px-4 py-3 ${activeAccent.ui.cta.input} focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-1)]`}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    className={`text-sm font-semibold ${activeAccent.ui.cta.label}`}
                                    htmlFor="cta-role"
                                >
                                    {t.formRoleLabel}
                                </label>
                                <select
                                    id="cta-role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    className={`w-full rounded-lg border border-transparent px-4 py-3 ${activeAccent.ui.cta.input} focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-1)]`}
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
                                <label
                                    className={`text-sm font-semibold ${activeAccent.ui.cta.label}`}
                                    htmlFor="cta-message"
                                >
                                    {t.formMessageLabel}
                                </label>
                                <textarea
                                    id="cta-message"
                                    name="message"
                                    rows="4"
                                    placeholder={t.formMessagePlaceholder}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className={`w-full rounded-lg border border-transparent px-4 py-3 ${activeAccent.ui.cta.input} focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-1)]`}
                                    required
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: loading ? 1 : 1.03 }}
                                whileTap={{ scale: loading ? 1 : 0.97 }}
                                type="submit"
                                disabled={loading}
                                className={`w-full px-6 py-3 bg-white text-black font-bold rounded-lg border border-black/10 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""
                                    }`}
                            >
                                {loading ? "Отправка..." : t.formSubmitButton}
                                {!loading && <ArrowRight className="w-5 h-5" />}
                            </motion.button>

                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm text-center"
                                >
                                    ✓ Ваше сообщение успешно отправлено!
                                </motion.div>
                            )}

                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm text-center"
                                >
                                    ✕ Ошибка при отправке. Пожалуйста, попробуйте снова.
                                </motion.div>
                            )}

                            <p className="text-xs text-[color:var(--accent-text)]">
                                {t.formDisclaimer}
                            </p>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default CtaSection;
