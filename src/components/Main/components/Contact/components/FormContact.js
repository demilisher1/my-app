import React from "react";
import style from './FormContact.module.css'
import Label from "../../../../common/Label/Label";
import Input from "../../../../common/Input/Input";

class FormContact extends React.Component{
    state = {
        nameValue: '',
        emailValue: '',
    };


    handleSubmit = (event) => {
        alert(this.state.nameValue + ' Вам поступит письмо на почту ' +  this.state.emailValue );
        event.preventDefault();
    }

    handleChange = ( value, field, event) => {
        this.setState({
            [field]: value
        })
    }


    render() {
        const {nameValue, emailValue} = this.state;
        return (
            <form onSubmit={this.handleSubmit} className={style.formGroup}>
                <Label title={'Ваше имя'} >
                    <Input
                        // name='nameValue'
                        type="text"
                        field="nameValue"
                        value={nameValue}
                        handleChange={this.handleChange}
                        placeholder="Введите ваше имя..."
                    />
                </Label>
                <Label title={'Ваш email'}>
                    <Input
                        // name='emailValue'
                        type="email"
                        field="emailValue"
                        value={emailValue}
                        handleChange={this.handleChange}
                        placeholder="Введите ваш email..."
                    />
                </Label>
                <Label title={'Введите ваш текст'}>
                    <textarea  cols="15" rows="2"></textarea>
                </Label>
                <input
                    className={style.btn}
                    type="submit"
                    value="Связаться!"/>
            </form>
        );
    }
}

export default FormContact;