import * as jspb from 'google-protobuf'

import * as mlmbox_types_asset_pb from '../../mlmbox/types/asset_pb'; // proto import: "mlmbox/types/asset.proto"


export class Invoice extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoice.AsObject;
  static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
  static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoice;
  static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
  export type AsObject = {
  };

  export class Request extends jspb.Message {
    getEntitiesList(): Array<Invoice.Request.Entity>;
    setEntitiesList(value: Array<Invoice.Request.Entity>): Request;
    clearEntitiesList(): Request;
    addEntities(value?: Invoice.Request.Entity, index?: number): Invoice.Request.Entity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      entitiesList: Array<Invoice.Request.Entity.AsObject>;
    };

    export class Entity extends jspb.Message {
      getTreeId(): number;
      setTreeId(value: number): Entity;

      getQuantity(): number;
      setQuantity(value: number): Entity;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Entity.AsObject;
      static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
      static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Entity;
      static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
    }

    export namespace Entity {
      export type AsObject = {
        treeId: number;
        quantity: number;
      };
    }

  }


  export class PreviewResponse extends jspb.Message {
    getItemsList(): Array<Invoice.PreviewResponse.Item>;
    setItemsList(value: Array<Invoice.PreviewResponse.Item>): PreviewResponse;
    clearItemsList(): PreviewResponse;
    addItems(value?: Invoice.PreviewResponse.Item, index?: number): Invoice.PreviewResponse.Item;

    getBillAmountsList(): Array<mlmbox_types_asset_pb.Asset.Amount>;
    setBillAmountsList(value: Array<mlmbox_types_asset_pb.Asset.Amount>): PreviewResponse;
    clearBillAmountsList(): PreviewResponse;
    addBillAmounts(value?: mlmbox_types_asset_pb.Asset.Amount, index?: number): mlmbox_types_asset_pb.Asset.Amount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreviewResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PreviewResponse): PreviewResponse.AsObject;
    static serializeBinaryToWriter(message: PreviewResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreviewResponse;
    static deserializeBinaryFromReader(message: PreviewResponse, reader: jspb.BinaryReader): PreviewResponse;
  }

  export namespace PreviewResponse {
    export type AsObject = {
      itemsList: Array<Invoice.PreviewResponse.Item.AsObject>;
      billAmountsList: Array<mlmbox_types_asset_pb.Asset.Amount.AsObject>;
    };

    export class Item extends jspb.Message {
      getTreeId(): number;
      setTreeId(value: number): Item;

      getAssetId(): number;
      setAssetId(value: number): Item;

      getPriceValue(): string;
      setPriceValue(value: string): Item;

      getUnlockValue(): string;
      setUnlockValue(value: string): Item;

      getAmountValue(): string;
      setAmountValue(value: string): Item;

      getQuantity(): number;
      setQuantity(value: number): Item;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Item.AsObject;
      static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
      static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Item;
      static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
    }

    export namespace Item {
      export type AsObject = {
        treeId: number;
        assetId: number;
        priceValue: string;
        unlockValue: string;
        amountValue: string;
        quantity: number;
      };
    }

  }


  export class VerifiedResponse extends jspb.Message {
    getItemsList(): Array<Invoice.VerifiedResponse.Item>;
    setItemsList(value: Array<Invoice.VerifiedResponse.Item>): VerifiedResponse;
    clearItemsList(): VerifiedResponse;
    addItems(value?: Invoice.VerifiedResponse.Item, index?: number): Invoice.VerifiedResponse.Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifiedResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VerifiedResponse): VerifiedResponse.AsObject;
    static serializeBinaryToWriter(message: VerifiedResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifiedResponse;
    static deserializeBinaryFromReader(message: VerifiedResponse, reader: jspb.BinaryReader): VerifiedResponse;
  }

  export namespace VerifiedResponse {
    export type AsObject = {
      itemsList: Array<Invoice.VerifiedResponse.Item.AsObject>;
    };

    export class Item extends jspb.Message {
      getTreeId(): number;
      setTreeId(value: number): Item;

      getTreeEntityId(): number;
      setTreeEntityId(value: number): Item;

      getTreeAccountEntityId(): number;
      setTreeAccountEntityId(value: number): Item;

      getPositionId(): number;
      setPositionId(value: number): Item;

      getIsBooking(): boolean;
      setIsBooking(value: boolean): Item;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Item.AsObject;
      static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
      static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Item;
      static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
    }

    export namespace Item {
      export type AsObject = {
        treeId: number;
        treeEntityId: number;
        treeAccountEntityId: number;
        positionId: number;
        isBooking: boolean;
      };
    }

  }

}

