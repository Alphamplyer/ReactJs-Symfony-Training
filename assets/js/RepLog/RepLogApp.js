import React, {Component} from "react";
import RepLogs from "./RepLogs";
import uuid from 'uuid/dist/v4';
import { getRepLogs, deleteRepLog, createRepLog } from "../api/rep_log_api";
import PropTypes from 'prop-types';

export default class RepLogApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            highlightedRowId: null,
            repLogs: [],
            numberOfHearts: 1,
            isLoaded: false,
        }

        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleAddRepLog = this.handleAddRepLog.bind(this);
        this.handleHeartChange = this.handleHeartChange.bind(this);
        this.handleDeleteRepLog = this.handleDeleteRepLog.bind(this);
    }

    componentDidMount() {
        getRepLogs().then((data) => {
            this.setState({
                repLogs: data,
                isLoaded: true
            });
        });
    }

    handleRowClick (repLogId) {
        this.setState( { highlightedRowId: repLogId })
    }

    handleAddRepLog (item, reps) {
        const newRep = {
            reps: reps,
            item: item,
        }

        createRepLog(newRep)
            .then(repLog => {
                this.setState(prevState => {
                    const newRepLogs = [...prevState.repLogs, repLog];
                    return { repLogs: newRepLogs };
                });
            });
    }

    handleHeartChange (heartCount) {
        if (heartCount < 1) {
            heartCount = 1
        }

        this.setState({
            numberOfHearts: heartCount
        })
    }

    handleDeleteRepLog(id) {
        deleteRepLog(id);

        // remove the rep log without mutating state
        // filter returns a new array
        this.setState((prevState) => {
            return {
                repLogs: prevState.repLogs.filter(repLog => repLog.id !== id)
            }
        });
    }

    render() {
        return <RepLogs
            {...this.props}
            {...this.state}
            onRowClick={ this.handleRowClick }
            onAddRepLog={ this.handleAddRepLog }
            onHeartChange={ this.handleHeartChange }
            onDeleteRepLog={ this.handleDeleteRepLog }
        />
    }
}