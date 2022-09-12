import React from 'react';
import style from './WorksFilter.module.css';

import Label from "../../../../../common/Label/Label";
import Select from "../../../../../common/Select/Select";
import Input from "../../../../../common/Input/Input";

class WorksFilter extends React.Component {
    state = {
        searchValue: '',
        selectValue: 'work'
    };

    handleChange = (value) => {
        this.setState({
            searchValue: value,
            data: this.filterIncomingData(this.state.selectValue, value)
        })
    };

    handleChangeSelect = (value) => {
        this.setState({
            selectValue: value,
            data: this.filterIncomingData(value, this.state.searchValue)
        })
    };

    render() {
        const {} = this.props;
        const {searchValue, selectValue} = this.state;
        return(
            <div>
                <Label title="Фильтруемое поле" >
                    <Select
                        value={selectValue}
                        handleChange={select}
                        options={option}
                    />
                </Label>
                <Label title="Поиск элемента по полю">
                    <Input
                        valueSearch={searchValue}
                        handleChange={input}
                    />
                </Label>
            </div>
        );
    }
}

export default WorksFilter;
