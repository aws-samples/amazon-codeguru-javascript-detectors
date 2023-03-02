/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=integer-overflow@v1.0 defects=1}
function integerOverflowNoncompliant() {
    // Noncompliant: bigint is assigned to a variable.
    var max = 154327115334273650000012748329
}
// {/fact}


// {fact rule=integer-overflow@v1.0 defects=0}
function integerOverflowCompliant() {
    // Compliant: n is appended to an integer which makes it a bigint.
    var max = 154327115334273650000012748329n
}
// {/fact}