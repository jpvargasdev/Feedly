/**
 * MainView with posts
 */
import React, { Component } from "react";
import { connect } from "react-redux";

// components
import Container from "./container";
import List from "./components/List";
import Search from "./components/Search";

// actions
import { getData } from "../../actions/actionsFeed";
import setIntervalHOC from "../../decorators/setIntervalHOC";
import Utils from "../../utils/Utils";
 
// type
type PropsType = {
    numberOfPosts: Number,
    feedTheme: String,
    interval: Number,
    topic: String
};
type StateType = {
    feedTheme: String,
    numberOfPosts: Number
};

// constants
const TAG = "FeedView";

/* Component ================== */
class FeedView extends Component<PropsType, StateType>{
    state = {
        feedTheme:null,
        numberOfPosts:null,
    };

    componentDidMount(){
        const { feedTheme , numberOfPosts, interval } = this.props;

        this.setState({feedTheme, numberOfPosts});
        this.reloadInterval(interval);
    }

    tick = () => {
        this.fetchData();
    }

    reloadInterval = (time) => {
        const { clearCurrentInterval, setInterval } = this.props;
        console.log(TAG + ": Updating interval to " + time + " minute(s)");

        clearCurrentInterval();
        setInterval(
            this.tick,
            Utils.setTimeToMinutes(time) // TODO: use Utils.setTimeToMinutes(time), the current line is only for test
        );
    }

    shouldComponentUpdate(nextProps, nextState){
        if ( this.props.numberOfPosts && this.props.feedTheme && this.props.topic ) {
            return this.props.numberOfPosts.value != nextProps.numberOfPosts.value ||
            this.props.feedTheme.value != nextProps.feedTheme.value ||
            this.props.topic.value != nextProps.topic.value
        } else {
            return false
        }
    }

    componentWillReceiveProps(nextProps){
        if( this.props.numberOfPosts ){
            if ( this.props.numberOfPosts.value != nextProps.numberOfPosts.value){
                this.state.numberOfPosts= nextProps.numberOfPosts;
                this.fetchData();
            }
        }    
        if ( this.props.feedTheme ){
            if ( this.props.feedTheme.value != nextProps.feedTheme.value){
                this.state.feedTheme = nextProps.feedTheme;
                this.fetchData();
            }
        }
        if ( this.props.interval ){
            if( this.props.interval != nextProps.interval){
                this.reloadInterval(nextProps.interval);
            }
        }
    }

    fetchData = (topic) => {
        let filter = [];
        if ( topic ){
            filter.push(topic)
            filter.push(this.state.feedTheme);
            filter.push(this.state.numberOfPosts);
            this.props.getData(filter);
        } else {
            if ( this.props.topic ){
                filter.push(this.props.topic);
                filter.push(this.state.feedTheme);
                filter.push(this.state.numberOfPosts);
                this.props.getData(filter);
            }
        }
    }

    render(){
        return(
            <Container>
                <Search fetchData = {this.fetchData}/>
                <List 
                    fetchData = {this.fetchData}
                    topic = {this.props.topic}
                />
            </Container>
        );
    }
}

/* Store connection ================== */
function mapStateToProps(state){
    return {
        numberOfPosts:state.dataFeedFilter.numberOfPosts,
        feedTheme:state.dataFeedFilter.feedTheme,
        interval:state.dataFeedFilter.interval,
        topic:state.dataFeedFilter.topic
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: (filter) => dispatch(getData(filter)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(setIntervalHOC(FeedView));
