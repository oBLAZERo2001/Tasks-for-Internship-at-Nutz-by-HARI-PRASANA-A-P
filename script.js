const getPrime = (lowerNumber, higherNumber) => {
  let result = [];

  for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag == 0) {
      result.push(i);
    }
  }

  return result;
};

const prime = () => {
  const a = document.querySelector("#primeStart").value;
  const b = document.querySelector("#primeEnd").value;
  const r = getPrime(a, b);

  //   ? odd position

  const oddPositionPrimer = r.filter((value, id) => id % 2 === 0);
  console.log(oddPositionPrimer);

  //   ? separate each number
  const sepArr = [];
  oddPositionPrimer.forEach((element) => {
    const sNumber = element.toString();

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
      sepArr.push(+sNumber.charAt(i));
    }
  });

  // ?  sorting sepArr
  sepArr.sort();

  // ? sepArr in descending order
  sepArr.reverse();

  // ? joining all number into a single number
  const result = sepArr.join("");

  document.querySelector("#primeResult").innerHTML = result;
};

// ! 2

const User = {
  name: "",
  password: "",
};

const signUpForm = document.getElementById("signUpForm");
const logInForm = document.getElementById("logInForm");
const welcomeForm = document.getElementById("welcomeForm");
logInForm.style.display = "none";
welcomeForm.style.display = "none";

var loggedIn = false;

const singUp = () => {
  var userNameInput = document.querySelector("#userName").value;
  var userPasswordInput = document.querySelector("#userPassword").value;

  if ((userNameInput, userPasswordInput)) {
    User.name = userNameInput;
    User.password = userPasswordInput;

    signUpForm.style.display = "none";
    logInForm.style.display = "block";

    document.querySelector("#userName").value = null;
    document.querySelector("#userPassword").value = null;
  }
};

const logIn = () => {
  var userName = document.querySelector("#userLoginName").value;
  var userPassword = document.querySelector("#userLoginPassword").value;

  document.querySelector("#errorMessageLogin").innerHTML = "";

  if ((userName === User.name, userPassword === User.password)) {
    logInForm.style.display = "none";
    welcomeForm.style.display = "block";
    document.querySelector("#welcomeUserName").innerHTML = User.name;
    loggedIn = true;

    document.querySelector("#userLoginName").value = null;
    document.querySelector("#userLoginPassword").value = null;
  } else {
    document.querySelector("#errorMessageLogin").innerHTML = "please try again";
    document.querySelector("#userLoginName").value = null;
    document.querySelector("#userLoginPassword").value = null;

    setTimeout(() => {
      document.querySelector("#errorMessageLogin").innerHTML = "";
    }, 1000);
  }
};

const resetPassword = () => {
  var newPassword = document.querySelector("#updatePassword").value;
  document.querySelector("#errorMessage").innerHTML = "";

  if (newPassword === User.password) {
    document.querySelector("#errorMessage").innerHTML =
      "history of password cannot be used again";
    document.querySelector("#updatePassword").value = null;

    setTimeout(() => {
      document.querySelector("#errorMessage").innerHTML = "";
    }, 1000);
  } else if (newPassword && loggedIn) {
    User.password = newPassword;
    welcomeForm.style.display = "none";
    logInForm.style.display = "block";

    document.querySelector("#updatePassword").value = null;
  }
};

// ! 3

const getJson = () => {
  Name = document.querySelector("#jsonName").value;
  Age = document.querySelector("#jsonAge").value;
  Street = document.querySelector("#jsonStreet").value;
  City = document.querySelector("#jsonCity").value;
  PinCode = document.querySelector("#jsonPinCode").value;
  DOB = document.querySelector("#jsonDOB").value;

  if (Name && Age && Street && City && PinCode && DOB) {
    const user = [
      {
        Name,
        Age,
        Address: {
          Street,
          City,
          PinCode,
        },
        DOB,
      },
    ];

    const result = JSON.stringify(user);
    console.log(result);
    alert(result);
  } else {
    document.querySelector("#jsonResult").innerHTML =
      "try again you missed something";
  }
};

// ! 4

const file = () => {
  const currentFile = document.querySelector("#file").files[0];
  console.log(currentFile);

  document.querySelector("#fileName").innerHTML = currentFile.name;
  document.querySelector("#fileModified").innerHTML =
    currentFile.lastModifiedDate;
  document.querySelector("#fileType").innerHTML = currentFile.type;
  document.querySelector("#fileSize").innerHTML = currentFile.size;
};
