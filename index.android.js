import React, {component} from 'react';
import { render } from 'react-dom';
import {
    appregistry,
    NativeAppEventEmitter,
    styleSheet,
    Text,
    View,
} from 'react-native';
export default class REACT-NATIVE-BOILERPLATE extends Component{
    render(){
        return (
            <view style=(styles.container)>
            <text style=(styles.welcome)>
            welcome to React Native!
            </text>
            <text style=(styles.instruction)>
            to get started, edit index android.js
            </text>
            <text styles={styles.instruction}>
            press cmd+R to reload, {/n}
            cmd+D for dev menu
            </text>
            </view>
        );

        
    }
}

const styles= stylesheet.create({
    container: {
        flex:1,
        justifyContent: 'centre',
        backgroundColor: '#F5FCFF' 
    }
    welcome: {
        fontSize:20,
        textAlign: 'center',
        margin: 10;
              },
    instructions: { 
        textAlign: 'center',
        color: '#333333'
        marginBottom: 5;
        }   

});
appregistry.registerComponent('REACT-NATIVE-BOILERPLATE', ()=> REACT-NATIVE BOILERPLATE);