import React from 'react';

import Logo from './Logo';
import Menu from './Menu';

const Header = ({ siteTitle }) => (
    <header className="Site-header">
        <div className="Site-container">
            <div className="row">
                <div className="col-2">
                    <Logo />
                </div>
                <div className="col-2">
                    <Menu />
                </div>
            </div>
        </div>
    </header>
);

export default Header;
