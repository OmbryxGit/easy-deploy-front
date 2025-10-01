// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // ... vos chemins de fichiers ...
    ],
    theme: {
        extend: {
            colors: {
                // 💡 1. Définir un nouveau token 'primary' et le faire pointer vers une variable CSS
                primary: 'var(--color-primary)',

                // 💡 2. Définir un nouveau token 'secondary' (facultatif)
                secondary: 'var(--color-secondary)',

                // Nous conservons les variables de thème sombre/clair pour la couleur du texte
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            // ... autres extensions (polices, etc.) ...
        },
    },
    // ... autres configurations ...
}