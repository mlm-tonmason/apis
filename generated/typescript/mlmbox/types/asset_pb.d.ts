import * as jspb from 'google-protobuf'



export class Asset extends jspb.Message {
  getAssetId(): number;
  setAssetId(value: number): Asset;

  getAssetName(): string;
  setAssetName(value: string): Asset;

  getAssetTitle(): string;
  setAssetTitle(value: string): Asset;

  getDecimal(): number;
  setDecimal(value: number): Asset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Asset.AsObject;
  static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
  static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Asset;
  static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
  export type AsObject = {
    assetId: number,
    assetName: string,
    assetTitle: string,
    decimal: number,
  }

  export class Id extends jspb.Message {
    getAssetId(): number;
    setAssetId(value: number): Id;

    getAssetName(): string;
    setAssetName(value: string): Id;

    getUniqueFieldCase(): Id.UniqueFieldCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      assetId: number,
      assetName: string,
    }

    export enum UniqueFieldCase { 
      UNIQUE_FIELD_NOT_SET = 0,
      ASSET_ID = 1,
      ASSET_NAME = 2,
    }
  }


  export class Amount extends jspb.Message {
    getAssetId(): number;
    setAssetId(value: number): Amount;

    getValue(): string;
    setValue(value: string): Amount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Amount.AsObject;
    static toObject(includeInstance: boolean, msg: Amount): Amount.AsObject;
    static serializeBinaryToWriter(message: Amount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Amount;
    static deserializeBinaryFromReader(message: Amount, reader: jspb.BinaryReader): Amount;
  }

  export namespace Amount {
    export type AsObject = {
      assetId: number,
      value: string,
    }
  }

}

export class AssetList extends jspb.Message {
  getItemsList(): Array<Asset>;
  setItemsList(value: Array<Asset>): AssetList;
  clearItemsList(): AssetList;
  addItems(value?: Asset, index?: number): Asset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetList.AsObject;
  static toObject(includeInstance: boolean, msg: AssetList): AssetList.AsObject;
  static serializeBinaryToWriter(message: AssetList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetList;
  static deserializeBinaryFromReader(message: AssetList, reader: jspb.BinaryReader): AssetList;
}

export namespace AssetList {
  export type AsObject = {
    itemsList: Array<Asset.AsObject>,
  }
}

