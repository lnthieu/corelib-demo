import { FileHelper } from "@corelib-demo/cloud-helper/file-helper"
import { DatabaseHelper } from "@corelib-demo/cloud-helper/database-helper"



export class Core1 {

  private fileHelper: FileHelper;
  private dbHelper: DatabaseHelper;

  constructor(_dbHelper: DatabaseHelper, _fileHelper: FileHelper) {
    this.fileHelper = _fileHelper;
    this.dbHelper = _dbHelper;
  }


  public version(): string {
    return "Core 1 / tag 0.0.1" + "\n" +
      "    " + this.fileHelper.version() + "\n" +
      "    " + this.dbHelper.version() + "\n";
  };

}
