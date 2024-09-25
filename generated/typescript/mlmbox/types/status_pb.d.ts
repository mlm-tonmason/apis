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
  }

  export enum Auth { 
    AUTH_GUEST = 0,
    AUTH_SIGN_IN = 1,
    AUTH_SIGN_UP = 2,
  }

  export enum Referral { 
    REFERRAL_UNKNOWN = 0,
    REFERRAL_WRONG_LINK = 1,
    REFERRAL_BUSY = 2,
    REFERRAL_EXISTS = 3,
  }

  export enum TokenValidate { 
    TOKEN_VALIDATE_UNKNOWN = 0,
    TOKEN_VALIDATE_ACTIVATED = 1,
    TOKEN_VALIDATE_EXPIRED = 2,
    TOKEN_VALIDATE_INVALID = 3,
  }

  export enum GoogleAuthenticator { 
    GOOGLE_AUTHENTICATOR_DEACTIVATED = 0,
    GOOGLE_AUTHENTICATOR_ACTIVATED = 1,
    GOOGLE_AUTHENTICATOR_REQUESTED = 2,
  }

  export enum GoogleAuthenticatorVerifiedCode { 
    GOOGLE_AUTHENTICATOR_VERIFIED_CODE_UNKNOWN = 0,
    GOOGLE_AUTHENTICATOR_VERIFIED_CODE_APPROVED = 1,
    GOOGLE_AUTHENTICATOR_VERIFIED_CODE_REJECTED = 2,
    GOOGLE_AUTHENTICATOR_VERIFIED_CODE_WRONG_CODE = 3,
  }

  export enum Confirmation { 
    CONFIRMATION_ACTIVATED = 0,
    CONFIRMATION_APPROVED = 1,
    CONFIRMATION_REJECT = 2,
    CONFIRMATION_CANCELED = 3,
    CONFIRMATION_EXPIRED = 4,
  }

  export enum ConfirmationForm { 
    CONFIRMATION_FORM_REJECTED = 0,
    CONFIRMATION_FORM_APPROVED = 1,
  }

  export enum Transaction { 
    TRANSACTION_PROCESSING = 0,
    TRANSACTION_SUCCESS = 1,
    TRANSACTION_REJECTED = 2,
  }
}

