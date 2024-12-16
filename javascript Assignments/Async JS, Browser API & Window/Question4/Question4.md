### Q4. Compare Promises to callbacks and discuss why Promises are preferred for managing asynchronous code.

**Callbacks**:
- A callback is a function passed as an argument to another function and is executed after the completion of an asynchronous task.
- Callbacks can lead to "callback hell," where functions are deeply nested, making the code hard to read and maintain.

**Promises**:
- A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- Promises provide better control over asynchronous operations by offering methods like `.then()`, `.catch()`, and `.finally()` for handling results and errors, making the code cleaner and more manageable.
- Promises can be chained, avoiding the deep nesting issues of callbacks.


#### For the above reasons Promices ard more preferred for managing asynchronous code.