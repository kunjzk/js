# DOM manipulation

- script tag, defer property means load the JS after the html has been rendered. Why would we want that?

Web element manipulation

- When a browser is opened, this is called the window
- DOM: Document object model -- all the HTML elements that you see
- BOM: browser object model -- screen size, height, width, navigator, location
- JS: arrays, classes, etc

BOM

- Can use console in chrome developer tools to run BOM commands, e.g `Window.outerWidth`
- navigator API: can check a bunch of details about the browser and hardware: https://developer.mozilla.org/en-US/docs/Web/API/Navigator
- location API: can check hostname, full path: https://developer.mozilla.org/en-US/docs/Web/API/Location

DOM

- DOM is a tree. Topmost element is html, children are head & body. Each of these is a tree too.
- `console.log(document)` in `script.js` logs the entire document to the console in chrome inspector tab.
- Can get elements programattically using `document.getElementById`, etc. APIs here: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
