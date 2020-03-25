import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const column = index => (
    <div className="col-1 text-align-center h-100" key={index}>
        <div className="Guid__column text-align-xs-center">{index}</div>
    </div>
);

const Guid = ({ columns }) => {
    const [show, setShow] = useState(false);
    let row = [];

    const handleKeydown = event => {
        if ((event.metaKey || event.ctrlKey) && 186 === event.keyCode) {
            setShow(!show);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown, false);

        return () => {
            document.removeEventListener('keydown', handleKeydown, false);
        };
    });

    for (let i = 1; i <= columns; i += 1) {
        row.push(column(i));
    }

    return (
        <div className={show ? 'Guid' : 'Guid d-none'}>
            <div className="Site-container h-100">
                <div className="row h-100">{row}</div>
            </div>
        </div>
    );
};

Guid.propTypes = {
    columns: PropTypes.number,
};

Guid.defaultProps = {
    columns: 12,
};

export default Guid;
