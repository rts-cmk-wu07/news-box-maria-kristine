/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaSistrix } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const Search = () => {
  const {darkMode} = useContext(ThemeContext);
  const styles = {
    search: css`
      padding-top: 17px;
      justify-content: space-between;
      padding-bottom: 20px;
   
      & input {
        border: none;
        outline: none;
        background-color: #f0f3f4;
        font-size: 0.938rem;
        font-weight: lighter;
        color: #6e8ca0;
        width: 250px;
      }
    `,
    searchIcon: css`
      padding: 14px 19px 14px 0;
      width: 15.91px;
      height: 16.91px;
    `,
    searchField: css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 22px;
      background-color: #f0f3f4;
      padding: 5px 0 5px 32px;
      margin: 0 16.3px 0 15.3px;
      height: 45px;
    `,
  };
  return (
    <div css={styles.search} className={darkMode ? "search-dark" : "search"}>
      <div css={styles.searchField}>
        <input type="text" placeholder="Search news" />
        <FaSistrix css={styles.searchIcon} />
      </div>
    </div>
  );
};

export default Search;
