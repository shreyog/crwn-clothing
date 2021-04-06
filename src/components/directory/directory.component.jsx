import React, { useState, useEffect } from "react";

import SECTION_DATA from "./directory.data";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(SECTION_DATA);
  }, []);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
