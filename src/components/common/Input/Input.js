import React from "react";
import PropTypes from 'prop-types';
import style from './Input.module.css'



class Input extends React.Component{
    render() {
        console.log(this.props)
        const { handleChange} = this.props;
        return (
            <input onChange={handleChange} className={style.root}/>
        );
    }
}

Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired
};

export default Input;