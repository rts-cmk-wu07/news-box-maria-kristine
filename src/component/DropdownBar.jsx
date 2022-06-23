/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FiInbox } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import Collapsible from "react-collapsible";

const DropdownBar = ({ article }) => {
  const { darkMode } = useContext(ThemeContext);
  let categorie = article.results.map((categorie) => categorie.section);

  let sortedCategorie = categorie.filter((element, index) => {
    return categorie.indexOf(element) === index;
  });

  const styles = {
    dropdownBar: css`
      display: grid;
      grid-template-columns: 50px 257px 50px;
      gap: 10px;
      align-items: center;

      cursor: pointer;
      & h2 {
        width: 228px;
        text-transform: uppercase;
        font-size: 0.938rem;
      }
    `,
    iconSurf: css`
      background-color: #ffffff;
      border-radius: 50px;

      margin: 10.8px 11px 11.8px 16px;
      width: 35px;
      height: 35px;
    `,
    surf: css`
      width: 18.91px;
      height: 18.91px;
      margin: 8.3px;
    `,
    iconArrow: css`
      transform: rotate(-90deg);
      margin: 0 auto;
      font-size: 1.2rem;
    `,
    newsPost: css`
      display: flex;
      gap: 20px;
      margin: 24px 0 0 0;
      border-bottom: 1px solid #e0e1e2;
      padding: 0 21px 24px 20px;
      & img {
        width: 70px;
        height: 70px;
        border-radius: 50px;
      }
      & div {
      }
      & h3 {
        font-size: 0.8rem;
      }
      & p {
        font-size: 0.6rem;
        font-weight: lighter;
      }
    `,
    swipe: css`
      background-color: #87bcbf;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    swipeIcon: css`
      width: 20px;
    `,
    icon: css`
      font-size: 1.125rem;
      color: red;
    `,
  };

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.info("swipe action triggered")}
      >
        <div css={styles.swipe}>
          <div css={styles.swipeIcon}>
            <FiInbox css={styles.icon} />
          </div>
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <div>
      {sortedCategorie.map((categorie, index) => {
        return (
          <div key={index}>
            <SwipeableList>
              <Collapsible
                trigger={
                  <div
                    css={styles.dropdownBar}
                    className={darkMode ? "dropdownBar-dark" : "dropdownBar"}
                  >
                    <div
                      css={styles.iconSurf}
                      className={darkMode ? "iconSurf-dark" : "iconSurf"}
                    >
                      <img
                        css={styles.surf}
                        src="images/icn_surfing.png"
                        alt=""
                      />
                    </div>
                    <h2
                      className={
                        darkMode
                          ? "dropDownBarHeader-dark"
                          : "dropDownBarHeader"
                      }
                    >
                      {categorie}
                    </h2>

                    <IoIosArrowBack css={styles.iconArrow} />
                  </div>
                }
              >
                <div
                  className={
                    darkMode ? "newsPostSection-dark" : "newsPostSection"
                  }
                >
                  {article.results.map(
                    (news, i) =>
                      news.section === categorie && (
                        <SwipeableListItem
                          trailingActions={trailingActions()}
                          key={i}
                        >
                          <div
                            css={styles.newsPost}
                            key={i}
                            className={darkMode ? "newsPost-dark" : "newsPost"}
                          >
                            <img src={news.multimedia[0].url} alt="" />
                            <div>
                              <h3
                                className={
                                  darkMode
                                    ? "newsPostHeader-dark"
                                    : "newsPostHeader"
                                }
                              >
                                {news.title}
                              </h3>
                              <p
                                className={
                                  darkMode
                                    ? "newsPostText-dark"
                                    : "newsPostText"
                                }
                              >
                                {news.abstract}
                              </p>
                            </div>
                          </div>
                        </SwipeableListItem>
                      )
                  )}
                </div>
              </Collapsible>
            </SwipeableList>
          </div>
        );
      })}
    </div>
  );
};

export default DropdownBar;
