/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=logging-of-sensitive-information@v1.0 defects=1}
var { Signale } = require('signale')

function loggingOfSensitiveInformationNoncompliant() {
    var options = {
        disabled: false,
        interactive: false,
        logLevel: 'info',
        scope: 'custom',
        // Noncompliant: empty list is assigned to 'secrets'.
        secrets: []
    }

    const logger = new Signale(options)
    logger.log('Secret is: ', info)
}
// {/fact}


// {fact rule=logging-of-sensitive-information@v1.0 defects=0}
var { Signale } = require('signale')

function loggingOfSensitiveInformationCompliant() {
    var options = {
        disabled: false,
        interactive: false,
        logLevel: 'info',
        scope: 'custom',
        // Compliant: pattern for 'secrets' is configured and hence will not be logged.
        secrets: ["[1-9]{10}"]
    }

    const logger = new Signale(options)
    logger.log('Secret is: ', info)
}
// {/fact}