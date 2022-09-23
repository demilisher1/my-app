import React from "react";
import style from './FormContact.module.css'
import Label from "../../../../common/Label/Label";

class FormContact extends React.Component{
    state = {
        nameValue: '',
        emailValue: '',
    };


    handleSubmit = (event) => {
        alert(this.state.nameValue + ' Вам поступит письмо на почту ' +  this.state.emailValue );
        event.preventDefault();
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'text' ? target.value : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        const {nameValue, emailValue} = this.state;
        return (
            <form onSubmit={this.handleSubmit} className={style.formGroup}>
                <Label title={'Ваше имя'} >
                    <input
                        name='nameValue'
                        type="text"
                        value={nameValue}
                        onChange={this.handleInputChange}
                        placeholder="Введите ваше имя..."/>
                </Label>
                <Label title={'Ваш email'}>
                    <input
                        name='emailValue'
                        type="email"
                        value={emailValue}
                        onChange={this.handleInputChange}
                        placeholder="Введите ваш email..."/>
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