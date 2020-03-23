import React from 'react';
import { Link } from 'gatsby';

const Logo = () => (
    <Link className="Logo" to="/" rel="home">
        <img src="/svg/logo.svg" alt="Deus" width="80" height="60" />
    </Link>
);

export default Logo;
