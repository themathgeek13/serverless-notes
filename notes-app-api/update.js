import * as dynamoDbLib from "./libs/dynamodb-lib"
import {success, failure} from "./libs/response-lib"

export async function main(event, context) {
	const data = JSON.parse(event.body);
	const params = {
		TableName: "notes",
		// 'Key' defines the partition key and sort key of the item
		// - 'userId': Identity Pool ID of the auth user
		// - 'noteId': path parameter

		Key: {
			userId: event.requestContext.identity.cognitoIdentityId,
			noteId: event.pathParameters.id
		},
		// 'UpdateExpression' defines the attributes to be updated
		// 'ExpressionAttributeValues' defines the value in the update exp

		UpdateExpression: "SET content = :content, attachment = :attachment",
		ExpressionAttributeValues: {
			":attachment": data.attachment || null,
			":content": data.content || null
		},
		// 'ReturnValues' specifies if and how to return the item's attributes
		// ALL_NEW => after update
		ReturnValues: "ALL_NEW"
	};

	try {
		const result = await dynamoDbLib.call("update", params);
		return success({status: true});
	} catch(e) {
		return failure({status: false});
	}
}