/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=cross-site-scripting@v1.0 defects=1}
var express = require('express')
var app = express()

function crossSiteScriptingNoncompliant() {
    app.route('/user/:id')
        .get((req, res) => {
            var userId = req.params.id
            var form = userId + `
            <form method="POST" style="margin: 60px auto; width: 140px;">
                <p><input name="username" type="text" /></p>
                <p><input name="password" type="password" /></p>
                <p><input value="Login" type="submit" /></p>
            </form>
            `
            // Noncompliant: user input is not sanitized before use.
            res.send(form)
        })
}
// {/fact}


// {fact rule=cross-site-scripting@v1.0 defects=0}
var express = require('express')
var app = express()

function crossSiteScriptingCompliant() {
    app.route('/user/:id')
        .get((req, res) => {
            var userId = req.params.id
            if(!userId.matches(/[0-9]/g)){
                return false
            }
            var form = userId + `
            <form method="POST" style="margin: 60px auto; width: 140px;">
                <p><input name="username" type="text" /></p>
                <p><input name="password" type="password" /></p>
                <p><input value="Login" type="submit" /></p>
            </form>
            `
            // Compliant: user input is sanitized before use.
            res.send(form)
        })
}
// {/fact}