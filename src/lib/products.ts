export type ProductFeature = { title: string; desc: string };
export type ProductStep = { number: string; title: string; desc: string };
export type ProductUseCase = { title: string; desc: string };

export type FinCaseJourney = {
  persona: string;
  prompt: string;
  steps: string[];
};

export type FinCaseMetric = {
  value: string;
  label: string;
  desc: string;
};

export type FinCaseStudy = {
  tag: string;
  headline: string;
  sub: string;
  problem_title: string;
  problem: string;
  solution_title: string;
  solution: string;
  security_title: string;
  security_bullets: string[];
  journeys_title: string;
  journeys: FinCaseJourney[];
  metrics_title: string;
  metrics: FinCaseMetric[];
  framing_note: string;
};

export type ProductLang = {
  name: string;
  tagline: string;
  description: string;
  badge: string;
  features: ProductFeature[];
  steps: ProductStep[];
  use_cases: ProductUseCase[];
  fin_case?: FinCaseStudy;
};

export type Product = {
  slug: string;
  category: "financing" | "payments" | "compliance" | "infrastructure";
  color: "purple" | "pink" | "teal" | "blue" | "green" | "orange";
  tech_specs: string[];
  external_url?: string;
  es: ProductLang;
  en: ProductLang;
};

export const products: Product[] = [
  {
    slug: "scf",
    category: "financing",
    color: "purple",
    tech_specs: ["REST API + Webhooks", "OpenAPI 3.0", "SDKs: Python, Node.js, Java", "SLA 99.9%", "Multi-tenant", "PCI-DSS Compliant"],
    es: {
      name: "Supply Chain Finance",
      tagline: "Financiá toda tu cadena de suministro desde una sola plataforma",
      description: "Plataforma buyer-driven que permite a bancos y fintechs lanzar programas de SCF en días. El comprador ancla confirma facturas y los proveedores acceden a liquidez inmediata a tasas preferenciales, sin afectar su línea de crédito.",
      badge: "SCF",
      features: [
        { title: "Buyer-Driven", desc: "El comprador ancla garantiza el riesgo. El proveedor cobra antes sin afectar su línea de crédito ni su balance." },
        { title: "Multi-País", desc: "Soporte nativo para Colombia, Argentina, Brasil, Chile y México con integración regulatoria local por país." },
        { title: "Risk Engine IA", desc: "Scoring automático de proveedores, detección de anomalías y semáforos de riesgo configurables en tiempo real." },
        { title: "API-First", desc: "Integración en días. Webhooks, SDKs multi-lenguaje y documentación OpenAPI completa lista para producción." },
      ],
      steps: [
        { number: "01", title: "Onboarding del comprador", desc: "Incorporá al comprador ancla. TrustPath gestiona el KYC/AML de forma digital en menos de 5 minutos." },
        { number: "02", title: "Carga y validación de facturas", desc: "El proveedor sube facturas vía portal o API. El sistema valida contra el ERP del comprador o RADIAN automáticamente." },
        { number: "03", title: "Financiamiento en T+1", desc: "DecisionHub aprueba en segundos. El proveedor recibe los fondos el día hábil siguiente." },
      ],
      use_cases: [
        { title: "Bancos corporativos", desc: "Lanzá un programa SCF para tus clientes compradores sin construir tecnología desde cero. Time-to-market en días." },
        { title: "Fintechs de factoring", desc: "Escalá tu operación con una plataforma white-label lista para producción con compliance incluido." },
        { title: "Corporaciones compradoras", desc: "Ofrecé a tus proveedores acceso a financiamiento como beneficio estratégico de la relación comercial." },
      ],
    },
    en: {
      name: "Supply Chain Finance",
      tagline: "Finance your entire supply chain from a single platform",
      description: "Buyer-driven platform that enables banks and fintechs to launch SCF programs in days. The anchor buyer confirms invoices and suppliers access immediate liquidity at preferential rates, without affecting their credit line.",
      badge: "SCF",
      features: [
        { title: "Buyer-Driven", desc: "The anchor buyer guarantees the risk. Suppliers get paid early without affecting their credit line or balance sheet." },
        { title: "Multi-Country", desc: "Native support for Colombia, Argentina, Brazil, Chile and Mexico with local regulatory integration per country." },
        { title: "AI Risk Engine", desc: "Automatic supplier scoring, anomaly detection and configurable real-time risk traffic lights." },
        { title: "API-First", desc: "Integration in days. Multi-language SDKs, webhooks and complete OpenAPI documentation ready for production." },
      ],
      steps: [
        { number: "01", title: "Buyer onboarding", desc: "Onboard the anchor buyer. TrustPath handles KYC/AML digitally in under 5 minutes." },
        { number: "02", title: "Invoice upload & validation", desc: "Supplier uploads invoices via portal or API. The system validates against the buyer's ERP or RADIAN automatically." },
        { number: "03", title: "Financing in T+1", desc: "DecisionHub approves in seconds. The supplier receives funds the next business day." },
      ],
      use_cases: [
        { title: "Corporate banks", desc: "Launch an SCF program for your anchor buyer clients without building technology from scratch. Days to market." },
        { title: "Factoring fintechs", desc: "Scale your operation with a white-label platform ready for production with compliance built in." },
        { title: "Corporate buyers", desc: "Offer your suppliers access to financing as a strategic benefit of the commercial relationship." },
      ],
    },
  },
  {
    slug: "confirming",
    category: "financing",
    color: "blue",
    tech_specs: ["REST API + Webhooks", "ERP Integration", "Bulk Upload CSV/XML", "SLA 99.9%", "Multi-currency", "Audit Trail"],
    es: {
      name: "Confirming",
      tagline: "Reverse factoring de clase mundial para el mercado LATAM",
      description: "El comprador confirma el pago de facturas a futuro, y el proveedor puede adelantar el cobro inmediatamente a una tasa competitiva. Colibird orquesta el proceso completo: validación, financiamiento y liquidación.",
      badge: "Confirming",
      features: [
        { title: "Pago garantizado", desc: "El banco o fintech financia basado en la solvencia del comprador, no del proveedor. Tasas más bajas, mayor volumen." },
        { title: "Portal para proveedores", desc: "Interfaz intuitiva para que proveedores consulten facturas confirmadas y soliciten el adelanto con un click." },
        { title: "Integración ERP", desc: "Conexión nativa con SAP, Oracle y sistemas contables locales para automatizar la confirmación de facturas." },
        { title: "Liquidación automática", desc: "El proceso de liquidación es automático: los fondos llegan al proveedor sin intervención manual." },
      ],
      steps: [
        { number: "01", title: "El comprador confirma", desc: "El comprador revisa y confirma el pago de facturas pendientes en el sistema. Esto activa la elegibilidad para financiamiento." },
        { number: "02", title: "El proveedor solicita el adelanto", desc: "El proveedor accede al portal y con un click solicita el pago anticipado de las facturas confirmadas." },
        { number: "03", title: "Liquidación inmediata", desc: "El banco financia y el proveedor recibe los fondos. Al vencimiento, el comprador paga directamente al banco." },
      ],
      use_cases: [
        { title: "Bancos con grandes corporativos", desc: "Ofrecé Confirming como producto diferenciador para retener y atraer empresas compradoras de gran volumen." },
        { title: "Tesorería corporativa", desc: "Optimizá el capital de trabajo del comprador extendiendo plazos sin castigar a los proveedores." },
        { title: "Fintechs de pagos B2B", desc: "Agregá Confirming a tu suite de pagos como módulo plug-and-play sin construir la lógica financiera." },
      ],
    },
    en: {
      name: "Confirming",
      tagline: "World-class reverse factoring for the LATAM market",
      description: "The buyer confirms future invoice payments, and the supplier can collect immediately at a competitive rate. Colibird orchestrates the complete process: validation, financing and settlement.",
      badge: "Confirming",
      features: [
        { title: "Guaranteed payment", desc: "The bank or fintech finances based on the buyer's creditworthiness, not the supplier's. Lower rates, higher volume." },
        { title: "Supplier portal", desc: "Intuitive interface for suppliers to check confirmed invoices and request early payment with one click." },
        { title: "ERP integration", desc: "Native connection with SAP, Oracle and local accounting systems to automate invoice confirmation." },
        { title: "Automatic settlement", desc: "The settlement process is automatic: funds reach the supplier without manual intervention." },
      ],
      steps: [
        { number: "01", title: "Buyer confirms", desc: "The buyer reviews and confirms pending invoice payments in the system. This activates financing eligibility." },
        { number: "02", title: "Supplier requests advance", desc: "The supplier accesses the portal and with one click requests early payment of confirmed invoices." },
        { number: "03", title: "Immediate settlement", desc: "The bank finances and the supplier receives funds. At maturity, the buyer pays directly to the bank." },
      ],
      use_cases: [
        { title: "Banks with large corporates", desc: "Offer Confirming as a differentiating product to retain and attract high-volume buyer companies." },
        { title: "Corporate treasury", desc: "Optimize the buyer's working capital by extending payment terms without penalizing suppliers." },
        { title: "B2B payment fintechs", desc: "Add Confirming to your payment suite as a plug-and-play module without building the financial logic." },
      ],
    },
  },
  {
    slug: "echeqs",
    category: "financing",
    color: "teal",
    tech_specs: ["COELSA Integration", "ECHEQ API", "Real-time Validation", "Argentina Compliant", "SLA 99.9%", "Audit Trail"],
    es: {
      name: "eCheqs",
      tagline: "Descuento digital de cheques electrónicos con integración bancaria nativa",
      description: "Plataforma especializada para el descuento de cheques electrónicos en Argentina. Integración directa con la red bancaria y COELSA para validación, endoso y liquidación en tiempo real.",
      badge: "Argentina",
      features: [
        { title: "Integración COELSA nativa", desc: "Validación en tiempo real contra el sistema de cheques electrónicos a través de COELSA, la cámara compensadora del sistema bancario argentino." },
        { title: "Endoso digital", desc: "Proceso de endoso 100% digital y trazable. Sin papeles, sin errores manuales, con firma electrónica avanzada." },
        { title: "Liquidación T+0 / T+1", desc: "Motor de liquidación optimizado para acreditar fondos al descontatario el mismo día o el día siguiente." },
        { title: "Risk scoring automático", desc: "Scoring del librador, historial de rechazo y semáforos de riesgo integrados con DecisionHub." },
      ],
      steps: [
        { number: "01", title: "Recepción del eCheq", desc: "El descontatario sube el cheque electrónico o llega vía integración con el sistema bancario del banco." },
        { number: "02", title: "Validación automática", desc: "Colibird valida fondos, vigencia y estado del librador contra BCRA en segundos. El risk engine emite el semáforo." },
        { number: "03", title: "Acreditación de fondos", desc: "Aprobado el descuento, los fondos se acreditan al descontatario y el banco retiene el cheque hasta su vencimiento." },
      ],
      use_cases: [
        { title: "Bancos y entidades financieras", desc: "Digitalizá y automatizá tu mesa de descuento de eCheqs con cumplimiento BCRA automático." },
        { title: "Fintechs de financiamiento PyME", desc: "Ofrecé descuento de cheques como producto core con integración bancaria sin construirla desde cero." },
        { title: "Empresas con flujos de cobro", desc: "Monetizá eCheqs recibidos de clientes anticipando la liquidez antes del vencimiento." },
      ],
    },
    en: {
      name: "eCheqs",
      tagline: "Digital electronic check discounting with native bank integration",
      description: "Specialized platform for electronic check discounting in Argentina. Direct integration with the banking network and COELSA for real-time validation, endorsement and settlement.",
      badge: "Argentina",
      features: [
        { title: "Native COELSA integration", desc: "Real-time validation against Argentina's electronic check system through COELSA, the Argentine banking clearing house." },
        { title: "Digital endorsement", desc: "100% digital and traceable endorsement process. No paper, no manual errors, with advanced electronic signature." },
        { title: "T+0 / T+1 settlement", desc: "Optimized settlement engine to credit funds to the discountee same day or next day." },
        { title: "Automatic risk scoring", desc: "Drawer scoring, rejection history and risk traffic lights integrated with DecisionHub." },
      ],
      steps: [
        { number: "01", title: "eCheq receipt", desc: "The discountee uploads the electronic check or it arrives via integration with the bank's core system." },
        { number: "02", title: "Automatic validation", desc: "Colibird validates funds, validity and drawer status against BCRA in seconds. The risk engine issues the traffic light." },
        { number: "03", title: "Fund crediting", desc: "Once the discount is approved, funds are credited to the discountee and the bank holds the check until maturity." },
      ],
      use_cases: [
        { title: "Banks and financial entities", desc: "Digitize and automate your eCheq discount desk with automatic BCRA compliance." },
        { title: "SME financing fintechs", desc: "Offer check discounting as a core product with bank integration without building it from scratch." },
        { title: "Companies with collection flows", desc: "Monetize eCheqs received from clients by anticipating liquidity before maturity." },
      ],
    },
  },
  {
    slug: "opp-card",
    category: "financing",
    color: "pink",
    tech_specs: ["BCRA / ARCA Compliance", "Coelsa Integration", "CBU/CVU + Wallets", "API REST + Webhooks", "OpenAPI 3.0", "SLA 99.9%", "AES-256 + TLS 1.3", "MFA + RBAC"],
    es: {
      name: "OPP + Cupones de Tarjeta",
      tagline: "Transformá los cupones de tarjeta pendientes en liquidez inmediata o instrumentos de pago transferibles",
      description: "Plataforma que convierte los cupones de tarjeta pendientes de liquidación en instrumentos financieros operables al instante. El adquirente lanza dos mecanismos complementarios para sus merchants: OPP (Órdenes de Pago Posdatado) transferibles entre terceros, y Descuento de Cupones con anticipo inmediato de fondos — sin esperar los 5 a 15 días hábiles de acreditación natural.",
      badge: "Adquirentes",
      features: [
        { title: "Emisión de OPP transferibles", desc: "El merchant emite órdenes de pago respaldadas por sus cupones pendientes a favor de proveedores o terceros. El receptor puede cobrar al vencimiento, re-endosar la OPP o solicitar un anticipo inmediato." },
        { title: "Descuento de Cupones", desc: "El merchant o el receptor de una OPP solicita liquidez inmediata cediendo el derecho de cobro a un financiador. Desembolso en CBU/CVU o billetera digital en tiempo real, 24/7." },
        { title: "Motor de Riesgo y Reglas", desc: "Evaluación de elegibilidad en tiempo real: scoring, límites por operación, concentración por marca de tarjeta y validaciones antifraude configurables por el operador adquirente." },
        { title: "Trazabilidad y Liquidación Automática", desc: "Ciclo de vida completo auditado: Emitida → Aceptada → Endosada → Descontada → Pagada. Liquidación automática al vencimiento vía Coelsa, Prisma y redes de billeteras digitales." },
      ],
      steps: [
        { number: "01", title: "Integración con el core adquirente", desc: "Colibird ingesta los cupones pendientes del merchant vía API o batch. El saldo disponible se calcula en tiempo real: monto libre, comprometido en OPP y ya descontado." },
        { number: "02", title: "Emisión de OPP o solicitud de anticipo", desc: "El merchant emite una OPP a su proveedor o solicita el descuento directo de sus cupones. El receptor puede aceptar, re-endosar a un tercero o descontar la OPP con un click." },
        { number: "03", title: "Liquidación automática al vencimiento", desc: "El sistema detecta el vencimiento, verifica los fondos en el core adquirente y acredita automáticamente al titular actual. Los anticipos se desembolsan en tiempo real vía transferencia o billetera." },
      ],
      use_cases: [
        { title: "Adquirentes que financian a sus merchants", desc: "El adquirente lanza el producto como servicio para sus 350K+ merchants. Nueva línea de ingresos por fees y spread sin asumir riesgo crediticio propio." },
        { title: "Merchants que pagan a proveedores", desc: "El comercio usa sus cupones futuros como medio de pago: emite una OPP a su proveedor sin esperar los 5 a 15 días hábiles de acreditación natural." },
        { title: "Proveedores y receptores de OPP", desc: "El receptor puede esperar el vencimiento, re-endosar la OPP a otro tercero o adelantar el cobro inmediatamente con una sola solicitud de descuento." },
      ],
    },
    en: {
      name: "OPP + Card Receivables",
      tagline: "Turn pending card receivables into immediate liquidity or transferable payment instruments",
      description: "Platform that converts pending card receivables into instantly operable financial instruments. The acquirer launches two complementary mechanisms for their merchants: OPP (Post-dated Payment Orders) transferable to third parties, and Card Receivables Discount with immediate fund advance — without waiting 5 to 15 business days for natural settlement.",
      badge: "Acquirers",
      features: [
        { title: "Transferable OPP Issuance", desc: "Merchant issues payment orders backed by pending receivables to suppliers or third parties. The recipient can collect at maturity, re-endorse the OPP, or request immediate advance." },
        { title: "Card Receivables Discount", desc: "Merchant or OPP recipient requests immediate liquidity by assigning collection rights to a financier. Disbursement to CBU/CVU or digital wallet in real time, 24/7." },
        { title: "Risk & Rules Engine", desc: "Real-time eligibility evaluation: scoring, per-operation limits, card brand concentration controls and anti-fraud validations configurable by the acquirer operator." },
        { title: "Traceability & Automatic Settlement", desc: "Full audited lifecycle: Issued → Accepted → Endorsed → Discounted → Paid. Automatic settlement at maturity via Coelsa, Prisma and digital wallet networks." },
      ],
      steps: [
        { number: "01", title: "Acquirer core integration", desc: "Colibird ingests merchant pending receivables via API or batch. Available balance is calculated in real time: free, committed in OPPs and already discounted." },
        { number: "02", title: "OPP issuance or advance request", desc: "Merchant issues an OPP to their supplier or requests direct discount of their receivables. The recipient can accept, re-endorse to a third party, or discount the OPP with one click." },
        { number: "03", title: "Automatic settlement at maturity", desc: "The system detects maturity, verifies funds in the acquirer core and automatically credits the current holder. Advances are disbursed in real time via bank transfer or digital wallet." },
      ],
      use_cases: [
        { title: "Acquirers financing their merchants", desc: "The acquirer launches the product as a service for their 350K+ merchants. New revenue stream from fees and spread without taking on own credit risk." },
        { title: "Merchants paying suppliers", desc: "The merchant uses future receivables as payment: issues an OPP to their supplier without waiting 5-15 business days for natural settlement." },
        { title: "Suppliers and OPP recipients", desc: "The recipient can wait for maturity, re-endorse the OPP to another third party, or advance collection immediately with a single discount request." },
      ],
    },
  },
  {
    slug: "click-to-pay",
    category: "payments",
    color: "orange",
    tech_specs: ["Embedded SDK", "WebView / iFrame", "PCI-DSS", "3DS2 Support", "Multi-currency", "Instant Settlement"],
    es: {
      name: "Click to Pay B2B",
      tagline: "Experiencia de pago B2B embebida para cerrar transacciones al instante",
      description: "SDK embebible que permite a plataformas B2B, marketplaces y ERPs integrar una experiencia de pago completa en su flujo sin redirigir al usuario. Checkout B2B con facturación, aprobación y liquidación integradas.",
      badge: "Embedded",
      features: [
        { title: "SDK embebible", desc: "Integrá el checkout B2B en tu plataforma en horas. WebView, iFrame o componente nativo según tu stack." },
        { title: "Flujo de aprobación", desc: "Motor de aprobación configurable: simple, dual control o multinivel según los requisitos del comprador corporativo." },
        { title: "Facturación automática", desc: "Generación automática de facturas electrónicas al completar el pago, integrada con e-Invoicing de Colibird." },
        { title: "Métodos múltiples", desc: "Transferencia bancaria, débito automático, cheque electrónico y tarjetas corporativas en un solo flujo." },
      ],
      steps: [
        { number: "01", title: "Integrá el SDK", desc: "Embebí el componente Click to Pay en tu plataforma con pocas líneas de código. Sandbox disponible de inmediato." },
        { number: "02", title: "El comprador paga", desc: "El comprador completa el pago dentro de tu plataforma sin salir. El flujo de aprobación se ejecuta en segundos." },
        { number: "03", title: "Confirmación y facturación", desc: "El vendedor recibe confirmación instantánea y la factura electrónica se genera y envía automáticamente." },
      ],
      use_cases: [
        { title: "Marketplaces B2B", desc: "Cerrá transacciones de alto valor dentro de tu plataforma con un checkout nativo y confiable." },
        { title: "ERPs y plataformas de compras", desc: "Eliminá la fricción del proceso de pago corporativo con un flujo embebido y configurable." },
        { title: "Plataformas de supply chain", desc: "Integrá pago y financiamiento en el mismo flujo: el comprador paga o solicita SCF en un click." },
      ],
    },
    en: {
      name: "Click to Pay B2B",
      tagline: "Embedded B2B payment experience to close transactions instantly",
      description: "Embeddable SDK that allows B2B platforms, marketplaces and ERPs to integrate a complete payment experience in their flow without redirecting the user. B2B checkout with billing, approval and settlement integrated.",
      badge: "Embedded",
      features: [
        { title: "Embeddable SDK", desc: "Integrate the B2B checkout into your platform in hours. WebView, iFrame or native component depending on your stack." },
        { title: "Approval workflow", desc: "Configurable approval engine: simple, dual control or multi-level per corporate buyer requirements." },
        { title: "Automatic invoicing", desc: "Automatic electronic invoice generation upon payment completion, integrated with Colibird's e-Invoicing." },
        { title: "Multiple methods", desc: "Bank transfer, direct debit, electronic check and corporate cards in a single flow." },
      ],
      steps: [
        { number: "01", title: "Integrate the SDK", desc: "Embed the Click to Pay component in your platform with a few lines of code. Sandbox available immediately." },
        { number: "02", title: "Buyer pays", desc: "The buyer completes the payment within your platform without leaving. The approval flow executes in seconds." },
        { number: "03", title: "Confirmation & invoicing", desc: "The seller receives instant confirmation and the electronic invoice is generated and sent automatically." },
      ],
      use_cases: [
        { title: "B2B marketplaces", desc: "Close high-value transactions within your platform with a native, trusted checkout." },
        { title: "ERPs and procurement platforms", desc: "Eliminate friction in the corporate payment process with an embedded, configurable flow." },
        { title: "Supply chain platforms", desc: "Integrate payment and financing in the same flow: the buyer pays or requests SCF in one click." },
      ],
    },
  },
  {
    slug: "gateway-b2b",
    category: "payments",
    color: "green",
    tech_specs: ["REST API", "ISO 20022", "Multi-rail", "PSP (Argentina)", "PCI-DSS Level 1", "Failover automático", "SLA 99.95%"],
    es: {
      name: "Gateway de Pagos B2B",
      tagline: "Infraestructura de pagos de alto volumen para el mercado empresarial",
      description: "Gateway especializado en transacciones de alto valor B2B con soporte para múltiples rieles de pago: transferencias bancarias, ACH, SPEI, PSE y redes locales. Compliance, reconciliación y reporting integrados.",
      badge: "Gateway",
      features: [
        { title: "Multi-riel de pago", desc: "Soporte nativo para ACH, SPEI (México), PSE (Colombia), transferencias interbancarias y redes locales LATAM." },
        { title: "Routing inteligente", desc: "Motor de routing que selecciona automáticamente el riel más rápido y económico para cada transacción." },
        { title: "Reconciliación automática", desc: "Conciliación en tiempo real de todas las transacciones contra los extractos bancarios. Diferencias detectadas al instante." },
        { title: "Reporting y analytics", desc: "Dashboard con métricas en tiempo real: volumen, tasas de éxito, latencia por riel y alertas configurables." },
      ],
      steps: [
        { number: "01", title: "Conectá tu plataforma", desc: "Integrá el Gateway vía REST API o SDK. Acceso al sandbox con datos de prueba disponible en minutos." },
        { number: "02", title: "Procesá transacciones", desc: "El Gateway enruta cada pago al riel óptimo, gestiona reintentos y confirma el resultado en tiempo real." },
        { number: "03", title: "Reconciliá y reportá", desc: "El módulo de reconciliación cruza automáticamente cada transacción. Los reportes están disponibles vía API o portal." },
      ],
      use_cases: [
        { title: "Plataformas de pagos B2B", desc: "Construí tu plataforma de pagos empresariales sobre un gateway robusto sin gestionar múltiples integraciones bancarias." },
        { title: "Empresas con alto volumen de pagos", desc: "Centralizá todos tus pagos a proveedores, nómina y servicios en un único sistema con reconciliación automática." },
        { title: "Fintechs de treasury management", desc: "Ofrecé gestión de pagos como servicio sobre la infraestructura de Colibird con SLA enterprise garantizado." },
      ],
    },
    en: {
      name: "B2B Payment Gateway",
      tagline: "High-volume payment infrastructure for the enterprise market",
      description: "Gateway specialized in high-value B2B transactions with support for multiple payment rails: bank transfers, ACH, SPEI, PSE and local networks. Compliance, reconciliation and reporting integrated.",
      badge: "Gateway",
      features: [
        { title: "Multi-rail payments", desc: "Native support for ACH, SPEI (Mexico), PSE (Colombia), interbank transfers and local LATAM networks." },
        { title: "Smart routing", desc: "Routing engine that automatically selects the fastest and most cost-effective rail for each transaction." },
        { title: "Automatic reconciliation", desc: "Real-time reconciliation of all transactions against bank statements. Discrepancies detected instantly." },
        { title: "Reporting & analytics", desc: "Dashboard with real-time metrics: volume, success rates, latency per rail and configurable alerts." },
      ],
      steps: [
        { number: "01", title: "Connect your platform", desc: "Integrate the Gateway via REST API or SDK. Sandbox access with test data available in minutes." },
        { number: "02", title: "Process transactions", desc: "The Gateway routes each payment to the optimal rail, manages retries and confirms the result in real time." },
        { number: "03", title: "Reconcile & report", desc: "The reconciliation module automatically matches each transaction. Reports are available via API or portal." },
      ],
      use_cases: [
        { title: "B2B payment platforms", desc: "Build your enterprise payment platform on a robust gateway without managing multiple bank integrations." },
        { title: "High-volume payment companies", desc: "Centralize all your supplier, payroll and services payments in a single system with automatic reconciliation." },
        { title: "Treasury management fintechs", desc: "Offer payments as a service on Colibird's infrastructure with guaranteed enterprise SLA." },
      ],
    },
  },
  {
    slug: "radian",
    category: "compliance",
    color: "purple",
    tech_specs: ["DIAN API Integration", "CUFE Validation", "XML UBL 2.1", "Colombia Compliant", "Real-time Events", "WebSocket"],
    es: {
      name: "RADIAN Colombia",
      tagline: "Integración nativa con el ecosistema de facturación electrónica de Colombia",
      description: "Módulo especializado para conectar operaciones financieras con RADIAN, el sistema de la DIAN para la circulación y negociación de facturas electrónicas. Habilitá SCF y factoring sobre facturas RADIAN de forma legal y trazable.",
      badge: "Colombia",
      features: [
        { title: "Validación CUFE en tiempo real", desc: "Validación instantánea del Código Único de Factura Electrónica contra los registros de la DIAN vía API oficial." },
        { title: "Endoso electrónico RADIAN", desc: "Habilitación del endoso de facturas en RADIAN para transferir derechos económicos al financiador de forma legal." },
        { title: "Eventos de circulación", desc: "Monitoreo en tiempo real de todos los eventos RADIAN: aceptación, rechazo, endoso, pago y prelación de crédito." },
        { title: "Trazabilidad completa", desc: "Historial completo de cada factura: desde su emisión hasta la liquidación final, con evidencia legal en cada paso." },
      ],
      steps: [
        { number: "01", title: "Conectá con RADIAN", desc: "Colibird gestiona toda la integración técnica con la API de la DIAN. Tu equipo solo consume el API de Colibird." },
        { number: "02", title: "Validá y habilitá facturas", desc: "Validación automática del CUFE y habilitación del endoso para las facturas elegibles para financiamiento." },
        { number: "03", title: "Operá con respaldo legal", desc: "Cada operación de SCF o factoring sobre facturas RADIAN tiene evidencia legal completa y trazabilidad DIAN." },
      ],
      use_cases: [
        { title: "Bancos y factoring en Colombia", desc: "Ofrecé financiamiento sobre facturas electrónicas RADIAN con integración legal completa sin construirla vos." },
        { title: "Fintechs de SCF en Colombia", desc: "Operá programas SCF sobre la factura electrónica colombiana con pleno cumplimiento de la regulación DIAN." },
        { title: "Compradores corporativos", desc: "Habilitá a tus proveedores para que circulen sus facturas RADIAN y accedan a financiamiento anticipado." },
      ],
    },
    en: {
      name: "RADIAN Colombia",
      tagline: "Native integration with Colombia's electronic invoicing ecosystem",
      description: "Specialized module to connect financial operations with RADIAN, DIAN's system for the circulation and trading of electronic invoices. Enable SCF and factoring on RADIAN invoices legally and traceably.",
      badge: "Colombia",
      features: [
        { title: "Real-time CUFE validation", desc: "Instant validation of the Unique Electronic Invoice Code against DIAN records via official API." },
        { title: "RADIAN electronic endorsement", desc: "Enabling invoice endorsement in RADIAN to legally transfer economic rights to the financier." },
        { title: "Circulation events", desc: "Real-time monitoring of all RADIAN events: acceptance, rejection, endorsement, payment and credit priority." },
        { title: "Complete traceability", desc: "Full history of each invoice: from issuance to final settlement, with legal evidence at each step." },
      ],
      steps: [
        { number: "01", title: "Connect with RADIAN", desc: "Colibird manages all technical integration with the DIAN API. Your team only consumes Colibird's API." },
        { number: "02", title: "Validate & enable invoices", desc: "Automatic CUFE validation and endorsement enablement for invoices eligible for financing." },
        { number: "03", title: "Operate with legal backing", desc: "Each SCF or factoring operation on RADIAN invoices has complete legal evidence and DIAN traceability." },
      ],
      use_cases: [
        { title: "Banks and factoring in Colombia", desc: "Offer financing on RADIAN electronic invoices with complete legal integration without building it yourself." },
        { title: "SCF fintechs in Colombia", desc: "Operate SCF programs on Colombian electronic invoices with full DIAN regulatory compliance." },
        { title: "Corporate buyers", desc: "Enable your suppliers to circulate their RADIAN invoices and access early financing." },
      ],
    },
  },
  {
    slug: "e-invoicing",
    category: "compliance",
    color: "teal",
    tech_specs: ["DIAN / ARCA / SAT / SII", "XML UBL 2.1", "Multi-País", "Real-time Validation", "Archiving 10 años", "API REST"],
    es: {
      name: "e-Invoicing",
      tagline: "Facturación electrónica multi-país para toda LATAM desde una sola API",
      description: "Capa de integración que unifica la conexión con los sistemas de facturación electrónica de cada país LATAM: DIAN (Colombia), ARCA (Argentina), SAT (México), SII (Chile) y más. Una API, múltiples países.",
      badge: "Multi-País",
      features: [
        { title: "Multi-país unificado", desc: "Una sola integración API que abstrae la complejidad de cada autoridad tributaria. Agregá países sin cambiar tu código." },
        { title: "Validación en tiempo real", desc: "Cada factura se valida instantáneamente contra el ente tributario correspondiente antes de emitirse." },
        { title: "Archivo a 10 años", desc: "Almacenamiento seguro y recuperable de todas las facturas emitidas según los requisitos legales de cada país." },
        { title: "Eventos de estado", desc: "Webhooks en tiempo real para cada cambio de estado: emitida, aceptada, rechazada, cancelada." },
      ],
      steps: [
        { number: "01", title: "Conectá una vez", desc: "Integrá la API de e-Invoicing de Colibird una sola vez. Toda la complejidad fiscal de cada país queda abstraída." },
        { number: "02", title: "Emitís en cualquier país", desc: "Con el mismo payload JSON emitís facturas electrónicas válidas en Colombia, Argentina, México, Chile y más." },
        { number: "03", title: "Gestioná el ciclo completo", desc: "Seguimiento de estados, notas de crédito, cancelaciones y reportes fiscales, todo desde la misma API." },
      ],
      use_cases: [
        { title: "Empresas con operaciones multi-país", desc: "Centralizá toda tu facturación electrónica LATAM en una sola integración sin multiplicar complejidad por país." },
        { title: "ERPs y plataformas contables", desc: "Agregá e-Invoicing LATAM como módulo a tu solución contable con una sola integración API." },
        { title: "Plataformas de SCF y factoring", desc: "Garantizá la validez legal de las facturas que financiás con validación tributaria en tiempo real." },
      ],
    },
    en: {
      name: "e-Invoicing",
      tagline: "Multi-country electronic invoicing for all of LATAM from a single API",
      description: "Integration layer that unifies the connection with each LATAM country's e-invoicing systems: DIAN (Colombia), ARCA (Argentina), SAT (Mexico), SII (Chile) and more. One API, multiple countries.",
      badge: "Multi-Country",
      features: [
        { title: "Unified multi-country", desc: "A single API integration that abstracts the complexity of each tax authority. Add countries without changing your code." },
        { title: "Real-time validation", desc: "Each invoice is instantly validated against the corresponding tax authority before issuance." },
        { title: "10-year archive", desc: "Secure and recoverable storage of all issued invoices per the legal requirements of each country." },
        { title: "Status events", desc: "Real-time webhooks for each status change: issued, accepted, rejected, cancelled." },
      ],
      steps: [
        { number: "01", title: "Connect once", desc: "Integrate Colibird's e-Invoicing API once. All the fiscal complexity of each country is abstracted away." },
        { number: "02", title: "Issue in any country", desc: "With the same JSON payload, issue valid electronic invoices in Colombia, Argentina, Mexico, Chile and more." },
        { number: "03", title: "Manage the full cycle", desc: "Status tracking, credit notes, cancellations and tax reports, all from the same API." },
      ],
      use_cases: [
        { title: "Multi-country companies", desc: "Centralize all your LATAM electronic invoicing in a single integration without multiplying complexity per country." },
        { title: "ERPs and accounting platforms", desc: "Add LATAM e-Invoicing as a module to your accounting solution with a single API integration." },
        { title: "SCF and factoring platforms", desc: "Guarantee the legal validity of financed invoices with real-time tax validation." },
      ],
    },
  },
  {
    slug: "decisionhub",
    category: "infrastructure",
    color: "purple",
    tech_specs: ["Real-time Scoring", "Configurable Rules", "ML Models", "Explainability API", "Audit Log", "SLA < 100ms"],
    es: {
      name: "DecisionHub · Risk Engine",
      tagline: "Motor de riesgo en tiempo real para decisiones financieras con IA",
      description: "Motor de decisión configurable que combina reglas de negocio, scoring crediticio y modelos de ML para aprobar o rechazar operaciones en milisegundos. Semáforos de riesgo, alertas y explicabilidad incluida.",
      badge: "IA",
      features: [
        { title: "Decisiones en < 100ms", desc: "El motor evalúa cada solicitud en menos de 100 milisegundos. Sin cuellos de botella, sin aprobaciones manuales para casos claros." },
        { title: "Reglas configurables sin código", desc: "Editor visual de reglas de negocio. Los equipos de riesgo configuran límites, excepciones y semáforos sin programar." },
        { title: "Modelos de ML propios", desc: "Modelos de scoring entrenados sobre datos de LATAM. Ajustables por segmento, producto y perfil del cliente." },
        { title: "Explicabilidad total", desc: "Cada decisión incluye los factores que la determinaron. Auditoría completa y trazabilidad para reguladores." },
      ],
      steps: [
        { number: "01", title: "Configurá tus reglas", desc: "El equipo de riesgo define reglas, límites y semáforos en el editor visual. Sin código, sin IT para cambios simples." },
        { number: "02", title: "El motor evalúa", desc: "Cada solicitud llega al motor vía API. En menos de 100ms emite: Aprobado / Revisar / Rechazado + factores." },
        { number: "03", title: "Auditá y mejorá", desc: "Dashboard con todas las decisiones, tasas de aprobación y alertas. Ajustá modelos con feedback real." },
      ],
      use_cases: [
        { title: "Programas de SCF y factoring", desc: "Automatizá la aprobación de facturas y operaciones con reglas de riesgo específicas por producto." },
        { title: "Onboarding de proveedores", desc: "Evaluá nuevos proveedores en segundos con scoring automático antes de incorporarlos a un programa." },
        { title: "Prevención de fraude", desc: "Detectá operaciones anómalas y patrones de fraude en tiempo real con modelos ML específicos para LATAM." },
      ],
    },
    en: {
      name: "DecisionHub · Risk Engine",
      tagline: "Real-time risk engine for AI-powered financial decisions",
      description: "Configurable decision engine that combines business rules, credit scoring and ML models to approve or reject operations in milliseconds. Risk traffic lights, alerts and explainability included.",
      badge: "AI",
      features: [
        { title: "Decisions in < 100ms", desc: "The engine evaluates each request in under 100 milliseconds. No bottlenecks, no manual approvals for clear cases." },
        { title: "No-code configurable rules", desc: "Visual business rules editor. Risk teams configure limits, exceptions and traffic lights without programming." },
        { title: "Proprietary ML models", desc: "Scoring models trained on LATAM data. Adjustable by segment, product and customer profile." },
        { title: "Full explainability", desc: "Every decision includes the factors that determined it. Complete audit trail and traceability for regulators." },
      ],
      steps: [
        { number: "01", title: "Configure your rules", desc: "The risk team defines rules, limits and traffic lights in the visual editor. No code, no IT for simple changes." },
        { number: "02", title: "Engine evaluates", desc: "Each request arrives at the engine via API. In under 100ms it issues: Approved / Review / Rejected + factors." },
        { number: "03", title: "Audit & improve", desc: "Dashboard with all decisions, approval rates and alerts. Adjust models with real feedback." },
      ],
      use_cases: [
        { title: "SCF and factoring programs", desc: "Automate invoice and operation approvals with risk rules specific to each product." },
        { title: "Supplier onboarding", desc: "Evaluate new suppliers in seconds with automatic scoring before enrolling them in a program." },
        { title: "Fraud prevention", desc: "Detect anomalous operations and fraud patterns in real time with ML models specific to LATAM." },
      ],
    },
  },
  {
    slug: "trustpath",
    category: "infrastructure",
    color: "blue",
    tech_specs: ["OCR + Biometrics", "Liveness Detection", "AML Screening", "KYB/KYC", "Configurable Workflows", "< 5 min"],
    es: {
      name: "TrustPath · Onboarding",
      tagline: "KYC/AML digital: onboarding de empresas en menos de 5 minutos",
      description: "Motor de onboarding digital que automatiza la verificación de identidad, validación documental y screening AML para personas y empresas. Configurable para cada segmento y regulación local.",
      badge: "5 min",
      features: [
        { title: "Verificación de identidad", desc: "OCR de documentos de identidad, prueba de vida (liveness detection) y biometría facial en tiempo real." },
        { title: "Validación de empresas (KYB)", desc: "Validación automática de razón social, representantes legales, accionistas y estructura corporativa." },
        { title: "Screening AML/PEP", desc: "Cruce automático contra listas de sanciones OFAC, ONU, GAFI y bases locales de PEPs y personas de alto riesgo." },
        { title: "Flujos configurables", desc: "Define los pasos requeridos por segmento, producto o regulación. Sin código para ajustar el journey." },
      ],
      steps: [
        { number: "01", title: "El cliente inicia el flujo", desc: "Vía portal web o SDK móvil, el cliente sube documentos y completa el proceso de verificación en su dispositivo." },
        { number: "02", title: "TrustPath verifica automáticamente", desc: "OCR, biometría y screening AML se ejecutan en paralelo. El resultado llega en menos de 60 segundos." },
        { number: "03", title: "Aprobación o revisión manual", desc: "Los casos aprobados avanzan automáticamente. Los casos con alertas van a revisión manual con toda la evidencia." },
      ],
      use_cases: [
        { title: "Programas de SCF y factoring", desc: "Onboardeá compradores y proveedores en minutos con KYC/AML automatizado y compliance regulatorio." },
        { title: "Bancos y entidades financieras", desc: "Digitalizá el proceso de alta de clientes corporativos con verificación en tiempo real y evidencia legal." },
        { title: "Fintechs de pagos B2B", desc: "Incorporá KYB/KYC a tu plataforma como módulo plug-and-play sin construir la infraestructura desde cero." },
      ],
    },
    en: {
      name: "TrustPath · Onboarding",
      tagline: "Digital KYC/AML: business onboarding in under 5 minutes",
      description: "Digital onboarding engine that automates identity verification, document validation and AML screening for individuals and businesses. Configurable per segment and local regulation.",
      badge: "5 min",
      features: [
        { title: "Identity verification", desc: "ID document OCR, liveness detection and facial biometrics in real time." },
        { title: "Business validation (KYB)", desc: "Automatic validation of company name, legal representatives, shareholders and corporate structure." },
        { title: "AML/PEP screening", desc: "Automatic cross-check against OFAC, UN, FATF sanctions lists and local PEP and high-risk databases." },
        { title: "Configurable workflows", desc: "Define required steps per segment, product or regulation. No code needed to adjust the journey." },
      ],
      steps: [
        { number: "01", title: "Client starts the flow", desc: "Via web portal or mobile SDK, the client uploads documents and completes the verification process on their device." },
        { number: "02", title: "TrustPath verifies automatically", desc: "OCR, biometrics and AML screening run in parallel. The result arrives in under 60 seconds." },
        { number: "03", title: "Approval or manual review", desc: "Approved cases advance automatically. Cases with alerts go to manual review with all the evidence." },
      ],
      use_cases: [
        { title: "SCF and factoring programs", desc: "Onboard buyers and suppliers in minutes with automated KYC/AML and regulatory compliance." },
        { title: "Banks and financial entities", desc: "Digitize corporate client onboarding with real-time verification and legal evidence." },
        { title: "B2B payment fintechs", desc: "Add KYB/KYC to your platform as a plug-and-play module without building the infrastructure from scratch." },
      ],
    },
  },
  {
    slug: "api-layer",
    category: "infrastructure",
    color: "teal",
    tech_specs: ["REST + GraphQL", "OpenAPI 3.0", "Webhooks", "SDKs: Python · Node · Java · Go", "OAuth 2.0", "Rate Limiting"],
    es: {
      name: "API Integration Layer",
      tagline: "De cero a producción en días con SDKs multi-lenguaje y sandbox completo",
      description: "Capa de integración API-first que conecta tu plataforma con toda la suite de Colibird: autenticación unificada, SDKs en múltiples lenguajes, webhooks en tiempo real, sandbox completo y documentación interactiva.",
      badge: "API-First",
      features: [
        { title: "SDKs en múltiples lenguajes", desc: "Python, Node.js, Java y Go. Instalación en una línea, documentación completa y ejemplos listos para usar." },
        { title: "Sandbox completo", desc: "Ambiente de pruebas idéntico a producción con datos simulados para todos los módulos de Colibird." },
        { title: "Webhooks en tiempo real", desc: "Notificaciones instantáneas para cada evento: pago confirmado, factura aprobada, onboarding completado." },
        { title: "Autenticación unificada", desc: "OAuth 2.0 con JWT. Un solo token para acceder a todos los módulos de la plataforma de forma segura." },
      ],
      steps: [
        { number: "01", title: "Obtené tus credenciales", desc: "Creá tu cuenta, generá tu API key y accedé al sandbox en menos de 5 minutos. Sin formularios complejos." },
        { number: "02", title: "Instalá el SDK", desc: "npm install colibird / pip install colibird. El SDK incluye tipos, autocompletado y documentación inline." },
        { number: "03", title: "Pasá a producción", desc: "Una vez validado en sandbox, el paso a producción es cambiar el API key. Zero downtime deployment." },
      ],
      use_cases: [
        { title: "Equipos técnicos de bancos", desc: "Integrá Colibird en tu core bancario en días con nuestros SDKs enterprise y soporte técnico dedicado." },
        { title: "Fintechs y startups", desc: "Arrancá con el sandbox, validá tu producto y escalá a producción sin fricción técnica." },
        { title: "Integradores y consultoras", desc: "Documentación completa, ejemplos de código y soporte para llevar a tus clientes a producción rápidamente." },
      ],
    },
    en: {
      name: "API Integration Layer",
      tagline: "From zero to production in days with multi-language SDKs and complete sandbox",
      description: "API-first integration layer that connects your platform with Colibird's full suite: unified authentication, multi-language SDKs, real-time webhooks, complete sandbox and interactive documentation.",
      badge: "API-First",
      features: [
        { title: "Multi-language SDKs", desc: "Python, Node.js, Java and Go. One-line installation, complete documentation and ready-to-use examples." },
        { title: "Complete sandbox", desc: "Testing environment identical to production with simulated data for all Colibird modules." },
        { title: "Real-time webhooks", desc: "Instant notifications for each event: payment confirmed, invoice approved, onboarding completed." },
        { title: "Unified authentication", desc: "OAuth 2.0 with JWT. A single token to securely access all platform modules." },
      ],
      steps: [
        { number: "01", title: "Get your credentials", desc: "Create your account, generate your API key and access the sandbox in under 5 minutes. No complex forms." },
        { number: "02", title: "Install the SDK", desc: "npm install colibird / pip install colibird. The SDK includes types, autocomplete and inline documentation." },
        { number: "03", title: "Go to production", desc: "Once validated in sandbox, going to production means changing the API key. Zero downtime deployment." },
      ],
      use_cases: [
        { title: "Bank technical teams", desc: "Integrate Colibird into your banking core in days with our enterprise SDKs and dedicated technical support." },
        { title: "Fintechs and startups", desc: "Start with the sandbox, validate your product and scale to production without technical friction." },
        { title: "Integrators and consultancies", desc: "Complete documentation, code examples and support to bring your clients to production quickly." },
      ],
    },
  },
  {
    slug: "lmcp",
    category: "infrastructure",
    color: "purple",
    external_url: "https://local-mcp.com/get?ref=colibird",
    tech_specs: [
      "161 MCP Tools",
      "macOS 13+",
      "Claude · ChatGPT · Cursor",
      "100% Local & Private",
      "GDPR by Design",
      "Cloud Relay (opt-in)",
    ],
    es: {
      name: "LMCP",
      tagline: "Tu IA opera Mail, Calendar, Teams y Office en tu Mac — sin API keys ni nube",
      description:
        "LMCP (Local MCP) es el producto de Colibird que conecta Claude, ChatGPT, Cursor y cualquier cliente MCP con las apps de tu Mac. 161 herramientas locales para email, calendario, Teams, Slack, WhatsApp, OneDrive, Office, Notion y más. Tus datos nunca salen de tu dispositivo.",
      badge: "LMCP",
      features: [
        {
          title: "161 herramientas, cero fricción",
          desc: "Mail, Calendar, Contacts, Teams, Slack, WhatsApp, OneDrive, Excel, Word, Notion, iMessage, Safari y más — un solo instalador, sin OAuth ni API keys para tus apps personales.",
        },
        {
          title: "Privacidad por arquitectura",
          desc: "Todo corre en tu Mac. Sin procesamiento cloud de emails, archivos ni mensajes. GDPR y CCPA compliant by design. Cloud Relay opcional y desactivado por defecto.",
        },
        {
          title: "Compatible con todo el ecosistema IA",
          desc: "Claude Desktop, Claude Code, Cursor (modo Agent), VS Code, Windsurf, Zed — vía stdio local. ChatGPT y Claude.ai web vía túnel cifrado opt-in.",
        },
        {
          title: "Instalación en 2 minutos",
          desc: "App de menú bar firmada y notarizada, o un comando en terminal. Auto-configura tus clientes de IA detectados. Gratis, licencia permanente.",
        },
      ],
      steps: [
        {
          number: "01",
          title: "Instalá LMCP",
          desc: "Descargá la app desde local-mcp.com o ejecutá el instalador en terminal. macOS 13+, Apple Silicon e Intel.",
        },
        {
          number: "02",
          title: "Conectá tu asistente de IA",
          desc: "Claude, Cursor o ChatGPT descubren automáticamente las 161 tools. En Cursor: activá local-mcp en Settings → MCP y usá modo Agent.",
        },
        {
          number: "03",
          title: "Pedí en lenguaje natural",
          desc: "\"Resumí mis emails no leídos\", \"¿Qué dijo el canal de engineering en Teams?\", \"Conciliá los cobros de hoy\" — el agente encadena herramientas localmente.",
        },
      ],
      use_cases: [
        {
          title: "Profesionales y ejecutivos",
          desc: "Briefing matutino, triage de inbox, preparación de reuniones y seguimiento de tareas — sin cambiar de app.",
        },
        {
          title: "Equipos de desarrollo",
          desc: "Leé Mail, Teams y OneDrive desde Cursor sin salir del IDE. Ideal para context switching cero.",
        },
        {
          title: "Sectores regulados",
          desc: "Legal, salud y finanzas: datos sensibles que nunca transitan por servidores de terceros.",
        },
      ],
      fin_case: {
        tag: "Banca agéntica",
        headline: "Un servidor MCP para que tus clientes operen tu banca en lenguaje natural",
        sub: "Patrón de adopción para bancos y fintechs con API Banking: publicás tus capacidades una sola vez; cada cliente conecta su propio agente de IA — sin integraciones N×M.",
        problem_title: "El cuello de botella no es la API, es la adopción",
        problem:
          "Muchas entidades ya exponen cuentas, transferencias, pagos y créditos como APIs. Pero cada cliente, fintech o PyME integra servicio por servicio, con equipos de desarrollo que no escalan. Individuos y PyMEs sin capacidad técnica quedan fuera: el costo de integrar supera al beneficio percibido. El modelo N clientes × M APIs crece de forma cuadrática.",
        solution_title: "De N×M integraciones a un servidor MCP",
        solution:
          "Publicás el catálogo bancario una vez como herramientas MCP versionadas. El cliente — persona, PyME o empresa — conecta Claude, ChatGPT o Cursor a tu servidor. Pide en lenguaje natural; el agente traduce a las APIs del core. Onboarding self-service en minutos, sin sandbox propio ni equipo de desarrollo del lado del cliente.",
        security_title: "Seguridad transaccional incorporada",
        security_bullets: [
          "Autenticación fuerte (OAuth2/OIDC) antes de cualquier acción sobre cuentas del cliente.",
          "Doble factor obligatorio en operaciones financieras: transferir, pagar, emitir cheques.",
          "Lectura instantánea; escritura con preview y confirmación explícita antes de ejecutar en el core.",
          "Auditoría completa, permisos granulares y datos que permanecen en la entidad financiera.",
        ],
        journeys_title: "Journeys de ejemplo (sin nombrar clientes)",
        journeys: [
          {
            persona: "Persona · asistente financiero personal",
            prompt: "Pagá mis servicios del mes y avisame si algún consumo subió más de un 20%.",
            steps: [
              "Lee facturas y servicios desde el correo del cliente y las APIs bancarias.",
              "Ejecuta los pagos con confirmación 2FA.",
              "Reporta variaciones respecto a meses anteriores.",
            ],
          },
          {
            persona: "PyME · tesorería automatizada",
            prompt: "Conciliá los cobros de hoy, pagá a proveedores vencidos y colocá el excedente.",
            steps: [
              "Concilia cobros del día contra el ERP o planilla del cliente.",
              "Paga proveedores vencidos en lote con 2FA.",
              "Constituye un plazo fijo o instrumento con el excedente de liquidez.",
            ],
          },
          {
            persona: "Empresa · operación a escala",
            prompt: "Emití los cheques electrónicos de esta planilla y programá las transferencias de sueldos del viernes.",
            steps: [
              "Emite instrumentos de pago desde la planilla del cliente.",
              "Programa transferencias de nómina con fecha de ejecución.",
              "Actualiza posición de inversiones o saldos en el tablero del cliente.",
            ],
          },
        ],
        metrics_title: "Palancas de valor (cifras ilustrativas)",
        metrics: [
          {
            value: "−70–90%",
            label: "Costo de integración",
            desc: "De semanas de desarrollo por socio a alta self-service en minutos.",
          },
          {
            value: "2–3×",
            label: "Adopción de APIs",
            desc: "Más individuos y PyMEs activando servicios sin equipo técnico propio.",
          },
          {
            value: "+15–25%",
            label: "Cross-sell contextual",
            desc: "Oferta en el momento justo dentro de cada interacción del agente.",
          },
          {
            value: "−20–30%",
            label: "Costo de servicio",
            desc: "La automatización conversacional descomprime canales de atención.",
          },
        ],
        framing_note:
          "No es Open Finance ni embedded finance clásico: es banca agéntica — la entidad expone sus propias APIs a los agentes de IA de sus propios clientes vía MCP, sobre canales digitales existentes, con autenticación fuerte y protección de datos personales. El agente puede combinar APIs bancarias con el contexto del cliente (ERP, planillas, correo) con PII enmascarada y datos que permanecen en entornos controlados.",
      },
    },
    en: {
      name: "LMCP",
      tagline: "Your AI operates Mail, Calendar, Teams and Office on your Mac — no API keys, no cloud",
      description:
        "LMCP (Local MCP) is Colibird's product that connects Claude, ChatGPT, Cursor and any MCP client to your Mac apps. 161 local tools for email, calendar, Teams, Slack, WhatsApp, OneDrive, Office, Notion and more. Your data never leaves your device.",
      badge: "LMCP",
      features: [
        {
          title: "161 tools, zero friction",
          desc: "Mail, Calendar, Contacts, Teams, Slack, WhatsApp, OneDrive, Excel, Word, Notion, iMessage, Safari and more — one installer, no OAuth or API keys for your personal apps.",
        },
        {
          title: "Privacy by architecture",
          desc: "Everything runs on your Mac. No cloud processing of emails, files or messages. GDPR and CCPA compliant by design. Optional Cloud Relay, off by default.",
        },
        {
          title: "Works with the full AI ecosystem",
          desc: "Claude Desktop, Claude Code, Cursor (Agent mode), VS Code, Windsurf, Zed — via local stdio. ChatGPT and Claude.ai web via opt-in encrypted tunnel.",
        },
        {
          title: "2-minute setup",
          desc: "Signed, notarized menu bar app or a one-line terminal install. Auto-configures detected AI clients. Free, permanent license.",
        },
      ],
      steps: [
        {
          number: "01",
          title: "Install LMCP",
          desc: "Download from local-mcp.com or run the terminal installer. macOS 13+, Apple Silicon and Intel.",
        },
        {
          number: "02",
          title: "Connect your AI assistant",
          desc: "Claude, Cursor or ChatGPT discover 161 tools automatically. In Cursor: enable local-mcp in Settings → MCP and use Agent mode.",
        },
        {
          number: "03",
          title: "Ask in natural language",
          desc: "\"Summarize my unread emails\", \"What did the engineering channel say in Teams?\", \"Reconcile today's collections\" — the agent chains tools locally.",
        },
      ],
      use_cases: [
        {
          title: "Professionals & executives",
          desc: "Morning briefings, inbox triage, meeting prep and follow-ups — without switching apps.",
        },
        {
          title: "Development teams",
          desc: "Read Mail, Teams and OneDrive from Cursor without leaving the IDE. Zero context switching.",
        },
        {
          title: "Regulated industries",
          desc: "Legal, healthcare and finance: sensitive data that never transits third-party servers.",
        },
      ],
      fin_case: {
        tag: "Agentic banking",
        headline: "One MCP server so your customers operate your bank in natural language",
        sub: "Adoption pattern for banks and fintechs with API Banking: publish capabilities once; each customer connects their own AI agent — no N×M integrations.",
        problem_title: "The bottleneck isn't the API, it's adoption",
        problem:
          "Many institutions already expose accounts, transfers, payments and credit as APIs. But each customer, fintech or SMB integrates service by service with dev teams that don't scale. Individuals and SMBs without technical capacity are left out: integration cost exceeds perceived benefit. The N customers × M APIs model grows quadratically.",
        solution_title: "From N×M integrations to one MCP server",
        solution:
          "Publish your banking catalog once as versioned MCP tools. The customer — individual, SMB or enterprise — connects Claude, ChatGPT or Cursor to your server. They ask in natural language; the agent translates to core APIs. Self-service onboarding in minutes, no sandbox or dev team on the customer side.",
        security_title: "Built-in transactional security",
        security_bullets: [
          "Strong authentication (OAuth2/OIDC) before any action on customer accounts.",
          "Mandatory 2FA on financial operations: transfer, pay, issue instruments.",
          "Instant reads; writes show a preview and require explicit confirmation before core execution.",
          "Full audit trail, granular permissions and data that stays within the financial institution.",
        ],
        journeys_title: "Example journeys (no named institutions)",
        journeys: [
          {
            persona: "Individual · personal finance assistant",
            prompt: "Pay my monthly bills and tell me if any spending increased more than 20%.",
            steps: [
              "Reads bills and services from the customer's email and banking APIs.",
              "Executes payments with 2FA confirmation.",
              "Reports variations vs. previous months.",
            ],
          },
          {
            persona: "SMB · automated treasury",
            prompt: "Reconcile today's collections, pay overdue suppliers and place the excess.",
            steps: [
              "Reconciles today's collections against the customer's ERP or spreadsheet.",
              "Pays overdue suppliers in batch with 2FA.",
              "Places excess liquidity in a term deposit or instrument.",
            ],
          },
          {
            persona: "Enterprise · scale operations",
            prompt: "Issue the electronic checks from this spreadsheet and schedule Friday payroll transfers.",
            steps: [
              "Issues payment instruments from the customer's spreadsheet.",
              "Schedules payroll transfers with execution date.",
              "Updates investment position or balances on the customer's dashboard.",
            ],
          },
        ],
        metrics_title: "Value levers (illustrative figures)",
        metrics: [
          {
            value: "−70–90%",
            label: "Integration cost",
            desc: "From weeks of dev per partner to self-service onboarding in minutes.",
          },
          {
            value: "2–3×",
            label: "API adoption",
            desc: "More individuals and SMBs activating services without their own dev team.",
          },
          {
            value: "+15–25%",
            label: "Contextual cross-sell",
            desc: "Right offer at the right moment within each agent interaction.",
          },
          {
            value: "−20–30%",
            label: "Service cost",
            desc: "Conversational automation relieves support channels.",
          },
        ],
        framing_note:
          "This is not classic Open Finance or embedded finance: it's agentic banking — the institution exposes its own APIs to its own customers' AI agents via MCP, on existing digital channels, with strong authentication and personal data protection. The agent can combine banking APIs with customer context (ERP, spreadsheets, email) with masked PII and data staying in controlled environments.",
      },
    },
  },
  {
    slug: "tax-engine",
    category: "compliance",
    color: "teal",
    tech_specs: [
      "Esquema A–H FCE MiPyME",
      "Sellos + IIBB + SIRCIP",
      "Cálculo manual y lote CSV",
      "Parametría por fondeador",
      "Padrones y legajos impositivos",
      "Export CSV + historial",
    ],
    es: {
      name: "Motor de Impuestos FCE",
      tagline: "Calculá la liquidación A–H de un descuento FCE MiPyME con precisión fiscal",
      description:
        "Motor de cálculo de impuestos de Colibird para descuento de Facturas de Crédito Electrónicas MiPyME. Parametrizá Sellos por fondeador, importá padrones, calculá retenciones, intereses, comisión Colibird e IIBB — manualmente o por lote CSV — y exportá resultados auditables.",
      badge: "Impuestos FCE",
      features: [
        {
          title: "Esquema A–H completo",
          desc: "Desde el monto de la FCE hasta el neto a acreditar: retenciones, interés del fondeador, Sellos, IIBB sobre intereses y comisión, comisión Colibird, percepciones y IVA cuando aplica.",
        },
        {
          title: "Parametría por organización fondeadora",
          desc: "Configurá Anexo A (Sellos), percepciones IIBB sobre intereses, IVA sobre interés y comisión por cada organización fondeadora — con versionado y vigencia.",
        },
        {
          title: "Padrones y legajos impositivos",
          desc: "Importá padrones provinciales por CUIT, gestioná legajos del emisor y aplicá alícuotas reales en ítems G y E del esquema.",
        },
        {
          title: "Manual, lote e historial",
          desc: "Calculá operaciones individuales o hasta 500 filas por CSV. Exportá resultados, conservá historial y corré QA del motor con escenarios de referencia.",
        },
      ],
      steps: [
        {
          number: "01",
          title: "Configurá fondeadores y comisiones",
          desc: "Definí Sellos (24 jurisdicciones), reparto de comisión en bps, Agente Colibird (ítem G) y tablas SIRCIP desde el panel de parametría.",
        },
        {
          number: "02",
          title: "Importá padrones y legajos",
          desc: "Cargá padrones por jurisdicción y asociá legajos impositivos a los CUIT emisores que operan en tu programa de descuento.",
        },
        {
          number: "03",
          title: "Calculá y exportá",
          desc: "Ingresá datos de la operación o subí un CSV. El motor devuelve el desglose A–H listo para liquidación y auditoría fiscal.",
        },
      ],
      use_cases: [
        {
          title: "Mesas de factoring y FCE",
          desc: "Liquidá descuentos con el desglose impositivo correcto por jurisdicción, sin planillas manuales ni errores en Sellos o IIBB.",
        },
        {
          title: "Equipos fiscales de fintechs",
          desc: "Centralizá la parametría impositiva de múltiples organizaciones fondeadoras y validá cada operación contra padrones vigentes.",
        },
        {
          title: "Plataformas Colibird integradas",
          desc: "Complementá SCF, eCheqs y confirming con un motor de impuestos nativo, alineado a la operatoria FCE MiPyME en Argentina.",
        },
      ],
    },
    en: {
      name: "FCE Tax Engine",
      tagline: "Calculate the A–H settlement of an FCE MiPyME discount with fiscal precision",
      description:
        "Colibird's tax calculation engine for Electronic Credit Invoice (FCE MiPyME) discounting. Configure stamps per funder, import tax registries, calculate withholdings, interest, Colibird commission and IIBB — manually or via CSV batch — and export auditable results.",
      badge: "FCE Taxes",
      features: [
        {
          title: "Full A–H schema",
          desc: "From FCE amount to net proceeds: withholdings, funder interest, stamps, IIBB on interest and commission, Colibird commission, perceptions and VAT when applicable.",
        },
        {
          title: "Per-funder configuration",
          desc: "Set Annex A (stamps), IIBB perceptions on interest, VAT on interest and commission for each funding organization — with versioning and effective dates.",
        },
        {
          title: "Registries and tax files",
          desc: "Import provincial registries by CUIT, manage issuer tax files and apply real rates on schema items G and E.",
        },
        {
          title: "Manual, batch and history",
          desc: "Calculate single operations or up to 500 CSV rows. Export results, keep history and run engine QA with reference scenarios.",
        },
      ],
      steps: [
        {
          number: "01",
          title: "Configure funders and fees",
          desc: "Define stamps (24 jurisdictions), commission bps split, Colibird agent (item G) and SIRCIP tables from the settings panel.",
        },
        {
          number: "02",
          title: "Import registries and tax files",
          desc: "Upload registries per jurisdiction and link tax files to issuer CUITs in your discount program.",
        },
        {
          number: "03",
          title: "Calculate and export",
          desc: "Enter operation data or upload a CSV. The engine returns the A–H breakdown ready for settlement and tax audit.",
        },
      ],
      use_cases: [
        {
          title: "Factoring and FCE desks",
          desc: "Settle discounts with the correct tax breakdown per jurisdiction, without manual spreadsheets or stamp/IIBB errors.",
        },
        {
          title: "Fintech tax teams",
          desc: "Centralize tax settings for multiple funding organizations and validate each operation against current registries.",
        },
        {
          title: "Integrated Colibird platforms",
          desc: "Complement SCF, eCheqs and confirming with a native tax engine aligned to FCE MiPyME operations in Argentina.",
        },
      ],
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
