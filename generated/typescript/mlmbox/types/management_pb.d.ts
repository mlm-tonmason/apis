import * as jspb from 'google-protobuf'



export class Management extends jspb.Message {
  getSourceId(): number;
  setSourceId(value: number): Management;

  getTitle(): string;
  setTitle(value: string): Management;

  getTag(): string;
  setTag(value: string): Management;

  getVisible(): boolean;
  setVisible(value: boolean): Management;

  getRefLinkId(): string;
  setRefLinkId(value: string): Management;

  getPartnersQuantity(): number;
  setPartnersQuantity(value: number): Management;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Management.AsObject;
  static toObject(includeInstance: boolean, msg: Management): Management.AsObject;
  static serializeBinaryToWriter(message: Management, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Management;
  static deserializeBinaryFromReader(message: Management, reader: jspb.BinaryReader): Management;
}

export namespace Management {
  export type AsObject = {
    sourceId: number,
    title: string,
    tag: string,
    visible: boolean,
    refLinkId: string,
    partnersQuantity: number,
  }

  export class Id extends jspb.Message {
    getSourceId(): number;
    setSourceId(value: number): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      sourceId: number,
    }
  }


  export class List extends jspb.Message {
    getItemsList(): Array<Management>;
    setItemsList(value: Array<Management>): List;
    clearItemsList(): List;
    addItems(value?: Management, index?: number): Management;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): List.AsObject;
    static toObject(includeInstance: boolean, msg: List): List.AsObject;
    static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): List;
    static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
  }

  export namespace List {
    export type AsObject = {
      itemsList: Array<Management.AsObject>,
    }
  }

}

