import * as jspb from 'google-protobuf'



export class Sort extends jspb.Message {
  getDirection(): Sort.Direction;
  setDirection(value: Sort.Direction): Sort;

  getLimit(): number;
  setLimit(value: number): Sort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sort.AsObject;
  static toObject(includeInstance: boolean, msg: Sort): Sort.AsObject;
  static serializeBinaryToWriter(message: Sort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sort;
  static deserializeBinaryFromReader(message: Sort, reader: jspb.BinaryReader): Sort;
}

export namespace Sort {
  export type AsObject = {
    direction: Sort.Direction,
    limit: number,
  }

  export enum Direction { 
    FORWARD = 0,
    BACKWARD = 1,
  }
}

