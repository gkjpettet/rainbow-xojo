# Highlighting Xojo with Rainbow JS
Plugin and themes to allow the RainbowJS syntax highlighter to work with Xojo code

Rainbow is an excellent browser-based Javascript syntax highlighting engine. This repo contains a minified copy of the main library (`rainbow.min.js`) and an additional file (`xojo.js`) that contains the definitions required to highlight Xojo code. Additionally, I have provided CSS and SASS files to style the highlighted code. There are both light and dark themes.

## Usage
Include the Rainbow script and Xojo definitions before the closing `</body>` tag:

```html
<script src="js/rainbow.min.js"></script>
<script src="js/xojo.js"></script> 
```

Within the `<head>` of the page, include the CSS (light or dark, whatever you prefer):

```html
<link rel="stylesheet" href="css/rainbow-xojo-light.css">
```
