import React from 'react';

import Header from '../components/Header';
import SEO from '../components/SEO';
import Heading from '../components/Heading';
import Guid from '../components/Guid';

import '../styles/global.scss';

const label = [
    '<div><span>avai</span></div>',
    '<div><span>–la<i>b</i>le</span></div>',
    '<div><span><i>i</i>n l.A.</span></div>',
];

export default () => (
    <main className="Site-wrapper">
        <SEO />
        <Header />
        <div className="Site-container">
            <div className="row">
                <div className="col-8">
                    <div className="Image">
                        <img src="/jpg/image-01.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="Image">
            <div className="Site-container">
                <div className="row">
                    <div className="col-6 offset-md-6">
                        <img src="/jpg/image-02.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="Image">
            <div className="Site-container">
                <figure className="row position-relative">
                    <div className="col-10">
                        <img src="/jpg/image-03.jpg" alt="" />
                    </div>
                    <figcaption className="Image__caption col-8 offset-md-4">
                        Pikes Peak®
                        <br />
                        International
                        <br />
                        <span>hill climb</span>
                    </figcaption>
                </figure>
            </div>
        </div>
        <div className="position-relative">
            <Heading label={label} direction={'left'} />
            <div className="Image">
                <div className="Site-container">
                    <div className="row">
                        <div className="col-8 offset-md-4">
                            <img
                                className="Image"
                                src="/jpg/image-04.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Guid columns={12} />
    </main>
);
