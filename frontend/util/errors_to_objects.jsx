import React from 'react';

// right side determines if the error is rendered on left or right
const errorsToObjects = (errorList, rightSide = false) => {
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
    username: arrContents(username, rightSide),
    password: arrContents(password, rightSide),
    email: arrContents(email, rightSide),
    general: arrContents(general, rightSide)
  });
} // end errorsToObjects

function arrContents(arr, rightSide){
  return (
    <div className={rightSide ? "right-error-group" : "error-group"}>
      {arr.map(el => el)}
    </div>
  );
}

function errorWrap(error, idx, errType) {
  return <div className={`${errType}-error`}>{error}</div>;
}
// <li key={`error-${idx}`} className={`${errType}-error`}>
//   {error}
// </li>


export default errorsToObjects;
