/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


// {fact rule=insecure-cryptography@v1.0 defects=1}
function insecureCryptographyNoncompliant()
{
    var ciphers = [`TLS_DH_anon_WITH_AES_256_GCM_SHA384`,
        `TLS_AES_128_GCM_SHA256`,
        `ECDHE-ECDSA-AES128-GCM-SHA256`].join(':')
    var options = {
        hostname: 'www.example.com',
        port: 443,
        path: '/',
        method: 'GET',
        secureProtocol: 'TLSv1_2_method',
        // Noncompliant: insecure TLS cipher suite is used.
        ciphers:ciphers
    }

    var req = https.request(options, (res) => {
        res.on('data', (d) => {
            process.stdout.write(d)
        })
    })
}
// {/fact}


// {fact rule=insecure-cryptography@v1.0 defects=0}
function insecureCryptographyCompliant()
{
    var ciphers = [`TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256` ,
        `TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384`,
        `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256`,
        `TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384`,
        `TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256`,
        `TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256`,
        `TLS_AES_128_GCM_SHA256`,
        `TLS_AES_256_GCM_SHA384`,
        '!aNULL',
        '!eNULL',
        '!NULL',
        '!DES',
        '!RC4',
        '!MD5'].join(':')
    var options = {
        hostname: 'www.example.com',
        port: 443,
        path: '/',
        method: 'GET',
        secureProtocol: 'TLSv1_2_method',
        // Compliant: secure TLS cipher suite is used.
        ciphers:ciphers
    }

    var req = https.request(options, (res) => {
        res.on('data', (d) => {
            process.stdout.write(d)
        })
    })
}
// {/fact}