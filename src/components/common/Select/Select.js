import React from "react";
import PropTypes from "prop-types"
import style from "./Select.module.css"

class Select extends React.Component {

    handleChange = event => {
        const { handleChange, field } = this.props
        handleChange(event.target.value, field, event)
    }

    render() {
        const {options, value, onFocus, onBlur} = this.props;
        return (
            <select
                value={value}
                onChange={this.handleChange}
                className={style.root}
                onFocus={onFocus}
                onBlur={onBlur}
            >
                {options.map(item => (
                    <option key={item.column} value={item.column}>
                        {item.title}
                    </option>
                ))}
            </select>
        )
    }
}

Select.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    field: PropTypes.string
};

export default Select;
