import React from 'react';

import Logo from './Logo';
import Menu from './Menu';
import Heading from './Heading';

const label = [
    '<div><span><i>D</i>eus</span></div>',
    '<div><span>ex</span></div>',
    '<div><span>m<i>a</i>ch</span></div>',
    '<div><span>–i<i>n</i>a</span></div>',
];

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
            <Heading label={label} direction={'right'} />
        </div>
    </header>
);

export default Header;
