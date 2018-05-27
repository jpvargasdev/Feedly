/**
 * Splash View Component
 */

import React, { Component } from 'react';
import {
    Animated,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import Container from './container';
import Logo from './components/Logo';
import TextLogo from './components/TextLogo';
import ParamModel from '../../models/ParamModel';

import { updateFeedTheme, updateMinutesInterval, updateNumberPosts} from '../../actions/actionsFilterFeed';

const resetAction = StackActions.reset({  
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'MainView' })
    ],
});

/* Component =========================== */

class SplashView extends Component {

    state = {
        fadeAnim: new Animated.Value(0),
    }

    componentDidMount() {

        this.updateData();

        const { navigation } = this.props;
        Animated.timing(                  
            this.state.fadeAnim,            
            {
                toValue: 1,                   
                duration: 1500,             
            }
        ).start();  

        setTimeout( () => {
            navigation.dispatch( resetAction );        
        }, 2500);                      
    }

    updateData(){
        let category = new ParamModel('category', 'business');
        let pageSize = new ParamModel('pageSize', 10);

        this.props.updateFeedTheme(category);
        this.props.updateNumberPosts(pageSize);
        this.props.updateMinutesInterval(5);
    }

    render(){
        return(
            <Container>
                <TextLogo/>
                <Logo fade={this.state.fadeAnim}/>
            </Container>
        );
    }
}

/* Connect to store =========================== */

const mapDispatchToProps = dispatch => {
    return {
        updateFeedTheme: (theme) => dispatch(updateFeedTheme(theme)),
        updateNumberPosts: (number) => dispatch(updateNumberPosts(number)),
        updateMinutesInterval: (minutes) => dispatch(updateMinutesInterval(minutes))
    }
}

export default connect(undefined, mapDispatchToProps)(SplashView);