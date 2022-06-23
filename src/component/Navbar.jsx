/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const Navbar = ({ leftIconLink, leftIcon, title, rightIcon }) => {
  const { darkMode } = useContext(ThemeContext);
  const styles = {
    navbar: css`
      width: 375.5px;
      display: grid;
      grid-template-columns: 50px 275.5px 50px;
      justify-content: center;
      align-items: center;
      padding: 53.2px 0 28.8px;
      border-bottom: 1px solid #e0e1e2;
      & li {
        list-style: none;
        margin: 0 auto;
        font-size: 1.2rem;
      }
      & h1 {
        font-size: 1.125rem;
        text-align: center;
      }
    `,
  };
  return (
    <nav css={styles.navbar} className={darkMode ? "navbar-dark" : "navbar"}>
      <li className={darkMode ? "icon-dark" : "icon"}>
        <Link to={leftIconLink}>{leftIcon}</Link>
      </li>
      <h1 className={darkMode ? "header-dark" : "header"}>{title}</h1>
      <li>
        <Link to="/settings">{rightIcon}</Link>
      </li>
    </nav>
  );
};

export default Navbar;
