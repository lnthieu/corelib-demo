
import { DatabaseHelper } from "@corelib-demo/cloud-helper/database-helper"

export class Core2 {

  private dbHelper: DatabaseHelper;

  constructor(_dbHelper: DatabaseHelper) {
    this.dbHelper = _dbHelper;
  }


  public version(): string {
    return "Core 2 / tag 0.0.1" + "\n" +
      "    " + this.dbHelper.version() + "\n";
  };

}
