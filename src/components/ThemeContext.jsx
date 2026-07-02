import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {

        localStorage.setItem("theme", theme);

        document.body.setAttribute("data-bs-theme", theme);

    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;