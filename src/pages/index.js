import React from 'react';
import Header from '../components/Header';
import SEO from '../components/SEO';
import Guid from '../components/Guid';

import '../styles/global.scss';

export default () => (
    <main className="Site-wrapper">
        <SEO />
        <Header />
        <div className="Site-container">
            <div className="row">
                <div className="col-8">
                    <img className="Image" src="/jpg/image-01.jpg" alt="" />
                </div>
            </div>
        </div>
        <Guid columns={12} />
    </main>
);
