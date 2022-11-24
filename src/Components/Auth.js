import * as Constants from '../Constants/ApiConstants';
import {useNavigation} from '@react-navigation/native';
import  React from 'react';

const navigation = useNavigation();

<<<<<<< HEAD

export function SignUp(a, b) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(
      {email: a ,password: b},
    ),
=======
export default function SignUpApi(props) {
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email: props.email}, {password: props.password }),
>>>>>>> 177db292ad4be57bcd5266548c36c27a9fc48c0c
  };

  fetch(Constants.SignUpAPI, requestOptions)
    .then(response => response.json())
    .then(res => {
      console.log(res);
      if (res.error) {
        console.log(res);
      } else navigation.navigate('Login');
    })
    .catch(err => {
      console.log(err);
    });
}

//login

export function Login(props) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email: props.email}, {password: props.password}),
  };

  fetch(Constants.LoginAPI, requestOptions)
    .then(response => response.json())
    .then(res => {
      if (res) {
        console.log(res);
      } else navigation.navigate('Onboardscreen');
    })
    .catch(err => {
      console.log(err);
    });
}
