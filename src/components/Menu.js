import React from 'react';

import data from '../../content/menu.json';

const items = data.items.map((item, index) => (
    <li key={index}>
        (0{index + 1})<span>{item}</span>
    </li>
));

const Menu = () => <ul className="Site-menu">{items}</ul>;

export default Menu;
