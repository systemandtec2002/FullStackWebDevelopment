
**localStorage**:
- **Purpose**: Stores data with no expiration time, meaning the data persists even after the browser is closed and reopened.
- **Usage Example**: Saving user preferences like theme settings (dark mode/light mode) so that the user sees the same preferences on their next visit.

    ```javascript
    localStorage.setItem('theme', 'dark');

    const theme = localStorage.getItem('theme');
    console.log(theme); //'dark'
    ```

**sessionStorage**:
- **Purpose**: Stores data only for the duration of the page session. Once the browser or tab is closed, the data is deleted.
- **Usage Example**: Storing temporary data like a form's progress so that it can be restored if the user navigates away and comes back during the same session.

    ```javascript
    sessionStorage.setItem('formProgress', '50%');

    const progress = sessionStorage.getItem('formProgress');
    console.log(progress); // '50%'
    ```