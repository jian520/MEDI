package com.medi;

import android.os.Bundle;
import com.cboy.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;

import com.yunpeng.alipay.AlipayPackage;
//import com.microsoft.codepush.react.CodePush;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "MEDI";
    }
     @Override
        protected void onCreate(Bundle savedInstanceState) {
            SplashScreen.show(this,true);
            super.onCreate(savedInstanceState);
        }
//
//    @Override
//    protected List<ReactPackage> getPackages() {
//        return Arrays.<ReactPackage>asList(
//
//                new AlipayPackage() // <--- ADD HERE
//        );
//    }



}
