import React from "react";
import HighlightOutlinedIcon from '@mui/icons-material/HighlightOutlined';

function Header() {
  return (
    <header>
      <h1>
        <HighlightOutlinedIcon fontSize="large" style={{marginTop:"0.7rem"}}/>
        Keep Note
      </h1>
    </header>
  );
}

export default Header;
