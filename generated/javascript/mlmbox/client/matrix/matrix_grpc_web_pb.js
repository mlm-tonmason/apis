/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.matrix
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.2
// source: mlmbox/client/matrix/matrix.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var mlmbox_types_account_pb = require('../../../mlmbox/types/account_pb.js')

var mlmbox_types_wallet_pb = require('../../../mlmbox/types/wallet_pb.js')
const proto = {};
proto.mlmbox = {};
proto.mlmbox.client = {};
proto.mlmbox.client.matrix = require('./matrix_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.matrix.MatrixClient =
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
proto.mlmbox.client.matrix.MatrixPromiseClient =
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
 *   !proto.google.protobuf.Empty,
 *   !proto.mlmbox.types.Matrix.Info>}
 */
const methodDescriptor_Matrix_Info = new grpc.web.MethodDescriptor(
  '/mlmbox.client.matrix.Matrix/Info',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_account_pb.Matrix.Info,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Matrix.Info.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Matrix.Info)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Matrix.Info>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.matrix.MatrixClient.prototype.info =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/Info',
      request,
      metadata || {},
      methodDescriptor_Matrix_Info,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Matrix.Info>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.matrix.MatrixPromiseClient.prototype.info =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/Info',
      request,
      metadata || {},
      methodDescriptor_Matrix_Info);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.PositionView.Team,
 *   !proto.mlmbox.types.Matrix.View>}
 */
const methodDescriptor_Matrix_View = new grpc.web.MethodDescriptor(
  '/mlmbox.client.matrix.Matrix/View',
  grpc.web.MethodType.UNARY,
  mlmbox_types_account_pb.PositionView.Team,
  mlmbox_types_account_pb.Matrix.View,
  /**
   * @param {!proto.mlmbox.types.PositionView.Team} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Matrix.View.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.PositionView.Team} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Matrix.View)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Matrix.View>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.matrix.MatrixClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/View',
      request,
      metadata || {},
      methodDescriptor_Matrix_View,
      callback);
};


/**
 * @param {!proto.mlmbox.types.PositionView.Team} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Matrix.View>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.matrix.MatrixPromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/View',
      request,
      metadata || {},
      methodDescriptor_Matrix_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Matrix.Reinvest.Request,
 *   !proto.mlmbox.client.matrix.SetReinvestConfigResponse>}
 */
const methodDescriptor_Matrix_SetReinvestConfig = new grpc.web.MethodDescriptor(
  '/mlmbox.client.matrix.Matrix/SetReinvestConfig',
  grpc.web.MethodType.UNARY,
  mlmbox_types_account_pb.Matrix.Reinvest.Request,
  proto.mlmbox.client.matrix.SetReinvestConfigResponse,
  /**
   * @param {!proto.mlmbox.types.Matrix.Reinvest.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mlmbox.client.matrix.SetReinvestConfigResponse.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Matrix.Reinvest.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.client.matrix.SetReinvestConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.client.matrix.SetReinvestConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.matrix.MatrixClient.prototype.setReinvestConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/SetReinvestConfig',
      request,
      metadata || {},
      methodDescriptor_Matrix_SetReinvestConfig,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Matrix.Reinvest.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.client.matrix.SetReinvestConfigResponse>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.matrix.MatrixPromiseClient.prototype.setReinvestConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/SetReinvestConfig',
      request,
      metadata || {},
      methodDescriptor_Matrix_SetReinvestConfig);
};


module.exports = proto.mlmbox.client.matrix;

