/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.network
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.2
// source: mlmbox/client/network/network.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var mlmbox_types_account_pb = require('../../../mlmbox/types/account_pb.js')

var mlmbox_types_sort_pb = require('../../../mlmbox/types/sort_pb.js')
const proto = {};
proto.mlmbox = {};
proto.mlmbox.client = {};
proto.mlmbox.client.network = require('./network_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.network.NetworkClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.network.NetworkPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Account.Id,
 *   !proto.mlmbox.types.Account.Info>}
 */
const methodDescriptor_Network_MemberGet = new grpc.web.MethodDescriptor(
  '/mlmbox.client.network.Network/MemberGet',
  grpc.web.MethodType.UNARY,
  mlmbox_types_account_pb.Account.Id,
  mlmbox_types_account_pb.Account.Info,
  /**
   * @param {!proto.mlmbox.types.Account.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Account.Info.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Account.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Account.Info)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Account.Info>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.network.NetworkClient.prototype.memberGet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.network.Network/MemberGet',
      request,
      metadata || {},
      methodDescriptor_Network_MemberGet,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Account.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Account.Info>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.network.NetworkPromiseClient.prototype.memberGet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.network.Network/MemberGet',
      request,
      metadata || {},
      methodDescriptor_Network_MemberGet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.network.AccountsSearchRequest,
 *   !proto.mlmbox.types.Account.Info.List>}
 */
const methodDescriptor_Network_MemberSearch = new grpc.web.MethodDescriptor(
  '/mlmbox.client.network.Network/MemberSearch',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.network.AccountsSearchRequest,
  mlmbox_types_account_pb.Account.Info.List,
  /**
   * @param {!proto.mlmbox.client.network.AccountsSearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Account.Info.List.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.network.AccountsSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Account.Info.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Account.Info.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.network.NetworkClient.prototype.memberSearch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.network.Network/MemberSearch',
      request,
      metadata || {},
      methodDescriptor_Network_MemberSearch,
      callback);
};


/**
 * @param {!proto.mlmbox.client.network.AccountsSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Account.Info.List>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.network.NetworkPromiseClient.prototype.memberSearch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.network.Network/MemberSearch',
      request,
      metadata || {},
      methodDescriptor_Network_MemberSearch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.network.TeamRequest,
 *   !proto.mlmbox.client.network.TeamResponse>}
 */
const methodDescriptor_Network_TeamInfo = new grpc.web.MethodDescriptor(
  '/mlmbox.client.network.Network/TeamInfo',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.network.TeamRequest,
  proto.mlmbox.client.network.TeamResponse,
  /**
   * @param {!proto.mlmbox.client.network.TeamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mlmbox.client.network.TeamResponse.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.network.TeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.client.network.TeamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.client.network.TeamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.network.NetworkClient.prototype.teamInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.network.Network/TeamInfo',
      request,
      metadata || {},
      methodDescriptor_Network_TeamInfo,
      callback);
};


/**
 * @param {!proto.mlmbox.client.network.TeamRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.client.network.TeamResponse>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.network.NetworkPromiseClient.prototype.teamInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.network.Network/TeamInfo',
      request,
      metadata || {},
      methodDescriptor_Network_TeamInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.network.AccountsSearchRequest,
 *   !proto.mlmbox.types.Account.Info.List>}
 */
const methodDescriptor_Network_TeamSearch = new grpc.web.MethodDescriptor(
  '/mlmbox.client.network.Network/TeamSearch',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.network.AccountsSearchRequest,
  mlmbox_types_account_pb.Account.Info.List,
  /**
   * @param {!proto.mlmbox.client.network.AccountsSearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Account.Info.List.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.network.AccountsSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Account.Info.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Account.Info.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.network.NetworkClient.prototype.teamSearch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.network.Network/TeamSearch',
      request,
      metadata || {},
      methodDescriptor_Network_TeamSearch,
      callback);
};


/**
 * @param {!proto.mlmbox.client.network.AccountsSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Account.Info.List>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.network.NetworkPromiseClient.prototype.teamSearch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.network.Network/TeamSearch',
      request,
      metadata || {},
      methodDescriptor_Network_TeamSearch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.network.TeamPartnerListRequest,
 *   !proto.mlmbox.types.Account.Info.List>}
 */
const methodDescriptor_Network_TeamPartnerList = new grpc.web.MethodDescriptor(
  '/mlmbox.client.network.Network/TeamPartnerList',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.network.TeamPartnerListRequest,
  mlmbox_types_account_pb.Account.Info.List,
  /**
   * @param {!proto.mlmbox.client.network.TeamPartnerListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Account.Info.List.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.network.TeamPartnerListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Account.Info.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Account.Info.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.network.NetworkClient.prototype.teamPartnerList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.network.Network/TeamPartnerList',
      request,
      metadata || {},
      methodDescriptor_Network_TeamPartnerList,
      callback);
};


/**
 * @param {!proto.mlmbox.client.network.TeamPartnerListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Account.Info.List>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.network.NetworkPromiseClient.prototype.teamPartnerList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.network.Network/TeamPartnerList',
      request,
      metadata || {},
      methodDescriptor_Network_TeamPartnerList);
};


module.exports = proto.mlmbox.client.network;
