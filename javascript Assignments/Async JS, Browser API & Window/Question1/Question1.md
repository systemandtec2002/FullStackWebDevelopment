

### Q1. Define XMLHttpRequest object, and How is it used in AJAX?

**XMLHttpRequest Object**: 
The `XMLHttpRequest` object is a JavaScript object that allows web developers to make HTTP requests to servers and retrieve data without reloading the entire web page. This object is fundamental to the AJAX technique, enabling dynamic content updates on a web page.

**Usage in AJAX**:
1. **Create an instance**: `var xhr = new XMLHttpRequest();`
2. **Open a connection**: `xhr.open('GET', 'url', true);` where 'GET' is the HTTP method, 'url' is the server endpoint, and `true` indicates an asynchronous request.
3. **Send the request**: `xhr.send();`
4. **Handle the response**: `xhr.onload` used to process the response data when the request completes successfully.
5. **Handle errors**: `xhr.onerror` used to manage any network errors that occur during the request.
