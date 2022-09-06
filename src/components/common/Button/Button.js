import React from "react";
import PropTypes from "prop-types"
import style from "./Button.module.css"

class Button extends React.Component{
    render() {
        const {changeVariableTable, visible} = this.props;
        return (
            <button onClick={changeVariableTable} className={style.root}>
                {visible?'Скрыть список':'Показать список'}
            </button>
        );
    }
}

Button.propTypes = {
    changeVariableTable: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
}

export default Button