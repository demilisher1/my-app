import React from "react";
import PropTypes from "prop-types"
import style from "./Button.module.css"

class Button extends React.Component{
    state ={
        focused: false,
    }

    handleFocus = (event) => {
        if (this.props.onFocus) {
            this.props.onFocus(event)
        }
        this.setState({
            focused: true
        })
    }

    handleBlur = event => {
        this.setState({
            focused: false
        })
    }

    render() {
        let className = `${style.root} `;
        let color = `${style.contactBtn} `
        if (this.state.focused) {
            className += style.onFocus
        }
        if (this.props.color) {
            className += style.contactBtn
        }
        if (this.state.focused && this.props.color) {
            className = color + style.onFoc
        }
        const {handleChange, children, value} = this.props;
        return (
            <button
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onClick={handleChange}
                className={className}
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