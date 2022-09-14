import React from "react";
import style from './WorksTable.module.css';
import WorksHead from "./WorkHead/WorkHead";
import WorkItem from "./WorkItem/WorkItem";
import PropTypes from "prop-types";


class WorksTable extends React.Component{

    render() {
        const {worksHead, worksData, removeColumnHead, visible, hideColumn, removeItem} = this.props
        return (
            <div>
                {visible &&  (
                    <>
                        <div className={style.headItem}>
                            {worksHead.map(({column, title}, index) => {
                                    return <WorksHead
                                        key={index}
                                        column={column}
                                        title={title}
                                        index={index}
                                        removeCollumHead={removeColumnHead}
                                        hideColumns={hideColumn}
                                    />
                                }
                            )}
                        </div>
                        <div>
                            {worksData.map(({work, dolsnost, data, id}, index) =>  {
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
                                        hideColumns={hideColumn}
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
    worksHead: PropTypes.array.isRequired,
    worksData: PropTypes.array.isRequired,
    removeColumnHead: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    field: PropTypes.string,
    hideColumn: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired
}
export default WorksTable;