import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

// EmailJS keys are public by design; the recipient is fixed in the EmailJS template, never sent from here.
emailjs.init({
    publicKey: "Bl7VTVYE7GJyeQlxf",
    blockHeadless: true, // reject automated headless browsers
    limitRate: { id: "cta-form", throttle: 10000 }, // at most one send per 10s from this browser
});

// Bots usually submit instantly; real people take longer than this to fill the form.
const MIN_FILL_TIME_MS = 3000;
const MAX_LENGTH = { name: 100, email: 254, message: 2000 };

function CtaSection({ t }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // "success", "error", or null
    const [honeypot, setHoneypot] = useState("");
    const [openedAt] = useState(() => Date.now());
    const successTimer = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const showSuccess = () => {
            setSubmitStatus("success");
            setFormData({ name: "", email: "", role: "", message: "" });
            // Auto-clear success message after 5 seconds
            clearTimeout(successTimer.current);
            successTimer.current = setTimeout(() => setSubmitStatus(null), 5000);
        };

        // Likely a bot: pretend it worked so it doesn't retry, but send nothing.
        if (honeypot || Date.now() - openedAt < MIN_FILL_TIME_MS) {
            showSuccess();
            return;
        }

        setLoading(true);
        setSubmitStatus(null);

        try {
            await emailjs.send(
                "service_awv8t5s", // Your Service ID
                "template_1518ipq", // Your Template ID
                {
                    name: formData.name.trim().slice(0, MAX_LENGTH.name),
                    email: formData.email.trim().slice(0, MAX_LENGTH.email),
                    role: formData.role,
                    message: formData.message.trim().slice(0, MAX_LENGTH.message),
                }
            );

            showSuccess();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="cta" className="relative bg-background py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, color-mix(in srgb, var(--gold) 12%, transparent) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-12 reveal">
                    <div className="flex justify-center items-center gap-4 mb-5">
                        <div className="h-px w-8 bg-gold" />
                        <span className="font-display text-[10px] tracking-[0.45em] uppercase text-gold font-light">
                            {t.ctaSectionLabel}
                        </span>
                        <div className="h-px w-8 bg-gold" />
                    </div>

                    <h2 className="font-serif text-5xl lg:text-6xl leading-[1.06] text-foreground font-light mb-6">
                        {t.ctaHeadingLine1}<br />
                        {t.ctaHeadingLine2} <em className="text-gold italic font-light">{t.ctaHeadingAccent}</em>
                    </h2>

                    <p className="max-w-[700px] mx-auto font-body text-[1.02rem] leading-[1.85] text-copy/65 font-light">
                        {t.ctaDescription}
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="reveal reveal-delay-1 relative rounded-lg border border-border bg-card/70 p-6 lg:p-10 space-y-5"
                >
                    {/* Honeypot: hidden from people, but bots filling every field will complete it */}
                    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                        <label htmlFor="cta-company">Company</label>
                        <input
                            id="cta-company"
                            name="company"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <Label className="font-display text-[10px] tracking-[0.2em] uppercase text-primary font-light" htmlFor="cta-name">
                                {t.formNameLabel}
                            </Label>
                            <Input
                                id="cta-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                maxLength={MAX_LENGTH.name}
                                placeholder={t.formNamePlaceholder}
                                value={formData.name}
                                onChange={handleInputChange}
                                className="h-11 bg-background px-4 text-base text-foreground placeholder:text-copy/35 md:text-sm dark:bg-background"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="font-display text-[10px] tracking-[0.2em] uppercase text-primary font-light" htmlFor="cta-email">
                                {t.formEmailLabel}
                            </Label>
                            <Input
                                id="cta-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                maxLength={MAX_LENGTH.email}
                                placeholder={t.formEmailPlaceholder}
                                value={formData.email}
                                onChange={handleInputChange}
                                className="h-11 bg-background px-4 text-base text-foreground placeholder:text-copy/35 md:text-sm dark:bg-background"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label className="font-display text-[10px] tracking-[0.2em] uppercase text-primary font-light" htmlFor="cta-role">
                            {t.formRoleLabel}
                        </Label>
                        <Select
                            name="role"
                            value={formData.role}
                            onValueChange={(role) => setFormData((prev) => ({ ...prev, role }))}
                            required
                        >
                            <SelectTrigger
                                id="cta-role"
                                className="w-full bg-background px-4 text-base text-foreground data-[size=default]:h-11 md:text-sm dark:bg-background dark:hover:bg-background"
                            >
                                <SelectValue placeholder={t.formRoleLabel} />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="teacher">{t.formRoleTeacher}</SelectItem>
                                <SelectItem value="parent">{t.formRoleParent}</SelectItem>
                                <SelectItem value="student">{t.formRoleStudent}</SelectItem>
                                <SelectItem value="other">{t.formRoleOther}</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label className="font-display text-[10px] tracking-[0.2em] uppercase text-primary font-light" htmlFor="cta-message">
                            {t.formMessageLabel}
                        </Label>
                        <Textarea
                            id="cta-message"
                            name="message"
                            rows="4"
                            maxLength={MAX_LENGTH.message}
                            placeholder={t.formMessagePlaceholder}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="min-h-28 bg-background px-4 py-3 text-base text-foreground placeholder:text-copy/35 md:text-sm dark:bg-background"
                        />
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        disabled={loading}
                        className="h-12 w-full font-display text-[0.66rem] font-normal uppercase tracking-[0.22em] hover:bg-primary/85"
                    >
                        {loading ? t.formSubmitting : t.formSubmitButton}
                    </Button>

                    {submitStatus === "success" && (
                        <div role="status" className="rounded-md border border-green-500/40 bg-green-500/10 p-3 text-center text-sm text-green-300">
                            {t.formSuccess}
                        </div>
                    )}

                    {submitStatus === "error" && (
                        <div role="alert" className="rounded-md border border-red-500/40 bg-red-500/10 p-3 text-center text-sm text-red-300">
                            {t.formError}
                        </div>
                    )}

                    <Separator />

                    <div className="text-center">
                        <p className="text-xs text-copy/60 font-body">
                            Or reach us at{" "}
                            <a
                                href="mailto:info@quimen.edu"
                                className="text-gold hover:text-gold-soft transition-colors"
                            >
                                info@quimen.edu
                            </a>
                        </p>
                    </div>

                    <p className="text-xs text-copy/55 font-body">{t.formDisclaimer}</p>
                </form>
            </div>
        </section>
    );
}

export default CtaSection;
