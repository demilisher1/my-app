import React from "react";
import style from './FormContact.module.css'
import Label from "../../../../common/Label/Label";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

class FormContact extends React.Component{
    state = {
        nameValue: '',
        emailValue: '',
    };

    handleSubmit = (event) => {
        alert(this.state.nameValue + ' Вам поступит письмо на почту ' +  this.state.emailValue );
        event.preventDefault();
    }

    handleChange = ( value, field) => {
        this.setState({
            [field]: value
        })
    }

    onFocus = event => {
        console.log(event)
    }


    render() {
        const {nameValue, emailValue} = this.state;
        return (
            <form onSubmit={this.handleSubmit} className={style.formGroup}>
                <Label title={'Ваше имя'} >
                    <Input
                        onFocus={this.onFocus}
                        type="text"
                        field="nameValue"
                        value={nameValue}
                        handleChange={this.handleChange}
                        placeholder="Введите ваше имя..."
                    />
                </Label>
                <Label title={'Ваш email'}>
                    <Input
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
                <Button
                    handleChange={this.handleChange}
                    type="submit"
                    value={'Связаться'}
                    />
            </form>
        );
    }
}

export default FormContact;