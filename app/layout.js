import "./globals.css";

export const metadata = {
  title: "Traductor de LinkedIn — Lo que quieres decir ↔ Lo que publicas",
  description:
    "Traduce lenguaje honesto a LinkedIn Speak en español mexicano, argentino, chileno y colombiano. O decodifica la jerga corporativa a lo que realmente quieren decir.",
  metadataBase: new URL("https://traductor-linkedin.vercel.app"),
  openGraph: {
    title: "Traductor de LinkedIn",
    description:
      'Porque "me emociona compartir" nunca ha sido verdad. Ahora en 4 dialectos.',
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Traductor de LinkedIn",
    description:
      'Porque "me emociona compartir" nunca ha sido verdad. Ahora en 4 dialectos.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
