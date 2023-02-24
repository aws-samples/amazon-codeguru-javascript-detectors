/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=nosql-injection@v1.0 defects=1}
var AWS = require('aws-sdk')
var express = require("express")
var app = express()
function noSqlInjectionNoncompliant() {
    app.get(path, function(req,res) {
        var dobClient = new AWS.DynamoDB({apiVersion: '2012-08-10'})
        var params= req.body.params
        // Noncompliant: external user input can be vulnerable to injection attacks.
        dobClient.query(params, function(err, data) {
         if (err) {
            console.log("Error", err)
         } else {
            data.Items.forEach(function(element, index, array) {
            console.log(element.Title.S + " (" + element.Subtitle.S + ")")
            })
         }
        })
    })
}
// {/fact}

// {fact rule=nosql-injection@v1.0 defects=0}
var AWS = require('aws-sdk')
var express = require("express")
var app = express()
function noSqlInjectionCompliant() {
    app.get('/api/getallusers', function (req, res){
       var body = req.body
       // Compliant: should not use external input in `scan` API.
       var params = {
       TableName: "dynamodb-example-node",
       ProjectionExpression: "user_id, username, user_age",
       }
       docClient.scan(params, function (err, data) {
       if (err) {
         console.log(err)
       } else {
         res.status(200).json({ "status": 1, "message": "user exists", "data": data.Items })
       }
       })
    })
}
// {/fact}