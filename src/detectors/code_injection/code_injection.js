/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=code-injection@v1.0 defects=1}
var express = require("express")
var app = express()

var { spawn } = require("child_process")
function codeInjectionNoncompliant() {
    app.get("/:command/:params", (req, res) => {
        // Noncompliant: user-supplied parameters are evaluated as a script.
        const subProcess = spawn(req.params.command, [req.params.params])

        subProcess.stdout.on("data", (data) => {
            res.send(`stdout: ${data}`)
        })

        subProcess.on("close", (code) => {
            res.send(`child process exited with code ${code}`)
        })
    })
}
// {/fact}


// {fact rule=code-injection@v1.0 defects=0}
var express = require("express")
var app = express()

var { spawn } = require("child_process")
function codeInjectionCompliant() {
    app.get("/:command/:params", (req, res) => {
        const command = req.params.command
        const arguments = req.params.params
        // Compliant: user-supplied parameters must be in allow-list to be evaluated.
        if(command.match(/^\w+$/) && arguments.match(/^[\w\s\-]+$/)) {
            const subProcess = spawn(command, [arguments])

            subProcess.stdout.on("data", (data) => {
                res.send(`stdout: ${data}`)
            })

            subProcess.on("close", (code) => {
                res.send(`child process exited with code ${code}`)
            })
        }
        else {
            res.send('Invalid Command!')
        }
    })
}
// {/fact}