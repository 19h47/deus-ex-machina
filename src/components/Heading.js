import React, { useRef, useEffect } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

const Heading = ({ label, direction }) => {
    const rootRef = useRef(null);
    const intersection = useIntersection(rootRef, {
        // root: null,
        // rootMargin: '0px',
        // threshold: 1,
    });

    useEffect(() => {
        const children = rootRef.current.querySelectorAll('div span');
        gsap.set(children, { y: 100 });

        if (intersection && intersection.intersectionRatio > 0) {
            gsap.to(children, {
                y: 0,
                duration: 0.7,
                stagger: 0.1,
            });
        }
    }, [intersection]);

    return (
        <h1
            ref={rootRef}
            className={[
                intersection && intersection.intersectionRatio > 0
                    ? 'is-in-view'
                    : '',
                direction === 'right'
                    ? 'Heading Heading--right'
                    : 'Heading Heading--left',
            ].join(' ')}
            dangerouslySetInnerHTML={{
                __html: label,
            }}
        />
    );
};

export default Heading;
