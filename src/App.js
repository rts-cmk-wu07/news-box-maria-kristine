/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import ThemeContext from "./ThemeContext";

import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"));

  const styles = {
    app: css`
      width: 375.5px;
    `,
  };
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div css={styles.app} className="App">
        <div>
          <Outlet />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
