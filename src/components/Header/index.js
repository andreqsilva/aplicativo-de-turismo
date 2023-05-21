import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.greet}>Olá</Text>    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#9DD8FA',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 30,
        paddingEnd: 30,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems: 'flex-start',
    },
    greet:{
        fontSize: 40,
        color: '#FFF',
        fontWeight: 'bold',
        bottom: -30
    },
})