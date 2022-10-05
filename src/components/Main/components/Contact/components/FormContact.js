import React from "react";
import style from './FormContact.module.css'
import Label from "../../../../common/Label/Label";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

class FormContact extends React.Component{
    state = {
        nameValue: '',
        emailValue: '',
    }

    handleSubmit = (event) => {
        alert(this.state.nameValue + ' Вам поступит письмо на почту ' +  this.state.emailValue );
        event.preventDefault();
    }

    handleChange = ( value, field) => {
        this.setState({
            [field]: value
        })
    }

    onFocus = (event) => {
        // console.log(event)
    }

    render() {
        const {nameValue, emailValue} = this.state;
        return (
            <form onSubmit={this.handleSubmit}  className={style.formInput}>
                <div>
                    <Label>
                        <div className={style.inputName}>
                            <Input
                                onFocus={this.onFocus}
                                field="nameValue"
                                value={nameValue}
                                handleChange={this.handleChange}
                                placeholder="Введите ваше имя..."
                                label={"Имя"}
                            />
                        </div>
                    </Label>
                    <Label >
                        <div className={style.inputEmail}>
                            <Input
                                validate={false}
                                type="email"
                                field="emailValue"
                                value={emailValue}
                                handleChange={this.handleChange}
                                placeholder="Введите ваш email..."
                                label={"Email"}
                            />
                        </div>
                    </Label>
                </div>
                <Label>
                    <textarea
                        className={style.textarea}
                        cols="15" rows="2"
                        placeholder='Ваш текст'
                    />
                </Label>
                <Button
                    fullWidth={true}
                    handleChange={this.handleChange}
                    type="submit"
                    value={'Связаться'}
                />
                <Button
                    fullWidth={true}
                    theme={'secondaryDark' }
                    handleChange={this.handleChange}
                    type="submit"
                    value={'Сбросить'}
                />
            </form>
        );
    }
}

export default FormContact;