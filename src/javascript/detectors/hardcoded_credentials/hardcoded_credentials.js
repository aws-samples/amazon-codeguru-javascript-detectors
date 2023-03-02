/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=hardcoded-credentials@v1.0 defects=1}
var crypto = require('crypto')
function hardcodedCredentialsNoncompliant(salt, iterations, keyLen, digest) {
    // Noncompliant: password is hardcoded.
    crypto.pbkdf2('password', salt, iterations, keyLen, digest, (err, key) => {
        if (err) {
            throw err
        }
        return key.toString('base64')
    })
}
// {/fact}


// {fact rule=hardcoded-credentials@v1.0 defects=0}
var crypto = require('crypto')
function hardcodedCredentialsCompliant(salt, iterations, keyLen, digest) {
    // Compliant: password is obtained from environment.
    crypto.pbkdf2(process.env.password, salt, iterations, keyLen, digest, (err, key) => {
        if (err) {
            throw err
        }
        return key.toString('base64')
    })
}
// {/fact}