import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"
import * as mlmbox_types_league_pb from '../../../mlmbox/types/league_pb'; // proto import: "mlmbox/types/league.proto"
import * as mlmbox_types_sort_pb from '../../../mlmbox/types/sort_pb'; // proto import: "mlmbox/types/sort.proto"


export class StateGetRequest extends jspb.Message {
  getLeagueId(): number;
  setLeagueId(value: number): StateGetRequest;

  getSortRanks(): mlmbox_types_sort_pb.Sort | undefined;
  setSortRanks(value?: mlmbox_types_sort_pb.Sort): StateGetRequest;
  hasSortRanks(): boolean;
  clearSortRanks(): StateGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StateGetRequest): StateGetRequest.AsObject;
  static serializeBinaryToWriter(message: StateGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateGetRequest;
  static deserializeBinaryFromReader(message: StateGetRequest, reader: jspb.BinaryReader): StateGetRequest;
}

export namespace StateGetRequest {
  export type AsObject = {
    leagueId: number;
    sortRanks?: mlmbox_types_sort_pb.Sort.AsObject;
  };
}

export class StateGetResponse extends jspb.Message {
  getHeader(): mlmbox_types_league_pb.League.Header | undefined;
  setHeader(value?: mlmbox_types_league_pb.League.Header): StateGetResponse;
  hasHeader(): boolean;
  clearHeader(): StateGetResponse;

  getAccountsList(): Array<mlmbox_types_account_pb.Account.Info>;
  setAccountsList(value: Array<mlmbox_types_account_pb.Account.Info>): StateGetResponse;
  clearAccountsList(): StateGetResponse;
  addAccounts(value?: mlmbox_types_account_pb.Account.Info, index?: number): mlmbox_types_account_pb.Account.Info;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StateGetResponse): StateGetResponse.AsObject;
  static serializeBinaryToWriter(message: StateGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateGetResponse;
  static deserializeBinaryFromReader(message: StateGetResponse, reader: jspb.BinaryReader): StateGetResponse;
}

export namespace StateGetResponse {
  export type AsObject = {
    header?: mlmbox_types_league_pb.League.Header.AsObject;
    accountsList: Array<mlmbox_types_account_pb.Account.Info.AsObject>;
  };
}

export class StateRankListRequest extends jspb.Message {
  getLeagueId(): number;
  setLeagueId(value: number): StateRankListRequest;

  getStepRank(): number;
  setStepRank(value: number): StateRankListRequest;

  getSortRanks(): mlmbox_types_sort_pb.Sort | undefined;
  setSortRanks(value?: mlmbox_types_sort_pb.Sort): StateRankListRequest;
  hasSortRanks(): boolean;
  clearSortRanks(): StateRankListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateRankListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StateRankListRequest): StateRankListRequest.AsObject;
  static serializeBinaryToWriter(message: StateRankListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateRankListRequest;
  static deserializeBinaryFromReader(message: StateRankListRequest, reader: jspb.BinaryReader): StateRankListRequest;
}

export namespace StateRankListRequest {
  export type AsObject = {
    leagueId: number;
    stepRank: number;
    sortRanks?: mlmbox_types_sort_pb.Sort.AsObject;
  };
}

