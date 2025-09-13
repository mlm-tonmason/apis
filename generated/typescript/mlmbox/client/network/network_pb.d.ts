import * as jspb from 'google-protobuf'

import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"
import * as mlmbox_types_sort_pb from '../../../mlmbox/types/sort_pb'; // proto import: "mlmbox/types/sort.proto"


export class AccountsSearchRequest extends jspb.Message {
  getLoginPrefix(): string;
  setLoginPrefix(value: string): AccountsSearchRequest;

  getLimit(): number;
  setLimit(value: number): AccountsSearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountsSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountsSearchRequest): AccountsSearchRequest.AsObject;
  static serializeBinaryToWriter(message: AccountsSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountsSearchRequest;
  static deserializeBinaryFromReader(message: AccountsSearchRequest, reader: jspb.BinaryReader): AccountsSearchRequest;
}

export namespace AccountsSearchRequest {
  export type AsObject = {
    loginPrefix: string;
    limit: number;
  };
}

export class TeamRequest extends jspb.Message {
  getViewPartner(): mlmbox_types_account_pb.Account.Id | undefined;
  setViewPartner(value?: mlmbox_types_account_pb.Account.Id): TeamRequest;
  hasViewPartner(): boolean;
  clearViewPartner(): TeamRequest;

  getPartnersSort(): mlmbox_types_sort_pb.Sort | undefined;
  setPartnersSort(value?: mlmbox_types_sort_pb.Sort): TeamRequest;
  hasPartnersSort(): boolean;
  clearPartnersSort(): TeamRequest;

  getFilterTreeIdsBitMask(): number;
  setFilterTreeIdsBitMask(value: number): TeamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamRequest): TeamRequest.AsObject;
  static serializeBinaryToWriter(message: TeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamRequest;
  static deserializeBinaryFromReader(message: TeamRequest, reader: jspb.BinaryReader): TeamRequest;
}

export namespace TeamRequest {
  export type AsObject = {
    viewPartner?: mlmbox_types_account_pb.Account.Id.AsObject;
    partnersSort?: mlmbox_types_sort_pb.Sort.AsObject;
    filterTreeIdsBitMask: number;
  };
}

export class TeamResponse extends jspb.Message {
  getAccount(): mlmbox_types_account_pb.Account.Info | undefined;
  setAccount(value?: mlmbox_types_account_pb.Account.Info): TeamResponse;
  hasAccount(): boolean;
  clearAccount(): TeamResponse;

  getSponsorsList(): Array<mlmbox_types_account_pb.Account.Info>;
  setSponsorsList(value: Array<mlmbox_types_account_pb.Account.Info>): TeamResponse;
  clearSponsorsList(): TeamResponse;
  addSponsors(value?: mlmbox_types_account_pb.Account.Info, index?: number): mlmbox_types_account_pb.Account.Info;

  getPartnersList(): Array<mlmbox_types_account_pb.Account.Info>;
  setPartnersList(value: Array<mlmbox_types_account_pb.Account.Info>): TeamResponse;
  clearPartnersList(): TeamResponse;
  addPartners(value?: mlmbox_types_account_pb.Account.Info, index?: number): mlmbox_types_account_pb.Account.Info;

  getAccountTreeAccountsList(): Array<mlmbox_types_account_pb.TreeAccount.Set>;
  setAccountTreeAccountsList(value: Array<mlmbox_types_account_pb.TreeAccount.Set>): TeamResponse;
  clearAccountTreeAccountsList(): TeamResponse;
  addAccountTreeAccounts(value?: mlmbox_types_account_pb.TreeAccount.Set, index?: number): mlmbox_types_account_pb.TreeAccount.Set;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TeamResponse): TeamResponse.AsObject;
  static serializeBinaryToWriter(message: TeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamResponse;
  static deserializeBinaryFromReader(message: TeamResponse, reader: jspb.BinaryReader): TeamResponse;
}

export namespace TeamResponse {
  export type AsObject = {
    account?: mlmbox_types_account_pb.Account.Info.AsObject;
    sponsorsList: Array<mlmbox_types_account_pb.Account.Info.AsObject>;
    partnersList: Array<mlmbox_types_account_pb.Account.Info.AsObject>;
    accountTreeAccountsList: Array<mlmbox_types_account_pb.TreeAccount.Set.AsObject>;
  };
}

export class TeamPartnerListRequest extends jspb.Message {
  getRequest(): TeamRequest | undefined;
  setRequest(value?: TeamRequest): TeamPartnerListRequest;
  hasRequest(): boolean;
  clearRequest(): TeamPartnerListRequest;

  getStepSponsorBranch(): number;
  setStepSponsorBranch(value: number): TeamPartnerListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamPartnerListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamPartnerListRequest): TeamPartnerListRequest.AsObject;
  static serializeBinaryToWriter(message: TeamPartnerListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamPartnerListRequest;
  static deserializeBinaryFromReader(message: TeamPartnerListRequest, reader: jspb.BinaryReader): TeamPartnerListRequest;
}

export namespace TeamPartnerListRequest {
  export type AsObject = {
    request?: TeamRequest.AsObject;
    stepSponsorBranch: number;
  };
}

export class TeamTopRequest extends jspb.Message {
  getViewPartner(): mlmbox_types_account_pb.Account.Id | undefined;
  setViewPartner(value?: mlmbox_types_account_pb.Account.Id): TeamTopRequest;
  hasViewPartner(): boolean;
  clearViewPartner(): TeamTopRequest;

  getPartnersSort(): mlmbox_types_sort_pb.Sort | undefined;
  setPartnersSort(value?: mlmbox_types_sort_pb.Sort): TeamTopRequest;
  hasPartnersSort(): boolean;
  clearPartnersSort(): TeamTopRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamTopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TeamTopRequest): TeamTopRequest.AsObject;
  static serializeBinaryToWriter(message: TeamTopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamTopRequest;
  static deserializeBinaryFromReader(message: TeamTopRequest, reader: jspb.BinaryReader): TeamTopRequest;
}

export namespace TeamTopRequest {
  export type AsObject = {
    viewPartner?: mlmbox_types_account_pb.Account.Id.AsObject;
    partnersSort?: mlmbox_types_sort_pb.Sort.AsObject;
  };
}

