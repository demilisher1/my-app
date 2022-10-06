import React from "react";
import style from './FormContact.module.css'
import Label from "../../../../common/Label/Label";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import {object} from "prop-types";

class FormContact extends React.Component{
    state = {
        formData: {
            name: '',
            email: '',
        },
    }

    handleSubmit = (event) => {
        alert(this.state.formData["name"] + ' Вам поступит письмо на почту ' +  this.state.formData["email"] );
        console.log(this.state.formData)
        event.preventDefault();
    }

    handleChange = ( value, field) => {

        this.setState({
            formData: {
                ...this.state.formData,
                [field]: value
            }
        })
    }

    onFocus = (event) => {
        // console.log(event)
    }

    render() {
        const {name, email} = this.state.formData;

        return (
            <form onSubmit={this.handleSubmit}  className={style.formInput}>
                <div>
                    <Label>
                        <div className={style.inputName}>
                            <Input
                                onFocus={this.onFocus}
                                field="name"
                                value={name}
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
                                field="email"
                                value={email}
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
                    fullWidth
                    handleChange={this.handleChange}
                    type="submit"
                    value={'Связаться'}
                />
                <Button
                    fullWidth
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