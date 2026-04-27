import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Medaly Studio — UX/UI Design Studio en Tunisie",
  description:
    "J'aide les entreprises ambitieuses à transformer leurs visiteurs en clients grâce à un design pensé performance.",
  keywords: [
    "UX Design",
    "UI Design",
    "Web Design",
    "Tunisie",
    "Développement Web",
    "Design Studio",
  ],
  authors: [{ name: "Dali Barghouthi" }],
  openGraph: {
    title: "Medaly Studio — UX/UI Design Studio en Tunisie",
    description:
      "J'aide les entreprises ambitieuses à transformer leurs visiteurs en clients grâce à un design pensé performance.",
    type: "website",
    locale: "fr_FR",
    siteName: "Medaly Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medaly Studio — UX/UI Design Studio en Tunisie",
    description:
      "Design pensé performance. Interfaces qui convertissent.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
