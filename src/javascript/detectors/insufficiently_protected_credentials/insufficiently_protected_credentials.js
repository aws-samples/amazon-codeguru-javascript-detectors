/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=insufficiently-protected-credentials@v1.0 defects=1}
var express = require('express')
var loginController = express.Router()
var jwt = require("jsonwebtoken")
function insufficientlyProtectedCredentialsNoncompliant() {
    loginController.post('/', async (req, res, next) => {
        var email = req.body.email
        // Noncompliant: JWT is not signed with a strong cipher algorithm.
        var token = jwt.sign(email, process.env.JWT_SECRET, { algorithm: 'none' })
        return token
    })
}
// {/fact}


// {fact rule=insufficiently-protected-credentials@v1.0 defects=0}
var express = require('express')
var loginController = express.Router()
var jwt = require("jsonwebtoken")
function insufficientlyProtectedCredentialsCompliant() {
    loginController.post('/', async (req, res, next) => {
        var email = req.body.email
        // Compliant: JWT is signed with a strong cipher algorithm.
        var token = jwt.sign(email, process.env.JWT_SECRET, { algorithm: 'RS256' })
        return token
    })
}
// {/fact}