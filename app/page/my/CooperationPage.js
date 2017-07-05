/**
 * Created by jianzhang on 2017/6/6.
 */
/**
 * Created by jian on 2017/5/31.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView,
} from 'react-native';

import NavigationBar from "../../common/NavigationBar";
import MPColors from "../../common/Colors"
import {MORE_MENU} from "../../common/MoreMenu";
import GlobalStyles from '../../constants/GlobalStyles'
import ViewUtils from '../../utils/ViewUtils'
import Config from '../../data/Config.json'
export default class CooperationPage extends Component {

    constructor(props) {
        super(props);
       // this.themeDao = new ThemeDao();
        this.state = {
         //   theme: this.props.theme,
        }
    }

    componentDidMount() {
        this.props.homeComponent.addSubscriber(this.onSubscriber);
    }

    componentWillUnmount() {
        this.props.homeComponent.removeSubscriber(this.onSubscriber);
    }


    onBack() {

        this.props.navigator.pop();
    }


    render() {


        let navigationBar =
            <NavigationBar
                navigator={this.props.navigator}
                leftButton={ViewUtils.getLeftButton(()=>  this.props.navigator.pop()   )}
                popEnabled={false}

                title={Config.cooperation.title}
                style={{backgroundColor:MPColors.mainColor}}
                //      rightButton={this.renderMoreButton()}
                statusBar={{backgroundColor: MPColors.mainColor}}
                hide={false}/>;



        return (
            <View style={GlobalStyles.listView_container}>
                {navigationBar}
                <ScrollView >
                    <Text style={styles.titleStyle}>{Config.cooperation.description }</Text>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    titleStyle : {
        margin:20,
        fontSize:18,
        lineHeight:30,
    }
});
