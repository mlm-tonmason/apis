import * as jspb from 'google-protobuf'



export class Locale extends jspb.Message {
  getLocale(): string;
  setLocale(value: string): Locale;

  getTitle(): string;
  setTitle(value: string): Locale;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Locale.AsObject;
  static toObject(includeInstance: boolean, msg: Locale): Locale.AsObject;
  static serializeBinaryToWriter(message: Locale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Locale;
  static deserializeBinaryFromReader(message: Locale, reader: jspb.BinaryReader): Locale;
}

export namespace Locale {
  export type AsObject = {
    locale: string,
    title: string,
  }

  export class Id extends jspb.Message {
    getLocale(): string;
    setLocale(value: string): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      locale: string,
    }
  }


  export class List extends jspb.Message {
    getItemsList(): Array<Locale>;
    setItemsList(value: Array<Locale>): List;
    clearItemsList(): List;
    addItems(value?: Locale, index?: number): Locale;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): List.AsObject;
    static toObject(includeInstance: boolean, msg: List): List.AsObject;
    static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): List;
    static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
  }

  export namespace List {
    export type AsObject = {
      itemsList: Array<Locale.AsObject>,
    }
  }

}

