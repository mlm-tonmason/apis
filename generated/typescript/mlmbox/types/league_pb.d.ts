import * as jspb from 'google-protobuf'



export class League extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): League.AsObject;
  static toObject(includeInstance: boolean, msg: League): League.AsObject;
  static serializeBinaryToWriter(message: League, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): League;
  static deserializeBinaryFromReader(message: League, reader: jspb.BinaryReader): League;
}

export namespace League {
  export type AsObject = {
  }

  export class Id extends jspb.Message {
    getLeagueId(): number;
    setLeagueId(value: number): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      leagueId: number,
    }
  }


  export class Rank extends jspb.Message {
    getLeagueId(): number;
    setLeagueId(value: number): Rank;

    getRank(): number;
    setRank(value: number): Rank;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rank.AsObject;
    static toObject(includeInstance: boolean, msg: Rank): Rank.AsObject;
    static serializeBinaryToWriter(message: Rank, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rank;
    static deserializeBinaryFromReader(message: Rank, reader: jspb.BinaryReader): Rank;
  }

  export namespace Rank {
    export type AsObject = {
      leagueId: number,
      rank: number,
    }
  }


  export class Header extends jspb.Message {
    getLeagueId(): number;
    setLeagueId(value: number): Header;

    getTitle(): string;
    setTitle(value: string): Header;

    getRangeGe(): string;
    setRangeGe(value: string): Header;

    getRangeLt(): string;
    setRangeLt(value: string): Header;

    getQuantity(): number;
    setQuantity(value: number): Header;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Header.AsObject;
    static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
    static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Header;
    static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
  }

  export namespace Header {
    export type AsObject = {
      leagueId: number,
      title: string,
      rangeGe: string,
      rangeLt: string,
      quantity: number,
    }

    export class List extends jspb.Message {
      getItemsList(): Array<League.Header>;
      setItemsList(value: Array<League.Header>): List;
      clearItemsList(): List;
      addItems(value?: League.Header, index?: number): League.Header;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): List.AsObject;
      static toObject(includeInstance: boolean, msg: List): List.AsObject;
      static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): List;
      static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
      export type AsObject = {
        itemsList: Array<League.Header.AsObject>,
      }
    }

  }

}

