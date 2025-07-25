/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.admin.account
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: mlmbox/admin/account/account.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as mlmbox_admin_account_account_pb from '../../../mlmbox/admin/account/account_pb'; // proto import: "mlmbox/admin/account/account.proto"
import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"


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
    '/mlmbox.admin.account.Account/Info',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_account_pb.Account.Id,
    mlmbox_types_account_pb.Account,
    (request: mlmbox_types_account_pb.Account.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.deserializeBinary
  );

  info(
    request: mlmbox_types_account_pb.Account.Id,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account>;

  info(
    request: mlmbox_types_account_pb.Account.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account>;

  info(
    request: mlmbox_types_account_pb.Account.Id,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.admin.account.Account/Info',
        request,
        metadata || {},
        this.methodDescriptorInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.admin.account.Account/Info',
    request,
    metadata || {},
    this.methodDescriptorInfo);
  }

  methodDescriptorLoginSet = new grpcWeb.MethodDescriptor(
    '/mlmbox.admin.account.Account/LoginSet',
    grpcWeb.MethodType.UNARY,
    mlmbox_admin_account_account_pb.LoginSetRequest,
    mlmbox_types_account_pb.Account.Username,
    (request: mlmbox_admin_account_account_pb.LoginSetRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Username.deserializeBinary
  );

  loginSet(
    request: mlmbox_admin_account_account_pb.LoginSetRequest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Username>;

  loginSet(
    request: mlmbox_admin_account_account_pb.LoginSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Username) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Username>;

  loginSet(
    request: mlmbox_admin_account_account_pb.LoginSetRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Username) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.admin.account.Account/LoginSet',
        request,
        metadata || {},
        this.methodDescriptorLoginSet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.admin.account.Account/LoginSet',
    request,
    metadata || {},
    this.methodDescriptorLoginSet);
  }

  methodDescriptorLoginClear = new grpcWeb.MethodDescriptor(
    '/mlmbox.admin.account.Account/LoginClear',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_account_pb.Account.Id,
    mlmbox_types_account_pb.Account.Username,
    (request: mlmbox_types_account_pb.Account.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Username.deserializeBinary
  );

  loginClear(
    request: mlmbox_types_account_pb.Account.Id,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Username>;

  loginClear(
    request: mlmbox_types_account_pb.Account.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Username) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Username>;

  loginClear(
    request: mlmbox_types_account_pb.Account.Id,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Username) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.admin.account.Account/LoginClear',
        request,
        metadata || {},
        this.methodDescriptorLoginClear,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.admin.account.Account/LoginClear',
    request,
    metadata || {},
    this.methodDescriptorLoginClear);
  }

  methodDescriptorSponsorSet = new grpcWeb.MethodDescriptor(
    '/mlmbox.admin.account.Account/SponsorSet',
    grpcWeb.MethodType.UNARY,
    mlmbox_admin_account_account_pb.SponsorSetRequest,
    mlmbox_types_account_pb.Account.Info,
    (request: mlmbox_admin_account_account_pb.SponsorSetRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Info.deserializeBinary
  );

  sponsorSet(
    request: mlmbox_admin_account_account_pb.SponsorSetRequest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Info>;

  sponsorSet(
    request: mlmbox_admin_account_account_pb.SponsorSetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Info>;

  sponsorSet(
    request: mlmbox_admin_account_account_pb.SponsorSetRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.admin.account.Account/SponsorSet',
        request,
        metadata || {},
        this.methodDescriptorSponsorSet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.admin.account.Account/SponsorSet',
    request,
    metadata || {},
    this.methodDescriptorSponsorSet);
  }

  methodDescriptorSponsorClear = new grpcWeb.MethodDescriptor(
    '/mlmbox.admin.account.Account/SponsorClear',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_account_pb.Account.Id,
    mlmbox_types_account_pb.Account.Info,
    (request: mlmbox_types_account_pb.Account.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Info.deserializeBinary
  );

  sponsorClear(
    request: mlmbox_types_account_pb.Account.Id,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Info>;

  sponsorClear(
    request: mlmbox_types_account_pb.Account.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Info>;

  sponsorClear(
    request: mlmbox_types_account_pb.Account.Id,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.admin.account.Account/SponsorClear',
        request,
        metadata || {},
        this.methodDescriptorSponsorClear,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.admin.account.Account/SponsorClear',
    request,
    metadata || {},
    this.methodDescriptorSponsorClear);
  }

}

