import React from "react";
import PropTypes from "prop-types"
import style from "./Button.module.css"

class Button extends React.Component{

    render() {
        const {handleClick, children, value} = this.props;
        return (
            <button
                onClick={handleClick}
                className={style.root}
            >
                {children}
                {value}
            </button>
        );
    }
}

Button.propTypes = {
    // handleClick: PropTypes.func.isRequired,
    children: PropTypes.node,
}

export default Button