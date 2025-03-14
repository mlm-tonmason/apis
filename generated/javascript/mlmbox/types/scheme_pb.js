// source: mlmbox/types/scheme.proto
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

var mlmbox_types_account_pb = require('../../mlmbox/types/account_pb.js');
goog.object.extend(proto, mlmbox_types_account_pb);
var mlmbox_types_asset_pb = require('../../mlmbox/types/asset_pb.js');
goog.object.extend(proto, mlmbox_types_asset_pb);
var mlmbox_types_exchanger_pb = require('../../mlmbox/types/exchanger_pb.js');
goog.object.extend(proto, mlmbox_types_exchanger_pb);
var mlmbox_types_locale_pb = require('../../mlmbox/types/locale_pb.js');
goog.object.extend(proto, mlmbox_types_locale_pb);
var mlmbox_types_wallet_pb = require('../../mlmbox/types/wallet_pb.js');
goog.object.extend(proto, mlmbox_types_wallet_pb);
goog.exportSymbol('proto.mlmbox.types.Scheme', null, global);
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
proto.mlmbox.types.Scheme = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mlmbox.types.Scheme.repeatedFields_, null);
};
goog.inherits(proto.mlmbox.types.Scheme, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Scheme.displayName = 'proto.mlmbox.types.Scheme';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mlmbox.types.Scheme.repeatedFields_ = [1,2,3,4,5,6,7];



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
proto.mlmbox.types.Scheme.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Scheme.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Scheme} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Scheme.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetsList: jspb.Message.toObjectList(msg.getAssetsList(),
    mlmbox_types_asset_pb.Asset.toObject, includeInstance),
    assetPairExchangeRatesList: jspb.Message.toObjectList(msg.getAssetPairExchangeRatesList(),
    mlmbox_types_exchanger_pb.Exchanger.Rate.toObject, includeInstance),
    localesList: jspb.Message.toObjectList(msg.getLocalesList(),
    mlmbox_types_locale_pb.Locale.toObject, includeInstance),
    walletAssetsList: jspb.Message.toObjectList(msg.getWalletAssetsList(),
    mlmbox_types_wallet_pb.Wallet.Asset.toObject, includeInstance),
    walletProcessingsList: jspb.Message.toObjectList(msg.getWalletProcessingsList(),
    mlmbox_types_wallet_pb.Wallet.Processing.toObject, includeInstance),
    treeGroupsList: jspb.Message.toObjectList(msg.getTreeGroupsList(),
    mlmbox_types_account_pb.Tree.Group.toObject, includeInstance),
    treesList: jspb.Message.toObjectList(msg.getTreesList(),
    mlmbox_types_account_pb.Tree.toObject, includeInstance),
    metricsAccountsQuantity: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.mlmbox.types.Scheme}
 */
proto.mlmbox.types.Scheme.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Scheme;
  return proto.mlmbox.types.Scheme.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Scheme} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Scheme}
 */
proto.mlmbox.types.Scheme.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new mlmbox_types_asset_pb.Asset;
      reader.readMessage(value,mlmbox_types_asset_pb.Asset.deserializeBinaryFromReader);
      msg.addAssets(value);
      break;
    case 2:
      var value = new mlmbox_types_exchanger_pb.Exchanger.Rate;
      reader.readMessage(value,mlmbox_types_exchanger_pb.Exchanger.Rate.deserializeBinaryFromReader);
      msg.addAssetPairExchangeRates(value);
      break;
    case 3:
      var value = new mlmbox_types_locale_pb.Locale;
      reader.readMessage(value,mlmbox_types_locale_pb.Locale.deserializeBinaryFromReader);
      msg.addLocales(value);
      break;
    case 4:
      var value = new mlmbox_types_wallet_pb.Wallet.Asset;
      reader.readMessage(value,mlmbox_types_wallet_pb.Wallet.Asset.deserializeBinaryFromReader);
      msg.addWalletAssets(value);
      break;
    case 5:
      var value = new mlmbox_types_wallet_pb.Wallet.Processing;
      reader.readMessage(value,mlmbox_types_wallet_pb.Wallet.Processing.deserializeBinaryFromReader);
      msg.addWalletProcessings(value);
      break;
    case 6:
      var value = new mlmbox_types_account_pb.Tree.Group;
      reader.readMessage(value,mlmbox_types_account_pb.Tree.Group.deserializeBinaryFromReader);
      msg.addTreeGroups(value);
      break;
    case 7:
      var value = new mlmbox_types_account_pb.Tree;
      reader.readMessage(value,mlmbox_types_account_pb.Tree.deserializeBinaryFromReader);
      msg.addTrees(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMetricsAccountsQuantity(value);
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
proto.mlmbox.types.Scheme.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Scheme.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Scheme} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Scheme.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      mlmbox_types_asset_pb.Asset.serializeBinaryToWriter
    );
  }
  f = message.getAssetPairExchangeRatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      mlmbox_types_exchanger_pb.Exchanger.Rate.serializeBinaryToWriter
    );
  }
  f = message.getLocalesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      mlmbox_types_locale_pb.Locale.serializeBinaryToWriter
    );
  }
  f = message.getWalletAssetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      mlmbox_types_wallet_pb.Wallet.Asset.serializeBinaryToWriter
    );
  }
  f = message.getWalletProcessingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      mlmbox_types_wallet_pb.Wallet.Processing.serializeBinaryToWriter
    );
  }
  f = message.getTreeGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      mlmbox_types_account_pb.Tree.Group.serializeBinaryToWriter
    );
  }
  f = message.getTreesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      mlmbox_types_account_pb.Tree.serializeBinaryToWriter
    );
  }
  f = message.getMetricsAccountsQuantity();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * repeated Asset assets = 1;
 * @return {!Array<!proto.mlmbox.types.Asset>}
 */
proto.mlmbox.types.Scheme.prototype.getAssetsList = function() {
  return /** @type{!Array<!proto.mlmbox.types.Asset>} */ (
    jspb.Message.getRepeatedWrapperField(this, mlmbox_types_asset_pb.Asset, 1));
};


/**
 * @param {!Array<!proto.mlmbox.types.Asset>} value
 * @return {!proto.mlmbox.types.Scheme} returns this
*/
proto.mlmbox.types.Scheme.prototype.setAssetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mlmbox.types.Asset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mlmbox.types.Asset}
 */
proto.mlmbox.types.Scheme.prototype.addAssets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mlmbox.types.Asset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mlmbox.types.Scheme} returns this
 */
proto.mlmbox.types.Scheme.prototype.clearAssetsList = function() {
  return this.setAssetsList([]);
};


/**
 * repeated Exchanger.Rate asset_pair_exchange_rates = 2;
 * @return {!Array<!proto.mlmbox.types.Exchanger.Rate>}
 */
proto.mlmbox.types.Scheme.prototype.getAssetPairExchangeRatesList = function() {
  return /** @type{!Array<!proto.mlmbox.types.Exchanger.Rate>} */ (
    jspb.Message.getRepeatedWrapperField(this, mlmbox_types_exchanger_pb.Exchanger.Rate, 2));
};


/**
 * @param {!Array<!proto.mlmbox.types.Exchanger.Rate>} value
 * @return {!proto.mlmbox.types.Scheme} returns this
*/
proto.mlmbox.types.Scheme.prototype.setAssetPairExchangeRatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.mlmbox.types.Exchanger.Rate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mlmbox.types.Exchanger.Rate}
 */
proto.mlmbox.types.Scheme.prototype.addAssetPairExchangeRates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.mlmbox.types.Exchanger.Rate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mlmbox.types.Scheme} returns this
 */
proto.mlmbox.types.Scheme.prototype.clearAssetPairExchangeRatesList = function() {
  return this.setAssetPairExchangeRatesList([]);
};


/**
 * repeated Locale locales = 3;
 * @return {!Array<!proto.mlmbox.types.Locale>}
 */
proto.mlmbox.types.Scheme.prototype.getLocalesList = function() {
  return /** @type{!Array<!proto.mlmbox.types.Locale>} */ (
    jspb.Message.getRepeatedWrapperField(this, mlmbox_types_locale_pb.Locale, 3));
};


/**
 * @param {!Array<!proto.mlmbox.types.Locale>} value
 * @return {!proto.mlmbox.types.Scheme} returns this
*/
proto.mlmbox.types.Scheme.prototype.setLocalesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.mlmbox.types.Locale=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mlmbox.types.Locale}
 */
proto.mlmbox.types.Scheme.prototype.addLocales = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.mlmbox.types.Locale, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mlmbox.types.Scheme} returns this
 */
proto.mlmbox.types.Scheme.prototype.clearLocalesList = function() {
  return this.setLocalesList([]);
};


/**
 * repeated Wallet.Asset wallet_assets = 4;
 * @return {!Array<!proto.mlmbox.types.Wallet.Asset>}
 */
proto.mlmbox.types.Scheme.prototype.getWalletAssetsList = function() {
  return /** @type{!Array<!proto.mlmbox.types.Wallet.Asset>} */ (
    jspb.Message.getRepeatedWrapperField(this, mlmbox_types_wallet_pb.Wallet.Asset, 4));
};


/**
 * @param {!Array<!proto.mlmbox.types.Wallet.Asset>} value
 * @return {!proto.mlmbox.types.Scheme} returns this
*/
proto.mlmbox.types.Scheme.prototype.setWalletAssetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.mlmbox.types.Wallet.Asset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mlmbox.types.Wallet.Asset}
 */
proto.mlmbox.types.Scheme.prototype.addWalletAssets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.mlmbox.types.Wallet.Asset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mlmbox.types.Scheme} returns this
 */
proto.mlmbox.types.Scheme.prototype.clearWalletAssetsList = function() {
  return this.setWalletAssetsList([]);
};


/**
 * repeated Wallet.Processing wallet_processings = 5;
 * @return {!Array<!proto.mlmbox.types.Wallet.Processing>}
 */
proto.mlmbox.types.Scheme.prototype.getWalletProcessingsList = function() {
  return /** @type{!Array<!proto.mlmbox.types.Wallet.Processing>} */ (
    jspb.Message.getRepeatedWrapperField(this, mlmbox_types_wallet_pb.Wallet.Processing, 5));
};


/**
 * @param {!Array<!proto.mlmbox.types.Wallet.Processing>} value
 * @return {!proto.mlmbox.types.Scheme} returns this
*/
proto.mlmbox.types.Scheme.prototype.setWalletProcessingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.mlmbox.types.Wallet.Processing=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mlmbox.types.Wallet.Processing}
 */
proto.mlmbox.types.Scheme.prototype.addWalletProcessings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.mlmbox.types.Wallet.Processing, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mlmbox.types.Scheme} returns this
 */
proto.mlmbox.types.Scheme.prototype.clearWalletProcessingsList = function() {
  return this.setWalletProcessingsList([]);
};


/**
 * repeated Tree.Group tree_groups = 6;
 * @return {!Array<!proto.mlmbox.types.Tree.Group>}
 */
proto.mlmbox.types.Scheme.prototype.getTreeGroupsList = function() {
  return /** @type{!Array<!proto.mlmbox.types.Tree.Group>} */ (
    jspb.Message.getRepeatedWrapperField(this, mlmbox_types_account_pb.Tree.Group, 6));
};


/**
 * @param {!Array<!proto.mlmbox.types.Tree.Group>} value
 * @return {!proto.mlmbox.types.Scheme} returns this
*/
proto.mlmbox.types.Scheme.prototype.setTreeGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.mlmbox.types.Tree.Group=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mlmbox.types.Tree.Group}
 */
proto.mlmbox.types.Scheme.prototype.addTreeGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.mlmbox.types.Tree.Group, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mlmbox.types.Scheme} returns this
 */
proto.mlmbox.types.Scheme.prototype.clearTreeGroupsList = function() {
  return this.setTreeGroupsList([]);
};


/**
 * repeated Tree trees = 7;
 * @return {!Array<!proto.mlmbox.types.Tree>}
 */
proto.mlmbox.types.Scheme.prototype.getTreesList = function() {
  return /** @type{!Array<!proto.mlmbox.types.Tree>} */ (
    jspb.Message.getRepeatedWrapperField(this, mlmbox_types_account_pb.Tree, 7));
};


/**
 * @param {!Array<!proto.mlmbox.types.Tree>} value
 * @return {!proto.mlmbox.types.Scheme} returns this
*/
proto.mlmbox.types.Scheme.prototype.setTreesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.mlmbox.types.Tree=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mlmbox.types.Tree}
 */
proto.mlmbox.types.Scheme.prototype.addTrees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.mlmbox.types.Tree, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mlmbox.types.Scheme} returns this
 */
proto.mlmbox.types.Scheme.prototype.clearTreesList = function() {
  return this.setTreesList([]);
};


/**
 * optional uint32 metrics_accounts_quantity = 8;
 * @return {number}
 */
proto.mlmbox.types.Scheme.prototype.getMetricsAccountsQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.types.Scheme} returns this
 */
proto.mlmbox.types.Scheme.prototype.setMetricsAccountsQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


goog.object.extend(exports, proto.mlmbox.types);
