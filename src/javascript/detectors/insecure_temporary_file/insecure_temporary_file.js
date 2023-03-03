/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=insecure-temp-file@v1.0 defects=1}
var fs = require('fs')
function insecureTempFileNoncompliant() {
    // Noncompliant: the global directory path is given for opening a file or creating a file which can be vulnerable to injection attacks.
    var tmp_file = "/tmp/f"
    fs.readFile(tmp_file, 'utf8', function (err, data) {
       // ...
    })
}
// {/fact}

// {fact rule=insecure-temp-file@v1.0 defects=0}
var fs = require('fs')
var tmp = require('tmp')
function insecureTempFileCompliant() {
    // Compliant: tmp library to securely create or read temporary files.
   var tmp_obj = tmp.fileSync()
   fs.readFile(tmp_obj, 'utf8')
}
// {/fact}