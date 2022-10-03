import React from 'react';
import PropTypes from 'prop-types';
import style from './Label.module.css';

class Label extends React.Component{
    render() {
        const {title, children} = this.props
        return (
            <div className={style.root}>
                <div>
                    {title}
                </div>
                <div>
                    {children}
                </div>
            </div>
        )
    }
}

Label.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

export default Label;
