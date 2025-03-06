import * as jspb from 'google-protobuf'

import * as mlmbox_types_asset_pb from '../../mlmbox/types/asset_pb'; // proto import: "mlmbox/types/asset.proto"


export class AssetPair extends jspb.Message {
  getAssetPairId(): number;
  setAssetPairId(value: number): AssetPair;

  getAssetPairName(): string;
  setAssetPairName(value: string): AssetPair;

  getSourceAssetId(): number;
  setSourceAssetId(value: number): AssetPair;

  getTargetAssetId(): number;
  setTargetAssetId(value: number): AssetPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetPair.AsObject;
  static toObject(includeInstance: boolean, msg: AssetPair): AssetPair.AsObject;
  static serializeBinaryToWriter(message: AssetPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetPair;
  static deserializeBinaryFromReader(message: AssetPair, reader: jspb.BinaryReader): AssetPair;
}

export namespace AssetPair {
  export type AsObject = {
    assetPairId: number,
    assetPairName: string,
    sourceAssetId: number,
    targetAssetId: number,
  }

  export class Id extends jspb.Message {
    getAssetPairId(): number;
    setAssetPairId(value: number): Id;

    getAssetPairName(): string;
    setAssetPairName(value: string): Id;

    getAssets(): AssetPair.Id.Assets | undefined;
    setAssets(value?: AssetPair.Id.Assets): Id;
    hasAssets(): boolean;
    clearAssets(): Id;

    getQueryCase(): Id.QueryCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      assetPairId: number,
      assetPairName: string,
      assets?: AssetPair.Id.Assets.AsObject,
    }

    export class Assets extends jspb.Message {
      getSourceAsset(): mlmbox_types_asset_pb.Asset.Id | undefined;
      setSourceAsset(value?: mlmbox_types_asset_pb.Asset.Id): Assets;
      hasSourceAsset(): boolean;
      clearSourceAsset(): Assets;

      getTargetAsset(): mlmbox_types_asset_pb.Asset.Id | undefined;
      setTargetAsset(value?: mlmbox_types_asset_pb.Asset.Id): Assets;
      hasTargetAsset(): boolean;
      clearTargetAsset(): Assets;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Assets.AsObject;
      static toObject(includeInstance: boolean, msg: Assets): Assets.AsObject;
      static serializeBinaryToWriter(message: Assets, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Assets;
      static deserializeBinaryFromReader(message: Assets, reader: jspb.BinaryReader): Assets;
    }

    export namespace Assets {
      export type AsObject = {
        sourceAsset?: mlmbox_types_asset_pb.Asset.Id.AsObject,
        targetAsset?: mlmbox_types_asset_pb.Asset.Id.AsObject,
      }
    }


    export enum QueryCase { 
      QUERY_NOT_SET = 0,
      ASSET_PAIR_ID = 1,
      ASSET_PAIR_NAME = 2,
      ASSETS = 3,
    }
  }


  export class List extends jspb.Message {
    getItemsList(): Array<AssetPair>;
    setItemsList(value: Array<AssetPair>): List;
    clearItemsList(): List;
    addItems(value?: AssetPair, index?: number): AssetPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): List.AsObject;
    static toObject(includeInstance: boolean, msg: List): List.AsObject;
    static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): List;
    static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
  }

  export namespace List {
    export type AsObject = {
      itemsList: Array<AssetPair.AsObject>,
    }
  }

}

