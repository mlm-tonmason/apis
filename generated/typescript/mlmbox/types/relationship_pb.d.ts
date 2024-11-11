import * as jspb from 'google-protobuf'



export class Relationship extends jspb.Message {
  getKind(): Relationship.Kind;
  setKind(value: Relationship.Kind): Relationship;

  getLevel(): number;
  setLevel(value: number): Relationship;

  getBranch(): number;
  setBranch(value: number): Relationship;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Relationship.AsObject;
  static toObject(includeInstance: boolean, msg: Relationship): Relationship.AsObject;
  static serializeBinaryToWriter(message: Relationship, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Relationship;
  static deserializeBinaryFromReader(message: Relationship, reader: jspb.BinaryReader): Relationship;
}

export namespace Relationship {
  export type AsObject = {
    kind: Relationship.Kind,
    level: number,
    branch: number,
  }

  export enum Kind { 
    UNKNOWN = 0,
    PERSONAL = 1,
    TEAM = 2,
    SPONSOR = 3,
    OUTSIDER = 4,
  }
}

