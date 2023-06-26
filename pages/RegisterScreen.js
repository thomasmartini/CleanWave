import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { auth } from "../database/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from 'react';
import themeContext from '../config/ThemeContext';


const RegisterScreen = ({ navigation }) => {
  const theme = useContext(themeContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirimPassword] = useState("");

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, confirmPassword)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log("Registered with:", user.email);
            })
            .catch((error) => alert(error.message));
    };
  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: '#fff' }, {backgroundColor: theme.background}]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.title, {color: theme.color}]}>Getting Started</Text>

          <Text style={styles.subtitle}>Create an account to continue</Text>
        </View>

        <KeyboardAwareScrollView>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={[styles.inputLabel, {color: theme.color}]}>Email address</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
    
              />
            </View>

            <View style={styles.input}>
              <Text style={[styles.inputLabel, {color: theme.color}]}>Password</Text>

              <TextInput
                autoCorrect={false}
                onChangeText={(text) => setPassword(text)}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.input}>
              <Text style={[styles.inputLabel, {color: theme.color}]}>Confirm Password</Text>

              <TextInput
                autoCorrect={false}
                onChangeText={(text) => setConfirimPassword(text)}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress= {handleSignUp}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign up</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={ () => navigation.navigate('Login')}>
              <Text style={[styles.formFooter, {color: theme.color}]}>
                Already have an account?{' '}
                <Text style={{ textDecorationLine: 'underline' }}>Sign in</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#929292',
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
});

