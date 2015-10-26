An example of packaging up both the server and client APIs of [TopoJSON](https://github.com/mbostock/topojson) for use on the client side.
Repackages the global `topojson` object into `topojson.server` and `topojson.client`, which exposes the
respective APIs.

It seemed like there [wasn't a great way to achieve this](https://github.com/mbostock/topojson/issues/208), so
this is hopefully one way to hack around the problem.

## Setup
`npm install && gulp`

Results in a file `dist/topojsonAll.js` which can be used instead of `topojson.js`.
