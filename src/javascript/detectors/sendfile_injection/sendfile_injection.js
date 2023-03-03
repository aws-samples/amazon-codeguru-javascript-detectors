/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=sendfile-injection@v1.0 defects=1}
var express = require("express")
var path = require("path")
var app = express()
function sendfileInjectionNoncompliant() {
    app.get('www.example.com', (req, res) => {
        var fileName = req.params.file
        // Noncompliant: tainted-data is passed into 'res.sendfile'.
        res.sendFile(fileName)
    })
}
// {/fact}


// {fact rule=sendfile-injection@v1.0 defects=0}
var express = require("express")
var path = require("path")
var app = express()
function sendfileInjectionCompliant() {
    app.get('www.example.com', (req, res) => {
        var fileName = "file.txt"
        if (fileName !== req.params.file) {
            // Compliant: validated fileName before passing into 'res.sendFile'.
            res.sendFile(fileName)
            console.log("Valid file name.")
        } else {
            throw new Error("Invalid file name.")
        }
    })
}
// {/fact}