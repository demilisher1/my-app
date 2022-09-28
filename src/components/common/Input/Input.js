import React from "react";
import PropTypes from 'prop-types';
import style from './Input.module.css'

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


    render() {
        const {value, type, placeholder} = this.props;
        let className = `${style.DefaultEmpty} `;
        if(this.state.focused){
            className += style.DefaultFocus
        }


        return (
            <input
                type={type}
                placeholder={placeholder}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                className={className}
                value={value}
            />
        );
    }
}

Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    field: PropTypes.string,
};

export default Input;