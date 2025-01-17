import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryPage } from "./pages/CountryPage";
import { HomePage } from "./pages/HomePage";
import { ThemeProvider } from "./context/theme";
import "./styles/global.css";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
    console.log("Darkmode");
  };

  const lightTheme = () => {
    setThemeMode("light");
    console.log("lightmode");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<CountryPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
