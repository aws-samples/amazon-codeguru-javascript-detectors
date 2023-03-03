/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=open-redirect@v1.0 defects=1}
var express = require('express')
var app = express()

function openRedirectNoncompliant() {
    app.get('/users/:profileUrl',function(req,res){
        var url = req.params.url
        // Noncompliant: user input is used without sanitization.
        res.redirect(url)
    })
}
// {/fact}


// {fact rule=open-redirect@v1.0 defects=0}
var express = require('express')
var app = express()

function openRedirectCompliant() {
    const safeurl = ['www.example.com']
    app.post('/users/:profileUrl',function(req,res){
        var url = req.params.url
        if(safeurl.includes(url)){
            // Compliant: user input is sanitized before use.
            return res.redirect(url)
        }
        return res.redirect('/')
    })
}
// {/fact}