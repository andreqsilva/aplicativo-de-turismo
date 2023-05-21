import React from 'react';
import { 
    View,
    Image,
    StyleSheet,
} from 'react-native';

export default function Logo() {
 return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Image style={styles.logo} source={require('../../../assets/wagon.png')} />
        </View>
    </View>
 );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingStart: 30,
        paddingEnd: 14,
    },
    content:{
        flex: 1,
        alignItems: 'flex-end',
        marginTop: -30
    },
    logo:{
        marginTop: -90
    }
})