import React from 'react';
import Header from '../components/Header';
import SEO from '../components/SEO';

import '../styles/global.scss';

export default () => (
    <>
        <SEO />
        <Header />
        <div className="Site-container">
            <div className="row">
                <div className="col-8">
                    <img src="/jpg/image-01.jpg" alt="" />
                </div>
            </div>
        </div>
    </>
);
