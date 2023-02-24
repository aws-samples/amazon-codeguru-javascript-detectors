/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=code-injection@v1.0 defects=1}
var express = require('express')
var app = express()
var vm = require('vm')
function codeInjectionNoncompliant() {
    app.get('/perform/:action', (req, res) => {
        const sandbox = {
            actionToPerform: req.params.action
        }
        const code = 'performAction(sandbox.actionToPerform)'
        vm.createContext(sandbox)
        // Noncompliant: user-supplied input evaluated as a script.
        vm.runInContext(code, sandbox)
        res.send('Action performed successfully!')
    })
}
// {/fact}


// {fact rule=code-injection@v1.0 defects=0}
var express = require('express')
var app = express()
var vm = require('vm')
function codeInjectionCompliant() {
    app.get('/perform/:action', (req, res) => {
        const sandbox = {
            actionToPerform: req.params.action
        }
        const code = 'performAction(sandbox.actionToPerform)'
        vm.createContext(sandbox)
        // Compliant: user-supplied parameter must be in allow-list to be evaluated.
        if(sandbox.actionToPerform.match(/^pull|fetch|add|commit$/)) {
            vm.runInContext(code, sandbox)
            res.send('Action performed successfully!')
        }
        else
            res.send('Invalid action')
    })
}
// {/fact}