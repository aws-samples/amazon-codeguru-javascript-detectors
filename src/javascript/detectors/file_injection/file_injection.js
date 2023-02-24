/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=file-injection@v1.0 defects=1}
var fs = require('fs')
var express = require('express')
var app = express()
function fileInjectionNoncompliant() {
    app.get('www.example.com', (req, res) => {
        var data = req.params.data
        // Noncompliant: writing unsanitized user data to a file.
        fs.writeFile('data.txt', data, function(err){
            if(err) throw err
        })
    })
}
// {/fact}


// {fact rule=file-injection@v1.0 defects=0}
var fs = require('fs')
var express = require('express')
var app = express()
function fileInjectionCompliant() {
    app.get('www.example.com', (req, res) => {
        var data = sanitize(req.params.data)
        // Compliant: user input is sanitized before use.
        fs.writeFile('data.txt', data, function(err){
            if(err) throw err
        })
    })
}
// {/fact}