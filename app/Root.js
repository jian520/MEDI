import React, {PureComponent} from 'react'
import {
    Navigator,
}from 'react-native-deprecated-custom-components'

import WelcomePage from './page/WelcomePage'


export default  class Root extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component {...route.params} navigator={navigator}/>
        );
    }

    configureScene(route, routeStack) {
        if (route.sceneConfig) { // 有设置场景
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.PushFromRight; // 默认，右侧弹出
    }

    render() {
        return (
            <Navigator
                initialRoute={{
                    name: 'WelcomePage',
                    component: WelcomePage
                }}
                configureScene= {this.configureScene}

                renderScene={(e, i) => this._renderScene(e, i)}
            />
        );
    }
}

