/**
 * WebViewPage
 * @flow
 **/
'use strict'
import React, {Component} from 'react'
import {
    Image,
    ScrollView,
    StyleSheet,
    WebView,
    Platform,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'
import NavigationBar from '../widget/NavigationBar'
import MPColors from './Colors'


import GlobalStyles from '../constants/GlobalStyles'
import ViewUtils from '../utils/ViewUtils'
const WEBVIEW_REF = 'webview';


export default class WebViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
            canGoBack: false,
            title: this.props.title,
         //   theme: this.props.theme
        }
    }

    onBackPress(e) {
        if (this.state.canGoBack) {
            this.refs[WEBVIEW_REF].goBack();
        } else {
            this.props.navigator.pop();
        }
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack,
            url: navState.url,
        });
    }

    render() {
        return (
            <View style={GlobalStyles.listView_container}>
                <NavigationBar
                    navigator={this.props.navigator}
                    popEnabled={false}

                    style={{backgroundColor:MPColors.mainColor}}

                    leftButton={ViewUtils.getLeftButton(()=>this.onBackPress())}
                    title={this.state.title}
                />
                <WebView
                    ref={WEBVIEW_REF}
                    startInLoadingState={true}
                    onNavigationStateChange={(e)=>this.onNavigationStateChange(e)}
                    source={{uri: this.state.url}}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
})
