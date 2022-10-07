import React from "react";
import PropTypes from "prop-types"
import style from "./Select.module.css"

class Select extends React.Component {
    state = {
        focused: false,
    }

    handleChange = event => {
        const { handleChange, field } = this.props
        handleChange(event.target.value, field, event)
    }

    handleFocus = (event) => {
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
        let className = `${style.selectDefault} `;
        if(this.state.focused){
            className += style.onFocus
        }
        const {options, value, itemFormat} = this.props;
        return (
            <select
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                className={className}
                value={value}
                onChange={this.handleChange}
            >
                {options.map(item => (
                    <option key={item[itemFormat.value]} value={item[itemFormat.value]}>
                        {item[itemFormat.name]}
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
    field: PropTypes.string,
    itemFormat: PropTypes.object.isRequired,
};

export default Select;
