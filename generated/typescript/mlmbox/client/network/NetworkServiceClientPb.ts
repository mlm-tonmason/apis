/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.network
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: mlmbox/client/network/network.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as mlmbox_client_network_network_pb from '../../../mlmbox/client/network/network_pb'; // proto import: "mlmbox/client/network/network.proto"
import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"


export class NetworkClient {
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

  methodDescriptorMemberGet = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.network.Network/MemberGet',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_account_pb.Account.Id,
    mlmbox_types_account_pb.Account.Info,
    (request: mlmbox_types_account_pb.Account.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Info.deserializeBinary
  );

  memberGet(
    request: mlmbox_types_account_pb.Account.Id,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Info>;

  memberGet(
    request: mlmbox_types_account_pb.Account.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Info>;

  memberGet(
    request: mlmbox_types_account_pb.Account.Id,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.network.Network/MemberGet',
        request,
        metadata || {},
        this.methodDescriptorMemberGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.network.Network/MemberGet',
    request,
    metadata || {},
    this.methodDescriptorMemberGet);
  }

  methodDescriptorMemberSearch = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.network.Network/MemberSearch',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_network_network_pb.AccountsSearchRequest,
    mlmbox_types_account_pb.Account.Info.List,
    (request: mlmbox_client_network_network_pb.AccountsSearchRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Info.List.deserializeBinary
  );

  memberSearch(
    request: mlmbox_client_network_network_pb.AccountsSearchRequest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Info.List>;

  memberSearch(
    request: mlmbox_client_network_network_pb.AccountsSearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info.List) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Info.List>;

  memberSearch(
    request: mlmbox_client_network_network_pb.AccountsSearchRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.network.Network/MemberSearch',
        request,
        metadata || {},
        this.methodDescriptorMemberSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.network.Network/MemberSearch',
    request,
    metadata || {},
    this.methodDescriptorMemberSearch);
  }

  methodDescriptorTeamInfo = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.network.Network/TeamInfo',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_network_network_pb.TeamRequest,
    mlmbox_client_network_network_pb.TeamResponse,
    (request: mlmbox_client_network_network_pb.TeamRequest) => {
      return request.serializeBinary();
    },
    mlmbox_client_network_network_pb.TeamResponse.deserializeBinary
  );

  teamInfo(
    request: mlmbox_client_network_network_pb.TeamRequest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_client_network_network_pb.TeamResponse>;

  teamInfo(
    request: mlmbox_client_network_network_pb.TeamRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_client_network_network_pb.TeamResponse) => void): grpcWeb.ClientReadableStream<mlmbox_client_network_network_pb.TeamResponse>;

  teamInfo(
    request: mlmbox_client_network_network_pb.TeamRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_client_network_network_pb.TeamResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.network.Network/TeamInfo',
        request,
        metadata || {},
        this.methodDescriptorTeamInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.network.Network/TeamInfo',
    request,
    metadata || {},
    this.methodDescriptorTeamInfo);
  }

  methodDescriptorTeamSearch = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.network.Network/TeamSearch',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_network_network_pb.AccountsSearchRequest,
    mlmbox_types_account_pb.Account.Info.List,
    (request: mlmbox_client_network_network_pb.AccountsSearchRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Info.List.deserializeBinary
  );

  teamSearch(
    request: mlmbox_client_network_network_pb.AccountsSearchRequest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Info.List>;

  teamSearch(
    request: mlmbox_client_network_network_pb.AccountsSearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info.List) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Info.List>;

  teamSearch(
    request: mlmbox_client_network_network_pb.AccountsSearchRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.network.Network/TeamSearch',
        request,
        metadata || {},
        this.methodDescriptorTeamSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.network.Network/TeamSearch',
    request,
    metadata || {},
    this.methodDescriptorTeamSearch);
  }

  methodDescriptorTeamPartnerList = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.network.Network/TeamPartnerList',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_network_network_pb.TeamPartnerListRequest,
    mlmbox_types_account_pb.Account.Info.List,
    (request: mlmbox_client_network_network_pb.TeamPartnerListRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Info.List.deserializeBinary
  );

  teamPartnerList(
    request: mlmbox_client_network_network_pb.TeamPartnerListRequest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Info.List>;

  teamPartnerList(
    request: mlmbox_client_network_network_pb.TeamPartnerListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info.List) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Info.List>;

  teamPartnerList(
    request: mlmbox_client_network_network_pb.TeamPartnerListRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.network.Network/TeamPartnerList',
        request,
        metadata || {},
        this.methodDescriptorTeamPartnerList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.network.Network/TeamPartnerList',
    request,
    metadata || {},
    this.methodDescriptorTeamPartnerList);
  }

  methodDescriptorTeamTop = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.network.Network/TeamTop',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_network_network_pb.TeamTopRequest,
    mlmbox_types_account_pb.Account.Info.List,
    (request: mlmbox_client_network_network_pb.TeamTopRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Info.List.deserializeBinary
  );

  teamTop(
    request: mlmbox_client_network_network_pb.TeamTopRequest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Info.List>;

  teamTop(
    request: mlmbox_client_network_network_pb.TeamTopRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info.List) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Info.List>;

  teamTop(
    request: mlmbox_client_network_network_pb.TeamTopRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Info.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.network.Network/TeamTop',
        request,
        metadata || {},
        this.methodDescriptorTeamTop,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.network.Network/TeamTop',
    request,
    metadata || {},
    this.methodDescriptorTeamTop);
  }

}

