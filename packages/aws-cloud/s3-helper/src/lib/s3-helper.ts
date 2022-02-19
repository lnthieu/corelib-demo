import { FileHelper } from "@corelib-demo/cloud-helper/file-helper"


export class S3Helper implements FileHelper {
    checkExisted(path: string, isPublic: boolean): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    version(): string {
        return "s3 helper / tag 0.0.1";
    }

}

