import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb'; // proto import: "google/protobuf/any.proto"
import * as google_protobuf_source_context_pb from 'google-protobuf/google/protobuf/source_context_pb'; // proto import: "google/protobuf/source_context.proto"


export class Type extends jspb.Message {
  getName(): string;
  setName(value: string): Type;

  getFieldsList(): Array<Field>;
  setFieldsList(value: Array<Field>): Type;
  clearFieldsList(): Type;
  addFields(value?: Field, index?: number): Field;

  getOneofsList(): Array<string>;
  setOneofsList(value: Array<string>): Type;
  clearOneofsList(): Type;
  addOneofs(value: string, index?: number): Type;

  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): Type;
  clearOptionsList(): Type;
  addOptions(value?: Option, index?: number): Option;

  getSourceContext(): google_protobuf_source_context_pb.SourceContext | undefined;
  setSourceContext(value?: google_protobuf_source_context_pb.SourceContext): Type;
  hasSourceContext(): boolean;
  clearSourceContext(): Type;

  getSyntax(): Syntax;
  setSyntax(value: Syntax): Type;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Type.AsObject;
  static toObject(includeInstance: boolean, msg: Type): Type.AsObject;
  static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Type;
  static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
}

export namespace Type {
  export type AsObject = {
    name: string,
    fieldsList: Array<Field.AsObject>,
    oneofsList: Array<string>,
    optionsList: Array<Option.AsObject>,
    sourceContext?: google_protobuf_source_context_pb.SourceContext.AsObject,
    syntax: Syntax,
  }
}

export class Field extends jspb.Message {
  getKind(): Field.Kind;
  setKind(value: Field.Kind): Field;

  getCardinality(): Field.Cardinality;
  setCardinality(value: Field.Cardinality): Field;

  getNumber(): number;
  setNumber(value: number): Field;

  getName(): string;
  setName(value: string): Field;

  getTypeUrl(): string;
  setTypeUrl(value: string): Field;

  getOneofIndex(): number;
  setOneofIndex(value: number): Field;

  getPacked(): boolean;
  setPacked(value: boolean): Field;

  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): Field;
  clearOptionsList(): Field;
  addOptions(value?: Option, index?: number): Option;

  getJsonName(): string;
  setJsonName(value: string): Field;

  getDefaultValue(): string;
  setDefaultValue(value: string): Field;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Field.AsObject;
  static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
  static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Field;
  static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
}

export namespace Field {
  export type AsObject = {
    kind: Field.Kind,
    cardinality: Field.Cardinality,
    number: number,
    name: string,
    typeUrl: string,
    oneofIndex: number,
    packed: boolean,
    optionsList: Array<Option.AsObject>,
    jsonName: string,
    defaultValue: string,
  }

  export enum Kind { 
    TYPE_UNKNOWN = 0,
    TYPE_DOUBLE = 1,
    TYPE_FLOAT = 2,
    TYPE_INT64 = 3,
    TYPE_UINT64 = 4,
    TYPE_INT32 = 5,
    TYPE_FIXED64 = 6,
    TYPE_FIXED32 = 7,
    TYPE_BOOL = 8,
    TYPE_STRING = 9,
    TYPE_GROUP = 10,
    TYPE_MESSAGE = 11,
    TYPE_BYTES = 12,
    TYPE_UINT32 = 13,
    TYPE_ENUM = 14,
    TYPE_SFIXED32 = 15,
    TYPE_SFIXED64 = 16,
    TYPE_SINT32 = 17,
    TYPE_SINT64 = 18,
  }

  export enum Cardinality { 
    CARDINALITY_UNKNOWN = 0,
    CARDINALITY_OPTIONAL = 1,
    CARDINALITY_REQUIRED = 2,
    CARDINALITY_REPEATED = 3,
  }
}

export class Enum extends jspb.Message {
  getName(): string;
  setName(value: string): Enum;

  getEnumvalueList(): Array<EnumValue>;
  setEnumvalueList(value: Array<EnumValue>): Enum;
  clearEnumvalueList(): Enum;
  addEnumvalue(value?: EnumValue, index?: number): EnumValue;

  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): Enum;
  clearOptionsList(): Enum;
  addOptions(value?: Option, index?: number): Option;

  getSourceContext(): google_protobuf_source_context_pb.SourceContext | undefined;
  setSourceContext(value?: google_protobuf_source_context_pb.SourceContext): Enum;
  hasSourceContext(): boolean;
  clearSourceContext(): Enum;

  getSyntax(): Syntax;
  setSyntax(value: Syntax): Enum;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Enum.AsObject;
  static toObject(includeInstance: boolean, msg: Enum): Enum.AsObject;
  static serializeBinaryToWriter(message: Enum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Enum;
  static deserializeBinaryFromReader(message: Enum, reader: jspb.BinaryReader): Enum;
}

export namespace Enum {
  export type AsObject = {
    name: string,
    enumvalueList: Array<EnumValue.AsObject>,
    optionsList: Array<Option.AsObject>,
    sourceContext?: google_protobuf_source_context_pb.SourceContext.AsObject,
    syntax: Syntax,
  }
}

export class EnumValue extends jspb.Message {
  getName(): string;
  setName(value: string): EnumValue;

  getNumber(): number;
  setNumber(value: number): EnumValue;

  getOptionsList(): Array<Option>;
  setOptionsList(value: Array<Option>): EnumValue;
  clearOptionsList(): EnumValue;
  addOptions(value?: Option, index?: number): Option;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumValue.AsObject;
  static toObject(includeInstance: boolean, msg: EnumValue): EnumValue.AsObject;
  static serializeBinaryToWriter(message: EnumValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumValue;
  static deserializeBinaryFromReader(message: EnumValue, reader: jspb.BinaryReader): EnumValue;
}

export namespace EnumValue {
  export type AsObject = {
    name: string,
    number: number,
    optionsList: Array<Option.AsObject>,
  }
}

export class Option extends jspb.Message {
  getName(): string;
  setName(value: string): Option;

  getValue(): google_protobuf_any_pb.Any | undefined;
  setValue(value?: google_protobuf_any_pb.Any): Option;
  hasValue(): boolean;
  clearValue(): Option;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Option.AsObject;
  static toObject(includeInstance: boolean, msg: Option): Option.AsObject;
  static serializeBinaryToWriter(message: Option, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Option;
  static deserializeBinaryFromReader(message: Option, reader: jspb.BinaryReader): Option;
}

export namespace Option {
  export type AsObject = {
    name: string,
    value?: google_protobuf_any_pb.Any.AsObject,
  }
}

export enum Syntax { 
  SYNTAX_PROTO2 = 0,
  SYNTAX_PROTO3 = 1,
}
