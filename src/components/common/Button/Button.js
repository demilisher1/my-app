import React from "react";
import PropTypes from "prop-types"
import style from "./Button.module.css"

class Button extends React.Component{

    render() {
        const {handleChange, children, value} = this.props;
        return (
            <button
                onClick={handleChange}
                className={style.root}
            >
                {children}
                {value}
            </button>
        );
    }
}

Button.propTypes = {
    handleChange: PropTypes.func.isRequired,
    children: PropTypes.node,
}

export default Button