import * as Constants from '../Constants/ApiConstants';
import {useNavigation} from '@react-navigation/native';

const navigation = useNavigation();


export function SignUp(a, b) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(
      {email: a ,password: b},
    ),
  };

  fetch(Constants.SignUpAPI, requestOptions)
    .then(response => response.json())
    .then(res => {
      console.log(res);
      if (res.error) {
        console.log(res);
      } else navigation.navigate('OnBoardScreen');
    })
    .catch(err => {
      console.log(err);
    });
}

export function Login({props}) {
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
