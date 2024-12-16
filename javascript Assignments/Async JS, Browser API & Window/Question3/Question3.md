### Q3. What is the same-origin policy in the context of AJAX requests, and how can you work around it?

**Same-Origin Policy**: 
The same-origin policy is a security feature implemented by web browsers to prevent scripts from one origin from interacting with resources from another origin. This policy is designed to protect sensitive information by ensuring that a web page can only make requests to the domain from which it was loaded.

**Workarounds**:
- **CORS (Cross-Origin Resource Sharing)**: The server can include specific headers like `Access-Control-Allow-Origin` to allow resources to be shared with different origins.
- **JSONP (JSON with Padding)**: An older technique where the server sends back JavaScript code instead of JSON, which can be executed as a script by the client. This method is less secure and mostly obsolete.
- **Proxy Server**: Using a server-side proxy to make the cross-origin request on behalf of the client. The client communicates with the proxy on the same origin, and the proxy forwards the request to the target domain.