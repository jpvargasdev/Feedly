import React, { Component } from "react";
import "./style/home.css";
import { connect } from "react-redux";

// components
import Search from "./components/Search";
import List from "./components/List";

// actions
import { getData } from "../../actions/actionsFeed";
import { updateFeedTheme, updateMinutesInterval, updateNumberPosts } from "../../actions/actionsFilterFeed";
import setIntervalHOC from "../../decorators/setIntervalHOC";
import Utils from "../../utils/Utils";

// models
import ParamModel from "../../models/ParamModel";

// container
import Container from "./container";

// type
type PropsType = {
  numberOfPosts: Number,
  feedTheme: String,
  interval: Number,
  topic: String,
  setInterval: Function,
  getData: Function,
  updateNumberPosts: Function,
  updateMinutesInterval: Function,
  clearCurrentInterval: Function,
  updateFeedTheme: Function
};
type StateType = {
  feedTheme: String,
  numberOfPosts: Number
};


class Home extends Component<PropsType, StateType> {
  state = {
    feedTheme: null,
    numberOfPosts: null
  };

  componentDidMount() {
    const { interval } = this.props;
    const category = new ParamModel("category", "business");
    const pageSize = new ParamModel("pageSize", 10);

    updateFeedTheme(category);
    updateNumberPosts(pageSize);
    updateMinutesInterval(5);
    this.setState({ feedTheme: category, numberOfPosts: pageSize });
    this.reloadInterval(interval);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.numberOfPosts && this.props.feedTheme && this.props.topic) {
      return this.props.numberOfPosts.value !== nextProps.numberOfPosts.value
        || this.props.feedTheme.value !== nextProps.feedTheme.value
        || this.props.topic.value !== nextProps.topic.value;
    }
    return false;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.numberOfPosts) {
      if (this.props.numberOfPosts.value !== nextProps.numberOfPosts.value) {
        this.state.numberOfPosts = nextProps.numberOfPosts;
        this.fetchData();
      }
    }
    if (this.props.feedTheme) {
      if (this.props.feedTheme.value !== nextProps.feedTheme.value) {
        this.state.feedTheme = nextProps.feedTheme;
        this.fetchData();
      }
    }
    if (this.props.interval) {
      if (this.props.interval !== nextProps.interval) {
        this.reloadInterval(nextProps.interval);
      }
    }
  }

  updateData() {
    const { updateFeedTheme, updateNumberPosts, updateMinutesInterval } = this.props;
    const category = new ParamModel("category", "business");
    const pageSize = new ParamModel("pageSize", 10);

    updateFeedTheme(category);
    updateNumberPosts(pageSize);
    updateMinutesInterval(5);
  }

  tick = () => {
    this.fetchData();
  }

  reloadInterval = (time) => {
    const { clearCurrentInterval, setInterval } = this.props;

    clearCurrentInterval();
    setInterval(
      this.tick,
      Utils.setTimeToMinutes(10000) // TODO: use Utils.setTimeToMinutes(time), the current line is only for test
    );
  }

  fetchData = (topic) => {
    const filter = [];
    if (topic) {
      filter.push(topic);
      filter.push(this.state.feedTheme);
      filter.push(this.state.numberOfPosts);
      this.props.getData(filter);
    } else if (this.props.topic) {
      filter.push(this.props.topic);
      filter.push(this.state.feedTheme);
      filter.push(this.state.numberOfPosts);
      this.props.getData(filter);
    }
  }

  render() {
    return (
      <Container>
        <Search fetchData={this.fetchData}/>
        <List
          fetchData = {this.fetchData}
          topic = {this.props.topic}
        />
      </Container>
    );
  }
}

/* Store connection ================== */
function mapStateToProps(state) {
  return {
    numberOfPosts: state.dataFeedFilter.numberOfPosts,
    feedTheme: state.dataFeedFilter.feedTheme,
    interval: state.dataFeedFilter.interval,
    topic: state.dataFeedFilter.topic
  };
}

const mapDispatchToProps = dispatch => ({
  getData: filter => dispatch(getData(filter)),
  updateFeedTheme: theme => dispatch(updateFeedTheme(theme)),
  updateNumberPosts: number => dispatch(updateNumberPosts(number)),
  updateMinutesInterval: minutes => dispatch(updateMinutesInterval(minutes))
});

export default connect(mapStateToProps, mapDispatchToProps)(setIntervalHOC(Home));
