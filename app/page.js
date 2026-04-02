"use client";

import { useState } from "react";

const COUNTRIES = [
  { code: "MX", flag: "🇲🇽", name: "México" },
  { code: "AR", flag: "🇦🇷", name: "Argentina" },
  { code: "CL", flag: "🇨🇱", name: "Chile" },
  { code: "CO", flag: "🇨🇴", name: "Colombia" },
];

const PRESETS = {
  MX: [
    {
      real: "Renuncié porque mi jefe es un controlador",
      linkedin:
        "Me emociona compartir que estoy iniciando un nuevo capítulo profesional. 🚀 Después de mucha reflexión, decidí buscar un entorno que se alinee con mis valores de autonomía y confianza. Agradecido infinitamente por todo lo que aprendí echándole ganas. ¡Lo mejor está por venir! #NuevosComienzos #Crecimiento #EchándoleGanas",
    },
    {
      real: "Me corrieron",
      linkedin:
        "A veces el universo tiene planes más grandes para nosotros. 🌟 Hoy cierro un ciclo lleno de aprendizajes y abro la puerta a nuevas oportunidades. La neta, cada final es un nuevo comienzo. ¡Estoy listo para lo que sigue! #OpenToWork #Resiliencia #NuevoCapítulo",
    },
    {
      real: "No tengo idea de lo que hago en mi nuevo trabajo",
      linkedin:
        "¡Primera semana en mi nueva chamba y estoy impresionado! 📈 La curva de aprendizaje está cañón. El síndrome del impostor es real, pero estoy abrazando la incomodidad porque ahí es donde ocurre la magia. Agradecido con este equipo espectacular. #AprendizajeContinuo #EchándoleGanas",
    },
    {
      real: "Fui a una conferencia aburrida",
      linkedin:
        "¡Acabo de regresar de [Conferencia] y mi mente EXPLOTÓ! 🤯 Las conversaciones, la energía, la gente tan chingona que conocí… necesito una semana para procesar todo. Si no fueron, se lo perdieron. #Networking #LiderazgoDePensamiento #Inspirado",
    },
    {
      real: "Mi jefe me obligó a publicar esto",
      linkedin:
        "¡Orgulloso de ser parte de un equipo que jala parejo! 🙌 En [Empresa] no solo hablamos de cultura, la construimos todos los días. ¡Esto es lo que significa pertenecer y echarle ganas juntos! #CulturaOrganizacional #Equipo #Orgullo",
    },
    {
      real: "Hice un curso gratis en YouTube",
      linkedin:
        "Nunca pares de invertir en ti mismo. 🧠 Acabo de completar una certificación en [tema] y la neta, el aprendizaje continuo es el superpoder más subestimado. ¿Quién más le está echando ganas a su crecimiento profesional? #LifelongLearning #Crecimiento",
    },
  ],
  AR: [
    {
      real: "Renuncié porque mi jefe es un controlador",
      linkedin:
        "Me copa compartir que estoy arrancando un nuevo capítulo profesional. 🚀 Después de mucha reflexión, decidí buscar un entorno que se alinee con mis valores. La posta es que los aprendizajes que me llevo son tremendos. ¡Se viene lo mejor! #NuevosComienzos #Crecimiento #VamosQueSeViene",
    },
    {
      real: "Me rajaron",
      linkedin:
        "A veces el universo te tiene preparado algo más groso. 🌟 Hoy cierro un ciclo lleno de aprendizajes y abro la puerta a nuevas oportunidades. Esto recién arranca, mirá. ¡Estoy listo para lo que se viene! #OpenToWork #Resiliencia #LaPosta",
    },
    {
      real: "No tengo idea de lo que hago en mi nuevo laburo",
      linkedin:
        "¡Primera semana en el nuevo laburo y estoy flasheando! 📈 La curva de aprendizaje es tremenda. El síndrome del impostor te pega, pero me estoy bancando la incomodidad porque ahí es donde pasan las cosas grosas. Tremendo equipo. #AprendizajeContinuo #SeVieneLoMejor",
    },
    {
      real: "Fui a una conferencia aburrida",
      linkedin:
        "¡Acabo de volver de [Conferencia] y estoy re flasheado! 🤯 Las conversaciones, la energía, la gente grosa que conocí… necesito una semana para procesar todo. Si no estuviste, te perdiste algo tremendo. #Networking #VamosQueSeViene",
    },
    {
      real: "Mi jefe me obligó a publicar esto",
      linkedin:
        "¡Re orgulloso de ser parte de un equipo que labura en serio! 🙌 En [Empresa] no solo hablamos de cultura, la construimos todos los días. La posta, esto es lo que significa pertenecer. #CulturaOrganizacional #Equipo #Orgullo",
    },
    {
      real: "Hice un curso gratis en YouTube",
      linkedin:
        "Nunca pares de invertir en vos. 🧠 Acabo de completar una certificación en [tema] y la posta, el aprendizaje continuo es lo más groso que hay. ¿Quién más se está bancando la curva de crecimiento? #LifelongLearning #Crecimiento",
    },
  ],
  CL: [
    {
      real: "Renuncié porque mi jefe es un controlador",
      linkedin:
        "La verdad es que estoy muy agradecido de compartir que estoy empezando un nuevo capítulo profesional. 🚀 Después de mucha reflexión, decidí buscar una pega que se alinee con mis valores. ¡Se vienen cosas brigidas, cachai! #NuevosComienzos #Crecimiento #VamosChile",
    },
    {
      real: "Me echaron",
      linkedin:
        "A veces el universo tiene planes más bacanes para uno. 🌟 Hoy cierro un ciclo lleno de aprendizajes y abro la puerta a nuevas oportunidades. La weá es que cada final es un nuevo comienzo po. ¡Estoy listo! #OpenToWork #Resiliencia #NuevoCapítulo",
    },
    {
      real: "No tengo idea de lo que hago en mi nueva pega",
      linkedin:
        "¡Primera semana en la nueva pega y estoy impresionado! 📈 La curva de aprendizaje está brigida. El síndrome del impostor es real, pero estoy abrazando la incomodidad porque ahí es donde pasan las cosas bacanes po. Caleta de cosas por aprender. #AprendizajeContinuo #Pega",
    },
    {
      real: "Fui a una conferencia fome",
      linkedin:
        "¡Acabo de volver de [Conferencia] y quedé pa adentro! 🤯 Las conversaciones, la energía, la gente bacán que conocí… necesito una semana para procesar todo cachai. Si no fuiste, te lo perdiste. #Networking #SeVienenCosasBrigidas",
    },
    {
      real: "Mi jefe me obligó a publicar esto",
      linkedin:
        "¡Orgulloso de ser parte de un equipo que la suda de verdad! 🙌 En [Empresa] la cultura no es chamullo, se construye todos los días po. Bacán pertenecer a algo así. #CulturaOrganizacional #Equipo #Orgullo",
    },
    {
      real: "Hice un curso gratis en YouTube",
      linkedin:
        "Nunca paren de invertir en ustedes. 🧠 Acabo de completar una certificación en [tema] y la verdad es que el aprendizaje continuo es lo más bacán que hay. ¿Quién más le está metiendo? #LifelongLearning #Crecimiento",
    },
  ],
  CO: [
    {
      real: "Renuncié porque mi jefe es un controlador",
      linkedin:
        "Qué chimba compartir que estoy iniciando un nuevo capítulo profesional. 🚀 Después de mucha reflexión, decidí buscar un camello que se alinee con mis valores. Demasiado agradecido por los aprendizajes, parce. ¡Esto va con toda! #NuevosComienzos #Crecimiento #ConToda",
    },
    {
      real: "Me sacaron",
      linkedin:
        "A veces el universo tiene planes más berracos para uno. 🌟 Hoy cierro un ciclo lleno de aprendizajes y abro la puerta a nuevas oportunidades. ¡De una, parceros, esto apenas comienza! #OpenToWork #Berraquera #NuevoCapítulo",
    },
    {
      real: "No tengo idea de lo que hago en mi nuevo camello",
      linkedin:
        "¡Primera semana en el nuevo camello y estoy impresionado! 📈 La curva de aprendizaje está tenaz parce. El síndrome del impostor pega duro, pero estoy abrazando la incomodidad porque ahí es donde pasan las cosas bacanas. Qué equipo tan berraco. #AprendizajeContinuo #ConToda",
    },
    {
      real: "Fui a una conferencia aburrida",
      linkedin:
        "¡Acabo de volver de [Conferencia] y quedé loco parcero! 🤯 Las conversaciones, la energía, la gente tan bacana que conocí… necesito una semana para procesar todo. Si no fueron, se la perdieron de una. #Networking #Berraquera",
    },
    {
      real: "Mi jefe me obligó a publicar esto",
      linkedin:
        "¡Orgulloso de ser parte de un equipo berraco de verdad! 🙌 En [Empresa] la cultura se construye con todo parce. Qué chimba pertenecer a algo así. #CulturaOrganizacional #Equipo #ConToda",
    },
    {
      real: "Hice un curso gratis en YouTube",
      linkedin:
        "Nunca paren de invertir en ustedes. 🧠 Acabo de completar una certificación en [tema] y la verdad parceros, el aprendizaje continuo es una chimba. ¿Quién más le está metiendo con toda? #LifelongLearning #Berraquera",
    },
  ],
};

export default function Home() {
  const [country, setCountry] = useState("MX");
  const [mode, setMode] = useState("toLinkedIn");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const translate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input, mode, country }),
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

  const loadPreset = (p) => {
    if (mode === "toLinkedIn") {
      setInput(p.real);
      setOutput(p.linkedin);
    } else {
      setInput(p.linkedin);
      setOutput(p.real);
    }
  };

  const presets = PRESETS[country] || PRESETS.MX;

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
                <button onClick={copy} style={styles.copyBtn}>
                  {copied ? "✓ Copiado" : "Copiar"}
                </button>
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
  copyBtn: {
    marginTop: 10,
    padding: "5px 14px",
    background: "transparent",
    border: "1px solid #ddd",
    borderRadius: 14,
    fontSize: 12,
    color: "#666",
    cursor: "pointer",
    fontFamily: "inherit",
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
  footer: { textAlign: "center", marginTop: 32, fontSize: 12, color: "#999" },
};
