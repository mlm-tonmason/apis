import * as jspb from 'google-protobuf'

import * as mlmbox_types_wallet_pb from '../../mlmbox/types/wallet_pb'; // proto import: "mlmbox/types/wallet.proto"


export class Notification extends jspb.Message {
  getMetricsAccountsQuantity(): number;
  setMetricsAccountsQuantity(value: number): Notification;

  getPositionView(): Notification.PositionView | undefined;
  setPositionView(value?: Notification.PositionView): Notification;
  hasPositionView(): boolean;
  clearPositionView(): Notification;

  getWalletTransaction(): Notification.AssetTransaction | undefined;
  setWalletTransaction(value?: Notification.AssetTransaction): Notification;
  hasWalletTransaction(): boolean;
  clearWalletTransaction(): Notification;

  getMessageCase(): Notification.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    metricsAccountsQuantity: number,
    positionView?: Notification.PositionView.AsObject,
    walletTransaction?: Notification.AssetTransaction.AsObject,
  }

  export class PositionView extends jspb.Message {
    getTreeId(): number;
    setTreeId(value: number): PositionView;

    getAccountId(): number;
    setAccountId(value: number): PositionView;

    getPositionId(): number;
    setPositionId(value: number): PositionView;

    getPositionSponsorId(): number;
    setPositionSponsorId(value: number): PositionView;

    getPositionSponsorBranch(): number;
    setPositionSponsorBranch(value: number): PositionView;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionView.AsObject;
    static toObject(includeInstance: boolean, msg: PositionView): PositionView.AsObject;
    static serializeBinaryToWriter(message: PositionView, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionView;
    static deserializeBinaryFromReader(message: PositionView, reader: jspb.BinaryReader): PositionView;
  }

  export namespace PositionView {
    export type AsObject = {
      treeId: number,
      accountId: number,
      positionId: number,
      positionSponsorId: number,
      positionSponsorBranch: number,
    }
  }


  export class AssetTransaction extends jspb.Message {
    getAssetId(): number;
    setAssetId(value: number): AssetTransaction;

    getTransaction(): mlmbox_types_wallet_pb.Wallet.Asset.Transaction | undefined;
    setTransaction(value?: mlmbox_types_wallet_pb.Wallet.Asset.Transaction): AssetTransaction;
    hasTransaction(): boolean;
    clearTransaction(): AssetTransaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetTransaction.AsObject;
    static toObject(includeInstance: boolean, msg: AssetTransaction): AssetTransaction.AsObject;
    static serializeBinaryToWriter(message: AssetTransaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetTransaction;
    static deserializeBinaryFromReader(message: AssetTransaction, reader: jspb.BinaryReader): AssetTransaction;
  }

  export namespace AssetTransaction {
    export type AsObject = {
      assetId: number,
      transaction?: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.AsObject,
    }
  }


  export enum MessageCase { 
    MESSAGE_NOT_SET = 0,
    METRICS_ACCOUNTS_QUANTITY = 1,
    POSITION_VIEW = 2,
    WALLET_TRANSACTION = 3,
  }
}

