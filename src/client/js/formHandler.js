// jshint esversion:8
const axios = require("axios");
function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  const textField = document.getElementById("name");
  console.log(Client.checkForName(formText));

  console.log("::: Form Submitted :::");
  isValid(formText);
  // Post user input to server
  axios({
    method: "post",
    url: "/test",
    data: {
      text: formText,
    },
  }).then((res) => {
    console.log(res.status);
    console.log(res.data);

    document.getElementById(
      "results"
    ).innerHTML = `The input text is ${res.data.subjectivity.toLowerCase()}`;
  });
}

// ::: Form validation :::
function isValid(inputVal) {
  if (
    !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
      inputVal
    ) &&
    !/^$|^.*@.*\..*$/.test(inputVal)
  ) {
    console.log("input ok!");
  } else {
    alert("please input valid message");
  }
}

export { handleSubmit };
