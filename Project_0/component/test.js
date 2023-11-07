import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
const [formValues, setFormValues] = useState({
name: '',
email: '',
password: '',
});

const [formErrors, setFormErrors] = useState({
name: '',
email: '',
password: '',
});

const validateEmail = (email) => {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email) ? '' : 'Invalid email address';
};

const validateName = (name) => {
return name.length > 0 ? '' : 'Name is required';
};

const validatePassword = (password) => {
return password.length >= 6 ? '' : 'Password must be at least 6 characters';
};

const handleInputChange = (field, value) => {
let error = '';
if (field === 'name') {
error = validateName(value);
} else if (field === 'email') {
error = validateEmail(value);
} else if (field === 'password') {
error = validatePassword(value);
}

setFormErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
setFormValues({ ...formValues, [field]: value });
};

const handleSubmit = () => {
const nameError = validateName(formValues.name);
const emailError = validateEmail(formValues.email);
const passwordError = validatePassword(formValues.password);

setFormErrors({
name: nameError,
email: emailError,
password: passwordError,
});

if (!nameError && !emailError && !passwordError) {
// Form is valid, proceed with submission
alert('Form submitted successfully');
}
};

return (
<View style={styles.container}>
<Text style={styles.label}>Name</Text>
<TextInput
style={styles.input}
value={formValues.name}
onChangeText={(value) => handleInputChange('name', value)}
/>
{formErrors.name ? <Text style={styles.error}>{formErrors.name}</Text> : null}

<Text style={styles.label}>Email</Text>
<TextInput
style={styles.input}
value={formValues.email}
onChangeText={(value) => handleInputChange('email', value)}
/>
{formErrors.email ? <Text style={styles.error}>{formErrors.email}</Text> : null}

<Text style={styles.label}>Password</Text>
<TextInput
style={styles.input}
secureTextEntry
value={formValues.password}
onChangeText={(value) => handleInputChange('password', value)}
/>
{formErrors.password ? <Text style={styles.error}>{formErrors.password}</Text> : null}

<Button title="Submit" onPress={handleSubmit} />
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
padding: 16,
},
label: {
fontSize: 16,
marginBottom: 8,
},
input: {
borderColor: 'gray',
borderWidth: 1,
marginBottom: 16,
paddingHorizontal: 8,
fontSize: 16,
},
error: {
color: 'red',
fontSize: 12,
},
});