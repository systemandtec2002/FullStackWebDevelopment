/*
Q2. Write a JavaScript program to make an AJAX request using the XMLHttpRequest object to fetch data
from a remote API (https://jsonplaceholder.typicode.com/users) and log a list of user names from the
response to the browser console and output.
Expected browser output -
*/

document.getElementById('fetch-users-btn').addEventListener('click', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

  xhr.onload = function() {
      if (xhr.status === 200) {
          var users = JSON.parse(xhr.responseText);
          console.log(users);
          var listElement = document.getElementById('usernames-list');

          users.forEach(function(user) {
              var listItem = document.createElement('li');
              listItem.textContent = user.username;
              listElement.appendChild(listItem);
          });
      } else {
          console.error('Request failed. Status:', xhr.status);
      }
  };

  xhr.onerror = function() {
      console.error('Request failed due to a network error.');
  };

  xhr.send();
});