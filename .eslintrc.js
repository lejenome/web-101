module.exports = {
  "extends" : "google",
  "env" : {"browser" : true, "es6" : true},
  "globals" : {
    "require" : false,
    "define" : false,
    "$" : false,
    "XMLHttpRequest" : false,
    "google" : true,
  },
  "parserOptions" : {
    "ecmaVersion" : 2017,
  },
  "plugins" : [
    "html",
    "json",
  ],
  "rules" : {
    "strict" : [ 2, "global" ],
    "semi" : [ 2, "always" ],
    "quotes": ["off", "double"],
    "max-len": [1, 120],
    "switch-colon-spacing": ["off", {"after": true, "before": false}],
    "require-jsdoc": "off",
    "eol-last": "off",
  },
};
