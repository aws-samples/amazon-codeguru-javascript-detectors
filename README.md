## Amazon CodeGuru Reviewer JavaScript Detector Examples

Amazon CodeGuru Reviewer is an AWS service that uses program analysis and machine learning to detect potential defects that are difficult for developers to find and offers suggestions for improvement. It is deliberately insecure tool maintained by [OWASP top 10 web application security risks](https://owasp.org/www-project-top-ten/) which is designed to teach application security lessons. This tool is a demonstration of common server-side application flaws. The exercises are intended to be used by people to learn about application security and penetration testing. When an issue is detected, a remediation recommendation and explanation is generated. This allows you to find and remediate issues before the code is deployed.

CodeGuru Reviewer finds defects in Java, Python, and JavaScript code. For more information about how to set up and use CodeGuru Reviewer, see the [Amazon CodeGuru Reviewer User Guide](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html).

This repo demonstrates some of CodeGuru Reviewer's JavaScript detectors. For more descriptions of each detector, see our [Detector Library](https://docs.aws.amazon.com/codeguru/detector-library/index.html). You can also see the code example repos for [Java](https://github.com/aws-samples/amazon-codeguru-reviewer-java-detectors) and [Python](https://github.com/aws-samples/amazon-codeguru-reviewer-python-detectors).

The security detectors are features in CodeGuru Reviewer for Java, Python and JavaScript applications. These detectors identify security vulnerabilities in your code by using logic-based reasoning of code using techniques from automated reasoning, a sub-discipline of AI.

## Try out the CodeGuru Reviewer GitHub Action on this repo

You can use this code repository to try out CodeGuru Reviewer using your AWS credentials.

### Prerequisites

To use the CodeGuru Reviewer GitHub Action to scan a fork of this repo, you will first need to create a suitable Role, S3 Bucket, and Policy in your AWS account. You can do this automatically by following [these instructions](https://github.com/aws-samples/aws-codeguru-reviewer-cicd-cdk-sample#cdk-typescript-project-to-set-up-the-codeguru-reviewer-cicd-integration).

### Setup
A CodeGuru Reviewer GitHub Action workflow template has already been added to this repo. To see CodeGuru Reviewer in action:

1. Fork this repo.
2. In `.github/workflows/analyze.yml`, replace the following three fields with the values obtained from the prerequisites step above: your Role ARN (`role-to-assume`), your Region (`aws-region`), and your S3 bucket name (`s3_bucket`).
3. Click on the Actions tab (next to pull requests).
4. Click on the CodeGuru Reviewer Workflow.
5. Click "Run workflow".
6. Navigate to the Security tab to see results (it should take 5-10 min). GitHub only enables the security tab for free on public repositories.

## Try out the CodeGuru Reviewer GitHub Action on your own repo

You can copy the CodeGuru Reviewer GitHub Action `analyze.yml` that you made in the Setup step to your own personal repo.

If you do not have GitHub Advanced Security, you will still be able to view your findings within the AWS Console. You can also use tools like `jq` within your workflow to postprocess the findings. If you print some of the findings to stdout, you will see them in your workflow's output log.

## Getting Help

Use the community resources below for getting help with AWS CodeGuru Reviewer.

- Use GitHub issues to report bugs and request features.
- Open a support ticket with [AWS Support](https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html).
- For contributing guidelines, refer to [CONTRIBUTING](https://github.com/aws-samples/amazon-codeguru-reviewer-python-detectors/blob/main/CONTRIBUTING.md).

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file.
