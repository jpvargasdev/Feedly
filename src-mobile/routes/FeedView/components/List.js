/**
 * List component
 */
"use strict";
import React, { PureComponent } from "react";
import {
    FlatList,
} from "react-native";
import { connect } from "react-redux";

import Item from "./Item";
import EmptyField from "../../../common/components/EmptyField";
import EmptyData from "../../../common/components/EmptyData";
import Error from "../../../common/components/Error";

import { getData } from "../../../actions/actionsFeed";

/* Component ========================= */

class List extends PureComponent {

    _keyExtractor = (item, index) => String(index);

    _renderItem = ({item}) => (
        <Item
            item={item}
            navigate={this.props.navigate}
            loadListData={this.props.loadListData}
        />
    );

    reloadData = () => {
        this.props.fetchData();
    }

    render(){
        if ( this.props.error ){
            return(
                <Error
                    text={this.props.errorText}
                />
            );
        } else {
            if ( this.props.data.length > 0 ){
                return(
                    <FlatList
                        onRefresh={this.reloadData}
                        data={this.props.data}
                        refreshing={this.props.isFetching}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                );
            } 
            if ( this.props.data.length == 0 && this.props.topic ) {
                return(
                    <EmptyData/>
                );
            }
            if ( !this.props.topic ){
                return(
                    <EmptyField/>
                )
            }
        }
    }
}

/* Connect to store ========================= */

function mapStateToProps(state, props){
    return {
        isFetching: state.dataFeed.isFetching,
        error: state.dataFeed.error,
        errorText: state.dataFeed.errorText,
        data: state.dataFeed.data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);