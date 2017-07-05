
/**
 * action 创建函数 - 用户模块
 */

'user strict';

import * as types from './actionTypes';

import Util from '../common/utils';
import * as urls from '../constants/constants_url';
import * as Storage from '../common/Storage';
import { Alert } from 'react-native';
import Toast from 'react-native-root-toast';

export let userFromSync = (user) => {
    return (dispatch) => {
        dispatch({type: types.kUserFromSync, user: user});
    }
};
/**
export let userRegister = (mobile, password, code) => {
    let url = urls.kUrlUserRegister;
    let data = {
        mobile: mobile,
        password: password,
        code: code
    };
    return (dispatch) => {
        dispatch({type: types.kUserRegister});
        Util.post(url, data,
            (status, code, message, data, share) => {
                let user = {};
                let app_cart_cookie_id = '';
                if (status) {
                    user = data.user;
                    app_cart_cookie_id = data.app_cart_cookie_id;
                    Storage.setAppCartCookieId(app_cart_cookie_id);
                    Storage.setUser(user);
                }
                dispatch({type:types.kUserRegisterReceived, status:status, code:code, message:message, user:user, share:share});
                dispatch(cartView(app_cart_cookie_id, user.access_token));
            },
            (error) => {
                dispatch({'type': types.kActionError});
            });
    }
};

export let userView = () => {
    let url = 'http://local.eleteamapi.ygcr8.com/v1/user/view?id=2';
    return (dispatch) => {
        dispatch({'type':types.kUserView});
        Util.get(url,
            () => {},
            () => {});
    }
};*/


export let userLogin = (email, password) => {
    let url = urls.kUrlUserLogin;
    let data = {
        email: email,
        password: password
    };
    return (dispatch) => {
        dispatch({'type': types.kUserLogin});
        Util.post(url, data,
            (resultData) => {
                //let app_cart_cookie_id = '';
                let user = {};
                let message = ''
                if (resultData.status==1) {
                    user = resultData.data;

                    Storage.setUser(user);
                    message = resultData.result
                } else {
                    message = resultData.error
                }
                Toast.show(message, {position: Toast.positions.CENTER});
                dispatch({type:types.kUserLoginReceived, status:resultData.status, message:message, user:user});
              //  dispatch(cartView(app_cart_cookie_id, user.access_token));
            },
            (error) => {
                Alert.alert(error.message);
                dispatch({'type': types.kActionError});
            });
    }
};


export let userLogout = () => {

    return (dispatch) => {
        dispatch({'type': types.kUserLogout});
        Storage.setUser({});
        dispatch({type:types.kUserLogoutReceived, status:0, message:'已登出', user:{}});


    }
};
