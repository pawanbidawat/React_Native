import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

const Form = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [formError, setFormError] = useState({
        name: "",
        email: "",
        password: "",
    });



    const handleInputChange = (field, value) => {
        let error = '';

        if (field === 'name') { error = validateName(value) }


        else if (field === 'email') { error = validateEmail(value) }


        else if (field === 'password') { error = validatePassword(value) }


        ////////////////////////////////
        setFormError((prevErrors) => ({ ...prevErrors, [field]: error }));
        setFormValues({ ...formValues, [field]: value });
    }

    const validateName = (name) => {
        return name.length > 0 ? '' : "Enter your Name";
    }

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email) ? '' : 'invalid Email address';
    };

    const validatePassword = (password) => {
        return password.length > 6 ? '' : 'password shoud be more than 6 character';
    }

    const handleSubmit = () => {
        const nameError = validateName(formValues.name);
        const emailError = validateEmail(formValues.email);
        const passwordError = validatePassword(formValues.password);

        setFormError({
            name: nameError,
            email: emailError,
            password: passwordError
        });

        if (!nameError && !emailError && !passwordError) {
            alert('Form submitted successfully')
        }
    }





    return (
        <View>
            <Text>Name</Text>
            <TextInput value={formValues.name} onChangeText={(value) => handleInputChange('name', value)} />
            {formError.name ? <Text >{formError.name}</Text> : null}

            <Text>Email</Text>
            <TextInput value={formValues.email} onChangeText={(value) => handleInputChange('email', value)} />
            {formError.email ? <Text >{formError.email}</Text> : null}

            <Text>Password</Text>
            <TextInput value={formValues.password} onChangeText={(value) => handleInputChange('password', value)} />
            {formError.password ? <Text >{formError.password}</Text> : null}

            <Button title="Submit" onPress={handleSubmit} />


        </View>
    );
}

export default Form;