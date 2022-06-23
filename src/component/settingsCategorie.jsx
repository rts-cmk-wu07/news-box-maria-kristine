/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TopicToggle from "./TopicToggle";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const SettingsCategorie = ({ article }) => {
  const { darkMode } = useContext(ThemeContext);
  const styles = {
    categorieSection: css`
      width: 338.5px;
      margin: 0 auto;
      
      border-radius: 20px;
      margin-bottom: 70px;
    `,
    categorie: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* border-bottom: 1px solid #f0f3f4; */
      padding: 19.5px 23px;
      & h4 {
        text-transform: uppercase;
        font-size: 0.938rem;
      }
    `,
  };
  return (
    <div css={styles.categorieSection} className={darkMode ? "categorieSection-dark" : "categorieSection"}>
      <div css={styles.categorie}>
        <h4 className={darkMode ? "categorieHeader-dark" : "categorieHeader"}>Travel</h4>
        <TopicToggle rounded={true} />
      </div>
      <div css={styles.categorie}>
        <h4 className={darkMode ? "categorieHeader-dark" : "categorieHeader"}>Sport</h4>
        <TopicToggle rounded={true} />
      </div>
    </div>
  );
};

export default SettingsCategorie;
