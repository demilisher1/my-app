import React from 'react';
import Label from "../../../../../common/Label/Label";
import Select from "../../../../../common/Select/Select";
import Input from "../../../../../common/Input/Input";
import style from './WorksFilter.module.css';
import {connect} from "react-redux";
import {changeDataState, setIncomingData} from "../../../../../../store/worksTableSlice/worksTableSlice";

class WorksFilter extends React.Component {
    state = {
        /** searchValue это вэлью для инпута. */
        searchValue: '',
        /** selectValue это вэлью для селекта. */
        selectValue: 'work'
    };

    filterIncomingData = (selectValue, searchValue) => {
        const data = this.props.incomingData.filter((item) => {
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
        const { head } = this.props;
        const {searchValue, selectValue} = this.state;

        return(
            <div>
                <Label title="Фильтруемое поле" >
                    <Select
                        value={selectValue}
                        options={head}
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

function mapStateToProps(state) {
    return {
        head: state.worksTable.head,
        incomingData: state.worksTable.incomingData,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        changeDataState: (data) => dispatch(changeDataState({data})),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorksFilter)