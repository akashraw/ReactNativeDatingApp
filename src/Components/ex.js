const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email: email , password: password,}),
  };

  fetch('http://3.110.155.54:5000/signup', requestOptions)
    .then(response => response.json())
    .then(res => {
      if (res) {
        console.log(res);
       
      } else navigation.push('Login');
    })
    .catch(err => {
      console.log(err);
    });

