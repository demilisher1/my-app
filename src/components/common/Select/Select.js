import React from "react";
import PropTypes from "prop-types"
import style from "./Select.module.css"

class Select extends React.Component{
    render() {
        const {head, selectValue, handleChangeSelect} = this.props;
        return (
            <select value={selectValue} onChange={handleChangeSelect} className={style.root}>
                {head.map(item => (
                    <option key={item.column} value={item.column}>
                        {item.title}
                    </option>
                ))}
            </select>
        )
    }
}

Select.propTypes = {
    selectValue: PropTypes.string.isRequired,
    handleChangeSelect: PropTypes.func.isRequired,
    head: PropTypes.array.isRequired
}
export default Select;
