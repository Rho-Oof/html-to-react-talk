---
# HTML to React Lightning talk

---
# HTML to React
## quick and dirty html page to react components using pug

Convert a page into sections, this won't fully convert the page into components for brevities sake.

***** if you are following along with the repo run `yarn` to install dependencies first

---
## Step One
grab a page to convert into react components

```curl https://developer.mozilla.org/en-US/ | yarn run --silent html2pug > 1-index.pug```

---
## Step Two
edit pug to fully qualify the CSS, save as [`2-css-fixed.pug`](./2-css-fixed.pug)

---
## Step Three
pull html apart into componentsn using indent based folding in your editor

- copy [`2-css-fixed.pug`](./2-css-fixed.pug) to [`3-index.pug`](./3-index.pug) and edit
- pull header content into [`3-header.pug`](./3-header.pug) and leave a div with id header in it's place
- main into [`3-main.pug`](./3-main.pug) and leave a div with id main in it's place
- footer into [`3-footer.pug`](./3-footer.pug) and leave a div with id footer in it's place
- pull the content of the root div into [`3-root.pug`](./3-root.pug)
- save remaining stuff into [`3-index.pug`](./3-index.pug)

---
## Step Four
convert broken out files into react components

```yarn run --silent pug --pretty < 3-root.pug > src/root.jsx``` 
```yarn run --silent pug --pretty < 3-header.pug > src/header.jsx``` 
```yarn run --silent pug --pretty < 3-main.pug > src/main.jsx``` 
```yarn run --silent pug --pretty < 3-footer.pug > src/footer.jsx``` 

** note, some of the rendered html will not be valid react and need to be cleaned up

---
## Step Five
build resulting page

create [`app.jsx`](./src/app.jsx) compile and add compiled [`4-index.js`](./4-index.js) to [`4-index.pug`](./4-index.pug)

### app.jsx
```
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(Root)
```

---
## Step 6
Build bundle and render index.html

### compile
```yarn run esbuild ./src/app.jsx --outfile=4-index.js```

### render `4-index.pug` to 4-index.html
```yarn run --silent pug --pretty < 4-index.pug > 4-index.html```

run ```yarn run serve```
open [`4-index.html`](./4-index.html)
