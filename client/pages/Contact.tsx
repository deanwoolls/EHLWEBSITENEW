import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { usePageTitle } from "@/lib/seo";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

type FormState = "idle" | "success";

export default function Contact() {
  const { t } = useLanguage();
  const { ref: officesRef, inView: officesInView } = useScrollAnimation();
  const { ref: formRef, inView: formInView } = useScrollAnimation();

  usePageTitle({
    title: "Contact EHL | Engineering Consultants in Johannesburg & Gauteng | South Africa",
    description:
      "Contact EHL Engineering Group at our offices across South Africa and the SADC region. Engineering consulting firm serving Johannesburg, Gauteng, and Africa with EPC and EPCM expertise.",
  });

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", subject: "", message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");
  const [mailLinks, setMailLinks] = useState<{ mailto: string; gmail: string; outlook: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const to = "info@ehleng.com";
    const subjectLabel = formData.subject
      ? `[EHL Enquiry] ${formData.subject.replace(/-/g, " ")} — ${formData.name}`
      : `[EHL Enquiry] ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : null,
      formData.company ? `Company: ${formData.company}` : null,
      `Subject: ${formData.subject}`,
      ``,
      `Message:`,
      formData.message,
    ]
      .filter(Boolean)
      .join("\n");

    const encodedSubject = encodeURIComponent(subjectLabel);
    const encodedBody = encodeURIComponent(body);

    const mailto = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
    const gmail = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(to)}&su=${encodedSubject}&body=${encodedBody}`;
    const outlook = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(to)}&subject=${encodedSubject}&body=${encodedBody}`;

    setMailLinks({ mailto, gmail, outlook });
    window.open(mailto, "_blank");
    setFormState("success");
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  const offices = [
    {
      country: "South Africa",
      city: "Johannesburg",
      regionKey: "headOffice",
      address: "The Woodlands Office Park, Building 32 First Floor, 20 Woodlands Drive",
      postalCode: "Woodlands, Sandton, 2080",
      mapQuery: "The+Woodlands+Office+Park+20+Woodlands+Drive+Sandton+South+Africa",
    },
    {
      country: "South Africa",
      city: "Centurion",
      regionKey: "pretoria",
      address: "72 Regency Drive, Route 21 Corporate Park",
      postalCode: "Irene, Centurion, Pretoria, 0157",
      mapQuery: "72+Regency+Drive+Route+21+Corporate+Park+Irene+Centurion+South+Africa",
    },
    {
      country: "South Africa",
      city: "Rustenburg",
      regionKey: "miningOps",
      address: "The Towers Building, 180 Beyers Naude Drive",
      postalCode: "Rustenburg, Northwest, 0300",
      mapQuery: "180+Beyers+Naude+Drive+Rustenburg+South+Africa",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative py-24 mt-16 bg-white">
        <div className="section-container">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lime-500 font-semibold uppercase tracking-widest text-sm mb-4"
          >
            {t("reachOut")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-navy-900 mb-8"
          >
            {t("contactTitle")}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 text-gray-600"
          >
            <a href="mailto:info@ehl.co.za" className="flex items-center gap-3 hover:text-lime-500 transition-colors text-lg">
              <Mail size={20} className="text-lime-500" />
              info@ehl.co.za
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a href="tel:+27113707400" className="flex items-center gap-3 hover:text-lime-500 transition-colors text-lg">
              <Phone size={20} className="text-lime-500" />
              +27 (0)11 370 7400
            </a>
          </motion.div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            ref={officesRef}
            variants={stagger}
            initial="hidden"
            animate={officesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {offices.map((office, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                {/* Map embed */}
                <div className="relative h-48 w-full">
                  <iframe
                    title={`Map of ${office.city}`}
                    src={`https://maps.google.com/maps?q=${office.mapQuery}&output=embed&z=15`}
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-lime-500 bg-lime-50 px-3 py-1 rounded-full">
                      {t(office.regionKey)}
                    </span>
                    <h2 className="text-2xl font-bold text-navy-900 mt-3 mb-1">{office.city}</h2>
                    <p className="text-xs text-gray-400">{office.country}</p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(`${office.address}, ${office.postalCode}, ${office.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-gray-600 hover:text-navy-900 transition-colors"
                  >
                    <MapPin size={18} className="text-lime-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{office.address}</p>
                      <p className="text-gray-400">{office.postalCode}</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-container">
        <div className="h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
      </div>

      {/* Contact Form */}
      <section className="py-20 bg-white" id="contact-form">
        <div className="section-container max-w-2xl mx-auto">
          <motion.div
            ref={formRef}
            variants={stagger}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
          >
            <motion.p variants={fadeUp} className="text-lime-500 font-semibold uppercase tracking-widest text-sm mb-2">
              {t("letsTalk")}
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-navy-900 mb-3">
              {t("contactFormTitle")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mb-10 leading-relaxed">
              {t("contactFormDesc")}
            </motion.p>

            {formState === "success" && mailLinks && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-5 bg-green-50 border border-green-200 rounded-xl"
              >
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">{t("thankYou")}</p>
                    <p className="text-sm text-green-600 mt-0.5">If your mail app didn't open, use one of the options below:</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={mailLinks.mailto}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border-2 transition-all"
                    style={{ borderColor: "#002e5d", color: "#002e5d" }}
                  >
                    <Mail size={15} /> Default Mail App
                  </a>
                  <a
                    href={mailLinks.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-white border-2 border-red-400 text-red-600 transition-all hover:bg-red-50"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                    Gmail
                  </a>
                  <a
                    href={mailLinks.outlook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-white border-2 border-blue-500 text-blue-600 transition-all hover:bg-blue-50"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 7.387v10.478L19.2 21l-9.6-2.4V5.4L24 7.387zM0 5.4l9.6 2.4v9.6L0 18.6V5.4zm14.4-1.8L9.6 5.4 0 3l14.4-3.6L24 3l-9.6 2.4z"/></svg>
                    Outlook Web
                  </a>
                </div>
              </motion.div>
            )}

            <motion.form variants={fadeUp} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                    {t("fullName")} *
                  </label>
                  <input
                    type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                    placeholder={t("fullName")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                    {t("emailAddress")} *
                  </label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
                    {t("phoneNumber")}
                  </label>
                  <input
                    type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                    placeholder="+27 (0)11 000 0000"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-navy-900 mb-2">
                    {t("companyName")}
                  </label>
                  <input
                    type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                    placeholder={t("companyName")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-navy-900 mb-2">
                  {t("subject")} *
                </label>
                <select
                  id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all bg-white"
                >
                  <option value="">{t("selectSubject")}</option>
                  <option value="consulting">{t("consulting_subject")}</option>
                  <option value="engineering">{t("engineering_subject")}</option>
                  <option value="project-management">{t("projectManagement_subject")}</option>
                  <option value="operations">{t("operations_subject")}</option>
                  <option value="general">{t("general")}</option>
                  <option value="other">{t("other")}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                  {t("message")} *
                </label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all resize-none"
                  placeholder={t("message")}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-xl transition-all"
                style={{ backgroundColor: "#002e5d", color: "#fff" }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {t("sendMessage")} <ArrowRight size={18} />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Visit */}
      <section
        className="py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2Fe5a5727af6f64ca390a031056c6f518e%2F5fae7741e22a4763ad33a3fbbcf02ce4)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative section-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t("visitUs")}</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">{t("visitUsDesc")}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
