import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, CreditCard, Search,
  PenLine, Code2, Rocket, ChevronDown, ChevronUp,
  MessageCircle, CheckCircle2, Atom, Kanban,
  Building2, Sparkles, ArrowRight, Mail, Star,
  Globe, Store, Smartphone,
} from "lucide-react";
import type { Variants } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import c2pHorizontalDark from "@/assets/c2p-horizontal-dark.svg";
import c2pIconDark from "@/assets/c2p-icon-dark.svg";

// ─── Design tokens — Colibird palette ────────────────────────────────────────
const navy = "#1A0A2E";           // deep violet-dark background
const blue = "#7B2FFF";           // colibird violet (primary)
const blueMid = "#E91E8C";        // colibird magenta
const softGray = "#F5F3FF";       // violet-tinted light gray
const white = "#FFFFFF";
const colibirdOrange = "#FF7A00"; // colibird orange

// ─── Framer variants ──────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardHover = {
  rest: { y: 0, boxShadow: "0 4px 24px 0 rgba(123,47,255,0.10)" },
  hover: { y: -8, boxShadow: "0 20px 48px 0 rgba(123,47,255,0.28)", transition: { duration: 0.3 } },
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
      background: "rgba(123,47,255,0.12)",
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
    { icon: <img src={c2pHorizontalDark} alt="Click to Pay" className="w-96" />, label: "Integra el ícono de Click To Pay en el checkout de tu sitio de compra en línea y agiliza el proceso de pago." },
    { icon: <CreditCard size={40} strokeWidth={1.2} color="white" />, label: "Permití que tus Clientes paguen sin fricción y seleccionen la tarjeta con la que quieren pagar sin ingresar PAN, Fecha de vencimiento ni CVV2." },
    { icon: <ShieldCheck size={40} strokeWidth={1.2} color="white" />, label: "Minimiza el fraude y mejora tus tasas de aprobación asignándole al Cliente un desafío a completar (passkey)." },
    { icon: <CheckCircle2 size={40} strokeWidth={1.2} color="white" />, label: "Baja las tasas de abandono en el check out y el fraude en línea con C2P. ¡Listo!" },
  ];

  const stats = [
    { number: 128, suffix: "%", label: "Crecimiento interanual en transacciones tokenizadas con Click to Pay", source: "VisaNet · Q3 FY2023 vs Q3 FY2024" },
    { number: 89, suffix: "%", label: "de los Clientes percibieron Click to Pay igual o mejor que otros métodos digitales", source: "Investigación IPSOS 2023 · UK & España" },
    { number: 4.3, suffix: "%", label: "de aumento promedio en tasa de autorización vs transacciones con PAN tradicional", source: "VisaNet · Oct–Dic 2023 · CNP global" },
    { number: 65, suffix: "+", label: "mercados donde Click to Pay está disponible — ¡y seguimos creciendo!", source: "Mastercard MDES · 2025" },
    { number: 3, suffix: "-6 ppt", label: "de mejora en tasas de aprobación en transacciones tokenizadas vs ingreso manual de PAN, Fecha de vencimiento y CVV", source: "Mastercard Datawarehouse · Dic 2024 · MDES for Merchants · CNP first attempt" },
    { number: 50, suffix: "%", label: "de reducción en contracargos", source: "Just Eat Takeaway.com & Mastercard · Abr 2025" },
  ];

  const emisoresPains = [
    "Enrolá en forma rápida a todos tus tarjetahabientes y gestioná nuevos onboardings y reemplazos/reemisiones de tarjetas.",
    "Gestioná tokens y criptogramas de XPay (Google Pay y Apple Pay) y C2P a través de un mismo certificado de seguridad.",
    "Integrá C2P vía el SDK Issuer y conectaló con los SRC-I de las marcas (Visa y Mastercard).",
    "Sé compliance con los mandatos de las marcas y evita multas o pedidos de waivers.",
    "Activá el poder tu marca emisora dentro de los flujos de pagos adquirentes.",
    "Te ayudamos con el testing, la certificación y go-live con Visa/Mastercard.",
    "Te brandeamos la comunicación con el tarjetahabiente para activar el uso de C2P de tus tarjetas emitidas.",
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
      desc: "Expertise profundo en specs EMV®Co de Click to Pay, reglas de esquemas (Visa SRC, Mastercard SRC), flujos de tokenización, conectividad emisor-adquirente y certificaciones de red.",
      tags: ["EMV®Co", "Tokenización", "Visa SRC", "Certificación"],
    },
    {
      icon: <Kanban size={32} color={blueMid} />,
      role: "Product Manager de Pagos",
      desc: "PMs especializados en productos de pagos digitales. Lideramos discovery, roadmap, alineación de stakeholders y sprints de entrega ágil — siempre con la experiencia del Cliente en el centro.",
      tags: ["Agile", "Product Discovery", "Customer Journey", "Roadmap"],
    },
    {
      icon: <Atom size={32} color={colibirdOrange} />,
      role: "Developer React — Checkout Specialist",
      desc: "Engineers React especializados en integración del botón Click to Pay, manejo del SRCI SDK, UI de tarjetas tokenizadas y optimización de la conversión en el checkout.",
      tags: ["React", "SRCI SDK", "TypeScript", "Checkout UX"],
    },
  ];

  const workSteps = [
    { icon: <Search size={28} />, title: "Discovery & Assessment", desc: "Mapeamos tu checkout actual, stack tecnológico, relación con esquemas y objetivos de negocio. Definimos el alcance exacto de la implementación." },
    { icon: <PenLine size={28} />, title: "UX Design & Architecture", desc: "Diseñamos el journey de Click to Pay centrado en tu Cliente. Blueprint técnico de integración: APIs, SDK, flujos de autenticación y tokenización." },
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
      a: "Click to Pay es el nuevo estándar global de pago digital en línea, basado en la especificación EMV®Co. Reemplaza el ingreso manual de datos de tarjeta con un flujo tokenizado, seguro y de un clic. Participan Visa, Mastercard, Amex y Discover.",
    },
    {
      q: "¿Cómo se beneficia un emisor implementando Click to Pay?",
      a: "Los emisores pueden inscribir automáticamente a sus tarjetahabientes, convertir su tarjeta en la opción default de pago online, fortalecer la relación con su Cliente y reducir la pérdida de transacciones frente a wallets de terceros.",
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
          fill={i % 3 === 0 ? blue : i % 3 === 1 ? blueMid : colibirdOrange}
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
          stroke={i % 2 === 0 ? blue : blueMid} strokeWidth={1} fill="none" opacity={0.3}
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
          background: `linear-gradient(135deg, ${navy} 0%, #2D0A5E 55%, #3D1070 100%)`,
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ParticleBg />
        {/* Glow orbs */}
        <div style={{ position: "absolute", top: "15%", left: "60%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${blue}30 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 350, height: 350, borderRadius: "50%", background: `radial-gradient(circle, ${blueMid}20 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "60%", right: "10%", width: 250, height: 250, borderRadius: "50%", background: `radial-gradient(circle, ${colibirdOrange}15 0%, transparent 70%)`, pointerEvents: "none" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            {/* Colibird badge */}
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <span style={{
                background: `linear-gradient(135deg, ${blue}, ${blueMid}, ${colibirdOrange})`,
                color: white,
                borderRadius: 9999,
                padding: "6px 18px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}>UN PRODUCTO DE COLIBIRD</span>
            </motion.div>

            {/* Badge row */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-8">
              {["EMV®Co", "Visa", "Mastercard", "Amex", "Agile Delivery", "UX-First"].map((b) => (
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
              Implementá{" "}
              <svg width="1.2em" height="0.75em" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "0.15em" }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M18.7674 0.25C19.0892 -0.0599736 19.5996 -0.0576986 19.9187 0.255132L25.7008 7.27744C26.1041 7.67282 26.1001 8.32304 25.6919 8.71342L20.0199 15.7917C19.8802 15.9254 19.6942 16 19.5007 16L14.7382 16C14.067 16 13.733 15.1873 14.2108 14.7162L20.0226 8L14.7382 1.5H12.6184L17.6723 7.27775C18.0847 7.67133 18.085 8.32904 17.6731 8.72307L11.0327 15.7917C10.8929 15.9254 10.7069 16 10.5134 16H2.99992C1.34348 16 0.000490164 14.6575 0.000235639 13.0011C-0.000276616 9.66733 0.000159259 6.3336 0.000478815 2.99986C0.000637627 1.34306 1.34377 0 3.00057 0H5.98488C6.39954 0 6.7357 0.335787 6.7357 0.75C6.7357 1.16421 6.39954 1.5 5.98488 1.5H3.50231C2.39774 1.5 1.50231 2.39543 1.50231 3.5C1.50231 6.5 1.50231 9.5 1.50231 12.5C1.50231 13.6046 2.39774 14.5 3.50231 14.5H9.95778L16.0182 8L10.2064 1.28378C9.72866 0.812734 10.0626 0 10.7338 0H15.3757C15.5692 0 15.7552 0.0746158 15.8949 0.208287L21.6774 7.27693C22.0894 7.67096 22.089 8.32867 21.6767 8.72225L16.6227 14.5H18.8757L24.027 8L18.7674 1.5C18.4378 1.17429 18.4336 0.571441 18.7674 0.25Z" fill="white"/>
              </svg>
              Click to Pay.<br />
              <span style={{ background: `linear-gradient(90deg, ${blue}, ${blueMid}, ${colibirdOrange})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Rápido, experto y centrado en el Cliente.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: 700, margin: "0 auto 40px", lineHeight: 1.65 }}
            >
              Ayudamos a emisores y sitios de comercio electrónico a integrar Click to Pay — el nuevo estándar global en el proceso de compra en línea — con Expertos en Medios de Pagos, Product Managers ágiles y Developers React especializados.
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
                  boxShadow: `0 8px 32px ${blue}66`,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${blue}88`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${blue}66`; }}
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
              ¿Qué es{" "}
              <svg width="1.2em" height="0.75em" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "0.15em" }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M18.7674 0.25C19.0892 -0.0599736 19.5996 -0.0576986 19.9187 0.255132L25.7008 7.27744C26.1041 7.67282 26.1001 8.32304 25.6919 8.71342L20.0199 15.7917C19.8802 15.9254 19.6942 16 19.5007 16L14.7382 16C14.067 16 13.733 15.1873 14.2108 14.7162L20.0226 8L14.7382 1.5H12.6184L17.6723 7.27775C18.0847 7.67133 18.085 8.32904 17.6731 8.72307L11.0327 15.7917C10.8929 15.9254 10.7069 16 10.5134 16H2.99992C1.34348 16 0.000490164 14.6575 0.000235639 13.0011C-0.000276616 9.66733 0.000159259 6.3336 0.000478815 2.99986C0.000637627 1.34306 1.34377 0 3.00057 0H5.98488C6.39954 0 6.7357 0.335787 6.7357 0.75C6.7357 1.16421 6.39954 1.5 5.98488 1.5H3.50231C2.39774 1.5 1.50231 2.39543 1.50231 3.5C1.50231 6.5 1.50231 9.5 1.50231 12.5C1.50231 13.6046 2.39774 14.5 3.50231 14.5H9.95778L16.0182 8L10.2064 1.28378C9.72866 0.812734 10.0626 0 10.7338 0H15.3757C15.5692 0 15.7552 0.0746158 15.8949 0.208287L21.6774 7.27693C22.0894 7.67096 22.089 8.32867 21.6767 8.72225L16.6227 14.5H18.8757L24.027 8L18.7674 1.5C18.4378 1.17429 18.4336 0.571441 18.7674 0.25Z" fill="white"/>
              </svg>
              Click to Pay?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{ color: "rgba(255,255,255,0.70)", fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", textAlign: "center", maxWidth: 780, margin: "0 auto 40px", lineHeight: 1.7 }}
            >
              <strong>Click To Pay</strong> (<strong>CTP</strong> ó <strong>C2P</strong>) es una nueva solución de pago digital diseñada para hacer que las compras en línea sean más seguras y fáciles, eliminando la necesidad de que los consumidores ingresen el número de la tarjeta (PAN) al comprar en sitios de comercio electrónico, mejorando la experiencia de compra al agilizar el proceso de pago.
            </motion.p>
            <motion.p
              variants={fadeUp}
              style={{ color: "rgba(255,255,255,0.70)", fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", textAlign: "center", maxWidth: 780, margin: "0 auto 64px", lineHeight: 1.7 }}
            >
              Este sistema se basa en la especificación EMV® Secure Remote Commerce, utilizando tokens y criptogramas seguros para cada transacción, minimizando el fraude y mejorando las tasas de aprobación. Además, aborda problemas críticos como las altas tasas de abandono en el checkout y el fraude en línea.
            </motion.p>

            {/* Emisores title */}
            <motion.h3 variants={fadeUp} style={{ color: white, fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)", fontWeight: 800, textAlign: "center", marginBottom: 32 }}>
              Para emisores
            </motion.h3>

            {/* Emisores Steps - placeholder */}
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { icon: <img src={c2pIconDark} alt="Click to Pay" style={{ width: 40, height: 40 }} />, label: <>Crea el perfil de C2P de todos tus Clientes y asociales las tarjetas que tu Banco o Fintech les emitió usando el Massive Push Provisioning.</> },
                { icon: <Smartphone size={40} strokeWidth={1.2} color="white" />, label: "Integra el SDK de C2P Issuer en tu app. Genera la experiencia de Usuario para que tus Clientes puedan administrar su perfil y tarjetas en C2P." },
                { icon: <ShieldCheck size={40} strokeWidth={1.2} color="white" />, label: "Asegurate de cumplir con los mandatos de las marcas y hace que tus Clientes acepten los términos y condiciones de C2P. Utiliza 2FA para hacer todo el proceso más seguro." },
                { icon: <CheckCircle2 size={40} strokeWidth={1.2} color="white" />, label: "Tus Clientes pueden gestionar el E2E del proceso de negocio de C2P desde tu app. ¡Listo!" },
              ].map((s, i) => (
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
                  {(s as any).noCircle ? (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", height: 48 }}>{s.icon}</div>
                  ) : (
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: `${blue}25`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", color: "#A97BFF" }}>{s.icon}</div>
                  )}
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: `linear-gradient(135deg, ${blue}, ${blueMid})`, color: white, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>{i + 1}</div>
                  <p style={{ color: "rgba(255,255,255,0.80)", fontSize: 13, lineHeight: 1.5 }}>{s.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Comercios title */}
            <motion.h3 variants={fadeUp} style={{ color: white, fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)", fontWeight: 800, textAlign: "center", marginBottom: 32 }}>
              Para comercios en línea
            </motion.h3>

            {/* Steps */}
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
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
                  {i === 0 ? (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", height: 48 }}>
                      <img src={c2pHorizontalDark} alt="Click to Pay" style={{ width: "100%", maxWidth: 200 }} />
                    </div>
                  ) : (
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: `${blue}25`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", color: "#A97BFF" }}>{s.icon}</div>
                  )}
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: `linear-gradient(135deg, ${blue}, ${blueMid})`, color: white, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>{i + 1}</div>
                  <p style={{ color: "rgba(255,255,255,0.80)", fontSize: 13, lineHeight: 1.5 }}>{s.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} style={{ color: "rgba(255,255,255,0.45)", textAlign: "center", fontSize: 13 }}>
              Disponible con Visa, Mastercard, American Express y Discover. Estándar EMV®Co.
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
                    border: `1px solid rgba(123,47,255,0.12)`,
                    boxShadow: "0 4px 24px rgba(123,47,255,0.08)",
                  }}
                >
                  <div style={{
                    fontSize: "clamp(2.5rem, 6vw, 4rem)",
                    fontWeight: 900,
                    background: `linear-gradient(135deg, ${blue}, ${blueMid})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: 12,
                    letterSpacing: "-0.03em"
                  }}>
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
                  background: `linear-gradient(135deg, ${navy} 0%, #2D0A5E 100%)`,
                  borderRadius: 24,
                  padding: "40px 36px",
                  border: `2px solid ${blue}44`,
                }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 14, background: `${blue}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Building2 size={28} color="#A97BFF" />
                </div>
                <h3 style={{ color: white, fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Para Emisores</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                  Sé la opción de pago principal (¡asegúrate de que tu Banco o Fintech esté arriba!). Conservá el valor de tu marca y gestioná el ciclo de vida de tus tarjetahabientes en tu app.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {emisoresPains.map((p) => (
                    <li key={p} style={{ color: "rgba(255,255,255,0.80)", fontSize: 14, display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckCircle2 size={16} color="#A97BFF" style={{ flexShrink: 0, marginTop: 2 }} />{p}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" style={{ color: "#A97BFF", fontWeight: 700, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                  Ver solución para emisores <ArrowRight size={16} />
                </a>
              </motion.div>

              {/* Comercios */}
              <motion.div
                variants={fadeUp}
                whileHover="hover"
                initial="rest"
                style={{
                  background: `linear-gradient(135deg, #3D0A2E 0%, #5C1040 100%)`,
                  borderRadius: 24,
                  padding: "40px 36px",
                  border: `2px solid ${blueMid}44`,
                }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 14, background: `${blueMid}20`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Store size={28} color={blueMid} />
                </div>
                <h3 style={{ color: white, fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Para Sitios de Comercio Electrónico</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                  Convertí visitantes en compradores. Reducí el abandono del carrito y mejorá tus tasas de conversión con una experiencia de checkout sin fricciones.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {comerciosPains.map((p) => (
                    <li key={p} style={{ color: "rgba(255,255,255,0.80)", fontSize: 14, display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckCircle2 size={16} color={blueMid} style={{ flexShrink: 0, marginTop: 2 }} />{p}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" style={{ color: blueMid, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                  Ver solución para e-commerce <ArrowRight size={16} />
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
                    border: "1px solid rgba(123,47,255,0.12)",
                    cursor: "default",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 48px rgba(123,47,255,0.18)`;
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
                background: `linear-gradient(90deg, ${blue}, ${blueMid}, ${colibirdOrange})`,
                zIndex: 0,
              }} />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {workSteps.map((s, i) => (
                  <motion.div key={i} variants={fadeUp} style={{ textAlign: "center" }}>
                    {i === 0 ? (
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", height: 72 }}>
                        <img src={c2pHorizontalDark} alt="Click to Pay" className="w-full max-w-[280px]" style={{ filter: "brightness(0)" }} />
                      </div>
                    ) : (
                      <div style={{
                        width: 72,
                        height: 72,
                        borderRadius: "50%",
                        background: i === 1
                          ? `linear-gradient(135deg, ${blue}CC, ${blueMid})`
                          : i === 2
                          ? `linear-gradient(135deg, ${blueMid}, ${blueMid}CC)`
                          : `linear-gradient(135deg, ${blueMid}CC, ${colibirdOrange})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                        color: white,
                        boxShadow: `0 8px 24px ${i < 2 ? blue : blueMid}55`,
                      }}>
                        {s.icon}
                      </div>
                    )}
                    <div style={{ fontSize: 12, color: i < 2 ? blue : blueMid, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 6 }}>PASO {i + 1}</div>
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
            <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "center", gap: 0, marginBottom: 40, background: "rgba(123,47,255,0.08)", borderRadius: 12, padding: 4, width: "fit-content", margin: "0 auto 40px" }}>
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
                    background: activeTab === tab
                      ? `linear-gradient(135deg, ${blue}, ${blueMid})`
                      : "transparent",
                    color: activeTab === tab ? white : "#64748b",
                    boxShadow: activeTab === tab ? `0 4px 16px ${blue}44` : "none",
                  }}
                  aria-label={`Ver beneficios para ${tab}`}
                >
                  {tab === "emisores" ? "Emisores" : "E-Commerce"}
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
                  border: `1px solid rgba(123,47,255,0.12)`,
                  boxShadow: "0 4px 24px rgba(123,47,255,0.08)",
                }}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 32px" }} className="grid-cols-1 sm:grid-cols-2">
                  {(activeTab === "emisores" ? emisoresBenefits : comerciosBenefits).map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12, color: navy, fontSize: 15, lineHeight: 1.5 }}>
                      <CheckCircle2 size={18} color={activeTab === "emisores" ? blue : blueMid} style={{ flexShrink: 0, marginTop: 2 }} />{b}
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
              Lo que dicen nuestros Clientes
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    background: `linear-gradient(135deg, ${navy} 0%, #2D0A5E 100%)`,
                    borderRadius: 20,
                    padding: "36px 32px",
                    border: `1px solid ${blue}33`,
                  }}
                >
                  <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                    {[...Array(5)].map((_, s) => <Star key={s} size={16} fill={colibirdOrange} color={colibirdOrange} />)}
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
                    border: openFaq === i ? `1.5px solid ${blue}` : "1.5px solid rgba(123,47,255,0.12)",
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
      <section id="contacto" style={{ background: `linear-gradient(135deg, ${navy} 0%, #2D0A5E 60%, #3D1040 100%)`, padding: "88px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${blue}22 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 350, height: 350, borderRadius: "50%", background: `radial-gradient(circle, ${blueMid}18 0%, transparent 70%)`, pointerEvents: "none" }} />
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
                <CheckCircle2 size={56} color={blue} style={{ margin: "0 auto 16px" }} />
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
