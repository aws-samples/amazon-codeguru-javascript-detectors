/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=1}
function originsVerifiedCrossOriginCommunicationsNoncompliant() {
    var iframe = document.getElementsByClassName(".testiframe")
    // Noncompliant: the wildcard keyword `*` is used.
    iframe.contentWindow.postMessage("secret_value", "*")
}
// {/fact}


// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=0}
function originsVerifiedCrossOriginCommunicationsCompliant() {
    var iframe = document.getElementsByClassName(".testiframe")
    // Compliant: using secure origin.
    iframe.contentWindow.postMessage("secret_value", "https://secure.example.com")
}
// {/fact}
