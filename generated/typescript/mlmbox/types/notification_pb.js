// source: mlmbox/types/notification.proto
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

var mlmbox_types_wallet_pb = require('../../mlmbox/types/wallet_pb.js');
goog.object.extend(proto, mlmbox_types_wallet_pb);
goog.exportSymbol('proto.mlmbox.types.Notification', null, global);
goog.exportSymbol('proto.mlmbox.types.Notification.AssetTransaction', null, global);
goog.exportSymbol('proto.mlmbox.types.Notification.MessageCase', null, global);
goog.exportSymbol('proto.mlmbox.types.Notification.PositionView', null, global);
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
proto.mlmbox.types.Notification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mlmbox.types.Notification.oneofGroups_);
};
goog.inherits(proto.mlmbox.types.Notification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Notification.displayName = 'proto.mlmbox.types.Notification';
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
proto.mlmbox.types.Notification.PositionView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.types.Notification.PositionView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Notification.PositionView.displayName = 'proto.mlmbox.types.Notification.PositionView';
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
proto.mlmbox.types.Notification.AssetTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.types.Notification.AssetTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Notification.AssetTransaction.displayName = 'proto.mlmbox.types.Notification.AssetTransaction';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mlmbox.types.Notification.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.mlmbox.types.Notification.MessageCase = {
  MESSAGE_NOT_SET: 0,
  METRICS_ACCOUNTS_QUANTITY: 1,
  POSITION_VIEW: 2,
  WALLET_TRANSACTION: 3
};

/**
 * @return {proto.mlmbox.types.Notification.MessageCase}
 */
proto.mlmbox.types.Notification.prototype.getMessageCase = function() {
  return /** @type {proto.mlmbox.types.Notification.MessageCase} */(jspb.Message.computeOneofCase(this, proto.mlmbox.types.Notification.oneofGroups_[0]));
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
proto.mlmbox.types.Notification.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Notification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Notification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Notification.toObject = function(includeInstance, msg) {
  var f, obj = {
    metricsAccountsQuantity: jspb.Message.getFieldWithDefault(msg, 1, 0),
    positionView: (f = msg.getPositionView()) && proto.mlmbox.types.Notification.PositionView.toObject(includeInstance, f),
    walletTransaction: (f = msg.getWalletTransaction()) && proto.mlmbox.types.Notification.AssetTransaction.toObject(includeInstance, f)
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
 * @return {!proto.mlmbox.types.Notification}
 */
proto.mlmbox.types.Notification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Notification;
  return proto.mlmbox.types.Notification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Notification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Notification}
 */
proto.mlmbox.types.Notification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMetricsAccountsQuantity(value);
      break;
    case 2:
      var value = new proto.mlmbox.types.Notification.PositionView;
      reader.readMessage(value,proto.mlmbox.types.Notification.PositionView.deserializeBinaryFromReader);
      msg.setPositionView(value);
      break;
    case 3:
      var value = new proto.mlmbox.types.Notification.AssetTransaction;
      reader.readMessage(value,proto.mlmbox.types.Notification.AssetTransaction.deserializeBinaryFromReader);
      msg.setWalletTransaction(value);
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
proto.mlmbox.types.Notification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Notification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Notification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Notification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPositionView();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mlmbox.types.Notification.PositionView.serializeBinaryToWriter
    );
  }
  f = message.getWalletTransaction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mlmbox.types.Notification.AssetTransaction.serializeBinaryToWriter
    );
  }
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
proto.mlmbox.types.Notification.PositionView.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Notification.PositionView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Notification.PositionView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Notification.PositionView.toObject = function(includeInstance, msg) {
  var f, obj = {
    treeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    accountId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    positionId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    positionSponsorId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    positionSponsorBranch: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.mlmbox.types.Notification.PositionView}
 */
proto.mlmbox.types.Notification.PositionView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Notification.PositionView;
  return proto.mlmbox.types.Notification.PositionView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Notification.PositionView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Notification.PositionView}
 */
proto.mlmbox.types.Notification.PositionView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTreeId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccountId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPositionId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPositionSponsorId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPositionSponsorBranch(value);
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
proto.mlmbox.types.Notification.PositionView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Notification.PositionView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Notification.PositionView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Notification.PositionView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTreeId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAccountId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPositionId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPositionSponsorId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPositionSponsorBranch();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 tree_id = 1;
 * @return {number}
 */
proto.mlmbox.types.Notification.PositionView.prototype.getTreeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.types.Notification.PositionView} returns this
 */
proto.mlmbox.types.Notification.PositionView.prototype.setTreeId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 account_id = 2;
 * @return {number}
 */
proto.mlmbox.types.Notification.PositionView.prototype.getAccountId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.types.Notification.PositionView} returns this
 */
proto.mlmbox.types.Notification.PositionView.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 position_id = 3;
 * @return {number}
 */
proto.mlmbox.types.Notification.PositionView.prototype.getPositionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.types.Notification.PositionView} returns this
 */
proto.mlmbox.types.Notification.PositionView.prototype.setPositionId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 position_sponsor_id = 4;
 * @return {number}
 */
proto.mlmbox.types.Notification.PositionView.prototype.getPositionSponsorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.types.Notification.PositionView} returns this
 */
proto.mlmbox.types.Notification.PositionView.prototype.setPositionSponsorId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 position_sponsor_branch = 5;
 * @return {number}
 */
proto.mlmbox.types.Notification.PositionView.prototype.getPositionSponsorBranch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.types.Notification.PositionView} returns this
 */
proto.mlmbox.types.Notification.PositionView.prototype.setPositionSponsorBranch = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.mlmbox.types.Notification.AssetTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Notification.AssetTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Notification.AssetTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Notification.AssetTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    transaction: (f = msg.getTransaction()) && mlmbox_types_wallet_pb.Wallet.Asset.Transaction.toObject(includeInstance, f)
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
 * @return {!proto.mlmbox.types.Notification.AssetTransaction}
 */
proto.mlmbox.types.Notification.AssetTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Notification.AssetTransaction;
  return proto.mlmbox.types.Notification.AssetTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Notification.AssetTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Notification.AssetTransaction}
 */
proto.mlmbox.types.Notification.AssetTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAssetId(value);
      break;
    case 2:
      var value = new mlmbox_types_wallet_pb.Wallet.Asset.Transaction;
      reader.readMessage(value,mlmbox_types_wallet_pb.Wallet.Asset.Transaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
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
proto.mlmbox.types.Notification.AssetTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Notification.AssetTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Notification.AssetTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Notification.AssetTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mlmbox_types_wallet_pb.Wallet.Asset.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 asset_id = 1;
 * @return {number}
 */
proto.mlmbox.types.Notification.AssetTransaction.prototype.getAssetId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.types.Notification.AssetTransaction} returns this
 */
proto.mlmbox.types.Notification.AssetTransaction.prototype.setAssetId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Wallet.Asset.Transaction transaction = 2;
 * @return {?proto.mlmbox.types.Wallet.Asset.Transaction}
 */
proto.mlmbox.types.Notification.AssetTransaction.prototype.getTransaction = function() {
  return /** @type{?proto.mlmbox.types.Wallet.Asset.Transaction} */ (
    jspb.Message.getWrapperField(this, mlmbox_types_wallet_pb.Wallet.Asset.Transaction, 2));
};


/**
 * @param {?proto.mlmbox.types.Wallet.Asset.Transaction|undefined} value
 * @return {!proto.mlmbox.types.Notification.AssetTransaction} returns this
*/
proto.mlmbox.types.Notification.AssetTransaction.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mlmbox.types.Notification.AssetTransaction} returns this
 */
proto.mlmbox.types.Notification.AssetTransaction.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mlmbox.types.Notification.AssetTransaction.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 metrics_accounts_quantity = 1;
 * @return {number}
 */
proto.mlmbox.types.Notification.prototype.getMetricsAccountsQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.types.Notification} returns this
 */
proto.mlmbox.types.Notification.prototype.setMetricsAccountsQuantity = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.mlmbox.types.Notification.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mlmbox.types.Notification} returns this
 */
proto.mlmbox.types.Notification.prototype.clearMetricsAccountsQuantity = function() {
  return jspb.Message.setOneofField(this, 1, proto.mlmbox.types.Notification.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mlmbox.types.Notification.prototype.hasMetricsAccountsQuantity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PositionView position_view = 2;
 * @return {?proto.mlmbox.types.Notification.PositionView}
 */
proto.mlmbox.types.Notification.prototype.getPositionView = function() {
  return /** @type{?proto.mlmbox.types.Notification.PositionView} */ (
    jspb.Message.getWrapperField(this, proto.mlmbox.types.Notification.PositionView, 2));
};


/**
 * @param {?proto.mlmbox.types.Notification.PositionView|undefined} value
 * @return {!proto.mlmbox.types.Notification} returns this
*/
proto.mlmbox.types.Notification.prototype.setPositionView = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mlmbox.types.Notification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mlmbox.types.Notification} returns this
 */
proto.mlmbox.types.Notification.prototype.clearPositionView = function() {
  return this.setPositionView(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mlmbox.types.Notification.prototype.hasPositionView = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AssetTransaction wallet_transaction = 3;
 * @return {?proto.mlmbox.types.Notification.AssetTransaction}
 */
proto.mlmbox.types.Notification.prototype.getWalletTransaction = function() {
  return /** @type{?proto.mlmbox.types.Notification.AssetTransaction} */ (
    jspb.Message.getWrapperField(this, proto.mlmbox.types.Notification.AssetTransaction, 3));
};


/**
 * @param {?proto.mlmbox.types.Notification.AssetTransaction|undefined} value
 * @return {!proto.mlmbox.types.Notification} returns this
*/
proto.mlmbox.types.Notification.prototype.setWalletTransaction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.mlmbox.types.Notification.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mlmbox.types.Notification} returns this
 */
proto.mlmbox.types.Notification.prototype.clearWalletTransaction = function() {
  return this.setWalletTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mlmbox.types.Notification.prototype.hasWalletTransaction = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.mlmbox.types);
