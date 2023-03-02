/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=session-fixation@v1.0 defects=1}
var express = require('express')
var passport = require('passport')
var app = express()
function sessionFixationNoncompliant() {
    app.post('/somepage',
        passport.authenticate('local', { failureRedirect: '/somepage' }),
        function(req, res) {
            // Noncompliant: session.regenerate is absent.
            res.redirect('/')
        })
}
// {/fact}


// {fact rule=session-fixation@v1.0 defects=0}
var express = require('express')
var passport = require('passport')
var app = express()
function sessionFixationCompliant() {
    app.post('/somepage',
        passport.authenticate('local', { failureRedirect: '/somepage' }),
        function(req, res) {
            // Compliant: session.regenerate is used
            req.session.regenerate((err) => {
            })
            res.redirect('/404')
        })
}
// {/fact}