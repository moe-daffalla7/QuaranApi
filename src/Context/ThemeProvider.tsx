import { useState, type ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }: { children: ReactNode }){
    // This is the REAL light switch — it actually remembers ON/OFF
const [ theme, setTheme ] = useState<"light" | "dark">("light");

// This is the REAL button — it actually flips the switch
// toggleThee from ThemeContext.tsx
const toggleTheme = () => {
    setTheme((currentTheme) =>
    //If the current theme is "light", the new theme is "dark". Otherwise, it's "light"
    currentTheme === "light" ? "dark" : "light"
    );
};

return (
    <>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
    </>
)

}