import React from 'react';

function Header(titulo) {
    return(
        <nav>
            <div className="bg-blue-400">
               <a href="#" className="brand-logo">{titulo}</a>
            </div>
        </nav>
    )
}

export default Header;