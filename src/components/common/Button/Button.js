import React from "react";
import PropTypes from "prop-types"
import style from "./Button.module.css"

class Button extends React.Component{
    state = {
        focused: false,
    }

    handleFocus = (event) => {
        this.props.onFocus(event)
        this.setState({
            focused: true
        })
    }

    handleBlur = event => {
        this.setState({
            focused: false
        })
    }

    getClassName = () => {
        let className = `${style.root} ${style[this.props.theme] || ''} `;


        if (this.state.focused) {
            className += style.focus
        }

        return className;
    }

    render() {
        const {handleChange, children, value} = this.props;
        const className = this.getClassName();

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
    theme: PropTypes.oneOf(['primary', 'secondaryDark']),
    type: PropTypes.string
}


Button.defaultProps = {
    onFocus: () => {},
    theme: 'primary'
}

export default Button