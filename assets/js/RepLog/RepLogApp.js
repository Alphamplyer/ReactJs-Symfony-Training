import React, {Component} from "react";
import RepLog from "./RepLog";
import PropTypes from 'prop-types';

export default class RepLogApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            highlightedRowId: null,
            repLogs : [
                { id: 1, reps: 25, itemLabel: 'My Laptop', totalWeightLifted: 112.5 },
                { id: 2, reps: 10, itemLabel: 'Big Fat Cat', totalWeightLifted: 180 },
                { id: 8, reps: 4, itemLabel: 'Big Fat Cat', totalWeightLifted: 72 }
            ]
        }

        this.handleRowClick = this.handleRowClick.bind(this);
    }

    handleRowClick(repLogId) {
        this.setState( { highlightedRowId: repLogId })
    }

    render() {
        const { highlightedRowId, repLogs } = this.state;
        const { withHeart } = this.props;

        return <RepLog
            withHeart={ withHeart }
            highlightedRowId={ highlightedRowId }
            onRowClick={ this.handleRowClick }
            repLogs={ repLogs }
        />
    }
}

RepLogApp.propTypes = {
    highlightedRowId: PropTypes.any,
    withHeart: PropTypes.bool,
    repLogs: PropTypes.array.isRequired
}