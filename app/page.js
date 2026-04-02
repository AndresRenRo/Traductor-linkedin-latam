"use client";

import { useState } from "react";

const COUNTRIES = [
  { code: "MX", flag: "🇲🇽", name: "México" },
  { code: "AR", flag: "🇦🇷", name: "Argentina" },
  { code: "CL", flag: "🇨🇱", name: "Chile" },
  { code: "CO", flag: "🇨🇴", name: "Colombia" },
];

const SITE_URL = "https://traductor-linkedin-latam.vercel.app";

// LinkedIn version is universal — corporate speak has no nationality
const LINKEDIN_VERSIONS = [
  "Me emociona compartir que estoy iniciando un nuevo capítulo profesional. 🚀 Después de mucha reflexión, decidí buscar un entorno que se alinee mejor con mis valores de autonomía y confianza. Agradecido infinitamente por los aprendizajes. ¡Lo mejor está por venir! #NuevosComienzos #Crecimiento #Liderazgo",
  "A veces el universo tiene planes más grandes para nosotros. 🌟 Hoy cierro un ciclo lleno de aprendizajes y abro la puerta a nuevas oportunidades. Cada final es un nuevo comienzo. ¡Estoy listo para lo que sigue! #OpenToWork #Resiliencia #NuevoCapítulo",
  "¡Primera semana en mi nuevo reto profesional y estoy impresionado! 📈 La curva de aprendizaje es increíble. El síndrome del impostor es real, pero estoy abrazando la incomodidad porque ahí es donde ocurre el crecimiento. Agradecido con este equipo espectacular. #AprendizajeContinuo #Crecimiento",
  "¡Orgulloso de ser parte de un equipo que realmente vive sus valores! 🙌 En [Empresa] no solo hablamos de cultura, la construimos todos los días. Esto es lo que significa pertenecer. #CulturaOrganizacional #Equipo #Orgullo",
  "Nunca pares de invertir en ti mismo. 🧠 Acabo de completar una certificación en [tema] y puedo confirmar que el aprendizaje continuo es el superpoder más subestimado del siglo XXI. #LifelongLearning #DesarrolloProfesional",
  "¡Acabo de regresar de [Conferencia] y mi mente EXPLOTÓ! 🤯 Las conversaciones, la energía, los seres humanos brillantes que conocí… necesito una semana para procesar todo. #Networking #LiderazgoDePensamiento #Inspirado",
  "Hoy quiero celebrar a mi equipo. 🎯 Sin ustedes, nada de esto sería posible. Cada logro es colectivo y cada reto nos hace más fuertes. Esto es lo que pasa cuando trabajas con personas que comparten tu visión. #Equipo #Liderazgo #GratitudProfesional",
  "Hace un año tomé una decisión que muchos no entendieron. 💡 Hoy puedo decir que confiar en el proceso fue la mejor inversión que hice. Los resultados hablan por sí solos. Nunca subestimes el poder de apostar por ti mismo. #Emprendimiento #ConfianzaEnElProceso",
  "Me ofrecieron pizza como reconocimiento al equipo. 🍕 Pero lo que realmente nos motiva es sentir que nuestro esfuerzo es valorado de formas significativas. El verdadero salario emocional está en el reconocimiento auténtico. #CulturaOrganizacional #SalarioEmocional #Liderazgo",
  "Llevo 6 meses dando todo en esta posición y los resultados están llegando. 📊 A veces el crecimiento no es inmediato, pero la constancia siempre paga. Confía en tu proceso. #Paciencia #Crecimiento #ResultadosReales",
  "Tuve una conversación increíble tomando un café con @Persona. ☕ Tu red de contactos es tu mayor activo. Nunca subestimes el poder de una buena conversación. #Networking #Mentoría #ConexionesQueImportan",
  "Acepté un nuevo rol con más responsabilidades. ✨ No porque sea fácil, sino porque los retos son los que nos transforman. Agradecido por la confianza depositada en mí. #NuevoRol #Liderazgo #TransformaciónProfesional",
  "La sinergia entre equipos es donde ocurre la verdadera magia. 🌟 Hoy tuvimos una sesión de alineación estratégica que me recordó por qué amo lo que hago. Cuando todos remamos en la misma dirección, el impacto es exponencial. #Sinergia #TrabajoEnEquipo",
  "No le tengas miedo al cambio. 🔥 Hace 3 meses estaba en un lugar completamente diferente y hoy puedo decir que cada decisión difícil me trajo hasta aquí. Tu zona de confort es tu mayor enemigo. #Cambio #ZonaDeConfort #CrecimientoPersonal",
  "Construir desde la vulnerabilidad es un acto de valentía. 💪 Hoy elijo ser transparente sobre mis procesos porque creo que la autenticidad es el nuevo liderazgo. ¿Quién más se atreve? #LiderazgoAuténtico #Vulnerabilidad #NuevaEra",
];

const REAL_TALK = {
  MX: [
    "Renuncié porque mi jefe es un controlador",
    "Me corrieron",
    "No tengo idea de lo que hago en mi nueva chamba",
    "Mi jefe me obligó a publicar esto",
    "Hice un curso gratis en YouTube",
    "Fui a una conferencia aburrida",
    "Mi equipo está hasta la madre pero hay que aparentar",
    "Dejé un trabajo estable por pura desesperación",
    "Nos dieron pizza en vez de bono",
    "Llevo 6 meses como becario y me dijeron que ya casi me contratan",
    "Tomé un café con alguien que me dejó en visto 3 veces",
    "Me pusieron de team lead sin subirme el sueldo",
    "Tuvimos una junta de 3 horas que pudo ser un correo",
    "Me da miedo admitir que no sé qué estoy haciendo con mi vida",
    "Ando llorando en el baño del trabajo pero aquí andamos",
  ],
  AR: [
    "Renuncié porque mi jefe es un controlador de mierda",
    "Me rajaron",
    "No tengo la más pálida idea de lo que hago en mi nuevo laburo",
    "Mi jefe me obligó a publicar esto, boludo",
    "Hice un curso gratis en YouTube, mirá",
    "Fui a una conferencia re aburrida",
    "Todos en el equipo quieren renunciar pero nadie se anima",
    "Dejé un laburo estable porque estaba re podrido",
    "Nos dieron pizza en vez de bono, qué miseria",
    "Llevo 6 meses de pasante y me siguen boludeando",
    "Tomé un café con uno que me clavó el visto 3 veces",
    "Me hicieron team lead sin subirme un mango",
    "Tuvimos una reunión de 3 horas al pedo",
    "La verdad no tengo la menor idea de qué hago con mi vida",
    "Ando llorando en el baño del laburo pero acá estamos",
  ],
  CL: [
    "Renuncié porque mi jefe es un controlador de mierda",
    "Me echaron",
    "No cacho nada de lo que hago en mi nueva pega",
    "Mi jefe me obligó a publicar esta weá",
    "Hice un curso gratis en YouTube no más po",
    "Fui a una conferencia fome",
    "Todo el equipo está choreado pero hay que aparentar",
    "Dejé una pega estable porque estaba chato",
    "Nos dieron pizza en vez de bono, qué cagada",
    "Llevo 6 meses de practicante y me siguen webeando",
    "Tomé un café con un weón que me dejó en visto 3 veces",
    "Me pusieron de team lead sin subirme la plata",
    "Tuvimos una reunión de 3 horas fome que podía ser un correo",
    "No cacho qué estoy haciendo con mi vida, cachai",
    "Ando llorando en el baño de la pega pero aquí estamos po",
  ],
  CO: [
    "Renuncié porque mi jefe es un controlador, parce",
    "Me sacaron",
    "No tengo ni idea de lo que hago en mi nuevo camello",
    "Mi jefe me obligó a publicar esto, parcero",
    "Hice un curso gratis en YouTube, de una",
    "Fui a una conferencia aburrida, marica",
    "Todo el equipo quiere renunciar pero nadie se atreve",
    "Dejé un camello estable porque estaba mamado",
    "Nos dieron pizza en vez de bono, qué gonorrea",
    "Llevo 6 meses de practicante y me siguen dando largas",
    "Tomé un café con un man que me dejó en visto 3 veces",
    "Me pusieron de team lead sin subirme el sueldo, marica",
    "Tuvimos una reunión de 3 horas que podía ser un correo, parce",
    "No tengo ni idea qué estoy haciendo con mi vida, la verdad",
    "Ando llorando en el baño del camello pero aquí seguimos",
  ],
};

function getPresets(country) {
  const reals = REAL_TALK[country] || REAL_TALK.MX;
  return reals.map((real, i) => ({
    real,
    linkedin: LINKEDIN_VERSIONS[i],
  }));
}

export default function Home() {
  const [country, setCountry] = useState("MX");
  const [mode, setMode] = useState("toLinkedIn");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const translate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: input,
          mode,
          country: mode === "toLinkedIn" ? null : country,
        }),
      });
      const data = await res.json();
      setOutput(data.error || data.result);
    } catch {
      setOutput("Algo salió mal. Intenta de nuevo.");
    }
    setLoading(false);
  };

  const flip = () => {
    setMode((m) => (m === "toLinkedIn" ? "toReal" : "toLinkedIn"));
    if (input && output) {
      const t = input;
      setInput(output);
      setOutput(t);
    }
  };

  const copy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const share = () => {
    if (!output) return;
    const countryObj = COUNTRIES.find((c) => c.code === country);
    const flag = countryObj ? countryObj.flag : "";
    const shareText =
      mode === "toLinkedIn"
        ? `Escribí "${input.length > 60 ? input.slice(0, 60) + "..." : input}" en el Traductor de LinkedIn y me devolvió un post corporativo perfecto 😂\n\nPruébalo: ${SITE_URL}`
        : `${flag} El Traductor de LinkedIn decodificó un post corporativo a: "${output.length > 80 ? output.slice(0, 80) + "..." : output}" 😂\n\nPruébalo: ${SITE_URL}`;
    navigator.clipboard.writeText(shareText);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const loadPreset = (p) => {
    if (mode === "toLinkedIn") {
      setInput(p.real);
      setOutput(p.linkedin);
    } else {
      setInput(p.linkedin);
      setOutput(p.real);
    }
  };

  const presets = getPresets(country);

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Traductor de LinkedIn</h1>
          <p style={styles.subtitle}>
            Lo que quieres decir ↔ Lo que publicas
          </p>
        </div>

        {/* Card */}
        <div style={styles.card}>
          {/* Country selector */}
          <div style={styles.countryRow}>
            {COUNTRIES.map((c) => (
              <button
                key={c.code}
                onClick={() => {
                  setCountry(c.code);
                  setOutput("");
                }}
                style={{
                  ...styles.countryBtn,
                  background: country === c.code ? "#0a66c2" : "#f3f2ef",
                  color: country === c.code ? "#fff" : "#666",
                  borderColor: country === c.code ? "#0a66c2" : "#e0e0e0",
                }}
              >
                <span style={{ fontSize: 18 }}>{c.flag}</span>
                <span style={{ fontSize: 12 }}>{c.name}</span>
              </button>
            ))}
          </div>

          {/* Mode toggle */}
          <div style={styles.toggleRow}>
            <span
              style={{
                ...styles.toggleLabel,
                fontWeight: mode === "toLinkedIn" ? 600 : 400,
                color: mode === "toLinkedIn" ? "#191919" : "#999",
              }}
            >
              Modo honesto
            </span>
            <button onClick={flip} style={styles.toggleTrack}>
              <div
                style={{
                  ...styles.toggleThumb,
                  left: mode === "toLinkedIn" ? 3 : 21,
                }}
              />
            </button>
            <span
              style={{
                ...styles.toggleLabel,
                fontWeight: mode === "toReal" ? 600 : 400,
                color: mode === "toReal" ? "#191919" : "#999",
              }}
            >
              Modo detector
            </span>
          </div>

          {/* Input */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "toLinkedIn"
                ? presets[0].real
                : "Pega aquí el post de LinkedIn..."
            }
            rows={3}
            style={styles.textarea}
            onFocus={(e) => (e.target.style.borderColor = "#0a66c2")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd")}
          />

          {/* Translate button */}
          <button
            onClick={translate}
            disabled={loading || !input.trim()}
            style={{
              ...styles.translateBtn,
              background: loading || !input.trim() ? "#ccc" : "#0a66c2",
              cursor: loading || !input.trim() ? "default" : "pointer",
            }}
          >
            {loading
              ? "Traduciendo..."
              : mode === "toLinkedIn"
              ? "Traducir a LinkedIn Speak"
              : "Traducir a español honesto"}
          </button>

          {/* Arrow */}
          {output && !loading && <div style={styles.arrow}>↕</div>}

          {/* Output */}
          {(output || loading) && (
            <div
              style={{
                ...styles.outputBox,
                background: mode === "toLinkedIn" ? "#f0f7ff" : "#f9f9f6",
                borderColor: mode === "toLinkedIn" ? "#d0e4f7" : "#e8e8e0",
              }}
            >
              <div style={styles.outputLabel}>
                {mode === "toLinkedIn"
                  ? "Versión LinkedIn"
                  : "Lo que realmente quieren decir"}
              </div>

              {loading ? (
                <div style={styles.thinking}>Pensando...</div>
              ) : (
                <div style={styles.outputText}>{output}</div>
              )}

              {output && !loading && (
                <div style={styles.btnRow}>
                  <button onClick={copy} style={styles.actionBtn}>
                    {copied ? "✓ Copiado" : "Copiar"}
                  </button>
                  <button onClick={share} style={styles.actionBtn}>
                    {shared ? "✓ Listo para compartir" : "Compartir"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Examples */}
        <div style={styles.examples}>
          <div style={styles.examplesLabel}>Prueba un ejemplo:</div>
          <div style={styles.examplesGrid}>
            {presets.map((p, i) => (
              <button
                key={`${country}-${i}`}
                onClick={() => loadPreset(p)}
                style={styles.chip}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0a66c2";
                  e.currentTarget.style.background = "#f0f7ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e0e0e0";
                  e.currentTarget.style.background = "#fff";
                }}
              >
                {p.real}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          Impulsado por la misma IA que escribe tus posts de LinkedIn.
          Piénsalo.
        </footer>
      </div>
    </main>
  );
}

const styles = {
  main: { minHeight: "100vh", background: "#f3f2ef" },
  container: { maxWidth: 560, margin: "0 auto", padding: "32px 16px 80px" },
  header: { textAlign: "center", marginBottom: 28 },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#191919",
    margin: "0 0 4px",
  },
  subtitle: { fontSize: 14, color: "#666", margin: 0 },
  card: {
    background: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    padding: 20,
  },
  countryRow: {
    display: "flex",
    gap: 8,
    marginBottom: 16,
    justifyContent: "center",
  },
  countryBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    padding: "8px 14px",
    border: "1px solid",
    borderRadius: 8,
    cursor: "pointer",
    transition: "all 0.15s",
    fontFamily: "inherit",
    minWidth: 72,
  },
  toggleRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginBottom: 16,
  },
  toggleLabel: { fontSize: 13 },
  toggleTrack: {
    width: 44,
    height: 26,
    borderRadius: 13,
    border: "none",
    background: "#0a66c2",
    cursor: "pointer",
    position: "relative",
  },
  toggleThumb: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "#fff",
    position: "absolute",
    top: 3,
    transition: "left 0.2s",
  },
  textarea: {
    width: "100%",
    padding: 12,
    border: "1px solid #ddd",
    borderRadius: 6,
    fontSize: 14,
    lineHeight: 1.6,
    fontFamily: "inherit",
    resize: "vertical",
    outline: "none",
    boxSizing: "border-box",
    color: "#191919",
    background: "#fafafa",
    transition: "border-color 0.2s",
  },
  translateBtn: {
    width: "100%",
    padding: "10px 0",
    color: "#fff",
    border: "none",
    borderRadius: 20,
    fontSize: 14,
    fontWeight: 600,
    marginTop: 12,
    transition: "background 0.2s",
    fontFamily: "inherit",
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "16px 0 4px",
    color: "#bbb",
    fontSize: 18,
  },
  outputBox: {
    border: "1px solid",
    borderRadius: 6,
    padding: 14,
    marginTop: 4,
  },
  outputLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: "#0a66c2",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  thinking: { color: "#999", fontSize: 14 },
  outputText: {
    fontSize: 14,
    lineHeight: 1.7,
    color: "#191919",
    whiteSpace: "pre-wrap",
  },
  btnRow: {
    display: "flex",
    gap: 8,
    marginTop: 10,
  },
  actionBtn: {
    padding: "5px 14px",
    background: "transparent",
    border: "1px solid #ddd",
    borderRadius: 14,
    fontSize: 12,
    color: "#666",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "border-color 0.15s, color 0.15s",
  },
  examples: { marginTop: 20 },
  examplesLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: "#666",
    marginBottom: 10,
    paddingLeft: 4,
  },
  examplesGrid: { display: "flex", flexWrap: "wrap", gap: 6 },
  chip: {
    padding: "7px 14px",
    background: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: 16,
    fontSize: 13,
    color: "#191919",
    cursor: "pointer",
    fontFamily: "inherit",
    lineHeight: 1.3,
    transition: "border-color 0.15s, background 0.15s",
  },
  footer: {
    textAlign: "center",
    marginTop: 32,
    fontSize: 12,
    color: "#999",
  },
};
