import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";

export async function main(event, context) {

	const data = JSON.parse(event.body);

	const params = {
		TableName: "notes",
		// 'Item' contains the attributes of the item to be created
		// - 'userId': user identities are federated through the
		//			   Cognito Identity Pool, we will use the identity id
		//			   as the user ID of the auth user
		// - 'noteId': a unique uuid
		// - 'content': parsed from request body 
		// - 'attachment': parsed from request body
		// - 'createdAt': current Unix timestamp

		Item: {
			userId: event.requestContext.identity.cognitoIdentityId,
			noteId: uuid.v1(),
			content: data.content,
			attachment: data.attachment,
			createdAt: Date.now()
		}
	};

	try {
		await dynamoDbLib.call("put", params);
		return success(params.Item);
	} catch(e) {
		return failure({status: false});
	}
}