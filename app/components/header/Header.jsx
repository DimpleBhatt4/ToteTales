import React from "react";

import AnnouncementBar from "./AnnouncementBar";
import Nav_desktop from "./Nav_desktop";
import Nav_mobile from "./Nav_mobile";

const Header = () => {
  return (
    <header>
      <AnnouncementBar />
      <Nav_desktop />
      <Nav_mobile />
    </header>
  );
};

export default Header;
