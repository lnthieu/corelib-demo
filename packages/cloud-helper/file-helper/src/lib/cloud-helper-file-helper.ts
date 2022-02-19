
export interface FileHelper {
  checkExisted(path: string, isPublic: boolean): Promise<boolean>;
  version(): string;
};
