import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from 'next/font/google';
import { ThemeProvider } from "./lib/context/themeContext";
// ❌ Retrait de 'next/script' pour garantir l'exécution synchrone

// Définitions de Polices
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy Deploy",
  description: "Deploy your apps with ease",
};

// Définir le contenu du script comme une chaîne de caractères (Aucun changement ici, c'est parfait)
const themeScript = `
  (function() {
    const STORAGE_KEY = 'theme';
    const root = window.document.body;
     
    // Fonction pour appliquer ou retirer la classe 'dark'
    function applyTheme(theme) {
      if (theme === 'dark') {
        root.classList.add('dark');
        // Ajout de 'light' pour les styles conditionnels si besoin
      } else {
        root.classList.remove('dark');
      }
    }

    // 1. Lire la préférence stockée
    let storedTheme = localStorage.getItem(STORAGE_KEY);
    
    // 2. Si aucune préférence stockée, utiliser la préférence système
    if (!storedTheme) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      storedTheme = isDark ? 'dark' : 'light';
    }

    // 3. Appliquer le thème immédiatement (Ceci est bloquant)
    applyTheme(storedTheme);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="">
      <head className={` ${roboto.variable}`}>

        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>

      <body
        className={`antialiased font-sans`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}