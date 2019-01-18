/**
 * HOC Interval
 */
import React, { Component } from "react";

function setIntervalHOC(WrappedComponent) {
    return class WithSetInterval extends Component {

        componentWillMount() {
            this.intervals = [];
        }

        setInterval(...args) {
            this.intervals.push(setInterval.apply(null, args));
        }

        clearCurrentInterval(...args) {
            this.intervals.forEach(clearInterval);
        }

        componentWillUnmount() {
            this.intervals.forEach(clearInterval);
        }

        render() {
            return (
                <WrappedComponent
                    setInterval={this.setInterval.bind(this)}
                    clearCurrentInterval={this.clearCurrentInterval.bind(this)}
                    {...this.props}
                />
            );
        }
    }
}
  
export default setIntervalHOC;