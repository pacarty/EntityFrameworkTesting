// https://github.com/academind/xhr-fetch-axios-intro/blob/xhr/xhr.js

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

// Student class (for example)
class Student {
  constructor(studentId, studentName, studentDescription) {
    this.studentId = studentId;
    this.studentName = studentName;
    this.studentDescription = studentDescription;
  }
}

const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    if (data) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getData = () => {
  sendHttpRequest('GET', 'https://localhost:44396/api/example').then(responseData => {
    console.log(responseData);
  });
};

const sendData = () => {
  // example student
  var std = new Student(5, 'Matt', 'Wanker');

  sendHttpRequest('POST', 'https://localhost:44396/api/example', {
    ExampleId: std.exId,
    Name: std.nm,
    Description: std.des
  })
    .then(responseData => {
      console.log(responseData);
    })
    .catch(err => {
      console.log(err);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);