import React from 'react';
import style from './WorksFilter.module.css';

import Label from "../../../../../common/Label/Label";
import Select from "../../../../../common/Select/Select";
import Input from "../../../../../common/Input/Input";

class WorksFilter extends React.Component {
    state = {
        /** searchValue это вэлью для инпута. */
        searchValue: '',
        /** selectValue это вэлью для селекта. */
        selectValue: 'work'
    };

    filterIncomingData = (selectValue, searchValue) => {
        const data = this.props.array.filter((item) => {
            if (!item[selectValue]) {
                return true
            } else {
                return item[selectValue].toLowerCase().includes(searchValue.toLowerCase())
            }
        });

        this.props.changeDataState(data)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState !== this.state){
            this.filterIncomingData(this.state.selectValue, this.state.searchValue);
        }
    }

    handleChange = (value, field) => {
        this.setState({
            [field]: value
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
                        options={worksHead}
                        field="selectValue"
                        handleChange={this.handleChange}

                    />
                </Label>
                <Label title="Поиск элемента по полю">
                    <Input
                        value={searchValue}
                        field="searchValue"
                        handleChange={this.handleChange}
                    />
                </Label>
            </div>
        );
    }
}

export default WorksFilter;
