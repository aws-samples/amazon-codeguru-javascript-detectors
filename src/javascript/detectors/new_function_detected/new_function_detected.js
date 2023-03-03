/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=new-function-detected@v1.0 defects=1}
var express = require('express')
var app = express()
function newFunctionDetectedNoncompliant() {
    app.post('www.example.com',  (req, res) => {
        // Noncompliant: passing arbitrary user-input to new 'Function()'.
        var newFunc = new Function(req.body)
        newFunc()
    })
}
// {/fact}


// {fact rule=new-function-detected@v1.0 defects=0}
var express = require('express')
var app = express()
function newFunctionDetectedCompliant() {
    app.post('www.example.com',  (req, res) => {
        var value = "test"
        // Compliant: passing hardcoded value to new 'Function()'.
        var newFunc = new Function('alert(value)')
        newFunc()
    })
}
// {/fact}