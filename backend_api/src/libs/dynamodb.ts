import {
  DynamoDBClient,
  PutItemCommand,
  GetItemCommand,
  UpdateItemCommand,
} from '@aws-sdk/client-dynamodb'

const client = new DynamoDBClient({ region: 'us-west-2' })

export async function createRecord(tableName: string, item: any) {
  const params = {
    TableName: tableName,
    Item: item,
  }

  await client.send(new PutItemCommand(params))
}

export async function readRecord(tableName: string, key: any) {
  const params = {
    TableName: tableName,
    Key: key,
  }

  const result = await client.send(new GetItemCommand(params))
  return result.Item
}

// export async function updateRecord(tableName: string, key: any, update: any) {
//   const params = {
//     TableName: tableName,
//     Key: key,
//     AttributeUpdates: {
//       name: {
//         Action: 'PUT',
//         Value: update.name,
//       },
//     },
//     ReturnValues: 'UPDATED_NEW',
//   }

//   const result = await client.send(new UpdateItemCommand(params))
//   return result.Attributes
// }
