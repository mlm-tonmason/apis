import * as jspb from 'google-protobuf'

import * as mlmbox_types_asset_pb from '../../mlmbox/types/asset_pb'; // proto import: "mlmbox/types/asset.proto"
import * as mlmbox_types_relationship_pb from '../../mlmbox/types/relationship_pb'; // proto import: "mlmbox/types/relationship.proto"


export class Account extends jspb.Message {
  getInfo(): Account.Info | undefined;
  setInfo(value?: Account.Info): Account;
  hasInfo(): boolean;
  clearInfo(): Account;

  getMatrixTreeAccountsList(): Array<Matrix.TreeAccount>;
  setMatrixTreeAccountsList(value: Array<Matrix.TreeAccount>): Account;
  clearMatrixTreeAccountsList(): Account;
  addMatrixTreeAccounts(value?: Matrix.TreeAccount, index?: number): Matrix.TreeAccount;

  getLocale(): string;
  setLocale(value: string): Account;

  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    info?: Account.Info.AsObject,
    matrixTreeAccountsList: Array<Matrix.TreeAccount.AsObject>,
    locale: string,
    isAdmin: boolean,
  }

  export class Id extends jspb.Message {
    getAccountId(): number;
    setAccountId(value: number): Id;

    getAccountLogin(): string;
    setAccountLogin(value: string): Id;

    getRefLinkId(): string;
    setRefLinkId(value: string): Id;

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
      accountId: number,
      accountLogin: string,
      refLinkId: string,
    }

    export enum UniqueFieldCase { 
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
      accountId: number,
      sourceId: number,
    }
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
      id: number,
      login: string,
      refLinkId: string,
    }
  }


  export class Profile extends jspb.Message {
    getTgId(): number;
    setTgId(value: number): Profile;

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
      tgId: number,
      ava?: Account.Profile.Ava.AsObject,
    }

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
        collectionId: number,
        entityId: number,
      }
    }

  }


  export class Statistics extends jspb.Message {
    getPartnersQuantity(): number;
    setPartnersQuantity(value: number): Statistics;

    getTeamQuantity(): number;
    setTeamQuantity(value: number): Statistics;

    getMatrixPartnersQuantity(): number;
    setMatrixPartnersQuantity(value: number): Statistics;

    getMatrixTeamQuantity(): number;
    setMatrixTeamQuantity(value: number): Statistics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Statistics.AsObject;
    static toObject(includeInstance: boolean, msg: Statistics): Statistics.AsObject;
    static serializeBinaryToWriter(message: Statistics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Statistics;
    static deserializeBinaryFromReader(message: Statistics, reader: jspb.BinaryReader): Statistics;
  }

  export namespace Statistics {
    export type AsObject = {
      partnersQuantity: number,
      teamQuantity: number,
      matrixPartnersQuantity: number,
      matrixTeamQuantity: number,
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

    getReferral(): Account.Username | undefined;
    setReferral(value?: Account.Username): Info;
    hasReferral(): boolean;
    clearReferral(): Info;

    getRelationship(): mlmbox_types_relationship_pb.Relationship | undefined;
    setRelationship(value?: mlmbox_types_relationship_pb.Relationship): Info;
    hasRelationship(): boolean;
    clearRelationship(): Info;

    getRegistrationAt(): number;
    setRegistrationAt(value: number): Info;

    getMatrixStartedAt(): number;
    setMatrixStartedAt(value: number): Info;

    getMatrixTreeIdsBitMask(): number;
    setMatrixTreeIdsBitMask(value: number): Info;

    getReferralBranch(): number;
    setReferralBranch(value: number): Info;

    getStatistics(): Account.Statistics | undefined;
    setStatistics(value?: Account.Statistics): Info;
    hasStatistics(): boolean;
    clearStatistics(): Info;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Info.AsObject;
    static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
    static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Info;
    static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
  }

  export namespace Info {
    export type AsObject = {
      profile?: Account.Profile.AsObject,
      account?: Account.Username.AsObject,
      referral?: Account.Username.AsObject,
      relationship?: mlmbox_types_relationship_pb.Relationship.AsObject,
      registrationAt: number,
      matrixStartedAt: number,
      matrixTreeIdsBitMask: number,
      referralBranch: number,
      statistics?: Account.Statistics.AsObject,
    }

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
        itemsList: Array<Account.Info.AsObject>,
      }
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
  }

  export class Tree extends jspb.Message {
    getId(): number;
    setId(value: number): Tree;

    getTitle(): string;
    setTitle(value: string): Tree;

    getPositionsQuantity(): number;
    setPositionsQuantity(value: number): Tree;

    getDefaultPositionWidth(): number;
    setDefaultPositionWidth(value: number): Tree;

    getAmount(): mlmbox_types_asset_pb.Asset.Amount | undefined;
    setAmount(value?: mlmbox_types_asset_pb.Asset.Amount): Tree;
    hasAmount(): boolean;
    clearAmount(): Tree;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tree.AsObject;
    static toObject(includeInstance: boolean, msg: Tree): Tree.AsObject;
    static serializeBinaryToWriter(message: Tree, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tree;
    static deserializeBinaryFromReader(message: Tree, reader: jspb.BinaryReader): Tree;
  }

  export namespace Tree {
    export type AsObject = {
      id: number,
      title: string,
      positionsQuantity: number,
      defaultPositionWidth: number,
      amount?: mlmbox_types_asset_pb.Asset.Amount.AsObject,
    }
  }


  export class Position extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): Position;

    getPositionRefId(): number;
    setPositionRefId(value: number): Position;

    getPositionRefLine(): number;
    setPositionRefLine(value: number): Position;

    getPositionWidth(): number;
    setPositionWidth(value: number): Position;

    getAccountId(): number;
    setAccountId(value: number): Position;

    getTreeAccountId(): number;
    setTreeAccountId(value: number): Position;

    getReinvestEnabled(): boolean;
    setReinvestEnabled(value: boolean): Position;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Position.AsObject;
    static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
    static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Position;
    static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
  }

  export namespace Position {
    export type AsObject = {
      positionId: number,
      positionRefId: number,
      positionRefLine: number,
      positionWidth: number,
      accountId: number,
      treeAccountId: number,
      reinvestEnabled: boolean,
    }

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
        viewPositionId: number,
      }
    }

  }


  export class TreeAccount extends jspb.Message {
    getTreeId(): number;
    setTreeId(value: number): TreeAccount;

    getEntitiesList(): Array<Matrix.TreeAccount.Entity>;
    setEntitiesList(value: Array<Matrix.TreeAccount.Entity>): TreeAccount;
    clearEntitiesList(): TreeAccount;
    addEntities(value?: Matrix.TreeAccount.Entity, index?: number): Matrix.TreeAccount.Entity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TreeAccount.AsObject;
    static toObject(includeInstance: boolean, msg: TreeAccount): TreeAccount.AsObject;
    static serializeBinaryToWriter(message: TreeAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TreeAccount;
    static deserializeBinaryFromReader(message: TreeAccount, reader: jspb.BinaryReader): TreeAccount;
  }

  export namespace TreeAccount {
    export type AsObject = {
      treeId: number,
      entitiesList: Array<Matrix.TreeAccount.Entity.AsObject>,
    }

    export class List extends jspb.Message {
      getItemsList(): Array<Matrix.TreeAccount>;
      setItemsList(value: Array<Matrix.TreeAccount>): List;
      clearItemsList(): List;
      addItems(value?: Matrix.TreeAccount, index?: number): Matrix.TreeAccount;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): List.AsObject;
      static toObject(includeInstance: boolean, msg: List): List.AsObject;
      static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): List;
      static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
      export type AsObject = {
        itemsList: Array<Matrix.TreeAccount.AsObject>,
      }
    }


    export class Entity extends jspb.Message {
      getTreeAccountId(): number;
      setTreeAccountId(value: number): Entity;

      getPositionId(): number;
      setPositionId(value: number): Entity;

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
        treeAccountId: number,
        positionId: number,
        filled: boolean,
        viewAccess: boolean,
      }
    }

  }


  export class View extends jspb.Message {
    getTreeId(): number;
    setTreeId(value: number): View;

    getSelfPositionId(): number;
    setSelfPositionId(value: number): View;

    getViewPositionId(): number;
    setViewPositionId(value: number): View;

    getPositionsList(): Array<Matrix.Position>;
    setPositionsList(value: Array<Matrix.Position>): View;
    clearPositionsList(): View;
    addPositions(value?: Matrix.Position, index?: number): Matrix.Position;

    getAccountsList(): Array<Account.Info>;
    setAccountsList(value: Array<Account.Info>): View;
    clearAccountsList(): View;
    addAccounts(value?: Account.Info, index?: number): Account.Info;

    getViewTreeAccountEntitiesList(): Array<Matrix.TreeAccount.Entity>;
    setViewTreeAccountEntitiesList(value: Array<Matrix.TreeAccount.Entity>): View;
    clearViewTreeAccountEntitiesList(): View;
    addViewTreeAccountEntities(value?: Matrix.TreeAccount.Entity, index?: number): Matrix.TreeAccount.Entity;

    getSelfMatrixTreeIdsBitMask(): number;
    setSelfMatrixTreeIdsBitMask(value: number): View;

    getViewMatrixTreeIdsBitMask(): number;
    setViewMatrixTreeIdsBitMask(value: number): View;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): View.AsObject;
    static toObject(includeInstance: boolean, msg: View): View.AsObject;
    static serializeBinaryToWriter(message: View, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): View;
    static deserializeBinaryFromReader(message: View, reader: jspb.BinaryReader): View;
  }

  export namespace View {
    export type AsObject = {
      treeId: number,
      selfPositionId: number,
      viewPositionId: number,
      positionsList: Array<Matrix.Position.AsObject>,
      accountsList: Array<Account.Info.AsObject>,
      viewTreeAccountEntitiesList: Array<Matrix.TreeAccount.Entity.AsObject>,
      selfMatrixTreeIdsBitMask: number,
      viewMatrixTreeIdsBitMask: number,
    }

    export class Request extends jspb.Message {
      getViewLevel(): number;
      setViewLevel(value: number): Request;

      getViewPositionId(): number;
      setViewPositionId(value: number): Request;

      getTreeAccountId(): Matrix.View.Request.ByTreeAccount | undefined;
      setTreeAccountId(value?: Matrix.View.Request.ByTreeAccount): Request;
      hasTreeAccountId(): boolean;
      clearTreeAccountId(): Request;

      getQueryCase(): Request.QueryCase;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Request.AsObject;
      static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
      static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Request;
      static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
      export type AsObject = {
        viewLevel: number,
        viewPositionId: number,
        treeAccountId?: Matrix.View.Request.ByTreeAccount.AsObject,
      }

      export class ByTreeAccount extends jspb.Message {
        getTreeId(): number;
        setTreeId(value: number): ByTreeAccount;

        getAccountId(): number;
        setAccountId(value: number): ByTreeAccount;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ByTreeAccount.AsObject;
        static toObject(includeInstance: boolean, msg: ByTreeAccount): ByTreeAccount.AsObject;
        static serializeBinaryToWriter(message: ByTreeAccount, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ByTreeAccount;
        static deserializeBinaryFromReader(message: ByTreeAccount, reader: jspb.BinaryReader): ByTreeAccount;
      }

      export namespace ByTreeAccount {
        export type AsObject = {
          treeId: number,
          accountId: number,
        }
      }


      export enum QueryCase { 
        QUERY_NOT_SET = 0,
        VIEW_POSITION_ID = 2,
        TREE_ACCOUNT_ID = 3,
      }
    }

  }


  export class Invoice extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Invoice.AsObject;
    static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
    static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Invoice;
    static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
  }

  export namespace Invoice {
    export type AsObject = {
    }

    export class Request extends jspb.Message {
      getTreeId(): number;
      setTreeId(value: number): Request;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Request.AsObject;
      static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
      static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Request;
      static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
      export type AsObject = {
        treeId: number,
      }
    }


    export class PreviewResponse extends jspb.Message {
      getItemsList(): Array<Matrix.Invoice.PreviewResponse.Item>;
      setItemsList(value: Array<Matrix.Invoice.PreviewResponse.Item>): PreviewResponse;
      clearItemsList(): PreviewResponse;
      addItems(value?: Matrix.Invoice.PreviewResponse.Item, index?: number): Matrix.Invoice.PreviewResponse.Item;

      getBillAmountsList(): Array<mlmbox_types_asset_pb.Asset.Amount>;
      setBillAmountsList(value: Array<mlmbox_types_asset_pb.Asset.Amount>): PreviewResponse;
      clearBillAmountsList(): PreviewResponse;
      addBillAmounts(value?: mlmbox_types_asset_pb.Asset.Amount, index?: number): mlmbox_types_asset_pb.Asset.Amount;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): PreviewResponse.AsObject;
      static toObject(includeInstance: boolean, msg: PreviewResponse): PreviewResponse.AsObject;
      static serializeBinaryToWriter(message: PreviewResponse, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): PreviewResponse;
      static deserializeBinaryFromReader(message: PreviewResponse, reader: jspb.BinaryReader): PreviewResponse;
    }

    export namespace PreviewResponse {
      export type AsObject = {
        itemsList: Array<Matrix.Invoice.PreviewResponse.Item.AsObject>,
        billAmountsList: Array<mlmbox_types_asset_pb.Asset.Amount.AsObject>,
      }

      export class Item extends jspb.Message {
        getTreeId(): number;
        setTreeId(value: number): Item;

        getAssetId(): number;
        setAssetId(value: number): Item;

        getPriceValue(): string;
        setPriceValue(value: string): Item;

        getUnlockValue(): string;
        setUnlockValue(value: string): Item;

        getAmountValue(): string;
        setAmountValue(value: string): Item;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Item.AsObject;
        static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
        static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Item;
        static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
      }

      export namespace Item {
        export type AsObject = {
          treeId: number,
          assetId: number,
          priceValue: string,
          unlockValue: string,
          amountValue: string,
        }
      }

    }


    export class VerifiedResponse extends jspb.Message {
      getItemsList(): Array<Matrix.Invoice.VerifiedResponse.Item>;
      setItemsList(value: Array<Matrix.Invoice.VerifiedResponse.Item>): VerifiedResponse;
      clearItemsList(): VerifiedResponse;
      addItems(value?: Matrix.Invoice.VerifiedResponse.Item, index?: number): Matrix.Invoice.VerifiedResponse.Item;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): VerifiedResponse.AsObject;
      static toObject(includeInstance: boolean, msg: VerifiedResponse): VerifiedResponse.AsObject;
      static serializeBinaryToWriter(message: VerifiedResponse, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): VerifiedResponse;
      static deserializeBinaryFromReader(message: VerifiedResponse, reader: jspb.BinaryReader): VerifiedResponse;
    }

    export namespace VerifiedResponse {
      export type AsObject = {
        itemsList: Array<Matrix.Invoice.VerifiedResponse.Item.AsObject>,
      }

      export class Item extends jspb.Message {
        getTreeId(): number;
        setTreeId(value: number): Item;

        getTreeAccountId(): number;
        setTreeAccountId(value: number): Item;

        getPositionId(): number;
        setPositionId(value: number): Item;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Item.AsObject;
        static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
        static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Item;
        static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
      }

      export namespace Item {
        export type AsObject = {
          treeId: number,
          treeAccountId: number,
          positionId: number,
        }
      }

    }

  }


  export class Reinvest extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): Reinvest;

    getReinvestEnabled(): boolean;
    setReinvestEnabled(value: boolean): Reinvest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reinvest.AsObject;
    static toObject(includeInstance: boolean, msg: Reinvest): Reinvest.AsObject;
    static serializeBinaryToWriter(message: Reinvest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reinvest;
    static deserializeBinaryFromReader(message: Reinvest, reader: jspb.BinaryReader): Reinvest;
  }

  export namespace Reinvest {
    export type AsObject = {
      positionId: number,
      reinvestEnabled: boolean,
    }
  }

}

