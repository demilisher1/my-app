import React from 'react';
import PropTypes from 'prop-types';
import style from './Label.module.css';

class Label extends React.Component{
    render() {
        const {title, children} = this.props
        return (
            <label className={style.root}>
                <div>
                    {title}
                </div>
                <div>
                    {children}
                </div>
            </label>
        )
    }
}

Label.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Label;
