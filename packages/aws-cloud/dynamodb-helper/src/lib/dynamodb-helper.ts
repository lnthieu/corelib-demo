import { DatabaseHelper } from "@corelib-demo/cloud-helper/database-helper"
import * as AWS from "aws-sdk"


export class DynamoDBHelper implements DatabaseHelper {
  init(config: object): void {
    throw new Error("Method not implemented.");
  }
  version(): string {
    return "Dynamo helper / tag 0.0.1"
  }

}