// source: mlmbox/client/league/league.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var mlmbox_types_account_pb = require('../../../mlmbox/types/account_pb.js');
goog.object.extend(proto, mlmbox_types_account_pb);
var mlmbox_types_league_pb = require('../../../mlmbox/types/league_pb.js');
goog.object.extend(proto, mlmbox_types_league_pb);
var mlmbox_types_sort_pb = require('../../../mlmbox/types/sort_pb.js');
goog.object.extend(proto, mlmbox_types_sort_pb);
goog.exportSymbol('proto.mlmbox.client.league.StateGetRequest', null, global);
goog.exportSymbol('proto.mlmbox.client.league.StateGetResponse', null, global);
goog.exportSymbol('proto.mlmbox.client.league.StateRankListRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mlmbox.client.league.StateGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.client.league.StateGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.client.league.StateGetRequest.displayName = 'proto.mlmbox.client.league.StateGetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mlmbox.client.league.StateGetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mlmbox.client.league.StateGetResponse.repeatedFields_, null);
};
goog.inherits(proto.mlmbox.client.league.StateGetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.client.league.StateGetResponse.displayName = 'proto.mlmbox.client.league.StateGetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mlmbox.client.league.StateRankListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.client.league.StateRankListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.client.league.StateRankListRequest.displayName = 'proto.mlmbox.client.league.StateRankListRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mlmbox.client.league.StateGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.client.league.StateGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.client.league.StateGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.league.StateGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    leagueId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sortRanks: (f = msg.getSortRanks()) && mlmbox_types_sort_pb.Sort.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mlmbox.client.league.StateGetRequest}
 */
proto.mlmbox.client.league.StateGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.client.league.StateGetRequest;
  return proto.mlmbox.client.league.StateGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.client.league.StateGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.client.league.StateGetRequest}
 */
proto.mlmbox.client.league.StateGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLeagueId(value);
      break;
    case 2:
      var value = new mlmbox_types_sort_pb.Sort;
      reader.readMessage(value,mlmbox_types_sort_pb.Sort.deserializeBinaryFromReader);
      msg.setSortRanks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mlmbox.client.league.StateGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.client.league.StateGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.client.league.StateGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.league.StateGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeagueId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSortRanks();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mlmbox_types_sort_pb.Sort.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 league_id = 1;
 * @return {number}
 */
proto.mlmbox.client.league.StateGetRequest.prototype.getLeagueId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.client.league.StateGetRequest} returns this
 */
proto.mlmbox.client.league.StateGetRequest.prototype.setLeagueId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional mlmbox.types.Sort sort_ranks = 2;
 * @return {?proto.mlmbox.types.Sort}
 */
proto.mlmbox.client.league.StateGetRequest.prototype.getSortRanks = function() {
  return /** @type{?proto.mlmbox.types.Sort} */ (
    jspb.Message.getWrapperField(this, mlmbox_types_sort_pb.Sort, 2));
};


/**
 * @param {?proto.mlmbox.types.Sort|undefined} value
 * @return {!proto.mlmbox.client.league.StateGetRequest} returns this
*/
proto.mlmbox.client.league.StateGetRequest.prototype.setSortRanks = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mlmbox.client.league.StateGetRequest} returns this
 */
proto.mlmbox.client.league.StateGetRequest.prototype.clearSortRanks = function() {
  return this.setSortRanks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mlmbox.client.league.StateGetRequest.prototype.hasSortRanks = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mlmbox.client.league.StateGetResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mlmbox.client.league.StateGetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.client.league.StateGetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.client.league.StateGetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.league.StateGetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && mlmbox_types_league_pb.League.Header.toObject(includeInstance, f),
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    mlmbox_types_account_pb.Account.Info.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mlmbox.client.league.StateGetResponse}
 */
proto.mlmbox.client.league.StateGetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.client.league.StateGetResponse;
  return proto.mlmbox.client.league.StateGetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.client.league.StateGetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.client.league.StateGetResponse}
 */
proto.mlmbox.client.league.StateGetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new mlmbox_types_league_pb.League.Header;
      reader.readMessage(value,mlmbox_types_league_pb.League.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new mlmbox_types_account_pb.Account.Info;
      reader.readMessage(value,mlmbox_types_account_pb.Account.Info.deserializeBinaryFromReader);
      msg.addAccounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mlmbox.client.league.StateGetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.client.league.StateGetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.client.league.StateGetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.league.StateGetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      mlmbox_types_league_pb.League.Header.serializeBinaryToWriter
    );
  }
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      mlmbox_types_account_pb.Account.Info.serializeBinaryToWriter
    );
  }
};


/**
 * optional mlmbox.types.League.Header header = 1;
 * @return {?proto.mlmbox.types.League.Header}
 */
proto.mlmbox.client.league.StateGetResponse.prototype.getHeader = function() {
  return /** @type{?proto.mlmbox.types.League.Header} */ (
    jspb.Message.getWrapperField(this, mlmbox_types_league_pb.League.Header, 1));
};


/**
 * @param {?proto.mlmbox.types.League.Header|undefined} value
 * @return {!proto.mlmbox.client.league.StateGetResponse} returns this
*/
proto.mlmbox.client.league.StateGetResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mlmbox.client.league.StateGetResponse} returns this
 */
proto.mlmbox.client.league.StateGetResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mlmbox.client.league.StateGetResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated mlmbox.types.Account.Info accounts = 2;
 * @return {!Array<!proto.mlmbox.types.Account.Info>}
 */
proto.mlmbox.client.league.StateGetResponse.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.mlmbox.types.Account.Info>} */ (
    jspb.Message.getRepeatedWrapperField(this, mlmbox_types_account_pb.Account.Info, 2));
};


/**
 * @param {!Array<!proto.mlmbox.types.Account.Info>} value
 * @return {!proto.mlmbox.client.league.StateGetResponse} returns this
*/
proto.mlmbox.client.league.StateGetResponse.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.mlmbox.types.Account.Info=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mlmbox.types.Account.Info}
 */
proto.mlmbox.client.league.StateGetResponse.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.mlmbox.types.Account.Info, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mlmbox.client.league.StateGetResponse} returns this
 */
proto.mlmbox.client.league.StateGetResponse.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mlmbox.client.league.StateRankListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.client.league.StateRankListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.client.league.StateRankListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.league.StateRankListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    leagueId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    stepRank: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sortRanks: (f = msg.getSortRanks()) && mlmbox_types_sort_pb.Sort.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mlmbox.client.league.StateRankListRequest}
 */
proto.mlmbox.client.league.StateRankListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.client.league.StateRankListRequest;
  return proto.mlmbox.client.league.StateRankListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.client.league.StateRankListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.client.league.StateRankListRequest}
 */
proto.mlmbox.client.league.StateRankListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLeagueId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStepRank(value);
      break;
    case 3:
      var value = new mlmbox_types_sort_pb.Sort;
      reader.readMessage(value,mlmbox_types_sort_pb.Sort.deserializeBinaryFromReader);
      msg.setSortRanks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mlmbox.client.league.StateRankListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.client.league.StateRankListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.client.league.StateRankListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.league.StateRankListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeagueId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStepRank();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSortRanks();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      mlmbox_types_sort_pb.Sort.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 league_id = 1;
 * @return {number}
 */
proto.mlmbox.client.league.StateRankListRequest.prototype.getLeagueId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.client.league.StateRankListRequest} returns this
 */
proto.mlmbox.client.league.StateRankListRequest.prototype.setLeagueId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 step_rank = 2;
 * @return {number}
 */
proto.mlmbox.client.league.StateRankListRequest.prototype.getStepRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.client.league.StateRankListRequest} returns this
 */
proto.mlmbox.client.league.StateRankListRequest.prototype.setStepRank = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional mlmbox.types.Sort sort_ranks = 3;
 * @return {?proto.mlmbox.types.Sort}
 */
proto.mlmbox.client.league.StateRankListRequest.prototype.getSortRanks = function() {
  return /** @type{?proto.mlmbox.types.Sort} */ (
    jspb.Message.getWrapperField(this, mlmbox_types_sort_pb.Sort, 3));
};


/**
 * @param {?proto.mlmbox.types.Sort|undefined} value
 * @return {!proto.mlmbox.client.league.StateRankListRequest} returns this
*/
proto.mlmbox.client.league.StateRankListRequest.prototype.setSortRanks = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mlmbox.client.league.StateRankListRequest} returns this
 */
proto.mlmbox.client.league.StateRankListRequest.prototype.clearSortRanks = function() {
  return this.setSortRanks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mlmbox.client.league.StateRankListRequest.prototype.hasSortRanks = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.mlmbox.client.league);
