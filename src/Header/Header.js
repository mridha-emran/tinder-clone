import React from "react";
import './header.css';
import PersonIcon from '@mui/icons-material/Person';
import  IconButton  from "@material-ui/core/IconButton";
import ForumIcon from '@mui/icons-material/Forum';
import logo from "../image/tinder-logo.png";
function Header() {
    return(
        <div className="header">
    
            <IconButton>

            <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <img 
            className="header_logo"
            src={logo} alt = "tinder" />

           <ForumIcon fontSize="large" className="header_icon" />

        </div>
    )
    
}
export default Header;