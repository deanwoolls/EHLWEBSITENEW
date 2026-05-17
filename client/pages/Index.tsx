import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import ServiceCard from "@/components/ServiceCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ChevronRight,
  Zap,
  Wrench,
  Briefcase,
  Users,
  BarChart3,
  Hammer,
  Grid3x3,
  Factory,
  MessageSquare,
  PenLine,
  HardHat,
} from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/lib/seo";
import { useLanguage } from "@/hooks/useLanguage";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useScrollAnimation();
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Index() {
  const { t } = useLanguage();

  usePageTitle({
    title: "EHL Engineering Group | Leading EPCM & Consulting Engineers in South Africa",
    description:
      "EHL Engineering Group — trusted consulting engineers delivering end-to-end EPC and EPCM project delivery across mining, renewable energy, power systems, and infrastructure. ISO 9001 certified. Johannesburg-based, Africa-wide expertise.",
  });

  const coreValues = [
    { icon: "🌱", labelKey: "sustainability", descriptionKey: "sustainabilityDesc" },
    { icon: "🛡️", labelKey: "safety", descriptionKey: "safetyDesc" },
    { icon: "💡", labelKey: "innovation", descriptionKey: "innovationDesc" },
    { icon: "🤝", labelKey: "collaboration", descriptionKey: "collaborationDesc" },
    { icon: "⚡", labelKey: "empowerment", descriptionKey: "empowermentDesc" },
  ];

  const strategySteps = [
    { icon: MessageSquare, labelKey: "consultStrategy", descKey: "consultStrategyDesc", number: "01" },
    { icon: PenLine, labelKey: "designStrategy", descKey: "designStrategyDesc", number: "02" },
    { icon: HardHat, labelKey: "constructStrategy", descKey: "constructStrategyDesc", number: "03" },
  ];

  const companyStats = [
    { value: "350+", labelKey: "employeesLabel" },
    { value: "4", labelKey: "decadesLabel" },
    { value: "3,679", labelKey: "projectsLabel" },
    { value: "150", labelKey: "happyClientsLabel" },
    { value: "3.5M", labelKey: "ltiManhoursLabel" },
  ];

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Video */}
        <section>
          <ImageCarousel />
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <Section>
              <div className="max-w-4xl mx-auto">
                <motion.p variants={fadeUp} className="text-lime-500 font-semibold uppercase tracking-widest text-sm mb-3">
                  {t("whoWeAre")}
                </motion.p>
                <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-bold text-navy-900 leading-snug mb-6">
                  {t("missionStatement")}
                </motion.p>
                <motion.p variants={fadeUp} className="text-base text-gray-600 leading-relaxed">
                  {t("missionStatement2")}
                </motion.p>
              </div>
            </Section>
          </div>
        </section>

        {/* Stats Bar */}
        <section style={{ backgroundColor: "#002e5d" }} className="py-12">
          <div className="section-container">
            <Section className="grid grid-cols-2 md:grid-cols-5 gap-8 text-white text-center">
              {companyStats.map((stat, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col items-center gap-2">
                  <AnimatedCounter
                    value={stat.value}
                    className="text-3xl md:text-4xl font-black"
                    style={{ color: "#f5c033" }}
                  />
                  <span className="text-xs text-white/60 uppercase tracking-wide leading-tight">
                    {t(stat.labelKey)}
                  </span>
                </motion.div>
              ))}
            </Section>
          </div>
        </section>

        {/* Our Strategy */}
        <section className="py-24" style={{ backgroundColor: "#f5f5f0" }}>
          <div className="section-container">
            <Section>
              <motion.p variants={fadeUp} className="text-lime-500 font-semibold uppercase tracking-widest text-sm mb-2 text-center">
                {t("howWeWork")}
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-navy-900 mb-4 text-center">
                {t("ourStrategy")}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-center text-gray-500 mb-16 max-w-xl mx-auto leading-relaxed">
                {t("servicesSubtitle")}
              </motion.p>
              <div className="grid md:grid-cols-3 gap-8">
                {strategySteps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    variants={fadeUp}
                    className="relative flex flex-col items-center text-center p-8 rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow group border border-transparent hover:border-lime-300"
                    style={{ transitionDuration: "0.3s" }}
                  >
                    <span className="text-8xl font-black text-cream-200 leading-none mb-3 group-hover:text-lime-100 transition-colors">
                      {step.number}
                    </span>
                    <step.icon size={36} className="text-lime-500 mb-4 -mt-2" />
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{t(step.labelKey)}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{t(step.descKey)}</p>
                  </motion.div>
                ))}
              </div>
            </Section>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 bg-white">
          <div className="section-container">
            <Section>
              <motion.p variants={fadeUp} className="text-lime-500 font-semibold uppercase tracking-widest text-sm mb-2 text-center mx-auto">
                {t("whatWeDo")}
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-navy-900 mb-6 text-center mr-auto">
                {t("servicesTitle")}
              </motion.h2>
              <motion.div variants={fadeUp} className="flex justify-center mb-12">
                <a
                  href="https://ehl.co.za/EHL-Value-Proposition.pdf"
                  download="EHL-Value-Proposition.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3 rounded-lg font-bold text-sm border-2 transition-all hover:opacity-90"
                  style={{ borderColor: "#002e5d", color: "#002e5d", backgroundColor: "transparent" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#002e5d"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#002e5d"; }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Value Proposition
                </a>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div variants={fadeUp}><ServiceCard icon={Briefcase} title={t("consulting")} backgroundColor="#002e5d" backContent={t("consultingDesc")} /></motion.div>
                <motion.div variants={fadeUp}><ServiceCard icon={BarChart3} title={t("projectManagement")} backgroundColor="rgb(88,89,91)" backContent={t("projectManagementDesc")} /></motion.div>
                <motion.div variants={fadeUp}><ServiceCard icon={Users} title={t("people")} backgroundColor="#002e5d" backContent={t("peopleDesc")} /></motion.div>
                <motion.div variants={fadeUp}><ServiceCard icon={Zap} title={t("powerGeneration")} backgroundColor="rgb(88,89,91)" backContent={t("powerGenerationDesc")} /></motion.div>
                <motion.div
                  variants={fadeUp}
                  className="rounded-xl overflow-hidden shadow-lg"
                  style={{
                    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2Fe5a5727af6f64ca390a031056c6f518e%2F8165f71008ea4dc88ccb47f02440c2e3)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "60%",
                    minHeight: 200,
                    backgroundColor: "#f5f5f0",
                  }}
                />
                <motion.div variants={fadeUp}><ServiceCard icon={Hammer} title={t("mining")} backgroundColor="rgb(88,89,91)" backContent={t("miningDesc")} /></motion.div>
                <motion.div variants={fadeUp}><ServiceCard icon={Factory} title={t("manufacturing")} backgroundColor="#002e5d" backContent={t("manufacturingDesc")} /></motion.div>
                <motion.div variants={fadeUp}><ServiceCard icon={Grid3x3} title={t("transmission")} backgroundColor="rgb(88,89,91)" backContent={t("transmissionDesc")} /></motion.div>
                <motion.div variants={fadeUp}><ServiceCard icon={Wrench} title={t("operations")} backgroundColor="#002e5d" backContent={t("operationsDesc")} /></motion.div>
              </div>
            </Section>
          </div>
        </section>


        {/* Designed Safe */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <Section className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <motion.p variants={fadeUp} className="text-lime-500 font-semibold uppercase tracking-widest text-sm mb-2">
                  {t("designedSafeTag")}
                </motion.p>
                <motion.h2 variants={fadeUp} className="text-4xl font-bold text-navy-900 mb-6">
                  {t("designedSafe")}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {t("designedSafeDesc")}
                </motion.p>
                <motion.div variants={fadeUp}>
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                    {t("moreAboutUs")} <ChevronRight size={20} />
                  </Link>
                </motion.div>
              </div>
              <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe5a5727af6f64ca390a031056c6f518e%2F2c7688260145496d8e3591fef11cf458?format=webp&width=800"
                  alt="Safety culture at EHL Engineering Group"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </Section>
          </div>
        </section>

        {/* CEO Quote */}
        <section
          className="relative py-24 bg-cover bg-center"
          style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2Fe5a5727af6f64ca390a031056c6f518e%2Fc169d55a8bb84c0584f97287a6ebe9a5?format=webp&width=800')" }}
        >
          <div className="absolute inset-0 bg-navy-900/70" />
          <div className="relative z-10 section-container">
            <Section className="max-w-2xl">
              <motion.blockquote
                variants={fadeUp}
                className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed italic"
              >
                "{t("ceoQuote")}"
              </motion.blockquote>
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-black"
                  style={{ backgroundColor: "#f5c033", color: "#002e5d" }}
                >
                  CS
                </div>
                <div>
                  <p className="font-bold text-white">{t("ceoName")}</p>
                  <p className="text-sm text-white/60">{t("ceoTitle")}</p>
                </div>
              </motion.div>
            </Section>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <Section className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe5a5727af6f64ca390a031056c6f518e%2F867bf6a88f834e0098b316eebd2d40c5?format=webp&width=800"
                  alt="EHL team at work"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <motion.h2 variants={fadeUp} className="text-4xl font-bold text-navy-900 mb-10">
                  {t("ourCoreValues")}
                </motion.h2>
                <div className="space-y-4">
                  {coreValues.map((value, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      className="flex items-start gap-4 p-4 rounded-xl bg-cream-50 hover:bg-cream-100 transition-colors group"
                    >
                      <span className="text-2xl flex-shrink-0 mt-0.5">{value.icon}</span>
                      <div>
                        <h4 className="font-bold text-navy-900 group-hover:text-lime-600 transition-colors">
                          {t(value.labelKey)}
                        </h4>
                        <p className="text-sm text-gray-500 mt-0.5">{t(value.descriptionKey)}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Section>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative py-36 bg-cover bg-center"
          style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2Fe5a5727af6f64ca390a031056c6f518e%2F7c2fb42782c14f6ab938c5fa8ef89ce9?format=webp&width=800')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 section-container text-center text-white">
            <Section>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6 leading-tight max-w-3xl mx-auto">
                {t("ctaHeading")}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg mb-12 text-white/70 max-w-2xl mx-auto leading-relaxed">
                {t("ctaSubheading")}
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-10 py-4 font-bold rounded-lg transition-all hover:opacity-90 text-base"
                  style={{ backgroundColor: "#f5c033", color: "#002e5d" }}
                >
                  {t("getInTouch")} <ChevronRight size={20} />
                </Link>
              </motion.div>
            </Section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
