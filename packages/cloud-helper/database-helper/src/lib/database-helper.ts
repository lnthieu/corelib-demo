
export interface DatabaseHelper {
  init(config: object): void;
  version(): string;
};