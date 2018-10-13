import React from 'react';

const errorsToObjects = (errorList) => {
  let username = [];
  let password = [];
  let email = [];
  let general = []
  for (let i = 0; i < errorList.length; ++i) {

    let err = errorList[i];

    switch (err.split(' ')[0].toLowerCase()) {
      case "username":
      username.push(errorWrap(err, i, 'username'));
      break;
      case "email":
      email.push(errorWrap(err, i, 'email'));
      break;
      case "password":
      password.push(errorWrap(err, i, 'password'));
      break;
      default:
      general.push(errorWrap(err, i, 'general'));
    } // end switch

  } // end map
  return({
    username: arrContents(username),
    password: arrContents(password),
    email: arrContents(email),
    general: arrContents(general)
  });
} // end errorsToObjects

function arrContents(arr){
  return (
    <ul className=".error-group">
      {arr.map(el => el)}
    </ul>
  );
}

function errorWrap(error, idx, errType) {
  return (
    <li key={`error-${idx}`} className={`${errType}-error`}>
      {error}
    </li>
  );
}


export default errorsToObjects;
