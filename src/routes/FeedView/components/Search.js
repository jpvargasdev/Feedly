/**
 * Search bar
 */
import React, { PureComponent } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { connect } from "react-redux";

// components
import Card from "../../../common/components/Card";
import ParamModel from "../../../models/ParamModel";

// actions
import { updateTopic } from "../../../actions/actionsFilterFeed";

type PropsType = {
    isFetching: Boolean
};
type StateType = {
    fieldText: String
};

/* Component ========================= */
class Search extends PureComponent<PropsType, StateType> {
    state = {
      fieldText: ""
    };

    clearField = () => {
      this.setState({ fieldText: "" });
    }

    onSubmit = () => {
      const { updateTopic, fetchData } = this.props;
      const { fieldText } = this.state;

      const topic = new ParamModel("q", fieldText);

      updateTopic(topic);
      fetchData(topic);
    }

    render() {
      const { isFetching } = this.props;
      const { fieldText } = this.state;
      return (
        <Card style={styles.containerCard}>
          <View style={styles.IconContainer}>
            <Icon
              name={"ios-search"}
              size={20}
              color="gray"
            />
          </View>

          <TextInput
            placeholder={"Write a topic"}
            style={styles.textInputStyle}
            onSubmitEditing={this.onSubmit}
            value={fieldText}
            onChangeText={value => this.setState({ fieldText: value })}
          />

          {!isFetching
                    && <TouchableOpacity
                      onPress={this.clearField}
                      style={styles.IconContainer}>
                      <Icon
                        name={"ios-close"}
                        size={30}
                        color={"red"}
                      />
                    </TouchableOpacity>
          }
          {!isFetching && fieldText.length > 3
                    && <TouchableOpacity
                      onPress={this.onSubmit}
                      style={styles.IconContainer}>
                      <Icon
                        name={"ios-send"}
                        size={25}
                        color={"blue"}
                      />
                    </TouchableOpacity>
          }

          {isFetching
                    && <ActivityIndicator
                      style={{ paddingHorizontal: 5 }}
                      color={"red"}
                    />
          }

        </Card>
      );
    }
}

/* Connection to Store ========================= */

function mapStateToProps(state, props) {
  return {
    isFetching: state.dataFeed.isFetching
  };
}

const mapDispatchToProps = dispatch => ({
  updateTopic: topic => dispatch(updateTopic(topic))
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);

/* Style ========================= */

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  textInputStyle: {
    flex: 1
  },
  IconContainer: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center"
  }
});
