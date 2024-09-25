import * as jspb from 'google-protobuf'

import * as mlmbox_types_asset_pair_pb from '../../mlmbox/types/asset_pair_pb'; // proto import: "mlmbox/types/asset_pair.proto"


export class Exchanger extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exchanger.AsObject;
  static toObject(includeInstance: boolean, msg: Exchanger): Exchanger.AsObject;
  static serializeBinaryToWriter(message: Exchanger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exchanger;
  static deserializeBinaryFromReader(message: Exchanger, reader: jspb.BinaryReader): Exchanger;
}

export namespace Exchanger {
  export type AsObject = {
  }

  export class Rate extends jspb.Message {
    getAssetPair(): mlmbox_types_asset_pair_pb.AssetPair | undefined;
    setAssetPair(value?: mlmbox_types_asset_pair_pb.AssetPair): Rate;
    hasAssetPair(): boolean;
    clearAssetPair(): Rate;

    getRateBuy(): string;
    setRateBuy(value: string): Rate;

    getRateSell(): string;
    setRateSell(value: string): Rate;

    getModifiedAt(): number;
    setModifiedAt(value: number): Rate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rate.AsObject;
    static toObject(includeInstance: boolean, msg: Rate): Rate.AsObject;
    static serializeBinaryToWriter(message: Rate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rate;
    static deserializeBinaryFromReader(message: Rate, reader: jspb.BinaryReader): Rate;
  }

  export namespace Rate {
    export type AsObject = {
      assetPair?: mlmbox_types_asset_pair_pb.AssetPair.AsObject,
      rateBuy: string,
      rateSell: string,
      modifiedAt: number,
    }

    export class List extends jspb.Message {
      getItemsList(): Array<Exchanger.Rate>;
      setItemsList(value: Array<Exchanger.Rate>): List;
      clearItemsList(): List;
      addItems(value?: Exchanger.Rate, index?: number): Exchanger.Rate;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): List.AsObject;
      static toObject(includeInstance: boolean, msg: List): List.AsObject;
      static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): List;
      static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
      export type AsObject = {
        itemsList: Array<Exchanger.Rate.AsObject>,
      }
    }

  }

}

