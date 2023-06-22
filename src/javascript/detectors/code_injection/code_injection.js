/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=code-injection@v1.0 defects=1}
var express = require('express')
var app = express()
var exec = require("child_process")
function codeInjectionNoncompliant() {
    app.get('/read/logfile', (req, res) => {
        const command = req.query.command
        const parameters = req.query.parameters
        // Noncompliant: passing user-supplied parameters into the shell command.
        exec(command + " " + parameters + " ./logfile.txt" , (error, stdout, stderr) => {
            res.send(stdout)
        })
    })
}
// {/fact}


// {fact rule=code-injection@v1.0 defects=0}
var express = require('express')
var app = express()
var exec = require("child_process")
function codeInjectionCompliant() {
    app.get('/read/logfile', (req, res) => {
        const command = req.query.command
        const parameter = req.query.parameter
        const lines = req.query.lines

        const allowedCommands = ['head', 'tail']
        const allowedParameters = ['-n', '-c']

        // Compliant: validating user-supplied command before passing them into the shell command.
        if ( allowedCommands.indexOf(command) != -1 && allowedParameters.indexOf(parameter) != -1 && !isNaN(lines)) {
            exec(command + " " + parameter + " " + lines + " ./logfile.txt" , (error, stdout, stderr) => {
                res.send(stdout)
            })
        }
        else {
            res.send('Invalid action')
        }
    })
}
// {/fact}