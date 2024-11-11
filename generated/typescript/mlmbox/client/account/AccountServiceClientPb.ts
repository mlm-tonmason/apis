/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.account
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.2
// source: mlmbox/client/account/account.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as mlmbox_client_account_account_pb from '../../../mlmbox/client/account/account_pb'; // proto import: "mlmbox/client/account/account.proto"
import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"
import * as mlmbox_types_locale_pb from '../../../mlmbox/types/locale_pb'; // proto import: "mlmbox/types/locale.proto"


export class AccountClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorInfo = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.account.Account/Info',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_account_pb.Account,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.deserializeBinary
  );

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.account.Account/Info',
        request,
        metadata || {},
        this.methodDescriptorInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.account.Account/Info',
    request,
    metadata || {},
    this.methodDescriptorInfo);
  }

  methodDescriptorSetLogin = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.account.Account/SetLogin',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_account_account_pb.SetLoginRequest,
    mlmbox_types_account_pb.Account.Username,
    (request: mlmbox_client_account_account_pb.SetLoginRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Username.deserializeBinary
  );

  setLogin(
    request: mlmbox_client_account_account_pb.SetLoginRequest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Username>;

  setLogin(
    request: mlmbox_client_account_account_pb.SetLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Username) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Username>;

  setLogin(
    request: mlmbox_client_account_account_pb.SetLoginRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Username) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.account.Account/SetLogin',
        request,
        metadata || {},
        this.methodDescriptorSetLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.account.Account/SetLogin',
    request,
    metadata || {},
    this.methodDescriptorSetLogin);
  }

  methodDescriptorSetLocale = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.account.Account/SetLocale',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_locale_pb.Locale.Id,
    mlmbox_types_locale_pb.Locale,
    (request: mlmbox_types_locale_pb.Locale.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_locale_pb.Locale.deserializeBinary
  );

  setLocale(
    request: mlmbox_types_locale_pb.Locale.Id,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_locale_pb.Locale>;

  setLocale(
    request: mlmbox_types_locale_pb.Locale.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_locale_pb.Locale) => void): grpcWeb.ClientReadableStream<mlmbox_types_locale_pb.Locale>;

  setLocale(
    request: mlmbox_types_locale_pb.Locale.Id,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_locale_pb.Locale) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.account.Account/SetLocale',
        request,
        metadata || {},
        this.methodDescriptorSetLocale,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.account.Account/SetLocale',
    request,
    metadata || {},
    this.methodDescriptorSetLocale);
  }

  methodDescriptorSetAva = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.account.Account/SetAva',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_account_pb.Account.Profile.Ava,
    mlmbox_types_account_pb.Account.Profile,
    (request: mlmbox_types_account_pb.Account.Profile.Ava) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Profile.deserializeBinary
  );

  setAva(
    request: mlmbox_types_account_pb.Account.Profile.Ava,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Profile>;

  setAva(
    request: mlmbox_types_account_pb.Account.Profile.Ava,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Profile) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Profile>;

  setAva(
    request: mlmbox_types_account_pb.Account.Profile.Ava,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Profile) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.account.Account/SetAva',
        request,
        metadata || {},
        this.methodDescriptorSetAva,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.account.Account/SetAva',
    request,
    metadata || {},
    this.methodDescriptorSetAva);
  }

  methodDescriptorSetProfile = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.account.Account/SetProfile',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_account_account_pb.SetProfileRequest,
    mlmbox_types_account_pb.Account.Profile,
    (request: mlmbox_client_account_account_pb.SetProfileRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Profile.deserializeBinary
  );

  setProfile(
    request: mlmbox_client_account_account_pb.SetProfileRequest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Profile>;

  setProfile(
    request: mlmbox_client_account_account_pb.SetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Profile) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Profile>;

  setProfile(
    request: mlmbox_client_account_account_pb.SetProfileRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Profile) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.account.Account/SetProfile',
        request,
        metadata || {},
        this.methodDescriptorSetProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.account.Account/SetProfile',
    request,
    metadata || {},
    this.methodDescriptorSetProfile);
  }

  methodDescriptorSetSponsor = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.account.Account/SetSponsor',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_account_pb.Account.Id,
    mlmbox_types_account_pb.Account.Info,
    (request: mlmbox_types_account_pb.Account.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Info.deserializeBinary
  );

  setSponsor(
    request: mlmbox_types_account_pb.Account.Id,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Info>;

  setSponsor(
    request: mlmbox_types_account_pb.Account.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Info>;

  setSponsor(
    request: mlmbox_types_account_pb.Account.Id,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.account.Account/SetSponsor',
        request,
        metadata || {},
        this.methodDescriptorSetSponsor,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.account.Account/SetSponsor',
    request,
    metadata || {},
    this.methodDescriptorSetSponsor);
  }

  methodDescriptorGetAvaFiles = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.account.Account/GetAvaFiles',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_account_pb.Account.Profile.Ava.List,
    mlmbox_types_account_pb.Account.Profile.Ava.File.List,
    (request: mlmbox_types_account_pb.Account.Profile.Ava.List) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Profile.Ava.File.List.deserializeBinary
  );

  getAvaFiles(
    request: mlmbox_types_account_pb.Account.Profile.Ava.List,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Profile.Ava.File.List>;

  getAvaFiles(
    request: mlmbox_types_account_pb.Account.Profile.Ava.List,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Profile.Ava.File.List) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Profile.Ava.File.List>;

  getAvaFiles(
    request: mlmbox_types_account_pb.Account.Profile.Ava.List,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Profile.Ava.File.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.account.Account/GetAvaFiles',
        request,
        metadata || {},
        this.methodDescriptorGetAvaFiles,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.account.Account/GetAvaFiles',
    request,
    metadata || {},
    this.methodDescriptorGetAvaFiles);
  }

}

