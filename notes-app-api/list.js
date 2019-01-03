import * as dynamoDbLib from "./libs/dynamodb-lib"
import {success, failure} from "./libs/response-lib"

export async function main(event, context) {
	const params = {
		TableName: "notes",
		// 'KeyConditionExpression' defines condition for query
		// 'ExpressionAttributeValues' defines the expression in the condition
		// - 'userId = :userId': return only items with matching userId
		// - ':userId': defines 'userId' to be the Identity Pool ID for auth user

		KeyConditionExpression: "userId = :userId",
		ExpressionAttributeValues: {
			":userId": event.requestContext.identity.cognitoIdentityId
		}
	};

	try {
		const result = await dynamoDbLib.call("query", params);
		return success(result.Items);
	} catch(e) {
		return failure({status: false});
	}
}