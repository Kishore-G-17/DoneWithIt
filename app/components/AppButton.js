import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

import { colors } from '../config/colors';

function AppButton({children, bkColor}) {
    return (
        <View style = { [ styles.button, { backgroundColor: bkColor } ] }>
            <Text style = { styles.text }>{ children }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{        
        width: '90%',
        height: 50,                
        alignItems: 'center',
        justifyContent: 'center',        
        borderRadius: 50,
        marginVertical: 5,
    },
    text:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase',

    }    
})

export default AppButton;