import * as jspb from 'google-protobuf'



export class Bonus extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bonus.AsObject;
  static toObject(includeInstance: boolean, msg: Bonus): Bonus.AsObject;
  static serializeBinaryToWriter(message: Bonus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bonus;
  static deserializeBinaryFromReader(message: Bonus, reader: jspb.BinaryReader): Bonus;
}

export namespace Bonus {
  export type AsObject = {
  };

  export class Kind extends jspb.Message {
    getKindId(): Bonus.Kind.Id;
    setKindId(value: Bonus.Kind.Id): Kind;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Kind.AsObject;
    static toObject(includeInstance: boolean, msg: Kind): Kind.AsObject;
    static serializeBinaryToWriter(message: Kind, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Kind;
    static deserializeBinaryFromReader(message: Kind, reader: jspb.BinaryReader): Kind;
  }

  export namespace Kind {
    export type AsObject = {
      kindId: Bonus.Kind.Id;
    };

    export const enum Id {
      UNKNOWN = 0,
      GIFT = 1,
      BONUS_DIRECT = 2,
      BONUS_MATRIX = 3,
      QUEST = 4,
    }
  }


  export class LevelPercent extends jspb.Message {
    getLevel(): number;
    setLevel(value: number): LevelPercent;

    getPercent(): string;
    setPercent(value: string): LevelPercent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LevelPercent.AsObject;
    static toObject(includeInstance: boolean, msg: LevelPercent): LevelPercent.AsObject;
    static serializeBinaryToWriter(message: LevelPercent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LevelPercent;
    static deserializeBinaryFromReader(message: LevelPercent, reader: jspb.BinaryReader): LevelPercent;
  }

  export namespace LevelPercent {
    export type AsObject = {
      level: number;
      percent: string;
    };
  }


  export class Value extends jspb.Message {
    getBonusId(): Bonus.Kind.Id;
    setBonusId(value: Bonus.Kind.Id): Value;

    getEarnedValue(): string;
    setEarnedValue(value: string): Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      bonusId: Bonus.Kind.Id;
      earnedValue: string;
    };

    export class Asset extends jspb.Message {
      getAssetId(): number;
      setAssetId(value: number): Asset;

      getValue(): Bonus.Value | undefined;
      setValue(value?: Bonus.Value): Asset;
      hasValue(): boolean;
      clearValue(): Asset;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Asset.AsObject;
      static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
      static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Asset;
      static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
    }

    export namespace Asset {
      export type AsObject = {
        assetId: number;
        value?: Bonus.Value.AsObject;
      };
    }

  }


  export class Summary extends jspb.Message {
    getEarnedValue(): string;
    setEarnedValue(value: string): Summary;

    getValuesList(): Array<Bonus.Value>;
    setValuesList(value: Array<Bonus.Value>): Summary;
    clearValuesList(): Summary;
    addValues(value?: Bonus.Value, index?: number): Bonus.Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Summary.AsObject;
    static toObject(includeInstance: boolean, msg: Summary): Summary.AsObject;
    static serializeBinaryToWriter(message: Summary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Summary;
    static deserializeBinaryFromReader(message: Summary, reader: jspb.BinaryReader): Summary;
  }

  export namespace Summary {
    export type AsObject = {
      earnedValue: string;
      valuesList: Array<Bonus.Value.AsObject>;
    };

    export class Asset extends jspb.Message {
      getAssetId(): number;
      setAssetId(value: number): Asset;

      getSummary(): Bonus.Summary | undefined;
      setSummary(value?: Bonus.Summary): Asset;
      hasSummary(): boolean;
      clearSummary(): Asset;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Asset.AsObject;
      static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
      static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Asset;
      static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
    }

    export namespace Asset {
      export type AsObject = {
        assetId: number;
        summary?: Bonus.Summary.AsObject;
      };
    }

  }

}

