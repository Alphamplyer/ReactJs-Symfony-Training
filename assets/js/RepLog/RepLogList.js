import React from 'react';
import PropTypes from 'prop-types';

export default function RepLogList (props) {
    const {
        highlightedRowId,
        repLogs,
        isLoaded,
        onRowClick,
        onDeleteRepLog,
    } = props;

    const handleDeleteRepLog = function (event, repLogId) {
        event.preventDefault();

        onDeleteRepLog(repLogId);
    }

    if (!isLoaded) {
        return (
            <tbody>
                <tr>
                    <td colSpan="4" className="text-center">Loading...</td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody>
        { repLogs.map(({id, itemLabel, reps, totalWeightLifted}) => (
            <tr
                key={ id }
                className={highlightedRowId === id ? 'info' : ''}
                onClick={ () => onRowClick(id) }
            >
                <td>{ itemLabel }</td>
                <td>{ reps }</td>
                <td>{ totalWeightLifted }</td>
                <td>
                    <a href="#" onClick={ (event) => handleDeleteRepLog(event, id) }>
                        <span className="fa fa-trash"/>
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
    isLoaded: PropTypes.bool.isRequired,

    onRowClick: PropTypes.func.isRequired,
    onDeleteRepLog: PropTypes.func.isRequired
}