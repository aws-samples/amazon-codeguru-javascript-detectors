/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=integer-overflow@v1.0 defects=1}
function integerOverflowNoncompliant() {
    // Noncompliant: big int is assigned to a variable.
    var max = 1e21
}
// {/fact}


// {fact rule=integer-overflow@v1.0 defects=0}
function integerOverflowCompliant() {
    // Compliant: value assigned to a variable is not big int.
    var max = 1234
}
// {/fact}