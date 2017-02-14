module.exports = {

    "extends": "airbnb",
    "installedESLint": true,
    "env" : {
        "node" : true,
        "mocha": true,
        "es6": true,
    },
    "plugins": [
        "react"
    ],
    "globals" : {
        "wallaby": true,

    },
    "rules" : {
        "strict": 0,
        "max-len": 0,
        "no-console": 0,
    },
};