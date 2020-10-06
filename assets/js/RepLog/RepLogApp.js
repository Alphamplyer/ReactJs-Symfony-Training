import React, {Component} from "react";
import RepLogs from "./RepLogs";
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

export default class RepLogApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            highlightedRowId: null,
            repLogs: [
                { id: uuid(), reps: 25, itemLabel: 'My Laptop', totalWeightLifted: 112.5 },
                { id: uuid(), reps: 10, itemLabel: 'Big Fat Cat', totalWeightLifted: 180 },
                { id: uuid(), reps: 4, itemLabel: 'Big Fat Cat', totalWeightLifted: 72 }
            ]
        }

        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleNewItemSubmit = this.handleNewItemSubmit.bind(this);
    }

    handleRowClick(repLogId) {
        this.setState( { highlightedRowId: repLogId })
    }

    handleNewItemSubmit(itemName, reps) {
        const repLogs = this.state.repLogs;

        const newLog = {
            id: uuid(),
            reps: reps,
            itemLabel: itemName,
            totalWeightLifted: Math.floor(Math.random() * 50)
        }

        repLogs.push(newLog);
        this.setState({ repLogs: repLogs })
    }

    render() {
        return <RepLogs
            {...this.props}
            {...this.state}
            onRowClick={ this.handleRowClick }
            onNewItemSubmit={ this.handleNewItemSubmit }
        />
    }
}