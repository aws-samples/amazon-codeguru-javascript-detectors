/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=xpath-injection@v1.0 defects=1}
var express = require('express')
var xpath = require('xpath')
var dom = require('xmldom').DOMParser
var app = express()
function xpathInjectionNoncompliant() {
    app.get('www.example.com', function(req, res) {
        var userName = req.params.userName
        var xml = "<book><title>Harry Potter</title></book>"
        var doc = new dom().parseFromString(xml)
        // Noncompliant: passing user-input directly in an XPath expression.
        var nodes = xpath.select("//title" + userName, doc)
    })
}
// {/fact}


// {fact rule=xpath-injection@v1.0 defects=0}
var express = require('express')
var xpath = require('xpath')
var dom = require('xmldom').DOMParser
var app = express()
function xpathInjectionCompliant()
{
    app.get('www.example.com', function(req, res) {
        var userName = req.params.userName
        var xml = "<book><title>Harry Potter</title></book>"
        var doc = new dom().parseFromString(xml)
        // Compliant: passing sanitized user-input in an XPath expression.
        var nodes = xpath.select("//title" + escape(userName), doc)
    })
}
// {/fact}