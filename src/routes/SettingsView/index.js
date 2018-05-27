/**
 * Settings view
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from './container';
import SettingsForm from './components/SettingsForm';
import { updateFeedTheme, updateNumberPosts, updateMinutesInterval } from '../../actions/actionsFilterFeed';
import ParamModel from '../../models/ParamModel';

/* Component ===================================== */

class SettingsView extends Component{


    _updateTheme = (theme) => {
        let category = new ParamModel('category', theme);
        this.props.updateFeedTheme(category);
    }

    _updateNumberPosts = (number) => {
        let pageSize = new ParamModel('pageSize', number);
        this.props.updateNumberPosts(pageSize);
    }

    _updateMinutesInterval = (minutes) => {
        this.props.updateMinutesInterval(minutes);
    }
    
    render(){
        return(
            <Container>
                <SettingsForm
                    updateTheme = {this._updateTheme}
                    updateNumberPosts = {this._updateNumberPosts}
                    updateMinutesInterval = {this._updateMinutesInterval}
                    numberOfPosts = {this.props.numberOfPosts.value }
                    feedTheme = { this.props.feedTheme.value }
                    interval = { this.props.interval }
                />
            </Container>
        );
    }
}

/* Connect to store ===================================== */

function mapStateToProps(state, props){
    return {
        numberOfPosts:state.dataFeedFilter.numberOfPosts,
        feedTheme:state.dataFeedFilter.feedTheme,
        interval:state.dataFeedFilter.interval,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateFeedTheme: (theme) => dispatch(updateFeedTheme(theme)),
        updateNumberPosts: (number) => dispatch(updateNumberPosts(number)),
        updateMinutesInterval: (minutes) => dispatch(updateMinutesInterval(minutes))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);