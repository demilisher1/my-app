import React from 'react';
import style from './WorksFilter.module.css';

import Label from "../../../../../common/Label/Label";
import Select from "../../../../../common/Select/Select";
import Input from "../../../../../common/Input/Input";
import PropTypes from "prop-types";

class WorksFilter extends React.Component {
    state = {
        searchValue: '',
        selectValue: 'work'
    }

    render() {
        const {value, option, valueSearch, input, select} = this.props;
        return(
            <div>
                <Label title="Фильтруемое поле" >
                    <Select
                        value={value}
                        handleChange={select}
                        options={option}
                    />
                </Label>
                <Label title="Поиск элемента по полю">
                    <Input
                        valueSearch={valueSearch}
                        handleChange={input}
                    />
                </Label>
            </div>
        );
    }
}

WorksFilter.propTypes = {
    value: PropTypes.string.isRequired,
    option: PropTypes.array.isRequired,
    valueSearch: PropTypes.func.isRequired,
    input: PropTypes.func.isRequired,
    select: PropTypes.func.isRequired

};

export default WorksFilter;
