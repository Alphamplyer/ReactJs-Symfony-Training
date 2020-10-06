import React from 'react';
import RepLogList from "./RepLogList";
import RepLogApp from "./RepLogApp";
import PropTypes from "prop-types";
import RepLogCreator from "./RepLogCreator";
// import RepLogCreator from "./RepLogCreatorControlledComponents";

/**
 * Calculate the total of amount contain in totalWeightLifted properties of logs
 * @param repLogs the logs
 * @returns {number} the sum of amount contain in totalWeightLifted properties of logs
 */
const calculateTotalWeightFancier = repLogs => repLogs.reduce((total, log) => total + log.totalWeightLifted, 0);

export default function RepLogs (props) {
    const {
        withHeart,
        numberOfHearts,
        highlightedRowId,
        repLogs,
        successMessage,
        isLoaded,
        isSavingNewRepLog,
        onRowClick,
        onAddRepLog,
        onHeartChange,
        onDeleteRepLog,
    } = props;

    let heart = withHeart ? <span>{ '❤'.repeat(numberOfHearts) }</span> : '';

    return (
        <div className="col-md-7">
            <h2>Lift History! { heart }</h2>

            <input
                type="number"
                value={ numberOfHearts }
                onChange={ (e) => {
                    onHeartChange(+e.target.value)
                }}
            />

            { successMessage && (
                <div className="alert alert-success text-center">
                    { successMessage }
                </div>
            ) }

            <table className="table table-striped">
                <thead>
                <tr>
                    <th>What</th>
                    <th>How many times?</th>
                    <th>Weight</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <RepLogList
                    highlightedRowId={ highlightedRowId }
                    onRowClick={ onRowClick }
                    repLogs={ repLogs }
                    isLoaded={ isLoaded }
                    onDeleteRepLog={ onDeleteRepLog }
                    isSavingNewRepLog={ isSavingNewRepLog }
                />
                <tfoot>
                <tr>
                    <td>&nbsp;</td>
                    <th>Total</th>
                    <th>{ calculateTotalWeightFancier(repLogs) }</th>
                    <td>&nbsp;</td>
                </tr>
                </tfoot>
            </table>

            <div className="row">
                <div className="col-md-6">
                    <RepLogCreator
                        onAddRepLog={ onAddRepLog }
                    />
                </div>
            </div>

        </div>
    );
}

RepLogs.propTypes = {
    withHeart: PropTypes.bool.isRequired,
    numberOfHearts: PropTypes.number.isRequired,

    highlightedRowId: PropTypes.any,
    repLogs: PropTypes.array.isRequired,

    successMessage: PropTypes.string.isRequired,

    isLoaded: PropTypes.bool.isRequired,
    isSavingNewRepLog: PropTypes.bool.isRequired,

    onRowClick: PropTypes.func.isRequired,
    onAddRepLog: PropTypes.func.isRequired,
    onHeartChange: PropTypes.func.isRequired,
    onDeleteRepLog: PropTypes.func.isRequired
}