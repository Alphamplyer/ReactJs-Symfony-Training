import React from 'react';
import PropTypes from 'prop-types';

export default function RepLogList (props) {
    const { highlightedRowId, repLogs, onRowClick, onDeleteRepLog } = props;

    const handleDeleteRepLog = function (event, repLogId) {
        event.preventDefault();

        onDeleteRepLog(repLogId);
    }

    return (
        <tbody>
        { repLogs.map((repLog) => (
            <tr
                key={ repLog.id }
                className={highlightedRowId === repLog.id ? 'info' : ''}
                onClick={ () => onRowClick(repLog.id) }
            >
                <td>{ repLog.itemLabel }</td>
                <td>{ repLog.reps }</td>
                <td>{ repLog.totalWeightLifted }</td>
                <td>
                    <a href="#" onClick={ (event) => handleDeleteRepLog(event, repLog.id) }>
                        <span className="fa fa-trash"></span>
                    </a>
                </td>
            </tr>
        )) }
        </tbody>
    );
}

RepLogList.propTypes = {
    highlightedRowId: PropTypes.any,
    repLogs: PropTypes.array.isRequired,

    onRowClick: PropTypes.func.isRequired,
    onDeleteRepLog: PropTypes.func.isRequired
}