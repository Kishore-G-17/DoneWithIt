import React from 'react';
import {
    ImageBackground, 
    Image,
    StyleSheet,
    View,
    Text,
    Platform,
} from 'react-native';
import AppButton from '../components/AppButton';

import { colors } from '../config/colors';

function WelcomeScreen(props) {
    return (        
        <ImageBackground
            resizeMode='cover'
            blurRadius={10}
            style = { styles.backgroundImage }
            source = {require("../assets/welcome2.jpg")}
        >
            <View style = { styles.logoContainer }>
                <Image source = { require("../assets/logo2.gif")}
                        style = { styles.logo }
                />
                <Text style = { styles.text }> Say Good Bye To Your Old Stuffs</Text>                
            </View> 

            <View style = { styles.buttons }>
                <AppButton bkColor = { colors.loginBkColor }>Login</AppButton>
                <AppButton bkColor = { colors.signupBkColor }>SignUp</AppButton>
            </View>         
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        paddingTop: Platform.OS == "android"? 10 : 0,    
    }, 
    backgroundImage:{
        flex: 1,                 
    },
    logoContainer:{
        position: 'absolute', 
        justifyContent: 'center', 
        alignItems: 'center',         
        top: 120,
        width: '100%',
    }, 
    logo: {
        position: 'relative',
        top: 0,
        width: 200, 
        height: 200,  
        opacity: .8,    
    },
    text: {
        position: 'relative',
        top: -60,
        fontWeight: '600',
        fontSize: 23,       
        color: colors.black,
        textAlign: 'center'
    },
    buttons:{
        position: 'absolute',
        bottom: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default WelcomeScreen;