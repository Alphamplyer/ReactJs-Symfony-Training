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
        highlightedRowId,
        repLogs,
        onRowClick,
        onAddRepLog
    } = props;

    let heart = withHeart ? <span>❤</span> : '';

    return (
        <div className="col-md-7">
            <h2>Lift History! { heart }</h2>

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

            <RepLogCreator
                onAddRepLog={ onAddRepLog }
            />
        </div>
    );
}

RepLogs.propTypes = {
    highlightedRowId: PropTypes.any,
    withHeart: PropTypes.bool.isRequired,
    repLogs: PropTypes.array.isRequired,

    onRowClick: PropTypes.func.isRequired,
    onAddRepLog: PropTypes.func.isRequired
}