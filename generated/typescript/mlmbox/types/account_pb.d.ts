import * as jspb from 'google-protobuf'

import * as mlmbox_types_asset_pb from '../../mlmbox/types/asset_pb'; // proto import: "mlmbox/types/asset.proto"
import * as mlmbox_types_relationship_pb from '../../mlmbox/types/relationship_pb'; // proto import: "mlmbox/types/relationship.proto"
import * as mlmbox_types_bonus_pb from '../../mlmbox/types/bonus_pb'; // proto import: "mlmbox/types/bonus.proto"
import * as mlmbox_types_league_pb from '../../mlmbox/types/league_pb'; // proto import: "mlmbox/types/league.proto"


export class Account extends jspb.Message {
  getInfo(): Account.Info | undefined;
  setInfo(value?: Account.Info): Account;
  hasInfo(): boolean;
  clearInfo(): Account;

  getTreeAccountsList(): Array<TreeAccount>;
  setTreeAccountsList(value: Array<TreeAccount>): Account;
  clearTreeAccountsList(): Account;
  addTreeAccounts(value?: TreeAccount, index?: number): TreeAccount;

  getRolesBitMask(): number;
  setRolesBitMask(value: number): Account;

  getLocale(): string;
  setLocale(value: string): Account;

  getReferralChangeAccess(): boolean;
  setReferralChangeAccess(value: boolean): Account;

  getAvaChangeAccess(): boolean;
  setAvaChangeAccess(value: boolean): Account;

  getAvaChangesQuantity(): number;
  setAvaChangesQuantity(value: number): Account;

  getMentor(): Account.Mentor | undefined;
  setMentor(value?: Account.Mentor): Account;
  hasMentor(): boolean;
  clearMentor(): Account;

  getIntro(): Account.Intro | undefined;
  setIntro(value?: Account.Intro): Account;
  hasIntro(): boolean;
  clearIntro(): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    info?: Account.Info.AsObject;
    treeAccountsList: Array<TreeAccount.AsObject>;
    rolesBitMask: number;
    locale: string;
    referralChangeAccess: boolean;
    avaChangeAccess: boolean;
    avaChangesQuantity: number;
    mentor?: Account.Mentor.AsObject;
    intro?: Account.Intro.AsObject;
  };

  export class Id extends jspb.Message {
    getAccountId(): number;
    setAccountId(value: number): Id;
    hasAccountId(): boolean;
    clearAccountId(): Id;

    getAccountLogin(): string;
    setAccountLogin(value: string): Id;
    hasAccountLogin(): boolean;
    clearAccountLogin(): Id;

    getRefLinkId(): string;
    setRefLinkId(value: string): Id;
    hasRefLinkId(): boolean;
    clearRefLinkId(): Id;

    getUniqueFieldCase(): Id.UniqueFieldCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      accountId?: number;
      accountLogin?: string;
      refLinkId?: string;
    };

    export const enum UniqueFieldCase {
      UNIQUE_FIELD_NOT_SET = 0,
      ACCOUNT_ID = 1,
      ACCOUNT_LOGIN = 2,
      REF_LINK_ID = 3,
    }
  }


  export class RefLink extends jspb.Message {
    getAccountId(): number;
    setAccountId(value: number): RefLink;

    getSourceId(): number;
    setSourceId(value: number): RefLink;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefLink.AsObject;
    static toObject(includeInstance: boolean, msg: RefLink): RefLink.AsObject;
    static serializeBinaryToWriter(message: RefLink, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefLink;
    static deserializeBinaryFromReader(message: RefLink, reader: jspb.BinaryReader): RefLink;
  }

  export namespace RefLink {
    export type AsObject = {
      accountId: number;
      sourceId: number;
    };
  }


  export class Username extends jspb.Message {
    getId(): number;
    setId(value: number): Username;

    getLogin(): string;
    setLogin(value: string): Username;

    getRefLinkId(): string;
    setRefLinkId(value: string): Username;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Username.AsObject;
    static toObject(includeInstance: boolean, msg: Username): Username.AsObject;
    static serializeBinaryToWriter(message: Username, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Username;
    static deserializeBinaryFromReader(message: Username, reader: jspb.BinaryReader): Username;
  }

  export namespace Username {
    export type AsObject = {
      id: number;
      login: string;
      refLinkId: string;
    };
  }


  export class Profile extends jspb.Message {
    getFirstName(): string;
    setFirstName(value: string): Profile;

    getLastName(): string;
    setLastName(value: string): Profile;

    getTelegram(): Account.Profile.Telegram | undefined;
    setTelegram(value?: Account.Profile.Telegram): Profile;
    hasTelegram(): boolean;
    clearTelegram(): Profile;

    getAva(): Account.Profile.Ava | undefined;
    setAva(value?: Account.Profile.Ava): Profile;
    hasAva(): boolean;
    clearAva(): Profile;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Profile.AsObject;
    static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
    static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Profile;
    static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
  }

  export namespace Profile {
    export type AsObject = {
      firstName: string;
      lastName: string;
      telegram?: Account.Profile.Telegram.AsObject;
      ava?: Account.Profile.Ava.AsObject;
    };

    export class Ava extends jspb.Message {
      getCollectionId(): number;
      setCollectionId(value: number): Ava;

      getEntityId(): number;
      setEntityId(value: number): Ava;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Ava.AsObject;
      static toObject(includeInstance: boolean, msg: Ava): Ava.AsObject;
      static serializeBinaryToWriter(message: Ava, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Ava;
      static deserializeBinaryFromReader(message: Ava, reader: jspb.BinaryReader): Ava;
    }

    export namespace Ava {
      export type AsObject = {
        collectionId: number;
        entityId: number;
      };

      export class Generate extends jspb.Message {
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Generate.AsObject;
        static toObject(includeInstance: boolean, msg: Generate): Generate.AsObject;
        static serializeBinaryToWriter(message: Generate, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Generate;
        static deserializeBinaryFromReader(message: Generate, reader: jspb.BinaryReader): Generate;
      }

      export namespace Generate {
        export type AsObject = {
        };

        export class Request extends jspb.Message {
          getMaleQuantity(): number;
          setMaleQuantity(value: number): Request;

          getFemaleQuantity(): number;
          setFemaleQuantity(value: number): Request;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Request.AsObject;
          static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
          static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Request;
          static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
        }

        export namespace Request {
          export type AsObject = {
            maleQuantity: number;
            femaleQuantity: number;
          };
        }


        export class Response extends jspb.Message {
          getMalesList(): Array<Account.Profile.Ava>;
          setMalesList(value: Array<Account.Profile.Ava>): Response;
          clearMalesList(): Response;
          addMales(value?: Account.Profile.Ava, index?: number): Account.Profile.Ava;

          getFemalesList(): Array<Account.Profile.Ava>;
          setFemalesList(value: Array<Account.Profile.Ava>): Response;
          clearFemalesList(): Response;
          addFemales(value?: Account.Profile.Ava, index?: number): Account.Profile.Ava;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Response.AsObject;
          static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
          static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Response;
          static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
        }

        export namespace Response {
          export type AsObject = {
            malesList: Array<Account.Profile.Ava.AsObject>;
            femalesList: Array<Account.Profile.Ava.AsObject>;
          };
        }

      }

    }


    export class Telegram extends jspb.Message {
      getId(): number;
      setId(value: number): Telegram;

      getUsername(): string;
      setUsername(value: string): Telegram;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Telegram.AsObject;
      static toObject(includeInstance: boolean, msg: Telegram): Telegram.AsObject;
      static serializeBinaryToWriter(message: Telegram, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Telegram;
      static deserializeBinaryFromReader(message: Telegram, reader: jspb.BinaryReader): Telegram;
    }

    export namespace Telegram {
      export type AsObject = {
        id: number;
        username: string;
      };
    }

  }


  export class Statistics extends jspb.Message {
    getPartnersQuantity(): number;
    setPartnersQuantity(value: number): Statistics;

    getTeamQuantity(): number;
    setTeamQuantity(value: number): Statistics;

    getMarketingPartnersQuantity(): number;
    setMarketingPartnersQuantity(value: number): Statistics;

    getMarketingTeamQuantity(): number;
    setMarketingTeamQuantity(value: number): Statistics;

    getTotalEarnedBonusMatrix(): string;
    setTotalEarnedBonusMatrix(value: string): Statistics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Statistics.AsObject;
    static toObject(includeInstance: boolean, msg: Statistics): Statistics.AsObject;
    static serializeBinaryToWriter(message: Statistics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Statistics;
    static deserializeBinaryFromReader(message: Statistics, reader: jspb.BinaryReader): Statistics;
  }

  export namespace Statistics {
    export type AsObject = {
      partnersQuantity: number;
      teamQuantity: number;
      marketingPartnersQuantity: number;
      marketingTeamQuantity: number;
      totalEarnedBonusMatrix: string;
    };

    export class Full extends jspb.Message {
      getStatistics(): Account.Statistics | undefined;
      setStatistics(value?: Account.Statistics): Full;
      hasStatistics(): boolean;
      clearStatistics(): Full;

      getAssetsList(): Array<Account.Statistics.Full.Asset>;
      setAssetsList(value: Array<Account.Statistics.Full.Asset>): Full;
      clearAssetsList(): Full;
      addAssets(value?: Account.Statistics.Full.Asset, index?: number): Account.Statistics.Full.Asset;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Full.AsObject;
      static toObject(includeInstance: boolean, msg: Full): Full.AsObject;
      static serializeBinaryToWriter(message: Full, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Full;
      static deserializeBinaryFromReader(message: Full, reader: jspb.BinaryReader): Full;
    }

    export namespace Full {
      export type AsObject = {
        statistics?: Account.Statistics.AsObject;
        assetsList: Array<Account.Statistics.Full.Asset.AsObject>;
      };

      export class Asset extends jspb.Message {
        getAssetId(): number;
        setAssetId(value: number): Asset;

        getAssetBalance(): string;
        setAssetBalance(value: string): Asset;

        getIncomeBonusesStatistics(): mlmbox_types_bonus_pb.Bonus.Summary | undefined;
        setIncomeBonusesStatistics(value?: mlmbox_types_bonus_pb.Bonus.Summary): Asset;
        hasIncomeBonusesStatistics(): boolean;
        clearIncomeBonusesStatistics(): Asset;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Asset.AsObject;
        static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
        static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Asset;
        static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
      }

      export namespace Asset {
        export type AsObject = {
          assetId: number;
          assetBalance: string;
          incomeBonusesStatistics?: mlmbox_types_bonus_pb.Bonus.Summary.AsObject;
        };
      }

    }

  }


  export class Info extends jspb.Message {
    getProfile(): Account.Profile | undefined;
    setProfile(value?: Account.Profile): Info;
    hasProfile(): boolean;
    clearProfile(): Info;

    getAccount(): Account.Username | undefined;
    setAccount(value?: Account.Username): Info;
    hasAccount(): boolean;
    clearAccount(): Info;

    getSponsor(): Account.Username | undefined;
    setSponsor(value?: Account.Username): Info;
    hasSponsor(): boolean;
    clearSponsor(): Info;

    getRelationship(): mlmbox_types_relationship_pb.Relationship | undefined;
    setRelationship(value?: mlmbox_types_relationship_pb.Relationship): Info;
    hasRelationship(): boolean;
    clearRelationship(): Info;

    getRegistrationAt(): number;
    setRegistrationAt(value: number): Info;

    getMarketingStartedAt(): number;
    setMarketingStartedAt(value: number): Info;

    getTreeIdsBitMask(): number;
    setTreeIdsBitMask(value: number): Info;

    getSponsorBranch(): number;
    setSponsorBranch(value: number): Info;

    getStatistics(): Account.Statistics | undefined;
    setStatistics(value?: Account.Statistics): Info;
    hasStatistics(): boolean;
    clearStatistics(): Info;

    getChannelsList(): Array<number>;
    setChannelsList(value: Array<number>): Info;
    clearChannelsList(): Info;
    addChannels(value: number, index?: number): Info;

    getLeagueRank(): mlmbox_types_league_pb.League.Rank | undefined;
    setLeagueRank(value?: mlmbox_types_league_pb.League.Rank): Info;
    hasLeagueRank(): boolean;
    clearLeagueRank(): Info;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Info.AsObject;
    static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
    static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Info;
    static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
  }

  export namespace Info {
    export type AsObject = {
      profile?: Account.Profile.AsObject;
      account?: Account.Username.AsObject;
      sponsor?: Account.Username.AsObject;
      relationship?: mlmbox_types_relationship_pb.Relationship.AsObject;
      registrationAt: number;
      marketingStartedAt: number;
      treeIdsBitMask: number;
      sponsorBranch: number;
      statistics?: Account.Statistics.AsObject;
      channelsList: Array<number>;
      leagueRank?: mlmbox_types_league_pb.League.Rank.AsObject;
    };

    export class List extends jspb.Message {
      getItemsList(): Array<Account.Info>;
      setItemsList(value: Array<Account.Info>): List;
      clearItemsList(): List;
      addItems(value?: Account.Info, index?: number): Account.Info;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): List.AsObject;
      static toObject(includeInstance: boolean, msg: List): List.AsObject;
      static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): List;
      static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
      export type AsObject = {
        itemsList: Array<Account.Info.AsObject>;
      };
    }

  }


  export class Mentor extends jspb.Message {
    getAiPackageId(): number;
    setAiPackageId(value: number): Mentor;

    getSubscribed(): boolean;
    setSubscribed(value: boolean): Mentor;

    getSubscribedUntil(): number;
    setSubscribedUntil(value: number): Mentor;

    getMessagesLimit(): number;
    setMessagesLimit(value: number): Mentor;

    getMessagesUsed(): number;
    setMessagesUsed(value: number): Mentor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mentor.AsObject;
    static toObject(includeInstance: boolean, msg: Mentor): Mentor.AsObject;
    static serializeBinaryToWriter(message: Mentor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mentor;
    static deserializeBinaryFromReader(message: Mentor, reader: jspb.BinaryReader): Mentor;
  }

  export namespace Mentor {
    export type AsObject = {
      aiPackageId: number;
      subscribed: boolean;
      subscribedUntil: number;
      messagesLimit: number;
      messagesUsed: number;
    };
  }


  export class Intro extends jspb.Message {
    getStatus(): Account.Intro.Status;
    setStatus(value: Account.Intro.Status): Intro;

    getStep(): number;
    setStep(value: number): Intro;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Intro.AsObject;
    static toObject(includeInstance: boolean, msg: Intro): Intro.AsObject;
    static serializeBinaryToWriter(message: Intro, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Intro;
    static deserializeBinaryFromReader(message: Intro, reader: jspb.BinaryReader): Intro;
  }

  export namespace Intro {
    export type AsObject = {
      status: Account.Intro.Status;
      step: number;
    };

    export const enum Status {
      NOT_STARTED = 0,
      IN_PROGRESS = 1,
      COMPLETED = 2,
      SKIPPED = 3,
    }
  }

}

export class Tree extends jspb.Message {
  getId(): number;
  setId(value: number): Tree;

  getTitle(): string;
  setTitle(value: string): Tree;

  getGroupId(): number;
  setGroupId(value: number): Tree;

  getPositionsQuantity(): number;
  setPositionsQuantity(value: number): Tree;

  getDefaultPositionWidth(): number;
  setDefaultPositionWidth(value: number): Tree;

  getAmount(): mlmbox_types_asset_pb.Asset.Amount | undefined;
  setAmount(value?: mlmbox_types_asset_pb.Asset.Amount): Tree;
  hasAmount(): boolean;
  clearAmount(): Tree;

  getBookingEnabled(): boolean;
  setBookingEnabled(value: boolean): Tree;

  getTreeModeId(): Tree.Mode;
  setTreeModeId(value: Tree.Mode): Tree;

  getRequireTreeIdsList(): Array<number>;
  setRequireTreeIdsList(value: Array<number>): Tree;
  clearRequireTreeIdsList(): Tree;
  addRequireTreeIds(value: number, index?: number): Tree;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tree.AsObject;
  static toObject(includeInstance: boolean, msg: Tree): Tree.AsObject;
  static serializeBinaryToWriter(message: Tree, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tree;
  static deserializeBinaryFromReader(message: Tree, reader: jspb.BinaryReader): Tree;
}

export namespace Tree {
  export type AsObject = {
    id: number;
    title: string;
    groupId: number;
    positionsQuantity: number;
    defaultPositionWidth: number;
    amount?: mlmbox_types_asset_pb.Asset.Amount.AsObject;
    bookingEnabled: boolean;
    treeModeId: Tree.Mode;
    requireTreeIdsList: Array<number>;
  };

  export class Group extends jspb.Message {
    getId(): number;
    setId(value: number): Group;

    getTitle(): string;
    setTitle(value: string): Group;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Group.AsObject;
    static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
    static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Group;
    static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
  }

  export namespace Group {
    export type AsObject = {
      id: number;
      title: string;
    };
  }


  export const enum Mode {
    UNKNOWN = 0,
    MATRIX = 1,
  }
}

export class TreeAccount extends jspb.Message {
  getTreeId(): number;
  setTreeId(value: number): TreeAccount;

  getQuantity(): number;
  setQuantity(value: number): TreeAccount;

  getActivatedQuantity(): number;
  setActivatedQuantity(value: number): TreeAccount;

  getActivatedCapacity(): number;
  setActivatedCapacity(value: number): TreeAccount;

  getPoolValue(): string;
  setPoolValue(value: string): TreeAccount;

  getBookingQuantity(): number;
  setBookingQuantity(value: number): TreeAccount;

  getEntitiesList(): Array<TreeAccount.Entity>;
  setEntitiesList(value: Array<TreeAccount.Entity>): TreeAccount;
  clearEntitiesList(): TreeAccount;
  addEntities(value?: TreeAccount.Entity, index?: number): TreeAccount.Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TreeAccount.AsObject;
  static toObject(includeInstance: boolean, msg: TreeAccount): TreeAccount.AsObject;
  static serializeBinaryToWriter(message: TreeAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TreeAccount;
  static deserializeBinaryFromReader(message: TreeAccount, reader: jspb.BinaryReader): TreeAccount;
}

export namespace TreeAccount {
  export type AsObject = {
    treeId: number;
    quantity: number;
    activatedQuantity: number;
    activatedCapacity: number;
    poolValue: string;
    bookingQuantity: number;
    entitiesList: Array<TreeAccount.Entity.AsObject>;
  };

  export class Id extends jspb.Message {
    getTreeId(): number;
    setTreeId(value: number): Id;

    getAccountId(): number;
    setAccountId(value: number): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      treeId: number;
      accountId: number;
    };
  }


  export class List extends jspb.Message {
    getItemsList(): Array<TreeAccount>;
    setItemsList(value: Array<TreeAccount>): List;
    clearItemsList(): List;
    addItems(value?: TreeAccount, index?: number): TreeAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): List.AsObject;
    static toObject(includeInstance: boolean, msg: List): List.AsObject;
    static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): List;
    static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
  }

  export namespace List {
    export type AsObject = {
      itemsList: Array<TreeAccount.AsObject>;
    };
  }


  export class Entity extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): Entity;

    getTreeChainId(): number;
    setTreeChainId(value: number): Entity;

    getTreeEntityId(): number;
    setTreeEntityId(value: number): Entity;

    getTreeAccountEntityId(): number;
    setTreeAccountEntityId(value: number): Entity;

    getFilled2w2lBitMask(): number;
    setFilled2w2lBitMask(value: number): Entity;

    getFilled(): boolean;
    setFilled(value: boolean): Entity;

    getViewAccess(): boolean;
    setViewAccess(value: boolean): Entity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entity.AsObject;
    static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
    static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entity;
    static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
  }

  export namespace Entity {
    export type AsObject = {
      positionId: number;
      treeChainId: number;
      treeEntityId: number;
      treeAccountEntityId: number;
      filled2w2lBitMask: number;
      filled: boolean;
      viewAccess: boolean;
    };
  }


  export class Set extends jspb.Message {
    getTreeId(): number;
    setTreeId(value: number): Set;

    getQuantity(): number;
    setQuantity(value: number): Set;

    getActivatedQuantity(): number;
    setActivatedQuantity(value: number): Set;

    getActivatedCapacity(): number;
    setActivatedCapacity(value: number): Set;

    getPoolValue(): string;
    setPoolValue(value: string): Set;

    getBookingQuantity(): number;
    setBookingQuantity(value: number): Set;

    getEntity(): TreeAccount.Entity | undefined;
    setEntity(value?: TreeAccount.Entity): Set;
    hasEntity(): boolean;
    clearEntity(): Set;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Set.AsObject;
    static toObject(includeInstance: boolean, msg: Set): Set.AsObject;
    static serializeBinaryToWriter(message: Set, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Set;
    static deserializeBinaryFromReader(message: Set, reader: jspb.BinaryReader): Set;
  }

  export namespace Set {
    export type AsObject = {
      treeId: number;
      quantity: number;
      activatedQuantity: number;
      activatedCapacity: number;
      poolValue: string;
      bookingQuantity: number;
      entity?: TreeAccount.Entity.AsObject;
    };
  }

}

export class PositionView extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionView.AsObject;
  static toObject(includeInstance: boolean, msg: PositionView): PositionView.AsObject;
  static serializeBinaryToWriter(message: PositionView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionView;
  static deserializeBinaryFromReader(message: PositionView, reader: jspb.BinaryReader): PositionView;
}

export namespace PositionView {
  export type AsObject = {
  };

  export class Id extends jspb.Message {
    getViewPositionId(): number;
    setViewPositionId(value: number): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      viewPositionId: number;
    };
  }


  export class Team extends jspb.Message {
    getViewLevel(): number;
    setViewLevel(value: number): Team;

    getViewPositionId(): number;
    setViewPositionId(value: number): Team;
    hasViewPositionId(): boolean;
    clearViewPositionId(): Team;

    getTreeAccount(): TreeAccount.Id | undefined;
    setTreeAccount(value?: TreeAccount.Id): Team;
    hasTreeAccount(): boolean;
    clearTreeAccount(): Team;

    getQueryCase(): Team.QueryCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Team.AsObject;
    static toObject(includeInstance: boolean, msg: Team): Team.AsObject;
    static serializeBinaryToWriter(message: Team, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Team;
    static deserializeBinaryFromReader(message: Team, reader: jspb.BinaryReader): Team;
  }

  export namespace Team {
    export type AsObject = {
      viewLevel: number;
      viewPositionId?: number;
      treeAccount?: TreeAccount.Id.AsObject;
    };

    export const enum QueryCase {
      QUERY_NOT_SET = 0,
      VIEW_POSITION_ID = 2,
      TREE_ACCOUNT = 3,
    }
  }

}

export class Matrix extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Matrix.AsObject;
  static toObject(includeInstance: boolean, msg: Matrix): Matrix.AsObject;
  static serializeBinaryToWriter(message: Matrix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Matrix;
  static deserializeBinaryFromReader(message: Matrix, reader: jspb.BinaryReader): Matrix;
}

export namespace Matrix {
  export type AsObject = {
  };

  export class Reinvest extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reinvest.AsObject;
    static toObject(includeInstance: boolean, msg: Reinvest): Reinvest.AsObject;
    static serializeBinaryToWriter(message: Reinvest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reinvest;
    static deserializeBinaryFromReader(message: Reinvest, reader: jspb.BinaryReader): Reinvest;
  }

  export namespace Reinvest {
    export type AsObject = {
    };

    export class Request extends jspb.Message {
      getPositionId(): number;
      setPositionId(value: number): Request;

      getReinvestEnabled(): boolean;
      setReinvestEnabled(value: boolean): Request;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Request.AsObject;
      static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
      static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Request;
      static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
      export type AsObject = {
        positionId: number;
        reinvestEnabled: boolean;
      };
    }

  }


  export class Position extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): Position;

    getPositionSponsorId(): number;
    setPositionSponsorId(value: number): Position;

    getPositionSponsorBranch(): number;
    setPositionSponsorBranch(value: number): Position;

    getPositionWidth(): number;
    setPositionWidth(value: number): Position;

    getAccountId(): number;
    setAccountId(value: number): Position;

    getTreeChainId(): number;
    setTreeChainId(value: number): Position;

    getTreeEntityId(): number;
    setTreeEntityId(value: number): Position;

    getTreeAccountEntityId(): number;
    setTreeAccountEntityId(value: number): Position;

    getPartnersQuantity(): number;
    setPartnersQuantity(value: number): Position;

    getTeamQuantity(): number;
    setTeamQuantity(value: number): Position;

    getPoolValue(): string;
    setPoolValue(value: string): Position;

    getReinvestEnabled(): boolean;
    setReinvestEnabled(value: boolean): Position;

    getFilled(): boolean;
    setFilled(value: boolean): Position;

    getCreatedAt(): number;
    setCreatedAt(value: number): Position;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Position.AsObject;
    static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
    static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Position;
    static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
  }

  export namespace Position {
    export type AsObject = {
      positionId: number;
      positionSponsorId: number;
      positionSponsorBranch: number;
      positionWidth: number;
      accountId: number;
      treeChainId: number;
      treeEntityId: number;
      treeAccountEntityId: number;
      partnersQuantity: number;
      teamQuantity: number;
      poolValue: string;
      reinvestEnabled: boolean;
      filled: boolean;
      createdAt: number;
    };
  }


  export class View extends jspb.Message {
    getTreeId(): number;
    setTreeId(value: number): View;

    getSelfPositionId(): number;
    setSelfPositionId(value: number): View;

    getSelfTreeIdsBitMask(): number;
    setSelfTreeIdsBitMask(value: number): View;

    getViewPositionId(): number;
    setViewPositionId(value: number): View;

    getViewTreeIdsBitMask(): number;
    setViewTreeIdsBitMask(value: number): View;

    getPositionsList(): Array<Matrix.Position>;
    setPositionsList(value: Array<Matrix.Position>): View;
    clearPositionsList(): View;
    addPositions(value?: Matrix.Position, index?: number): Matrix.Position;

    getAccountsList(): Array<Account.Info>;
    setAccountsList(value: Array<Account.Info>): View;
    clearAccountsList(): View;
    addAccounts(value?: Account.Info, index?: number): Account.Info;

    getViewTreeAccountEntitiesList(): Array<TreeAccount.Entity>;
    setViewTreeAccountEntitiesList(value: Array<TreeAccount.Entity>): View;
    clearViewTreeAccountEntitiesList(): View;
    addViewTreeAccountEntities(value?: TreeAccount.Entity, index?: number): TreeAccount.Entity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): View.AsObject;
    static toObject(includeInstance: boolean, msg: View): View.AsObject;
    static serializeBinaryToWriter(message: View, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): View;
    static deserializeBinaryFromReader(message: View, reader: jspb.BinaryReader): View;
  }

  export namespace View {
    export type AsObject = {
      treeId: number;
      selfPositionId: number;
      selfTreeIdsBitMask: number;
      viewPositionId: number;
      viewTreeIdsBitMask: number;
      positionsList: Array<Matrix.Position.AsObject>;
      accountsList: Array<Account.Info.AsObject>;
      viewTreeAccountEntitiesList: Array<TreeAccount.Entity.AsObject>;
    };
  }


  export class Info extends jspb.Message {
    getItemsList(): Array<TreeAccount>;
    setItemsList(value: Array<TreeAccount>): Info;
    clearItemsList(): Info;
    addItems(value?: TreeAccount, index?: number): TreeAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Info.AsObject;
    static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
    static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Info;
    static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
  }

  export namespace Info {
    export type AsObject = {
      itemsList: Array<TreeAccount.AsObject>;
    };
  }

}

