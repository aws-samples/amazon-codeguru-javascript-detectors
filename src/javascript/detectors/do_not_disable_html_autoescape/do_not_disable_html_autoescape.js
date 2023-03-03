/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=do-not-disable-html-autoescape@v1.0 defects=1}
var kramed = require('kramed')

function doNotDisableHtmlAutoEscapeNoncompliant() {
    var setOptions = {
        renderer: new kramed.Renderer({
            // Noncompliant: sanitize is set to 'false'.
            sanitize: false
        })
    }
}
// {/fact}


// {fact rule=do-not-disable-html-autoescape@v1.0 defects=0}
var kramed = require('kramed')

function doNotDisableHtmlAutoEscapeCompliant() {
    var setOptions = {
        renderer: new kramed.Renderer({
            // Compliant: sanitize is 'true' by default.
        })
    }
}
// {/fact}