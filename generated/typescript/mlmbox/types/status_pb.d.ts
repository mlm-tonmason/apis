import * as jspb from 'google-protobuf'



export class Status extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
  };

  export const enum Auth {
    AUTH_GUEST = 0,
    AUTH_SIGN_IN = 1,
    AUTH_SIGN_UP = 2,
  }

  export const enum Sponsor {
    SPONSOR_UNKNOWN = 0,
    SPONSOR_WRONG_LINK = 1,
    SPONSOR_BUSY = 2,
    SPONSOR_EXISTS = 3,
  }

  export const enum TokenValidate {
    TOKEN_VALIDATE_UNKNOWN = 0,
    TOKEN_VALIDATE_ACTIVATED = 1,
    TOKEN_VALIDATE_EXPIRED = 2,
    TOKEN_VALIDATE_INVALID = 3,
  }

  export const enum Transaction {
    TRANSACTION_PROCESSING = 0,
    TRANSACTION_SUCCESS = 1,
    TRANSACTION_REJECTED = 2,
  }
}

