import React from "react";
import style from './WorksTable.module';
import WorksHead from "./WorkHead/WorkHead";
import WorkItem from "./WorkItem/WorkItem";

class WorksTable extends React.Component{
    state = {
        hideColumns: [],
    };


    removeCollumHead = (column) => {
        const hideColumns = [...this.state.hideColumns];
        const indexHC = hideColumns.indexOf(column);

        if(indexHC !== -1){
            hideColumns.splice(indexHC, 1)
        } else{
            hideColumns.push(column)
        }

        this.setState({
            hideColumns
        })
    };

    render() {
        console.log(this.props)
        return (
            <div>
                {visible && data.length  && (
                    <>
                        <div className={style.headItem}>
                            {head.map(({column, title}, index) => {
                                    return <WorksHead
                                        key={index}
                                        column={column}
                                        title={title}
                                        index={index}
                                        removeCollumHead={this.removeCollumHead}
                                        hideColumns={hideColumns}
                                    />
                                }
                            )}
                        </div>
                        <div className={style.dataItem}>
                            {data.map(({work, dolsnost, data, id}, index) =>  {
                                let lesha = style.dataItem2;
                                let evgeniy = index + 1;
                                if (index %2 !== 0) {
                                    lesha = lesha + ' ' + style.odd
                                    evgeniy = `#${evgeniy}`
                                } else {
                                    lesha = lesha + ' ' + style.even
                                    evgeniy = `*${evgeniy}`
                                }

                                return (
                                    <WorkItem
                                        key={id}
                                        lesha={lesha}
                                        index={index}
                                        evgeniy={evgeniy}
                                        work={work}
                                        dolsnost={dolsnost}
                                        data={data}
                                        removeItem={this.removeItem}
                                        hideColumns={hideColumns}
                                    />
                                )
                            })}
                        </div>
                    </>
                ) ||  (
                    <div>Нет данных для отображения!</div>
                )}
            </div>

        )
    }
}

export default WorksTable;