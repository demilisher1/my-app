import React from "react";
import style from './WorksTable.module.css';
import WorksHead from "./WorkHead/WorkHead";
import WorkItem from "./WorkItem/WorkItem";
import PropTypes from "prop-types";
import {connect} from "react-redux";


class WorksTable extends React.Component{

    render() {
        const {head, data, visibleTable, removeItem} = this.props
        return (
            <div>
                {visibleTable && data.length &&  (
                    <>
                        <div className={style.headItem}>
                            {head.map(({column, title}, index) => {
                                    return <WorksHead
                                        key={index}
                                        column={column}
                                        title={title}
                                        index={index}
                                    />
                                }
                            )}
                        </div>
                        <div>
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
                                        removeItem={removeItem}
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
WorksTable.propTypes = {
    field: PropTypes.string,
    hideColumn: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
        visibleTable: state.worksTable.visible,
        hideColumn: state.worksTable.hideColumns,
        head: state.worksTable.head,
        data: state.worksTable.data
    }
}

export default connect(mapStateToProps)(WorksTable)
