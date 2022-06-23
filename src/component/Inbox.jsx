
import useFetch from "../useFetch";
import Search from "./Search";
import Navbar from "./Navbar";
import DropdownBar from "./DropdownBar";

import { FiInbox } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import ThemeContext from "../ThemeContext";

const Inbox = () => {
  const {darkMode} = useContext(ThemeContext);
  const { data: article } = useFetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=O930Ee99BSQCTnPTJwq7qpSKW6vZ63tH"
  );
 
  return (
    <div className={darkMode ? "inbox-dark" : "inbox"} >
      <Navbar
        leftIconLink="/archive"
        leftIcon={<FiInbox />}
        title="Newsbox"
        rightIcon={<IoSettingsSharp />}
      />
      <Search />
      {article && <DropdownBar article={article} />}
    </div>
  );
};

export default Inbox;
