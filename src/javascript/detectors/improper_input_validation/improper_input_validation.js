/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=improper-input-validation@v1.0 defects=1}
var express = require('express')
var app = express()

function improperInputValidationNoncompliant() {
    app.get('/data/collection', function (request, response) {
        // Noncompliant: user input is not sanitized before use.
        var regex = RegExp(request.params.collection)
        regex.test(request.params.collection)
    })
}
// {/fact}


// {fact rule=improper-input-validation@v1.0 defects=0}
var express = require('express')
var app = express()
var escapeStringRegexp = require('escape-string-regexp')

function improperInputValidationCompliant() {
    app.get('/data/collection', (request, response) => {
        // Compliant: user input is sanitized before use.
        var regex = RegExp(escapeStringRegexp(request.params.collection))
        regex.test(request.params.collection)
    })
}
// {/fact}