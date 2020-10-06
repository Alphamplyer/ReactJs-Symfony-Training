import React, {Component} from "react";
import RepLog from "./RepLog";
import PropTypes from 'prop-types';

export default class RepLogApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            highlightedRowId: null,
        }

        this.handleRowClick = this.handleRowClick.bind(this);
    }

    handleRowClick(repLogId) {
        this.setState( { highlightedRowId: repLogId })
    }

    render() {
        const { highlightedRowId } = this.state;
        const { withHeart } = this.props;

        return <RepLog
            withHeart={ withHeart }
            highlightedRowId={ highlightedRowId }
            onRowClick={ this.handleRowClick }
        />
    }
}

RepLogApp.propTypes = {
    highlightedRowId: PropTypes.any,
    withHeart: PropTypes.bool,
}