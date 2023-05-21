import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MatrialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default function Movements({ data }) {
    return (

        <View style={{ flex: 1 }}>
            {data.tipo === 0 &&
                <TouchableOpacity style={styles.ticket_container} activeOpacity={0.8}>
                    <View style={styles.content}>
                        <FontAwesome name='plane' size={32} color='#FFF' />
                        <View style={styles.informations}>
                            <Text style={styles.title}>{data.titulo}</Text>
                            <Text style={styles.address}>{data.localizacao}, {data.cidade}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            }

            {data.tipo === 1 &&
                <TouchableOpacity style={styles.accommodation_container} activeOpacity={0.8}>
                    <View style={styles.content}>
                        <Ionicons name='md-bed-outline' size={32} color='#FFF' />
                        <View style={styles.informations}>
                            <Text style={styles.title}>{data.titulo}</Text>
                            <Text style={styles.address}>{data.localizacao}, {data.cidade}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            }

            {data.tipo === 2 &&
                <TouchableOpacity style={styles.leisure_container} activeOpacity={0.8}>
                    <View style={styles.content}>
                        <MatrialCommunityIcons name='umbrella-beach-outline' size={32} color='#FFF' />
                        <View style={styles.informations}>
                            <Text style={styles.title}>{data.titulo}</Text>
                            <Text style={styles.address}>{data.localizacao}, {data.cidade}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            }

            {data.tipo === 3 &&
                <TouchableOpacity style={styles.restaurant_container} activeOpacity={0.8}>
                    <View style={styles.content}>
                        <Ionicons name='restaurant-outline' size={32} color='#FFF' />
                        <View style={styles.informations}>
                            <Text style={styles.title}>{data.titulo}</Text>
                            <Text style={styles.address}>{data.localizacao}, {data.cidade}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    ticket_container: {
        backgroundColor: '#9DD8FA',
        marginBottom: 24,
        borderRadius: 5,
    },
    accommodation_container: {
        backgroundColor: '#F5A860',
        marginBottom: 24,
        borderRadius: 5
    },
    leisure_container: {
        backgroundColor: '#48D1CC',
        marginBottom: 24,
        borderRadius: 5
    },
    restaurant_container: {
        backgroundColor: '#FA5555',
        marginBottom: 24,
        borderRadius: 5
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 14
    },
    informations: {
        marginLeft: 20
    },
    title: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    address: {
        color: '#FFF',
        fontSize: 14,
        //textDecorationLine: 'underline'
    },
})