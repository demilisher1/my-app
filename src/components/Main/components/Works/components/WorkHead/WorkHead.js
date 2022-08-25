import React from "react";
import style from "../WorkItem/WorkItem.module.css";
// import style from './WorkHead.module.css'

class WorkHead extends React.Component {
    state = {
        colors: [
            'blue',
            'green',
            'aqua',
            'beige',
            'rgba(125, 134, 142, 1)',
            'white',
        ],
        lesha: ''
    }

    clickCollumHead = () => {
        const {removeCollumHead, column} = this.props;
        removeCollumHead(column);
    }
    clickChangeColors = () => {
        const color = this.state.colors[0];

        const variable = '123'

        const test = ['43534', '123', '345'];
        let result;

        const index = test.indexOf(variable);
        if (index !== -1) {
            const nextIndex = index + 1; //2
            result = test[nextIndex];
        }



        // result = 345
        console.log(result)




        this.setState({
            lesha: color
        })
    }

    render() {
        const {hideColumns, column} = this.props;
        const lesha = this.state.lesha
        const style = {
            background: lesha
        }

        return (
            <div>
                <div style={style}>{this.props.title}</div>
                <button onClick={this.clickCollumHead}>
                    {hideColumns.includes(column) ? 'Показать' : 'Скрыть'}
                </button>
                <button onClick={this.clickChangeColors}> Смени цвет
                </button>
            </div>
        )
    }
}

export default WorkHead;