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
        changeColors: null
    }

    clickCollumHead = () => {
        const {removeCollumHead, column} = this.props;
        removeCollumHead(column);
    }
    clickChangeColors = () => {
        // let currentColor = this.state.changeColors;
        // if (currentColor === null) {
        //     currentColor = this.state.colors[0];
        // } else {
        //     const index = this.state.colors.indexOf(currentColor);
        //     if (index < this.state.colors.length -1 ) {
        //         currentColor = this.state.colors[index + 1]
        //     } else {
        //         currentColor = this.state.colors[0]
        //     }
        // }

        let currentColor = this.state.changeColors;
        if (currentColor === null || currentColor === this.state.colors.length -1) {
            currentColor = -1
        }
        currentColor ++

        this.setState({
            changeColors: currentColor
        })
    }

    render() {
        const {hideColumns, column} = this.props;
        const {colors, changeColors} = this.state;

        const style = {
            background: colors[changeColors]
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