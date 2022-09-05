import React from "react";
import PropTypes from 'prop-types';
import style from './Input.module.css'
import Label from "../Label/Label";


class Input extends React.Component{
    render() {
        const {type, onChange, children} = this.props;
        return (
            <Label>
                {children}
            </Label>
        );
    }
}
Label.propTypes = {
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default Input;