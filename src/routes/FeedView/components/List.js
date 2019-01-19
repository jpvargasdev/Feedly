/**
 * List component
 */
import React, { PureComponent } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";

// components
import Item from "./Item";
import EmptyField from "../../../common/components/EmptyField";
import EmptyData from "../../../common/components/EmptyData";
import Error from "../../../common/components/Error";

// actions
import { getData } from "../../../actions/actionsFeed";

// type
type PropsType = {
    isFetching: Boolean,
    error: Boolean,
    errorText: String,
    data: Array,
    getData: Function
};
type StateType = {};

/* Component ========================= */
class List extends PureComponent<PropsType, StateType> {
    keyExtractor = (item, index) => String(index);

    renderItem = ({ item }) => (
      <Item
        item={item}
        navigate={this.props.navigate}
        loadListData={this.props.loadListData}
      />
    );

    reloadData = () => {
      const { fetchData } = this.props;
      fetchData();
    }

    render() {
      const {
        error, errorText, data, isFetching, topic
      } = this.props;
      if (error) {
        return (
          <Error
            text={errorText}
          />
        );
      }
      if (data.length > 0) {
        return (
          <FlatList
            onRefresh={this.reloadData}
            data={data}
            refreshing={isFetching}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        );
      }
      if (data.length == 0 && topic) {
        return (
          <EmptyData/>
        );
      }
      if (!topic) {
        return (
          <EmptyField/>
        );
      }
    }
}

/* Connect to store ========================= */

function mapStateToProps(state) {
  return {
    isFetching: state.dataFeed.isFetching,
    error: state.dataFeed.error,
    errorText: state.dataFeed.errorText,
    data: state.dataFeed.data
  };
}

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
