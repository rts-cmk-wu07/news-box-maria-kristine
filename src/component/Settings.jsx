/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DarkModeToggle from "./DarkModeToggle";
import Navbar from "./Navbar";
import { IoIosArrowBack } from "react-icons/io";
import TopicToggle from "./TopicToggle";
import SettingsCategorie from "./settingsCategorie";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const Settings = ({ article }) => {
  const { darkMode } = useContext(ThemeContext);
  const styles = {
    settings: css`
      
      & h2 {
        color: #87bcbf;
        font-size: 1.875rem;
        text-align: center;
        font-weight: bold;
        padding: 38px 0 0 0;
      }
      & h3 {
        color: #707070;
        font-size: 1.25rem;
        font-weight: lighter;
        text-align: center;
        padding: 0 0 38px 0;
      }
      & p {
        font-size: 0.75rem;
        font-weight: lighter;
        text-align: center;
        padding: 0 0 30px 0;
      }
    `,
  };
  return (
    <div>
      <div>
        <Navbar
          leftIconLink="/inbox"
          leftIcon={<IoIosArrowBack />}
          title="New Settings"
        />
        <div css={styles.settings} className={darkMode ? "settings-dark" : "settings"}>
          <h2>Manage</h2>
          <h3>Categories</h3>
          <SettingsCategorie/>
          <DarkModeToggle />
          <p className={darkMode ? "settingsText-dark" : "settingsText"}>Version 4.8.15.16.23.42</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
