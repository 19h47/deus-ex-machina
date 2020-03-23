import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Guid extends Component {
    constructor(props) {
        super(props);

        this.state = { isShow: false };
        this.onKeydown = this.onKeydown.bind(this);
    }

    onKeydown(event) {
        if ((event.metaKey || event.ctrlKey) && 186 === event.keyCode) {
            this.setState({
                isShow: !this.state.isShow,
            });
        }
    }

    componentDidMount() {
        console.log(document);
        document.addEventListener('keydown', this.onKeydown, false);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown, false);
    }

    render() {
        const { columns } = this.props;

        const column = index => (
            <div className="col-1 text-align-center h-100" key={index}>
                <div className="Guid__column text-align-xs-center">{index}</div>
            </div>
        );

        let row = [];

        for (let i = 1; i <= columns; i += 1) {
            row.push(column(i));
        }

        return (
            <div
                className={this.state.isShow ? 'Guid' : 'Guid d-none'}
                show={this.state.isOpen}
            >
                <div className="Site-container h-100">
                    <div className="row h-100">{row}</div>
                </div>
            </div>
        );
    }
}

Guid.propTypes = {
    isShow: PropTypes.bool,
    columns: PropTypes.number,
};

Guid.defaultProps = {
    isShow: false,
    columns: 12,
};

export default Guid;
