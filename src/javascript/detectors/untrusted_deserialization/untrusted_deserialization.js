/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=untrusted-deserialization@v1.0 defects=1}
function untrustedDeserializationNoncompliant() {
    var script = document.createElement("script")
    script.src = "https://example.com/script.js"
    // Noncompliant: integrity is not checked.
    document.head.appendChild(script)
}
// {/fact}


// {fact rule=untrusted-deserialization@v1.0 defects=0}
function untrustedDeserializationCompliant() {
    var script = document.createElement("script")
    script.src = "https://example.com/script.js"
    // Compliant: integrity is checked.
    script.integrity = "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
    document.head.appendChild(script)
}
// {/fact}