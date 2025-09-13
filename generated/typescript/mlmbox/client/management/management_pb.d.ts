import * as jspb from 'google-protobuf'

import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"
import * as mlmbox_types_management_pb from '../../../mlmbox/types/management_pb'; // proto import: "mlmbox/types/management.proto"
import * as mlmbox_types_sort_pb from '../../../mlmbox/types/sort_pb'; // proto import: "mlmbox/types/sort.proto"


export class CreateRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CreateRequest;

  getTag(): string;
  setTag(value: string): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    title: string;
    tag: string;
  };
}

export class AllRequest extends jspb.Message {
  getOnlyVisible(): boolean;
  setOnlyVisible(value: boolean): AllRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllRequest): AllRequest.AsObject;
  static serializeBinaryToWriter(message: AllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllRequest;
  static deserializeBinaryFromReader(message: AllRequest, reader: jspb.BinaryReader): AllRequest;
}

export namespace AllRequest {
  export type AsObject = {
    onlyVisible: boolean;
  };
}

export class UpdateInfoRequest extends jspb.Message {
  getSourceId(): number;
  setSourceId(value: number): UpdateInfoRequest;

  getTitle(): string;
  setTitle(value: string): UpdateInfoRequest;

  getTag(): string;
  setTag(value: string): UpdateInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInfoRequest): UpdateInfoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInfoRequest;
  static deserializeBinaryFromReader(message: UpdateInfoRequest, reader: jspb.BinaryReader): UpdateInfoRequest;
}

export namespace UpdateInfoRequest {
  export type AsObject = {
    sourceId: number;
    title: string;
    tag: string;
  };
}

export class UpdateVisibleRequest extends jspb.Message {
  getSourceId(): number;
  setSourceId(value: number): UpdateVisibleRequest;

  getVisible(): boolean;
  setVisible(value: boolean): UpdateVisibleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVisibleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVisibleRequest): UpdateVisibleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVisibleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVisibleRequest;
  static deserializeBinaryFromReader(message: UpdateVisibleRequest, reader: jspb.BinaryReader): UpdateVisibleRequest;
}

export namespace UpdateVisibleRequest {
  export type AsObject = {
    sourceId: number;
    visible: boolean;
  };
}

export class PartnersListRequest extends jspb.Message {
  getSourceId(): number;
  setSourceId(value: number): PartnersListRequest;

  getStepPartnerId(): number;
  setStepPartnerId(value: number): PartnersListRequest;

  getSortPartners(): mlmbox_types_sort_pb.Sort | undefined;
  setSortPartners(value?: mlmbox_types_sort_pb.Sort): PartnersListRequest;
  hasSortPartners(): boolean;
  clearSortPartners(): PartnersListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartnersListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PartnersListRequest): PartnersListRequest.AsObject;
  static serializeBinaryToWriter(message: PartnersListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartnersListRequest;
  static deserializeBinaryFromReader(message: PartnersListRequest, reader: jspb.BinaryReader): PartnersListRequest;
}

export namespace PartnersListRequest {
  export type AsObject = {
    sourceId: number;
    stepPartnerId: number;
    sortPartners?: mlmbox_types_sort_pb.Sort.AsObject;
  };
}

