import { FileHelper } from "@corelib/cloud-helper/file-helper"
import * as AWS from 'aws-sdk';

const s3 = new AWS.S3();//for test s3

export class S3Helper implements FileHelper {
    checkExisted(path: string, isPublic: boolean): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    version(): string {
        return "s3 helper / tag 0.0.1";
    }

}

