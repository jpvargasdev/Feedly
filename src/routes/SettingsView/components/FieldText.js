/**
 * Field text input
 */
import React, { PureComponent } from "react";
import {
  View,
  StyleSheet,
  TextInput
} from "react-native";

type PropsType = {
    onEdit: Function,
    placeholder: String,
};
type StateType = {
    text: String
};

/* Component ============================ */
class FieldText extends PureComponent<PropsType, StateType> {
    state={ text: "" };

    componentDidMount() {
      const { text } = this.props;
      if (text) {
        this.setState({ text: newText });
      }
    }

    onEndEdit = () => {
      const { onEdit } = this.props;
      const { text } = this.state;
      onEdit(Number(text));
    }

    render() {
      const { placeholder } = this.props;
      const { text } = this.state;
      return (
        <View style={styles.container}>
          <TextInput
            placeholder={placeholder}
            onEndEditing={this.onEndEdit}
            onChangeText={ text => this.setState({ text })}
            onSubmitEditing={this.onEndEdit}
            value={text}
          />
        </View>
      );
    }
}

export default FieldText;

/* Style ============================ */

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    padding: 10,
    width: 80
  }
});
