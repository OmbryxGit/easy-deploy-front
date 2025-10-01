"use client";
// lib/context/themeContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

/**
 * Définit les deux états possibles du thème.
 */
export type Theme = 'light' | 'dark';

// Définir la structure du contexte
export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// Initialiser le contexte
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Le hook de logique interne
export function useThemeLogic() {
    const [theme, setTheme] = useState<Theme>('light');

    // 1. DÉTECTION INITIALE FIXÉE (Anti-FOUC)
    // Ce hook s'exécute une seule fois au montage. Il lit le DOM
    // pour déterminer si le script injecté (dans layout.tsx) a déjà appliqué le thème sombre.
    useEffect(() => {
        const root = window.document.body;

        // La source de vérité après l'initialisation du script
        const storedTheme = localStorage.getItem('theme') as Theme;

        // Si la classe 'dark' est présente OU si le localStorage force 'dark'
        if (root.classList.contains('dark') || storedTheme === 'dark') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    // 2. SYNCHRONISATION (Mis à jour à chaque changement d'état)
    // Gère l'application de la classe HTML et la persistance dans localStorage.
    useEffect(() => {
        const root = window.document.body;

        // Logique de nettoyage et d'application
        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            // root.classList.add('light'); // Optionnel, mais peut être utile
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    // Fonction pour basculer le thème
    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
}

// Le composant Provider
export function ThemeProvider({ children }: { children: ReactNode }) {
    // Utiliser la logique ici
    const themeProps: ThemeContextType = useThemeLogic();

    // Rendre le contexte disponible aux enfants
    return (
        <ThemeContext.Provider value={themeProps}>
            {children}
        </ThemeContext.Provider>
    );
}

// Le hook public pour utiliser le thème dans n'importe quel composant
export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme doit être utilisé à l\'intérieur d\'un ThemeProvider');
    }
    return context;
}