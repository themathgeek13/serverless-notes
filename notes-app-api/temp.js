{
    "Version": "2012-10-17",
    "Statement": [
    {
		"Effect": "Allow",
		"Action": [
			"mobileanalytics:PutEvents",
			"cognito-sync:*",
			"cognito-identity:*"
		],
		"Resource": [
			"*"
		]
	},
	{
		"Effect": "Allow",
		"Action": [
			"s3:*"
		],
		"Resource": [
			"arn:aws:s3:::notes-app-dynamove/private/${cognito-identity.amazonaws.com:sub}/*"
		]
	},
	{
		"Effect": "Allow",
		"Action": ["execute-api:Invoke"
		],
		"Resource": [
			"arn:aws:execute-api:us-east-1:*:dx3rp7l4uc/*/*/*"
			]
		}
	]
}