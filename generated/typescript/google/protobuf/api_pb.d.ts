import * as jspb from 'google-protobuf'

import * as google_protobuf_source_context_pb from 'google-protobuf/google/protobuf/source_context_pb'; // proto import: "google/protobuf/source_context.proto"
import * as google_protobuf_type_pb from 'google-protobuf/google/protobuf/type_pb'; // proto import: "google/protobuf/type.proto"


export class Api extends jspb.Message {
  getName(): string;
  setName(value: string): Api;

  getMethodsList(): Array<Method>;
  setMethodsList(value: Array<Method>): Api;
  clearMethodsList(): Api;
  addMethods(value?: Method, index?: number): Method;

  getOptionsList(): Array<google_protobuf_type_pb.Option>;
  setOptionsList(value: Array<google_protobuf_type_pb.Option>): Api;
  clearOptionsList(): Api;
  addOptions(value?: google_protobuf_type_pb.Option, index?: number): google_protobuf_type_pb.Option;

  getVersion(): string;
  setVersion(value: string): Api;

  getSourceContext(): google_protobuf_source_context_pb.SourceContext | undefined;
  setSourceContext(value?: google_protobuf_source_context_pb.SourceContext): Api;
  hasSourceContext(): boolean;
  clearSourceContext(): Api;

  getMixinsList(): Array<Mixin>;
  setMixinsList(value: Array<Mixin>): Api;
  clearMixinsList(): Api;
  addMixins(value?: Mixin, index?: number): Mixin;

  getSyntax(): google_protobuf_type_pb.Syntax;
  setSyntax(value: google_protobuf_type_pb.Syntax): Api;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Api.AsObject;
  static toObject(includeInstance: boolean, msg: Api): Api.AsObject;
  static serializeBinaryToWriter(message: Api, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Api;
  static deserializeBinaryFromReader(message: Api, reader: jspb.BinaryReader): Api;
}

export namespace Api {
  export type AsObject = {
    name: string,
    methodsList: Array<Method.AsObject>,
    optionsList: Array<google_protobuf_type_pb.Option.AsObject>,
    version: string,
    sourceContext?: google_protobuf_source_context_pb.SourceContext.AsObject,
    mixinsList: Array<Mixin.AsObject>,
    syntax: google_protobuf_type_pb.Syntax,
  }
}

export class Method extends jspb.Message {
  getName(): string;
  setName(value: string): Method;

  getRequestTypeUrl(): string;
  setRequestTypeUrl(value: string): Method;

  getRequestStreaming(): boolean;
  setRequestStreaming(value: boolean): Method;

  getResponseTypeUrl(): string;
  setResponseTypeUrl(value: string): Method;

  getResponseStreaming(): boolean;
  setResponseStreaming(value: boolean): Method;

  getOptionsList(): Array<google_protobuf_type_pb.Option>;
  setOptionsList(value: Array<google_protobuf_type_pb.Option>): Method;
  clearOptionsList(): Method;
  addOptions(value?: google_protobuf_type_pb.Option, index?: number): google_protobuf_type_pb.Option;

  getSyntax(): google_protobuf_type_pb.Syntax;
  setSyntax(value: google_protobuf_type_pb.Syntax): Method;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Method.AsObject;
  static toObject(includeInstance: boolean, msg: Method): Method.AsObject;
  static serializeBinaryToWriter(message: Method, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Method;
  static deserializeBinaryFromReader(message: Method, reader: jspb.BinaryReader): Method;
}

export namespace Method {
  export type AsObject = {
    name: string,
    requestTypeUrl: string,
    requestStreaming: boolean,
    responseTypeUrl: string,
    responseStreaming: boolean,
    optionsList: Array<google_protobuf_type_pb.Option.AsObject>,
    syntax: google_protobuf_type_pb.Syntax,
  }
}

export class Mixin extends jspb.Message {
  getName(): string;
  setName(value: string): Mixin;

  getRoot(): string;
  setRoot(value: string): Mixin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mixin.AsObject;
  static toObject(includeInstance: boolean, msg: Mixin): Mixin.AsObject;
  static serializeBinaryToWriter(message: Mixin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mixin;
  static deserializeBinaryFromReader(message: Mixin, reader: jspb.BinaryReader): Mixin;
}

export namespace Mixin {
  export type AsObject = {
    name: string,
    root: string,
  }
}

