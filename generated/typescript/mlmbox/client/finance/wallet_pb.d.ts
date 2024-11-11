import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"
import * as mlmbox_types_asset_pb from '../../../mlmbox/types/asset_pb'; // proto import: "mlmbox/types/asset.proto"
import * as mlmbox_types_sort_pb from '../../../mlmbox/types/sort_pb'; // proto import: "mlmbox/types/sort.proto"
import * as mlmbox_types_wallet_pb from '../../../mlmbox/types/wallet_pb'; // proto import: "mlmbox/types/wallet.proto"


export class WalletAssetGetRequest extends jspb.Message {
  getAssetId(): mlmbox_types_asset_pb.Asset.Id | undefined;
  setAssetId(value?: mlmbox_types_asset_pb.Asset.Id): WalletAssetGetRequest;
  hasAssetId(): boolean;
  clearAssetId(): WalletAssetGetRequest;

  getSortTransactions(): mlmbox_types_sort_pb.Sort | undefined;
  setSortTransactions(value?: mlmbox_types_sort_pb.Sort): WalletAssetGetRequest;
  hasSortTransactions(): boolean;
  clearSortTransactions(): WalletAssetGetRequest;

  getFilterKindIdsList(): Array<mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Kind.Id>;
  setFilterKindIdsList(value: Array<mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Kind.Id>): WalletAssetGetRequest;
  clearFilterKindIdsList(): WalletAssetGetRequest;
  addFilterKindIds(value: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Kind.Id, index?: number): WalletAssetGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletAssetGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WalletAssetGetRequest): WalletAssetGetRequest.AsObject;
  static serializeBinaryToWriter(message: WalletAssetGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletAssetGetRequest;
  static deserializeBinaryFromReader(message: WalletAssetGetRequest, reader: jspb.BinaryReader): WalletAssetGetRequest;
}

export namespace WalletAssetGetRequest {
  export type AsObject = {
    assetId?: mlmbox_types_asset_pb.Asset.Id.AsObject,
    sortTransactions?: mlmbox_types_sort_pb.Sort.AsObject,
    filterKindIdsList: Array<mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Kind.Id>,
  }
}

export class WalletAssetTransactionListRequest extends jspb.Message {
  getAssetId(): mlmbox_types_asset_pb.Asset.Id | undefined;
  setAssetId(value?: mlmbox_types_asset_pb.Asset.Id): WalletAssetTransactionListRequest;
  hasAssetId(): boolean;
  clearAssetId(): WalletAssetTransactionListRequest;

  getStepTransactionId(): number;
  setStepTransactionId(value: number): WalletAssetTransactionListRequest;

  getSortTransactions(): mlmbox_types_sort_pb.Sort | undefined;
  setSortTransactions(value?: mlmbox_types_sort_pb.Sort): WalletAssetTransactionListRequest;
  hasSortTransactions(): boolean;
  clearSortTransactions(): WalletAssetTransactionListRequest;

  getFilterKindIdsList(): Array<mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Kind.Id>;
  setFilterKindIdsList(value: Array<mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Kind.Id>): WalletAssetTransactionListRequest;
  clearFilterKindIdsList(): WalletAssetTransactionListRequest;
  addFilterKindIds(value: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Kind.Id, index?: number): WalletAssetTransactionListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletAssetTransactionListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WalletAssetTransactionListRequest): WalletAssetTransactionListRequest.AsObject;
  static serializeBinaryToWriter(message: WalletAssetTransactionListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletAssetTransactionListRequest;
  static deserializeBinaryFromReader(message: WalletAssetTransactionListRequest, reader: jspb.BinaryReader): WalletAssetTransactionListRequest;
}

export namespace WalletAssetTransactionListRequest {
  export type AsObject = {
    assetId?: mlmbox_types_asset_pb.Asset.Id.AsObject,
    stepTransactionId: number,
    sortTransactions?: mlmbox_types_sort_pb.Sort.AsObject,
    filterKindIdsList: Array<mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Kind.Id>,
  }
}

export class WalletDepositAddressResponse extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): WalletDepositAddressResponse;

  getMemo(): number;
  setMemo(value: number): WalletDepositAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletDepositAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WalletDepositAddressResponse): WalletDepositAddressResponse.AsObject;
  static serializeBinaryToWriter(message: WalletDepositAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletDepositAddressResponse;
  static deserializeBinaryFromReader(message: WalletDepositAddressResponse, reader: jspb.BinaryReader): WalletDepositAddressResponse;
}

export namespace WalletDepositAddressResponse {
  export type AsObject = {
    address: string,
    memo: number,
  }
}

export class TransferRequest extends jspb.Message {
  getAccount(): mlmbox_types_account_pb.Account.Id | undefined;
  setAccount(value?: mlmbox_types_account_pb.Account.Id): TransferRequest;
  hasAccount(): boolean;
  clearAccount(): TransferRequest;

  getOperationAmount(): mlmbox_types_asset_pb.Asset.Amount | undefined;
  setOperationAmount(value?: mlmbox_types_asset_pb.Asset.Amount): TransferRequest;
  hasOperationAmount(): boolean;
  clearOperationAmount(): TransferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferRequest): TransferRequest.AsObject;
  static serializeBinaryToWriter(message: TransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferRequest;
  static deserializeBinaryFromReader(message: TransferRequest, reader: jspb.BinaryReader): TransferRequest;
}

export namespace TransferRequest {
  export type AsObject = {
    account?: mlmbox_types_account_pb.Account.Id.AsObject,
    operationAmount?: mlmbox_types_asset_pb.Asset.Amount.AsObject,
  }
}

export class WalletValidateAddressRequest extends jspb.Message {
  getProcessingId(): mlmbox_types_wallet_pb.Wallet.Processing.Id | undefined;
  setProcessingId(value?: mlmbox_types_wallet_pb.Wallet.Processing.Id): WalletValidateAddressRequest;
  hasProcessingId(): boolean;
  clearProcessingId(): WalletValidateAddressRequest;

  getAddress(): string;
  setAddress(value: string): WalletValidateAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletValidateAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WalletValidateAddressRequest): WalletValidateAddressRequest.AsObject;
  static serializeBinaryToWriter(message: WalletValidateAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletValidateAddressRequest;
  static deserializeBinaryFromReader(message: WalletValidateAddressRequest, reader: jspb.BinaryReader): WalletValidateAddressRequest;
}

export namespace WalletValidateAddressRequest {
  export type AsObject = {
    processingId?: mlmbox_types_wallet_pb.Wallet.Processing.Id.AsObject,
    address: string,
  }
}

export class WalletValidateAddressResponse extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): WalletValidateAddressResponse;

  getValidated(): boolean;
  setValidated(value: boolean): WalletValidateAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletValidateAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WalletValidateAddressResponse): WalletValidateAddressResponse.AsObject;
  static serializeBinaryToWriter(message: WalletValidateAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletValidateAddressResponse;
  static deserializeBinaryFromReader(message: WalletValidateAddressResponse, reader: jspb.BinaryReader): WalletValidateAddressResponse;
}

export namespace WalletValidateAddressResponse {
  export type AsObject = {
    address: string,
    validated: boolean,
  }
}

export class WalletWithdrawalRequest extends jspb.Message {
  getProcessingId(): mlmbox_types_wallet_pb.Wallet.Processing.Id | undefined;
  setProcessingId(value?: mlmbox_types_wallet_pb.Wallet.Processing.Id): WalletWithdrawalRequest;
  hasProcessingId(): boolean;
  clearProcessingId(): WalletWithdrawalRequest;

  getOperationAmount(): mlmbox_types_asset_pb.Asset.Amount | undefined;
  setOperationAmount(value?: mlmbox_types_asset_pb.Asset.Amount): WalletWithdrawalRequest;
  hasOperationAmount(): boolean;
  clearOperationAmount(): WalletWithdrawalRequest;

  getAddress(): string;
  setAddress(value: string): WalletWithdrawalRequest;

  getMemo(): number;
  setMemo(value: number): WalletWithdrawalRequest;

  getOperationFeeFromBody(): boolean;
  setOperationFeeFromBody(value: boolean): WalletWithdrawalRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletWithdrawalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WalletWithdrawalRequest): WalletWithdrawalRequest.AsObject;
  static serializeBinaryToWriter(message: WalletWithdrawalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletWithdrawalRequest;
  static deserializeBinaryFromReader(message: WalletWithdrawalRequest, reader: jspb.BinaryReader): WalletWithdrawalRequest;
}

export namespace WalletWithdrawalRequest {
  export type AsObject = {
    processingId?: mlmbox_types_wallet_pb.Wallet.Processing.Id.AsObject,
    operationAmount?: mlmbox_types_asset_pb.Asset.Amount.AsObject,
    address: string,
    memo: number,
    operationFeeFromBody: boolean,
  }
}

