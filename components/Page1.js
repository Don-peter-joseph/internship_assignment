import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Page1 = ({ navigation, route }) => {

    let size = 100;
    const [inflate, setinflate] = useState(true);
    const [text, settext] = useState("Inflate");
    const [pressed, setpressed] = useState(false);

    const animatedSize = new Animated.Value(size);


    const animation = () => {
        if (inflate == true)
            size = size + 20
        else
            size = size - 20
        if (size > 260) {
            setinflate(false)
            settext("Deflate")
        }
        if (size < 60) {
            setinflate(true)
            settext("Inflate")
        }
        Animated.timing(animatedSize, {
            toValue: size,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }


    return (
        <SafeAreaView style={styles.outline}>
            <Animated.Text style={[styles.balloon, { fontSize: animatedSize }]}>
                🎈
            </Animated.Text>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#FF4F4D' : 'white' }, styles.button]}
                onPress={animation}>
                <Text style={{ fontSize: 20 }}>{text}</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('page2')}
                style={[styles.button, { bottom: 50, width: '80%' }]}>
                <Text>Goto Page 2 </Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    outline: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
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
    buttonpressed: {
        backgroundColor: 'blue'
    }
})

export default Page1;

