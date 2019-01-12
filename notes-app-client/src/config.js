export default {
	MAX_ATTACHMENT_SIZE: 5000000,
	s3: {
		REGION: "us-east-1",
		BUCKET: "notes-app-dynamove"
	},
	apiGateway: {
		REGION: "us-east-1",
		URL: "https://dx3rp7l4uc.execute-api.us-east-1.amazonaws.com/prod"
	},
	cognito: {
		REGION: "us-east-1",
		USER_POOL_ID: "us-east-1_tha6IVYgw",
		APP_CLIENT_ID: "30s4b10r28kfllfrhmo7jj5g7p",
		IDENTITY_POOL_ID: "us-east-1:154c32bc-cc0e-4161-9635-a25dceab7ae4"
	}

};