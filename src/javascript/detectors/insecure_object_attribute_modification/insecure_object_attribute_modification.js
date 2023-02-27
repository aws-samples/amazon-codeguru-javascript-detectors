/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=insecure-object-attribute-modification@v1.0 defects=1}
var express = require('express')
var app = express()
function insecureObjectAttributeModificationNoncompliant() {
    app.get('www.example.com', (req, res) => {
        var userId = req.params.id
        // Noncompliant: external input used as object property.
        req.session.user[userId] = req.body['userDetails']
    });
}
// {/fact}


// {fact rule=insecure-object-attribute-modification@v1.0 defects=0}
var express = require('express')
var app = express()
function insecureObjectAttributeModificationCompliant() {
    app.get('www.example.com', (req, res) => {
        var userId = req.params.id
        // Compliant: Checks whether the property is directly owned by the object before modifying it.
        if (req.session.user.hasOwnProperty(userId)) {
            req.session.user[userId] = req.body['userDetails']
        }
    });
}
// {/fact}