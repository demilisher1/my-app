import React from 'react';
import Label from "../../../../../common/Label/Label";
import Select from "../../../../../common/Select/Select";
import Input from "../../../../../common/Input/Input";
import {connect} from "react-redux";
import {changeDataState} from "../../../../../../store/worksTableSlice/worksTableSlice";

class WorksFilter extends React.Component {
    state = {
        /** searchValue это вэлью для инпута. */
        searchValue: '',
        searchTest: '',
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
        const { head, test } = this.props;
        const {searchValue, selectValue, searchTest} = this.state;


        function FIO({firstName, lastName, middleName}) {
            return `${firstName} ${lastName} ${middleName}`
        }

        let user = {
            get firstName() {
                return this._firstName || 'текст по дефолту';
            },
            set firstName(value) {
                if(value.length > 0){
                    this._firstName = value;
                    this.fio = FIO(this)
                } else {
                    this.validUser = false;
                }

            },
            get lastName() {
                return this._lastName || 'текст по дефолту';
            },

            set lastName(value) {
                if(value.length > 0){
                    this._lastName = value;
                    this.fio = FIO(this)
                } else {
                    this.validUser = false;
                }
            },
            get middleName() {
                return this._middleName || 'текст по дефолту';
            },

            set middleName(value) {
                this._middleName = value;
                if(value.length > 0){
                    this._middleName = value;
                    this.fio = FIO(this)
                } else {
                    this.validUser = false;
                }
            },

            validUser: true,
            fio: 'пока тут ничего нет'
        };

        user.firstName = 'Алексей';

        user.lastName = 'Шуляков'

        user.middleName = 'Юрич'

        user.firstName = '';

        user.lastName = ''

        user.middleName = ''

        console.log(user.fio)

        return(
            <div>
                <Label title="Фильтруемое поле" >
                    <Select
                        value={selectValue}
                        itemFormat={{
                            name: 'title',
                            value: 'column'
                        }}
                        options={head}
                        field="selectValue"
                        handleChange={this.handleChange}
                    />
                </Label>
                <Label title="Новый какой то фильтр" >
                    <Select
                        value={searchTest}
                        itemFormat={{
                            name: 'qwe',
                            value: 'test123'
                        }}
                        options={test}
                        field="searchTest"
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
        test: state.worksTable.test,
        incomingData: state.worksTable.incomingData,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        changeDataState: (data) => dispatch(changeDataState({data})),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorksFilter)