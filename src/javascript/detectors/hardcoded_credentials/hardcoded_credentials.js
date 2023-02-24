/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=hardcoded-credentials@v1.0 defects=1}
var jose = require("jose")
var { JWT } = jose
function hardcodedCredentialsNoncompliant() {
    let token = JWT.sign({
        username: 'username',
        // Noncompliant: password is hardcoded.
        password : 'password'
    })
}
// {/fact}


// {fact rule=hardcoded-credentials@v1.0 defects=0}
var jose = require("jose")
var { JWT } = jose
function hardcodedCredentialsCompliant() {
    let token = JWT.sign({
        username: 'username',
        // Compliant: password is obtained from environment.
        password: process.env.PASSWORD
    })
}
// {/fact}