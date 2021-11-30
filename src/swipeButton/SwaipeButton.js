
import React from "react";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from "@mui/material";
import "./swipeButton.css";
function SwaipeButtons(){
    return(
        <div className ="swipebouttons">
             <IconButton className="swipe_repeat">
                 <ReplayIcon fontSize="large" />
             </IconButton>
             <IconButton className="swipe_left">
                 <CloseIcon fontSize="large" />
             </IconButton>
             <IconButton className="swipe_star">
                 <StarRateIcon fontSize="large" />
             </IconButton>
             <IconButton className="swipe_right">
                 <FavoriteIcon fontSize="large" />
             </IconButton>
             <IconButton className="swipe_lighting">
                 <FlashOnIcon fontSize="large" />
             </IconButton>
            
        </div>
    )
}

export default SwaipeButtons;

