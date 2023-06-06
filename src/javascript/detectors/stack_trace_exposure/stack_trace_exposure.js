/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=stack-trace-exposure@v1.0 defects=1}
var express = require('express')
var app = express()
function stackTraceExposureNoncompliant() {
    app.get('www.example.com', (req, res) => {
        try {
            throw new Error('')
        }
        catch (e) {
            var stackTrace = e.stack || e.stacktrace
        }
        // Noncompliant: it is returning exception.
        res.send(stackTrace)
    })
}
// {/fact}


// {fact rule=stack-trace-exposure@v1.0 defects=0}
var express = require('express')
var app = express()
function stackTraceExposureCompliant() {
    app.get('www.example.com', (req, res) => {
        try {
            throw new Error('')
        }
        catch (e) {
            var stackTrace = e.stack || e.stacktrace
        }
        // Compliant: it is not returning exception.
        res.send("foo")
    })
}
// {/fact}