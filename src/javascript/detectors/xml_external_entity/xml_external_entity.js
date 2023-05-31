/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=xml-external-entity@v1.0 defects=1}
var libxmljs = require("libxmljs");
var fs = require('fs');
function xmlExternalEntityNoncompliant() {
    const xml = fs.readFileSync("foo.xml");
    // Noncompliant: sets `noent` to true which enables the parsing of external entities.
    const xmlDoc = libxmljs.parseXml(xml, { noent: true, noblanks: true });
}
// {/fact}


// {fact rule=xml-external-entity@v1.0 defects=0}
var libxmljs = require("libxmljs");
var fs = require('fs');
function xmlExternalEntityCompliant() {
    const xml = fs.readFileSync("foo.xml");
    // Compliant: parsing of external entities is disabled by default.
    const xmlDoc = libxmljs.parseXml(xml, { noblanks: true });
}
// {/fact}
