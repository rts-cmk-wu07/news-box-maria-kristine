/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ThemeContext from "../ThemeContext";
import { useContext } from "react";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  console.log(darkMode);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", darkMode);
  };
  const styles = {
    button: css`
      width: 178px;
      padding: 0 0 35px 0;
      margin: 0 auto;

      & button {
        text-align: center;
        font-size: 0.7rem;
        font-weight: lighter;
        text-transform: uppercase;
        border-radius: 50px;
        border: 1px solid #c8d1d3;
        padding: 16px 34px;
        cursor: pointer;
      }
    `,
  };
  return (
    <div css={styles.button}>
      <button onClick={handleTheme}>toggle dark mode</button>
    </div>
  );
};

export default DarkModeToggle;
