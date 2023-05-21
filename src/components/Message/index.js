import React from 'react';
import { 
    View,
    Text,
    StyleSheet 
} from 'react-native';

export default function Message() {
 return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.message}>qual é a sua{'\n'}próxima história?</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingStart: 30,
        paddingEnd: 30,
        marginTop: 8
    },
    content:{
        flex: 1,
        alignItems: 'flex-start',
        marginTop: -25
    },
    message:{
        color: '#333',
        fontSize: 30,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 40
    },
})