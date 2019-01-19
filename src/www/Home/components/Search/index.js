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
} from "react-native-web";
import { connect } from "react-redux";
import IosSearch from "react-ionicons/lib/IosSearch";
import IosClose from "react-ionicons/lib/IosClose";
import IosSend from "react-ionicons/lib/IosSend";

// components
import Card from "../../../../common/components/Card";

// models
import ParamModel from "../../../../models/ParamModel";

// actions
import { updateTopic } from "../../../../actions/actionsFilterFeed";

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
            <IosSearch fontSize="60px" color="#347eff"/>
          </View>

          <TextInput
            placeholder={"Write a topic"}
            style={styles.textInputStyle}
            value={fieldText}
            onSubmitEditing={this.onSubmit}
            onChangeText={value => this.setState({ fieldText: value })}
          />

          {!isFetching
                    && <TouchableOpacity
                      onPress={this.clearField}
                      style={styles.IconContainer}>
                      <IosClose
                        fontSize="60px"
                        color="red"
                      />
                    </TouchableOpacity>
          }
          {!isFetching && fieldText.length > 3
                    && <TouchableOpacity
                      onPress={this.onSubmit}
                      style={styles.IconContainer}>
                      <IosSend
                        fontSize="60px"
                        color="blue"
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

function mapStateToProps(state) {
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
    borderRadius: 5,
    borderColor: "gray",
    backgroundColor: "#fafafa",
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  textInputStyle: {
    flex: 1,
    fontSize: 30,
    padding: 5
  },
  IconContainer: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center"
  }
});
