import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"
import * as mlmbox_types_wallet_pb from '../../../mlmbox/types/wallet_pb'; // proto import: "mlmbox/types/wallet.proto"


export class SetReinvestConfigResponse extends jspb.Message {
  getPosition(): mlmbox_types_account_pb.Matrix.Position | undefined;
  setPosition(value?: mlmbox_types_account_pb.Matrix.Position): SetReinvestConfigResponse;
  hasPosition(): boolean;
  clearPosition(): SetReinvestConfigResponse;

  getAssetId(): number;
  setAssetId(value: number): SetReinvestConfigResponse;

  getTransaction(): mlmbox_types_wallet_pb.Wallet.Asset.Transaction | undefined;
  setTransaction(value?: mlmbox_types_wallet_pb.Wallet.Asset.Transaction): SetReinvestConfigResponse;
  hasTransaction(): boolean;
  clearTransaction(): SetReinvestConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetReinvestConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetReinvestConfigResponse): SetReinvestConfigResponse.AsObject;
  static serializeBinaryToWriter(message: SetReinvestConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetReinvestConfigResponse;
  static deserializeBinaryFromReader(message: SetReinvestConfigResponse, reader: jspb.BinaryReader): SetReinvestConfigResponse;
}

export namespace SetReinvestConfigResponse {
  export type AsObject = {
    position?: mlmbox_types_account_pb.Matrix.Position.AsObject;
    assetId: number;
    transaction?: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.AsObject;
  };
}

