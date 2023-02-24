/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=os-command-injection@v1.0 defects=1}
var express = require('express')
var app = express()

function osCommandInjectionNoncompliant() {
    app.get('/user/:id', function (request, response) {
        // Noncompliant: executing an operating system command from user-controlled data.
        var stdout = execa.command("ls -la "+request.params.id)
    })
}
// {/fact}


// {fact rule=os-command-injection@v1.0 defects=0}
var express = require('express')
var app = express()

function osCommandInjectionCompliant() {
    app.get('/user/:id', (req, res) => {
        // Compliant: command arguments are defined as elements of array to prevent injection.
        var {stdout} =  execa("ls", ["-la", req.params.id])
    })
}
// {/fact}