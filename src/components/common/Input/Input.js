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

    /**
     * Метод handleChange реагирует на изменения в инпуте и оптравляет данные в функцию handleChange принимаемую в пропсах
     *
     * @param {object} event
     *
     * @return void
     */
    handleChange = event => {
        const { handleChange,  field, placeholder, type} = this.props
        handleChange(event.target.value, field, event)
    }

    render() {
        const {value} = this.props;
        return (
            <input onChange={this.handleChange} className={style.root} value={value}/>
        );
    }
}

Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    field: PropTypes.string,
};

export default Input;