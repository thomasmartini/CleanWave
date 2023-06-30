import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import { auth } from "../database/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import themeContext from "../config/ThemeContext";

const LoginScreen = () => {
    const theme = useContext(themeContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.replace("Profile");
            }
        });

        return unsubscribe;
    }, []);

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("Registered with:", user.email);
            })
            .catch((error) => alert(error.message));
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("Logged in with:", user.email);
            })
            .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView
            style={[styles.container, { backgroundColor: theme.background }]}
            behavior="padding"
        >
            <View style={styles.header}>
                <Image
                    alt=""
                    resizeMode="contain"
                    style={styles.headerImg}
                    source={require("./Images/logo.png")}
                />
            </View>

            <Text style={[styles.title, { color: theme.color }]}>
                Sign in to <Text style={{ color: "#075eec" }}>CleanWave</Text>
            </Text>
            <View style={styles.form}>
                <View style={styles.input}>
                    <Text style={[styles.inputLabel, { color: theme.color }]}>
                        Email address
                    </Text>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder="john@example.com"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        onChangeText={(text) => setEmail(text)}
                    />

                    <View style={styles.input}>
                        <Text
                            style={[styles.inputLabel, { color: theme.color }]}
                        >
                            Password
                        </Text>

                        <TextInput
                            placeholder="Password"
                            autoCorrect={false}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.formAction}>
                <TouchableOpacity onPress={handleLogin} style={styles.btn}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                    style={{ marginTop: "auto" }}
                >
                    <Text style={[styles.formFooter, { color: theme.color }]}>
                        Don't have an account?{" "}
                        <Text style={{ textDecorationLine: "underline" }}>
                            Sign up
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    header: {
        marginVertical: 36,
    },
    headerImg: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginBottom: 36,
    },
    title: {
        fontSize: 27,
        fontWeight: "700",
        color: "#1d1d1d",
        marginBottom: 6,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "500",
        color: "#929292",
        textAlign: "center",
    },
    form: {
        marginBottom: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    formAction: {
        marginVertical: 100,
    },
    formFooter: {
        fontSize: 17,
        fontWeight: "600",
        color: "#222",
        textAlign: "center",
        letterSpacing: 0.15,
    },
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: "600",
        color: "#222",
        marginBottom: 8,
    },
    inputControl: {
        height: 44,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: "500",
        color: "#222",
    },
    btn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: "#075eec",
        borderColor: "#075eec",
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: "600",
        color: "#fff",
    },
});
