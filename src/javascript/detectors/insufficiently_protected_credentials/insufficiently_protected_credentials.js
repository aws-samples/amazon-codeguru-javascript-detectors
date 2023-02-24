/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=insufficiently-protected-credentials@v1.0 defects=1}
var jwt = require("jsonwebtoken")
function insufficientlyProtectedCredentialsNoncompliant() {
    User.findOne({ email: req.body.email }, function (e, user) {
        // Noncompliant: object is passed directly to `jsonwebtoken.sign()`.
        var token = jwt.sign(user, key, { expiresIn: 60 * 60 * 10 })
        return token
    })
}
// {/fact}


// {fact rule=insufficiently-protected-credentials@v1.0 defects=0}
var jwt = require("jsonwebtoken")
function insufficientlyProtectedCredentialsCompliant() {
    User.findOne({ name: req.body.name }, function (err, user) {
        // Compliant: validated object before passing into `jsonwebtoken.sign()`.
        var token = jwt.sign(name , key, { expiresIn: 60 * 60 * 10 })
        return token
    })
}
// {/fact}