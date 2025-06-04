import * as jspb from 'google-protobuf'

import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"


export class LoginSetRequest extends jspb.Message {
  getAccount(): mlmbox_types_account_pb.Account.Id | undefined;
  setAccount(value?: mlmbox_types_account_pb.Account.Id): LoginSetRequest;
  hasAccount(): boolean;
  clearAccount(): LoginSetRequest;

  getLogin(): string;
  setLogin(value: string): LoginSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginSetRequest): LoginSetRequest.AsObject;
  static serializeBinaryToWriter(message: LoginSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginSetRequest;
  static deserializeBinaryFromReader(message: LoginSetRequest, reader: jspb.BinaryReader): LoginSetRequest;
}

export namespace LoginSetRequest {
  export type AsObject = {
    account?: mlmbox_types_account_pb.Account.Id.AsObject,
    login: string,
  }
}

export class SponsorSetRequest extends jspb.Message {
  getAccount(): mlmbox_types_account_pb.Account.Id | undefined;
  setAccount(value?: mlmbox_types_account_pb.Account.Id): SponsorSetRequest;
  hasAccount(): boolean;
  clearAccount(): SponsorSetRequest;

  getSponsor(): mlmbox_types_account_pb.Account.Id | undefined;
  setSponsor(value?: mlmbox_types_account_pb.Account.Id): SponsorSetRequest;
  hasSponsor(): boolean;
  clearSponsor(): SponsorSetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SponsorSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SponsorSetRequest): SponsorSetRequest.AsObject;
  static serializeBinaryToWriter(message: SponsorSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SponsorSetRequest;
  static deserializeBinaryFromReader(message: SponsorSetRequest, reader: jspb.BinaryReader): SponsorSetRequest;
}

export namespace SponsorSetRequest {
  export type AsObject = {
    account?: mlmbox_types_account_pb.Account.Id.AsObject,
    sponsor?: mlmbox_types_account_pb.Account.Id.AsObject,
  }
}

