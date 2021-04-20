import React from 'react'
import './Header.css'  
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            <IconButton>
                <img
                    className="header__logo"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png"
                    alt=""
                />
            </IconButton>
            <IconButton>
                <ChatBubbleIcon fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
