import * as jspb from 'google-protobuf'

import * as mlmbox_types_account_pb from '../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"
import * as mlmbox_types_asset_pb from '../../mlmbox/types/asset_pb'; // proto import: "mlmbox/types/asset.proto"
import * as mlmbox_types_exchanger_pb from '../../mlmbox/types/exchanger_pb'; // proto import: "mlmbox/types/exchanger.proto"
import * as mlmbox_types_locale_pb from '../../mlmbox/types/locale_pb'; // proto import: "mlmbox/types/locale.proto"
import * as mlmbox_types_wallet_pb from '../../mlmbox/types/wallet_pb'; // proto import: "mlmbox/types/wallet.proto"


export class Scheme extends jspb.Message {
  getAssetsList(): Array<mlmbox_types_asset_pb.Asset>;
  setAssetsList(value: Array<mlmbox_types_asset_pb.Asset>): Scheme;
  clearAssetsList(): Scheme;
  addAssets(value?: mlmbox_types_asset_pb.Asset, index?: number): mlmbox_types_asset_pb.Asset;

  getAssetPairExchangeRatesList(): Array<mlmbox_types_exchanger_pb.Exchanger.Rate>;
  setAssetPairExchangeRatesList(value: Array<mlmbox_types_exchanger_pb.Exchanger.Rate>): Scheme;
  clearAssetPairExchangeRatesList(): Scheme;
  addAssetPairExchangeRates(value?: mlmbox_types_exchanger_pb.Exchanger.Rate, index?: number): mlmbox_types_exchanger_pb.Exchanger.Rate;

  getLocalesList(): Array<mlmbox_types_locale_pb.Locale>;
  setLocalesList(value: Array<mlmbox_types_locale_pb.Locale>): Scheme;
  clearLocalesList(): Scheme;
  addLocales(value?: mlmbox_types_locale_pb.Locale, index?: number): mlmbox_types_locale_pb.Locale;

  getWalletAssetsList(): Array<mlmbox_types_wallet_pb.Wallet.Asset>;
  setWalletAssetsList(value: Array<mlmbox_types_wallet_pb.Wallet.Asset>): Scheme;
  clearWalletAssetsList(): Scheme;
  addWalletAssets(value?: mlmbox_types_wallet_pb.Wallet.Asset, index?: number): mlmbox_types_wallet_pb.Wallet.Asset;

  getWalletProcessingsList(): Array<mlmbox_types_wallet_pb.Wallet.Processing>;
  setWalletProcessingsList(value: Array<mlmbox_types_wallet_pb.Wallet.Processing>): Scheme;
  clearWalletProcessingsList(): Scheme;
  addWalletProcessings(value?: mlmbox_types_wallet_pb.Wallet.Processing, index?: number): mlmbox_types_wallet_pb.Wallet.Processing;

  getTreeGroupsList(): Array<mlmbox_types_account_pb.Tree.Group>;
  setTreeGroupsList(value: Array<mlmbox_types_account_pb.Tree.Group>): Scheme;
  clearTreeGroupsList(): Scheme;
  addTreeGroups(value?: mlmbox_types_account_pb.Tree.Group, index?: number): mlmbox_types_account_pb.Tree.Group;

  getTreesList(): Array<mlmbox_types_account_pb.Tree>;
  setTreesList(value: Array<mlmbox_types_account_pb.Tree>): Scheme;
  clearTreesList(): Scheme;
  addTrees(value?: mlmbox_types_account_pb.Tree, index?: number): mlmbox_types_account_pb.Tree;

  getMetricsAccountsQuantity(): number;
  setMetricsAccountsQuantity(value: number): Scheme;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Scheme.AsObject;
  static toObject(includeInstance: boolean, msg: Scheme): Scheme.AsObject;
  static serializeBinaryToWriter(message: Scheme, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Scheme;
  static deserializeBinaryFromReader(message: Scheme, reader: jspb.BinaryReader): Scheme;
}

export namespace Scheme {
  export type AsObject = {
    assetsList: Array<mlmbox_types_asset_pb.Asset.AsObject>;
    assetPairExchangeRatesList: Array<mlmbox_types_exchanger_pb.Exchanger.Rate.AsObject>;
    localesList: Array<mlmbox_types_locale_pb.Locale.AsObject>;
    walletAssetsList: Array<mlmbox_types_wallet_pb.Wallet.Asset.AsObject>;
    walletProcessingsList: Array<mlmbox_types_wallet_pb.Wallet.Processing.AsObject>;
    treeGroupsList: Array<mlmbox_types_account_pb.Tree.Group.AsObject>;
    treesList: Array<mlmbox_types_account_pb.Tree.AsObject>;
    metricsAccountsQuantity: number;
  };
}

