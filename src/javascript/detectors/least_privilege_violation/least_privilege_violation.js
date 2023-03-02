/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=least-privilege-violation@v1.0 defects=1}
var { BrowserWindow } = require("electron")

function leastPrivilegeViolationNoncompliant() {
    var win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // Noncompliant: 'nodeIntegration' and 'allowRunningInsecureContent' properties are enabled.
            nodeIntegration: true,
            allowRunningInsecureContent: true
        }
    })
}
// {/fact}


// {fact rule=least-privilege-violation@v1.0 defects=0}
var { BrowserWindow } = require("electron")

function leastPrivilegeViolationCompliant() {
    var win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // Compliant: 'nodeIntegration' and 'allowRunningInsecureContent' properties are disabled.
            nodeIntegration: false,
            allowRunningInsecureContent: false,
        }
    })
}
// {/fact}