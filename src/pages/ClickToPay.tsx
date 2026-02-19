import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, CreditCard, Search,
  PenLine, Code2, Rocket, ChevronDown, ChevronUp,
  MessageCircle, CheckCircle2, Atom, Kanban,
  Building2, Sparkles, ArrowRight, Mail, Star,
  Globe, Store,
} from "lucide-react";
import type { Variants } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

// ─── Design tokens (all inline, navy/electric-blue palette) ──────────────────
const navy = "#0F1C3F";
const blue = "#0066FF";
const blueMid = "#0052CC";
const softGray = "#F5F7FA";
const white = "#FFFFFF";

// ─── Framer variants ──────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardHover = {
  rest: { y: 0, boxShadow: "0 4px 24px 0 rgba(0,102,255,0.08)" },
  hover: { y: -8, boxShadow: "0 20px 48px 0 rgba(0,102,255,0.22)", transition: { duration: 0.3 } },
};

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start * 10) / 10);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
}

// ─── TAG CHIP ─────────────────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <span style={{
      background: "rgba(0,102,255,0.10)",
      color: blue,
      borderRadius: 9999,
      padding: "2px 12px",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.03em",
    }}>{label}</span>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
export default function ClickToPay() {
  const { toast } = useToast();

  // ── FORM STATE ──
  const [form, setForm] = useState({
    nombre: "", empresa: "", rol: "", email: "", etapa: "", descripcion: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // ── TABS STATE ──
  const [activeTab, setActiveTab] = useState<"emisores" | "comercios">("emisores");

  // ── FAQ STATE ──
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.empresa) {
      toast({ title: "Completá los campos requeridos", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "¡Scoping solicitado!", description: "Te contactaremos en menos de 48 horas." });
  };

  const steps = [
    { icon: <Globe size={22} />, label: "Ve el ícono Click to Pay en el checkout" },
    { icon: <Mail size={22} />, label: "Ingresa su email" },
    { icon: <ShieldCheck size={22} />, label: "Confirma su identidad" },
    { icon: <CreditCard size={22} />, label: "Elige su tarjeta preferida" },
    { icon: <CheckCircle2 size={22} />, label: "Completa la compra. ¡Listo!" },
  ];

  const stats = [
    { number: 128, suffix: "%", label: "Crecimiento interanual en transacciones tokenizadas con Click to Pay", source: "VisaNet · Q3 FY2023 vs Q3 FY2024" },
    { number: 89, suffix: "%", label: "de los clientes percibieron Click to Pay igual o mejor que otros métodos digitales", source: "Investigación IPSOS 2023 · UK & España" },
    { number: 4.3, suffix: "%", label: "de aumento promedio en tasa de autorización vs transacciones con PAN tradicional", source: "VisaNet · Oct–Dic 2023 · CNP global" },
  ];

  const emisoresPains = [
    "Inscripción automática de tarjetahabientes al momento de la emisión",
    "Gestión de tokens y credenciales de pago",
    "Integración API con la red Click to Pay (Visa SRC)",
    "Activación de la marca del emisor dentro del flujo de pago",
    "Testing, certificación y go-live con Visa/MC",
    "Estrategia de comunicación al tarjetahabiente",
    "Reducción de la proliferación de wallets y botones digitales",
  ];

  const comerciosPains = [
    "Integración del botón Click to Pay en web y mobile",
    "Implementación React del SRCI SDK",
    "Optimización UX/UI para maximizar conversión",
    "Reducción del alcance PCI-DSS mediante tokenización",
    "Eliminación del guest checkout manual",
    "A/B testing de flujos de pago",
    "Mejora de tasas de autorización con tokens Visa",
  ];

  const teamCards = [
    {
      icon: <ShieldCheck size={32} color={blue} />,
      role: "Especialista en Medios de Pago",
      desc: "Expertise profundo en specs EMVCo de Click to Pay, reglas de esquemas (Visa SRC, Mastercard SRC), flujos de tokenización, conectividad emisor-adquirente y certificaciones de red.",
      tags: ["EMVCo", "Tokenización", "Visa SRC", "Certificación"],
    },
    {
      icon: <Kanban size={32} color={blue} />,
      role: "Product Manager de Pagos",
      desc: "PMs especializados en productos de pagos digitales. Lideramos discovery, roadmap, alineación de stakeholders y sprints de entrega ágil — siempre con la experiencia del cliente en el centro.",
      tags: ["Agile", "Product Discovery", "Customer Journey", "Roadmap"],
    },
    {
      icon: <Atom size={32} color={blue} />,
      role: "Developer React — Checkout Specialist",
      desc: "Engineers React especializados en integración del botón Click to Pay, manejo del SRCI SDK, UI de tarjetas tokenizadas y optimización de la conversión en el checkout.",
      tags: ["React", "SRCI SDK", "TypeScript", "Checkout UX"],
    },
  ];

  const workSteps = [
    { icon: <Search size={28} />, title: "Discovery & Assessment", desc: "Mapeamos tu checkout actual, stack tecnológico, relación con esquemas y objetivos de negocio. Definimos el alcance exacto de la implementación." },
    { icon: <PenLine size={28} />, title: "UX Design & Architecture", desc: "Diseñamos el journey de Click to Pay centrado en tu cliente. Blueprint técnico de integración: APIs, SDK, flujos de autenticación y tokenización." },
    { icon: <Code2 size={28} />, title: "Agile Build & Integration", desc: "Sprints ágiles. Componentes React. Integración API. Cobertura de testing completa. Revisiones continuas con tu equipo." },
    { icon: <Rocket size={28} />, title: "Certificación, Launch & Optimize", desc: "Acompañamiento en la certificación con Visa/Mastercard. Go-live support. Analytics de conversión y mejora continua de la UX post-lanzamiento." },
  ];

  const emisoresBenefits = [
    "Ser la opción de pago principal y más elegida",
    "Fortalecer la relación con el tarjetahabiente",
    "Activación de marca dentro del flujo de pago digital",
    "Inscripción automática de tarjetas al emitir",
    "Administración del ciclo de vida de credenciales",
    "Mantenerse a la vanguardia frente a wallets y botones de terceros",
  ];

  const comerciosBenefits = [
    "Reducir abandono del carrito en guest checkout",
    "Aumentar tasa de autorización en +4.3% promedio",
    "Minimizar fraude con tokenización",
    "Reducir alcance PCI-DSS",
    "Integración no invasiva en el checkout existente",
    "Credenciales siempre actualizadas (menos rechazos falsos)",
  ];

  const faqs = [
    {
      q: "¿Qué es Click to Pay exactamente?",
      a: "Click to Pay es el nuevo estándar global de pago digital en línea, basado en la especificación EMVCo. Reemplaza el ingreso manual de datos de tarjeta con un flujo tokenizado, seguro y de un clic. Participan Visa, Mastercard, Amex y Discover.",
    },
    {
      q: "¿Cómo se beneficia un emisor implementando Click to Pay?",
      a: "Los emisores pueden inscribir automáticamente a sus tarjetahabientes, convertir su tarjeta en la opción default de pago online, fortalecer la relación con su cliente y reducir la pérdida de transacciones frente a wallets de terceros.",
    },
    {
      q: "¿Qué necesita un comercio para integrarlo?",
      a: "Trabajamos con el procesador o PSP del comercio para implementar el SRCI SDK y el botón Click to Pay. Nuestros developers React lo integran en el checkout existente sin reemplazar la experiencia actual.",
    },
    {
      q: "¿Cuánto tiempo tarda una implementación?",
      a: "Depende del alcance. Una integración para comercio puede estar en producción en 2-4 semanas. Para emisores, el proceso incluye certificación con el esquema y puede tomar 6-12 semanas.",
    },
    {
      q: "¿Qué tan seguro es Click to Pay?",
      a: "Usa tokenización de red (Visa Token Service, Mastercard MDES), lo que significa que el número de tarjeta real nunca se comparte con el comercio. Esto reduce fraude y mejora las tasas de autorización en promedio 4.3%.",
    },
  ];

  const testimonials = [
    {
      quote: "El equipo entendió tanto el lado técnico como el de negocio. La implementación fue fluida y nuestras tasas de aprobación mejoraron desde el día uno.",
      name: "Directora de Medios de Pago",
      company: "Banco Regional — Proyecto Emisor",
    },
    {
      quote: "Los developers React tenían el botón Click to Pay funcionando en producción en dos semanas. La guía de UX marcó la diferencia en el abandono del carrito.",
      name: "CTO",
      company: "Plataforma de E-Commerce",
    },
  ];

  // ─── Floating particles SVG bg ────────────────────────────────────────────
  const ParticleBg = () => (
    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      {[...Array(18)].map((_, i) => (
        <motion.circle
          key={i}
          cx={`${(i * 37 + 11) % 100}%`}
          cy={`${(i * 29 + 7) % 100}%`}
          r={i % 3 === 0 ? 3 : i % 3 === 1 ? 5 : 2}
          fill={i % 2 === 0 ? blue : "#4DA3FF"}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      {[...Array(6)].map((_, i) => (
        <motion.rect
          key={`r-${i}`}
          x={`${(i * 53 + 5) % 92}%`}
          y={`${(i * 41 + 10) % 85}%`}
          width={24} height={16} rx={3}
          stroke={blue} strokeWidth={1} fill="none" opacity={0.3}
          animate={{ rotate: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </svg>
  );

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: white, color: navy }} className="overflow-x-hidden">

      {/* ══════════════════════ HERO ══════════════════════════════════════════ */}
      <section
        style={{
          background: `linear-gradient(135deg, ${navy} 0%, #0A2463 60%, #1a3a6e 100%)`,
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ParticleBg />
        {/* Glow orbs */}
        <div style={{ position: "absolute", top: "20%", left: "60%", width: 480, height: 480, borderRadius: "50%", background: `radial-gradient(circle, ${blue}22 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #4DA3FF18 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            {/* Badge row */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-8">
              {["EMVCo Certified", "Visa", "Mastercard", "Amex", "Agile Delivery", "UX-First"].map((b) => (
                <span key={b} style={{
                  background: "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: white,
                  borderRadius: 9999,
                  padding: "4px 14px",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}>{b}</span>
              ))}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              style={{ color: white, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.12, marginBottom: 24, letterSpacing: "-0.03em" }}
            >
              Implementá Click to Pay.<br />
              <span style={{ background: `linear-gradient(90deg, #4DA3FF, ${blue})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Rápido, experto y centrado en el cliente.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: 700, margin: "0 auto 40px", lineHeight: 1.65 }}
            >
              Ayudamos a emisores y comercios a integrar Click to Pay — el nuevo estándar global en el proceso de compra en línea — con expertos en medios de pago, Product Managers ágiles y developers React especializados.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <a
                href="#contacto"
                style={{
                  background: `linear-gradient(135deg, ${blue}, ${blueMid})`,
                  color: white,
                  borderRadius: 10,
                  padding: "14px 32px",
                  fontWeight: 700,
                  fontSize: 16,
                  textDecoration: "none",
                  boxShadow: `0 8px 32px ${blue}55`,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${blue}77`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${blue}55`; }}
              >
                Hablar con un Experto <ArrowRight size={18} />
              </a>
              <a
                href="#como-funciona"
                style={{
                  background: "transparent",
                  color: white,
                  borderRadius: 10,
                  padding: "14px 32px",
                  fontWeight: 700,
                  fontSize: 16,
                  textDecoration: "none",
                  border: "2px solid rgba(255,255,255,0.35)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.6)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.35)"; }}
              >
                Ver Cómo Funciona
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ WHAT IS CLICK TO PAY ══════════════════════════ */}
      <section id="como-funciona" style={{ background: navy, padding: "88px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <Section>
            <motion.h2
              variants={fadeUp}
              style={{ color: white, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 800, textAlign: "center", marginBottom: 16 }}
            >
              ¿Qué es Click to Pay?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{ color: "rgba(255,255,255,0.70)", fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", textAlign: "center", maxWidth: 680, margin: "0 auto 64px", lineHeight: 1.7 }}
            >
              Click to Pay es el nuevo estándar en el proceso de compra en línea. Una solución tokenizada que hace que pagar online sea tan fácil como pagar con contactless, pero en el mundo digital. Sin ingresar datos manualmente. Sin fricción.
            </motion.p>

            {/* Steps */}
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: 16,
                    padding: "24px 16px",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: `${blue}22`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", color: "#4DA3FF" }}>{s.icon}</div>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: blue, color: white, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>{i + 1}</div>
                  <p style={{ color: "rgba(255,255,255,0.80)", fontSize: 13, lineHeight: 1.5 }}>{s.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} style={{ color: "rgba(255,255,255,0.45)", textAlign: "center", fontSize: 13 }}>
              Disponible con Visa, Mastercard, American Express y Discover. Estándar EMVCo.
            </motion.p>
          </Section>
        </div>
      </section>

      {/* ══════════════════════ STATS ═════════════════════════════════════════ */}
      <section style={{ background: softGray, padding: "88px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <Section>
            <motion.h2
              variants={fadeUp}
              style={{ color: navy, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, textAlign: "center", marginBottom: 48 }}
            >
              Números reales. Resultados comprobados.
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  style={{
                    background: white,
                    borderRadius: 20,
                    padding: "40px 32px",
                    textAlign: "center",
                    border: `1px solid rgba(0,102,255,0.10)`,
                    boxShadow: "0 4px 24px rgba(0,102,255,0.07)",
                  }}
                >
                  <div style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, color: blue, marginBottom: 12, letterSpacing: "-0.03em" }}>
                    <AnimatedCounter target={s.number} suffix={s.suffix} />
                  </div>
                  <p style={{ color: navy, fontSize: 15, fontWeight: 600, marginBottom: 10, lineHeight: 1.5 }}>{s.label}</p>
                  <p style={{ color: "#94a3b8", fontSize: 12, fontStyle: "italic" }}>{s.source}</p>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ══════════════════════ WHO WE HELP ══════════════════════════════════ */}
      <section style={{ background: white, padding: "88px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <Section>
            <motion.h2
              variants={fadeUp}
              style={{ color: navy, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, textAlign: "center", marginBottom: 12 }}
            >
              ¿A quién ayudamos?
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: "#64748b", textAlign: "center", marginBottom: 48, fontSize: 16 }}>
              Soluciones especializadas para cada actor del ecosistema de pagos digitales.
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Emisores */}
              <motion.div
                variants={fadeUp}
                whileHover="hover"
                initial="rest"
                style={{
                  background: `linear-gradient(135deg, ${navy} 0%, #0A2463 100%)`,
                  borderRadius: 24,
                  padding: "40px 36px",
                  border: `2px solid ${blue}33`,
                }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 14, background: `${blue}22`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Building2 size={28} color="#4DA3FF" />
                </div>
                <h3 style={{ color: white, fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Para Emisores</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                  Sé la opción de pago principal. Conservá el valor de tu marca y gestioná el ciclo de vida de tus tarjetahabientes en el entorno digital.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {emisoresPains.map((p) => (
                    <li key={p} style={{ color: "rgba(255,255,255,0.80)", fontSize: 14, display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckCircle2 size={16} color="#4DA3FF" style={{ flexShrink: 0, marginTop: 2 }} />{p}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" style={{ color: "#4DA3FF", fontWeight: 700, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                  Ver solución para emisores <ArrowRight size={16} />
                </a>
              </motion.div>

              {/* Comercios */}
              <motion.div
                variants={fadeUp}
                whileHover="hover"
                initial="rest"
                style={{
                  background: `linear-gradient(135deg, #064e3b 0%, #065f46 100%)`,
                  borderRadius: 24,
                  padding: "40px 36px",
                  border: "2px solid #10b98133",
                }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(16,185,129,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Store size={28} color="#34d399" />
                </div>
                <h3 style={{ color: white, fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Para Comercios y E-Commerce</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                  Convertí visitantes en compradores. Reducí el abandono del carrito y mejorá tus tasas de conversión con una experiencia de checkout sin fricciones.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {comerciosPains.map((p) => (
                    <li key={p} style={{ color: "rgba(255,255,255,0.80)", fontSize: 14, display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0, marginTop: 2 }} />{p}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" style={{ color: "#34d399", fontWeight: 700, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                  Ver solución para comercios <ArrowRight size={16} />
                </a>
              </motion.div>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ══════════════════════ EXPERT TEAM ══════════════════════════════════ */}
      <section style={{ background: softGray, padding: "88px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <Section>
            <motion.h2
              variants={fadeUp}
              style={{ color: navy, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, textAlign: "center", marginBottom: 12 }}
            >
              Nuestro equipo experto
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: "#64748b", textAlign: "center", marginBottom: 48, fontSize: 16 }}>
              Tres perfiles especializados trabajando en conjunto para tu implementación.
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamCards.map((c, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  // @ts-ignore
                  custom={cardHover}
                  style={{
                    background: white,
                    borderRadius: 20,
                    padding: "36px 28px",
                    border: "1px solid rgba(0,102,255,0.10)",
                    cursor: "default",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 48px rgba(0,102,255,0.18)`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <div style={{ marginBottom: 20 }}>{c.icon}</div>
                  <h3 style={{ color: navy, fontSize: 17, fontWeight: 800, marginBottom: 12 }}>{c.role}</h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>{c.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {c.tags.map((t) => <Tag key={t} label={t} />)}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ══════════════════════ HOW WE WORK ══════════════════════════════════ */}
      <section style={{ background: white, padding: "88px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <Section>
            <motion.h2
              variants={fadeUp}
              style={{ color: navy, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, textAlign: "center", marginBottom: 12 }}
            >
              Cómo trabajamos
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: "#64748b", textAlign: "center", marginBottom: 64, fontSize: 16 }}>
              Un proceso claro, ágil y centrado en resultados.
            </motion.p>
            <motion.div variants={stagger} className="relative">
              {/* Connecting line desktop */}
              <div className="hidden md:block" style={{
                position: "absolute",
                top: 36,
                left: "12.5%",
                right: "12.5%",
                height: 2,
                background: `linear-gradient(90deg, ${blue}, #4DA3FF)`,
                zIndex: 0,
              }} />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {workSteps.map((s, i) => (
                  <motion.div key={i} variants={fadeUp} style={{ textAlign: "center" }}>
                    <div style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${blue}, ${blueMid})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      color: white,
                      boxShadow: `0 8px 24px ${blue}44`,
                    }}>
                      {s.icon}
                    </div>
                    <div style={{ fontSize: 12, color: blue, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 6 }}>PASO {i + 1}</div>
                    <h3 style={{ color: navy, fontSize: 15, fontWeight: 800, marginBottom: 10 }}>{s.title}</h3>
                    <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.65 }}>{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ══════════════════════ BENEFITS TABS ════════════════════════════════ */}
      <section style={{ background: softGray, padding: "88px 24px" }}>
        <div className="max-w-4xl mx-auto">
          <Section>
            <motion.h2
              variants={fadeUp}
              style={{ color: navy, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, textAlign: "center", marginBottom: 40 }}
            >
              Beneficios por segmento
            </motion.h2>
            {/* Tabs */}
            <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "center", gap: 0, marginBottom: 40, background: "rgba(0,0,0,0.05)", borderRadius: 12, padding: 4, width: "fit-content", margin: "0 auto 40px" }}>
              {(["emisores", "comercios"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "10px 28px",
                    borderRadius: 10,
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: 15,
                    transition: "all 0.2s",
                    background: activeTab === tab ? blue : "transparent",
                    color: activeTab === tab ? white : "#64748b",
                    boxShadow: activeTab === tab ? `0 4px 16px ${blue}44` : "none",
                  }}
                  aria-label={`Ver beneficios para ${tab}`}
                >
                  {tab === "emisores" ? "Emisores" : "Comercios"}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: white,
                  borderRadius: 20,
                  padding: "36px 40px",
                  border: "1px solid rgba(0,102,255,0.10)",
                  boxShadow: "0 4px 24px rgba(0,102,255,0.07)",
                }}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 32px" }} className="grid-cols-1 sm:grid-cols-2">
                  {(activeTab === "emisores" ? emisoresBenefits : comerciosBenefits).map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12, color: navy, fontSize: 15, lineHeight: 1.5 }}>
                      <CheckCircle2 size={18} color={blue} style={{ flexShrink: 0, marginTop: 2 }} />{b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </Section>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ═════════════════════════════════ */}
      <section style={{ background: white, padding: "88px 24px" }}>
        <div className="max-w-5xl mx-auto">
          <Section>
            <motion.h2
              variants={fadeUp}
              style={{ color: navy, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, textAlign: "center", marginBottom: 48 }}
            >
              Lo que dicen nuestros clientes
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    background: `linear-gradient(135deg, ${navy} 0%, #0A2463 100%)`,
                    borderRadius: 20,
                    padding: "36px 32px",
                    border: `1px solid ${blue}33`,
                  }}
                >
                  <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                    {[...Array(5)].map((_, s) => <Star key={s} size={16} fill="#F59E0B" color="#F59E0B" />)}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.7, fontStyle: "italic", marginBottom: 24 }}>
                    "{t.quote}"
                  </p>
                  <div>
                    <p style={{ color: white, fontWeight: 700, fontSize: 14 }}>{t.name}</p>
                    <p style={{ color: "rgba(255,255,255,0.50)", fontSize: 13 }}>{t.company}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ══════════════════════ FAQ ═══════════════════════════════════════════ */}
      <section style={{ background: softGray, padding: "88px 24px" }}>
        <div className="max-w-3xl mx-auto">
          <Section>
            <motion.h2
              variants={fadeUp}
              style={{ color: navy, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, textAlign: "center", marginBottom: 48 }}
            >
              Preguntas frecuentes
            </motion.h2>
            <motion.div variants={stagger} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqs.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    background: white,
                    borderRadius: 16,
                    border: openFaq === i ? `1.5px solid ${blue}` : "1.5px solid rgba(0,102,255,0.10)",
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "20px 24px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                    aria-expanded={openFaq === i}
                  >
                    <span style={{ color: navy, fontWeight: 700, fontSize: 15 }}>{f.q}</span>
                    <span style={{ flexShrink: 0, color: blue }}>
                      {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: "hidden" }}
                      >
                        <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, padding: "0 24px 20px" }}>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ══════════════════════ CONTACT ═══════════════════════════════════════ */}
      <section id="contacto" style={{ background: `linear-gradient(135deg, ${navy} 0%, #0A2463 100%)`, padding: "88px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${blue}22 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div className="max-w-2xl mx-auto relative z-10">
          <Section>
            <motion.h2
              variants={fadeUp}
              style={{ color: white, fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 800, textAlign: "center", marginBottom: 12 }}
            >
              ¿Listo para implementar Click to Pay?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{ color: "rgba(255,255,255,0.65)", textAlign: "center", fontSize: 16, marginBottom: 48, lineHeight: 1.6 }}
            >
              Contanos tu proyecto. En 48 horas te enviamos un scoping inicial sin costo.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ background: "rgba(255,255,255,0.08)", borderRadius: 20, padding: "48px 32px", textAlign: "center", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <CheckCircle2 size={56} color="#4DA3FF" style={{ margin: "0 auto 16px" }} />
                <h3 style={{ color: white, fontSize: 22, fontWeight: 800, marginBottom: 8 }}>¡Scoping solicitado!</h3>
                <p style={{ color: "rgba(255,255,255,0.65)" }}>Te contactaremos en menos de 48 horas con una propuesta inicial.</p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(16px)",
                  borderRadius: 24,
                  padding: "40px 36px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
                noValidate
              >
                {/* Nombre + Empresa */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={{ color: "rgba(255,255,255,0.70)", fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}>Nombre completo *</label>
                    <input
                      type="text"
                      required
                      value={form.nombre}
                      onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                      style={inputStyle}
                      placeholder="Tu nombre"
                      aria-label="Nombre completo"
                    />
                  </div>
                  <div>
                    <label style={{ color: "rgba(255,255,255,0.70)", fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}>Empresa *</label>
                    <input
                      type="text"
                      required
                      value={form.empresa}
                      onChange={e => setForm(f => ({ ...f, empresa: e.target.value }))}
                      style={inputStyle}
                      placeholder="Tu empresa"
                      aria-label="Empresa"
                    />
                  </div>
                </div>

                {/* Rol dropdown */}
                <div>
                  <label style={{ color: "rgba(255,255,255,0.70)", fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}>Mi rol es</label>
                  <select value={form.rol} onChange={e => setForm(f => ({ ...f, rol: e.target.value }))} style={inputStyle} aria-label="Rol">
                    <option value="">Seleccioná tu rol</option>
                    <option>Emisor / Banco</option>
                    <option>Comercio / E-Commerce</option>
                    <option>PSP / Procesador</option>
                    <option>Otro</option>
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label style={{ color: "rgba(255,255,255,0.70)", fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}>Email corporativo *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={inputStyle}
                    placeholder="tu@empresa.com"
                    aria-label="Email corporativo"
                  />
                </div>

                {/* Etapa dropdown */}
                <div>
                  <label style={{ color: "rgba(255,255,255,0.70)", fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}>¿En qué etapa estás?</label>
                  <select value={form.etapa} onChange={e => setForm(f => ({ ...f, etapa: e.target.value }))} style={inputStyle} aria-label="Etapa del proyecto">
                    <option value="">Seleccioná tu etapa</option>
                    <option>Evaluando la solución</option>
                    <option>Ya decidido, necesito implementar</option>
                    <option>Tengo una integración parcial</option>
                    <option>Quiero certificar</option>
                  </select>
                </div>

                {/* Descripcion */}
                <div>
                  <label style={{ color: "rgba(255,255,255,0.70)", fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}>Descripción breve del proyecto</label>
                  <textarea
                    rows={4}
                    value={form.descripcion}
                    onChange={e => setForm(f => ({ ...f, descripcion: e.target.value }))}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
                    placeholder="Contanos brevemente tu contexto y objetivos..."
                    aria-label="Descripción del proyecto"
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: `linear-gradient(135deg, ${blue}, ${blueMid})`,
                    color: white,
                    border: "none",
                    borderRadius: 12,
                    padding: "16px",
                    fontWeight: 800,
                    fontSize: 16,
                    cursor: "pointer",
                    boxShadow: `0 8px 32px ${blue}55`,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}
                >
                  <Sparkles size={18} />
                  Solicitar Scoping Gratuito
                </button>
              </motion.form>
            )}

            {/* WhatsApp floating CTA */}
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginTop: 28 }}>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#25D366",
                  color: white,
                  borderRadius: 12,
                  padding: "12px 24px",
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
                }}
              >
                <MessageCircle size={20} />
                Chateá directo con un experto en pagos
              </a>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
          zIndex: 999,
          color: white,
          textDecoration: "none",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}

// ── Shared input style ────────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 10,
  padding: "12px 16px",
  color: "#ffffff",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
};
