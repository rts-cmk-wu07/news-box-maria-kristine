/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "./Navbar";

import { IoIosArrowBack } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

import Search from "./Search";

const Archive = () => {
  const styles = {
    archive: css`
      background-color: #fff;
    `,
  };

  return (
    <div css={styles.archive}>
      <Navbar
        leftIconLink="/inbox"
        leftIcon={<IoIosArrowBack />}
        title="Archive"
        rightIcon={<IoSettingsSharp />}
      />
      <Search />
  
    </div>
  );
};

export default Archive;
