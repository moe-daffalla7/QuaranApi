import { createContext } from "react";

//creating a type theme with default values light or dark
//Union type
type Theme = "light" | "dark";

//setting shape of context
type ThemeContextType = {
    theme : Theme ;
    toggleTheme : () => void;
}

//Creates the context
export const ThemeContext = createContext<ThemeContextType>({
    theme : "light", //default value light
    toggleTheme : () => {} // function with no parameters => does nothing at the moment
});