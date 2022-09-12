import React from "react";
import PropTypes from 'prop-types';
import style from './Input.module.css'


class Input extends React.Component{

    handleChange = event => {
        this.props.handleChange(event.target.value, event)
    }

    render() {
        const { value } = this.props;
        return (
            <input onChange={this.handleChange} className={style.root} value={value}/>
        );
    }
}

Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default Input;