import React from 'react';

import Logo from './Logo';
import Menu from './Menu';

const Header = () => (
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
            <h1 className="Heading">
                <i>D</i>eus
                <br />
                ex
                <br />m<i>a</i>ch
                <br />
                –i<i>n</i>a
            </h1>
        </div>
    </header>
);

export default Header;
