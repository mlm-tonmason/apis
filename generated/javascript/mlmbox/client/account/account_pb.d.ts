import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"
import * as mlmbox_types_locale_pb from '../../../mlmbox/types/locale_pb'; // proto import: "mlmbox/types/locale.proto"
import * as mlmbox_types_notification_pb from '../../../mlmbox/types/notification_pb'; // proto import: "mlmbox/types/notification.proto"


export class SetLoginRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): SetLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLoginRequest): SetLoginRequest.AsObject;
  static serializeBinaryToWriter(message: SetLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLoginRequest;
  static deserializeBinaryFromReader(message: SetLoginRequest, reader: jspb.BinaryReader): SetLoginRequest;
}

export namespace SetLoginRequest {
  export type AsObject = {
    login: string,
  }
}

export class SetProfileRequest extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): SetProfileRequest;

  getLastName(): string;
  setLastName(value: string): SetProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetProfileRequest): SetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: SetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetProfileRequest;
  static deserializeBinaryFromReader(message: SetProfileRequest, reader: jspb.BinaryReader): SetProfileRequest;
}

export namespace SetProfileRequest {
  export type AsObject = {
    firstName: string,
    lastName: string,
  }
}

export class GenerateAvaFilesRequest extends jspb.Message {
  getMaleQuantity(): number;
  setMaleQuantity(value: number): GenerateAvaFilesRequest;

  getFemaleQuantity(): number;
  setFemaleQuantity(value: number): GenerateAvaFilesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateAvaFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateAvaFilesRequest): GenerateAvaFilesRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateAvaFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateAvaFilesRequest;
  static deserializeBinaryFromReader(message: GenerateAvaFilesRequest, reader: jspb.BinaryReader): GenerateAvaFilesRequest;
}

export namespace GenerateAvaFilesRequest {
  export type AsObject = {
    maleQuantity: number,
    femaleQuantity: number,
  }
}

