import { View, Text, Pressable, StyleSheet, TextInput, Alert } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';


const Page2 = ({ navigation, route }) => {

    const [name, setname] = useState();
    const [email, setemail] = useState();

    const submit = async () => {
        if (name && email) {
            try {
                const response = await axios.post('http://192.168.20.4:3000/api/submit', {
                    name,
                    email,
                });
                console.log('API Response:', response.data.message);
            } catch (error) {
                console.error('API Error:', error);
            }
        }
        else {
            Alert.alert("Fill all the fields!!!")
        }

    }

    return (
        <SafeAreaView style={styles.outline}>
            <View style={styles.form}>
                <Text style={styles.label}>Email:</Text>
                <TextInput placeholder="Email" style={styles.input}
                    onChangeText={(text) => setemail(text)} />
                <Text style={styles.label}>Name:</Text>
                <TextInput placeholder="Name" style={styles.input}
                    onChangeText={(text) => setname(text)} />
                <Pressable style={styles.button} onPress={submit}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Submit</Text>
                </Pressable>
            </View>
            <Pressable onPress={() => navigation.navigate('page1')}
                style={[styles.button2, { bottom: 50, width: '80%' }]}>
                <Text>Goto Page 1 </Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    outline: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: '90%',
    },
    label: {
        fontSize: 20,
        padding: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        marginLeft: 30,
        fontSize: 15,
        marginBottom: 30,
        marginTop: 10,
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: 20,
        backgroundColor: '#8867ea'
    },
    button2: {
        position: 'absolute',
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 20,
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 200,
    },
})

export default Page2;