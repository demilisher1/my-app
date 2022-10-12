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

        // Литеральный способ
        const obj = {
            name: "Alex",
            middleName: "Shu",
            getName() {
                return this.name
            }
        };

        // Стандартный конструктор JS
        const obj1 = new Object();
        obj1.name = "Alex"
        obj1.middleName = "Shu"
        obj1.getName = function () {
            return this.name
        }

        // анонимное создание объекта
        const obj4 = {};
        obj4.name = "Alex"
        obj4.getName = function () {
            return this.name
        }

        // Объект как ассоциативный массив
        const obj3 = new Object();
        obj3["name"] = "Alex";
        obj3["getName"] = function () {
            return this.name
        }

            // Создание объекта с помощью функции
        function Obj5(name) {
            const nameQ = name
            this.getName = function() {
                return nameQ
            }
        }

        function Obj6(name) {
            this.name = name
            this.getName = () =>  {
                return this.name
            }
        }

        function Obj7(name) {
            this.name = name
            this.getName = function() {
                return this.name
            }
        }


        const Test123 = (name) => {
            this.name = name
            this.getName = function() {
                return this.name
            }
        }

        function lesha(name) {
            this.name = name
            this.getName = function() {
                return this.name
            }
        }


        let person = new Obj5('Alex');
        let person2 = new Obj7('Alex')
        let person3 = new Test123('Alex')
        let person4 = new Obj6('Alex')
        let person5 = new lesha('Alex')


        console.log(person.getName()) //Alex
        console.log(person2.getName()) // Alex
        console.log(person3.getName()) // Alex
        console.log(person4.getName()) // Alex
        console.log(person5.getName()) //error


            // С помощью класса
        //
        // class Obj6 {
        //     constructor(name) {
        //          this.name = name;
        //     }
        //     sayHi() {
        //         // console.log(this.name)
        //     }
        // }
        // let objUser = new Obj6("Alex");
        // objUser.sayHi();

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