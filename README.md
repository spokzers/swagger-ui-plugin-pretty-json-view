#Pretty JSON View Plugin for Swagger UI

This Plugin utilizes [`react-json-view`](https://github.com/mac-s-g/react-json-view) to add the ability to view response JSON in pretty format with other cool features.

##Usage
There are two ways to utilize this plugin

#####Via npm
Install the module with npm:

```shell script
$ npm install --save swagger-ui-plugin-pretty-json-view
```
Next, require it in your client-side application:

```js
const PrettyJSONViewPlugin = require('swagger-ui-plugin-pretty-json-view');

SwaggerUI({
  // your options here...
  plugins: [
    // other plugins
    PrettyJSONViewPlugin
  ]
})  
```

#####Via unpkg
```js
<script>
<!-- Load Swagger UI -->
<script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script> 
<!-- Load the PrettyJSONViewPlugin -->
<script src="https://unpkg.com/swagger-ui-plugin-pretty-json-view"></script>

<script>
window.onload = function() {
  SwaggerUI({
  // your options here...
  plugins: [
    PrettyJSONViewPlugin
  ]
})
}
</script>
```


##Contributing
Feel free to open issues and pull requests that fix bugs and add functionality.
