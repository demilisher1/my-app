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
        const {worksHead} = this.props;
        const {searchValue, selectValue} = this.state;
        return(
            <div>
                <Label title="Фильтруемое поле" >
                    <Select
                        value={selectValue}
                        handleChange={this.handleChangeSelect}
                        options={worksHead}
                    />
                </Label>
                <Label title="Поиск элемента по полю">
                    <Input
                        value={searchValue}
                        handleChange={this.handleChange}
                    />
                </Label>
            </div>
        );
    }
}

export default WorksFilter;
