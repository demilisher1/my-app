import React from "react";
import PropTypes from 'prop-types';
import style from './Input.module.css'
import {isLabelWithInternallyDisabledControl} from "@testing-library/user-event/dist/utils";

/**
 * Это Input
 *
 * @param {function} handleChange Вызфыветчсмчпвап
 * @param {string} value dsfsdf
 * @param {string} field dsfsdf
 * @public
 */
class Input extends React.Component{
    state = {
        focused: false
    }

    /**
     * Метод handleChange реагирует на изменения в инпуте и оптравляет данные в функцию handleChange принимаемую в пропсах
     *
     * @param {object} event
     *
     * @return void
     */
    handleChange = event => {
        const { handleChange,  field} = this.props
        handleChange(event.target.value, field, event)
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

    getClassName = () => {
        let className = `${style.root} ${style[this.props.theme] || ''} `;

        if (this.state.focused && this.props.placeholder ) {
            className += style.placeholder
        }
        if (this.props.validate === false) {
            className += style.errorActiveFilled
        }
        return className;
    }

    render() {
        const {value, type, placeholder } = this.props;
        const className = this.getClassName();

        return (<>
            <input
                type={type}
                // placeholder={placeholder}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                className={className}
                value={value}
            />
            <div className={style.label}>
                {placeholder}
            </div>
            </>
        );
    }
}

Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    field: PropTypes.string,
    placeholder: PropTypes.string,
    validate: PropTypes.bool,
   };

Input.defaultProps = {
    theme: 'inputs',
}
export default Input;