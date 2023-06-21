/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=code-injection@v1.0 defects=1}
var express = require('express')
var app = express()
var exec = require("child_process")
function codeInjectionNoncompliant() {
    app.get('/perform/action', (req, res) => {
        const command = req.query.command
        // Noncompliant: passing user-supplied parameters directly into the shell command.
        exec(command, (error, stdout, stderr) => {
            console.log(stdout)
        });
    })
}
// {/fact}


// {fact rule=code-injection@v1.0 defects=0}
var express = require('express')
var app = express()
var exec = require("child_process")
function codeInjectionCompliant() {
    app.get('/perform/action', (req, res) => {
        const command = req.query.command
        // Compliant: validating user-supplied command before passing them into the shell command.
        if ( command.indexOf("rm") == -1 ) {
            exec(command, (error, stdout, stderr) => {
                console.log(stdout)
            });
        }
    })
}
// {/fact}