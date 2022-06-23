/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import ToggleSetting from "./ThemeContext";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"));
  const [categorieSettings, setCategorieSettings] = useState();

  const styles = {
    app: css`
      width: 375.5px;
    `,
  };
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ToggleSetting.Provider value={{categorieSettings, setCategorieSettings }}>
      <div css={styles.app} className="App">
        <div>
          <Outlet />
        </div>
      </div>
      </ToggleSetting.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
