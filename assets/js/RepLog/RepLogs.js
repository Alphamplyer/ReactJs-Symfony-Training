import React from 'react';
import RepLogList from "./RepLogList";
import RepLogApp from "./RepLogApp";
import PropTypes from "prop-types";
import RepLogCreator from "./RepLogCreator";

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
        onRowClick,
        onAddRepLog,
        onHeartChange
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

    onRowClick: PropTypes.func.isRequired,
    onAddRepLog: PropTypes.func.isRequired,
    onHeartChange: PropTypes.func.isRequired
}