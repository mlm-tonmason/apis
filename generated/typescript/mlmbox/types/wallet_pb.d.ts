import * as jspb from 'google-protobuf'

import * as mlmbox_types_asset_pb from '../../mlmbox/types/asset_pb'; // proto import: "mlmbox/types/asset.proto"
import * as mlmbox_types_bonus_pb from '../../mlmbox/types/bonus_pb'; // proto import: "mlmbox/types/bonus.proto"
import * as mlmbox_types_status_pb from '../../mlmbox/types/status_pb'; // proto import: "mlmbox/types/status.proto"


export class Wallet extends jspb.Message {
  getAssetsList(): Array<Wallet.Asset>;
  setAssetsList(value: Array<Wallet.Asset>): Wallet;
  clearAssetsList(): Wallet;
  addAssets(value?: Wallet.Asset, index?: number): Wallet.Asset;

  getProcessingsList(): Array<Wallet.Processing>;
  setProcessingsList(value: Array<Wallet.Processing>): Wallet;
  clearProcessingsList(): Wallet;
  addProcessings(value?: Wallet.Processing, index?: number): Wallet.Processing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wallet.AsObject;
  static toObject(includeInstance: boolean, msg: Wallet): Wallet.AsObject;
  static serializeBinaryToWriter(message: Wallet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wallet;
  static deserializeBinaryFromReader(message: Wallet, reader: jspb.BinaryReader): Wallet;
}

export namespace Wallet {
  export type AsObject = {
    assetsList: Array<Wallet.Asset.AsObject>,
    processingsList: Array<Wallet.Processing.AsObject>,
  }

  export class Asset extends jspb.Message {
    getAssetId(): number;
    setAssetId(value: number): Asset;

    getAssetBalance(): string;
    setAssetBalance(value: string): Asset;

    getTransactionsQuantity(): number;
    setTransactionsQuantity(value: number): Asset;

    getTransactionsList(): Array<Wallet.Asset.Transaction>;
    setTransactionsList(value: Array<Wallet.Asset.Transaction>): Asset;
    clearTransactionsList(): Asset;
    addTransactions(value?: Wallet.Asset.Transaction, index?: number): Wallet.Asset.Transaction;

    getIncomeBonusesStatistics(): mlmbox_types_bonus_pb.Bonus.Summary | undefined;
    setIncomeBonusesStatistics(value?: mlmbox_types_bonus_pb.Bonus.Summary): Asset;
    hasIncomeBonusesStatistics(): boolean;
    clearIncomeBonusesStatistics(): Asset;

    getWithdrawalCapacity(): Wallet.Asset.WithdrawalCapacity | undefined;
    setWithdrawalCapacity(value?: Wallet.Asset.WithdrawalCapacity): Asset;
    hasWithdrawalCapacity(): boolean;
    clearWithdrawalCapacity(): Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Asset.AsObject;
    static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
    static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Asset;
    static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
  }

  export namespace Asset {
    export type AsObject = {
      assetId: number,
      assetBalance: string,
      transactionsQuantity: number,
      transactionsList: Array<Wallet.Asset.Transaction.AsObject>,
      incomeBonusesStatistics?: mlmbox_types_bonus_pb.Bonus.Summary.AsObject,
      withdrawalCapacity?: Wallet.Asset.WithdrawalCapacity.AsObject,
    }

    export class Transaction extends jspb.Message {
      getTransactionId(): number;
      setTransactionId(value: number): Transaction;

      getKindId(): Wallet.Asset.Transaction.Kind.Id;
      setKindId(value: Wallet.Asset.Transaction.Kind.Id): Transaction;

      getStatusId(): mlmbox_types_status_pb.Status.Transaction;
      setStatusId(value: mlmbox_types_status_pb.Status.Transaction): Transaction;

      getAmount(): string;
      setAmount(value: string): Transaction;

      getFee(): string;
      setFee(value: string): Transaction;

      getBalance(): string;
      setBalance(value: string): Transaction;

      getCreatedAt(): number;
      setCreatedAt(value: number): Transaction;

      getMetadata(): Wallet.Asset.Transaction.Metadata | undefined;
      setMetadata(value?: Wallet.Asset.Transaction.Metadata): Transaction;
      hasMetadata(): boolean;
      clearMetadata(): Transaction;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Transaction.AsObject;
      static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
      static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Transaction;
      static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
    }

    export namespace Transaction {
      export type AsObject = {
        transactionId: number,
        kindId: Wallet.Asset.Transaction.Kind.Id,
        statusId: mlmbox_types_status_pb.Status.Transaction,
        amount: string,
        fee: string,
        balance: string,
        createdAt: number,
        metadata?: Wallet.Asset.Transaction.Metadata.AsObject,
      }

      export class Id extends jspb.Message {
        getAssetId(): number;
        setAssetId(value: number): Id;

        getTransactionId(): number;
        setTransactionId(value: number): Id;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Id.AsObject;
        static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
        static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Id;
        static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
      }

      export namespace Id {
        export type AsObject = {
          assetId: number,
          transactionId: number,
        }
      }


      export class Kind extends jspb.Message {
        getKindId(): Wallet.Asset.Transaction.Kind.Id;
        setKindId(value: Wallet.Asset.Transaction.Kind.Id): Kind;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Kind.AsObject;
        static toObject(includeInstance: boolean, msg: Kind): Kind.AsObject;
        static serializeBinaryToWriter(message: Kind, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Kind;
        static deserializeBinaryFromReader(message: Kind, reader: jspb.BinaryReader): Kind;
      }

      export namespace Kind {
        export type AsObject = {
          kindId: Wallet.Asset.Transaction.Kind.Id,
        }

        export enum Id { 
          UNKNOWN = 0,
          CANCELED = 1,
          EARNED = 2,
          SPENT = 3,
          DEPOSIT = 4,
          WITHDRAWAL = 5,
          DEPOSIT_WALLET_TRANSFER = 6,
          WITHDRAWAL_WALLET_TRANSFER = 7,
          EXCHANGE = 8,
          WITHDRAWAL_FEE = 9,
          BURNED = 10,
          HOLD = 11,
          UNHOLD = 12,
        }
      }


      export class List extends jspb.Message {
        getItemsList(): Array<Wallet.Asset.Transaction>;
        setItemsList(value: Array<Wallet.Asset.Transaction>): List;
        clearItemsList(): List;
        addItems(value?: Wallet.Asset.Transaction, index?: number): Wallet.Asset.Transaction;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): List.AsObject;
        static toObject(includeInstance: boolean, msg: List): List.AsObject;
        static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): List;
        static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
      }

      export namespace List {
        export type AsObject = {
          itemsList: Array<Wallet.Asset.Transaction.AsObject>,
        }
      }


      export class Metadata extends jspb.Message {
        getDescription(): string;
        setDescription(value: string): Metadata;

        getWithdrawal(): Wallet.Asset.Transaction.Metadata.Withdrawal | undefined;
        setWithdrawal(value?: Wallet.Asset.Transaction.Metadata.Withdrawal): Metadata;
        hasWithdrawal(): boolean;
        clearWithdrawal(): Metadata;

        getMatrixKeeperInitialTreeId(): number;
        setMatrixKeeperInitialTreeId(value: number): Metadata;

        getMatrixKeeperReinvest(): Wallet.Asset.Transaction.Metadata.MatrixHeader | undefined;
        setMatrixKeeperReinvest(value?: Wallet.Asset.Transaction.Metadata.MatrixHeader): Metadata;
        hasMatrixKeeperReinvest(): boolean;
        clearMatrixKeeperReinvest(): Metadata;

        getBonus(): Wallet.Asset.Transaction.Metadata.Bonus | undefined;
        setBonus(value?: Wallet.Asset.Transaction.Metadata.Bonus): Metadata;
        hasBonus(): boolean;
        clearBonus(): Metadata;

        getAccountId(): number;
        setAccountId(value: number): Metadata;

        getMatrixPositionCreated(): Wallet.Asset.Transaction.Metadata.MatrixHeader | undefined;
        setMatrixPositionCreated(value?: Wallet.Asset.Transaction.Metadata.MatrixHeader): Metadata;
        hasMatrixPositionCreated(): boolean;
        clearMatrixPositionCreated(): Metadata;

        getAmount(): mlmbox_types_asset_pb.Asset.Amount | undefined;
        setAmount(value?: mlmbox_types_asset_pb.Asset.Amount): Metadata;
        hasAmount(): boolean;
        clearAmount(): Metadata;

        getUniqueFieldCase(): Metadata.UniqueFieldCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Metadata.AsObject;
        static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
        static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Metadata;
        static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
      }

      export namespace Metadata {
        export type AsObject = {
          description: string,
          withdrawal?: Wallet.Asset.Transaction.Metadata.Withdrawal.AsObject,
          matrixKeeperInitialTreeId: number,
          matrixKeeperReinvest?: Wallet.Asset.Transaction.Metadata.MatrixHeader.AsObject,
          bonus?: Wallet.Asset.Transaction.Metadata.Bonus.AsObject,
          accountId: number,
          matrixPositionCreated?: Wallet.Asset.Transaction.Metadata.MatrixHeader.AsObject,
          amount?: mlmbox_types_asset_pb.Asset.Amount.AsObject,
        }

        export class Withdrawal extends jspb.Message {
          getProcessingId(): number;
          setProcessingId(value: number): Withdrawal;

          getAddress(): string;
          setAddress(value: string): Withdrawal;

          getUsedVerifiedCode(): boolean;
          setUsedVerifiedCode(value: boolean): Withdrawal;

          getHash(): string;
          setHash(value: string): Withdrawal;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Withdrawal.AsObject;
          static toObject(includeInstance: boolean, msg: Withdrawal): Withdrawal.AsObject;
          static serializeBinaryToWriter(message: Withdrawal, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Withdrawal;
          static deserializeBinaryFromReader(message: Withdrawal, reader: jspb.BinaryReader): Withdrawal;
        }

        export namespace Withdrawal {
          export type AsObject = {
            processingId: number,
            address: string,
            usedVerifiedCode: boolean,
            hash: string,
          }
        }


        export class MatrixHeader extends jspb.Message {
          getTreeId(): number;
          setTreeId(value: number): MatrixHeader;

          getTreeAccountId(): number;
          setTreeAccountId(value: number): MatrixHeader;

          getPositionId(): number;
          setPositionId(value: number): MatrixHeader;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): MatrixHeader.AsObject;
          static toObject(includeInstance: boolean, msg: MatrixHeader): MatrixHeader.AsObject;
          static serializeBinaryToWriter(message: MatrixHeader, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): MatrixHeader;
          static deserializeBinaryFromReader(message: MatrixHeader, reader: jspb.BinaryReader): MatrixHeader;
        }

        export namespace MatrixHeader {
          export type AsObject = {
            treeId: number,
            treeAccountId: number,
            positionId: number,
          }
        }


        export class Bonus extends jspb.Message {
          getBonusId(): mlmbox_types_bonus_pb.Bonus.Kind.Id;
          setBonusId(value: mlmbox_types_bonus_pb.Bonus.Kind.Id): Bonus;

          getMatrix(): Wallet.Asset.Transaction.Metadata.Bonus.SourceMatrix | undefined;
          setMatrix(value?: Wallet.Asset.Transaction.Metadata.Bonus.SourceMatrix): Bonus;
          hasMatrix(): boolean;
          clearMatrix(): Bonus;

          getCardPartnerDao(): Wallet.Asset.Transaction.Metadata.Bonus.CardPool | undefined;
          setCardPartnerDao(value?: Wallet.Asset.Transaction.Metadata.Bonus.CardPool): Bonus;
          hasCardPartnerDao(): boolean;
          clearCardPartnerDao(): Bonus;

          getCardBonusHunter(): Wallet.Asset.Transaction.Metadata.Bonus.CardPool | undefined;
          setCardBonusHunter(value?: Wallet.Asset.Transaction.Metadata.Bonus.CardPool): Bonus;
          hasCardBonusHunter(): boolean;
          clearCardBonusHunter(): Bonus;

          getDescription(): string;
          setDescription(value: string): Bonus;

          getSourceCase(): Bonus.SourceCase;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Bonus.AsObject;
          static toObject(includeInstance: boolean, msg: Bonus): Bonus.AsObject;
          static serializeBinaryToWriter(message: Bonus, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Bonus;
          static deserializeBinaryFromReader(message: Bonus, reader: jspb.BinaryReader): Bonus;
        }

        export namespace Bonus {
          export type AsObject = {
            bonusId: mlmbox_types_bonus_pb.Bonus.Kind.Id,
            matrix?: Wallet.Asset.Transaction.Metadata.Bonus.SourceMatrix.AsObject,
            cardPartnerDao?: Wallet.Asset.Transaction.Metadata.Bonus.CardPool.AsObject,
            cardBonusHunter?: Wallet.Asset.Transaction.Metadata.Bonus.CardPool.AsObject,
            description: string,
          }

          export class SourceMatrix extends jspb.Message {
            getTarget(): Wallet.Asset.Transaction.Metadata.MatrixHeader | undefined;
            setTarget(value?: Wallet.Asset.Transaction.Metadata.MatrixHeader): SourceMatrix;
            hasTarget(): boolean;
            clearTarget(): SourceMatrix;

            getSource(): Wallet.Asset.Transaction.Metadata.MatrixHeader | undefined;
            setSource(value?: Wallet.Asset.Transaction.Metadata.MatrixHeader): SourceMatrix;
            hasSource(): boolean;
            clearSource(): SourceMatrix;

            getLevel(): number;
            setLevel(value: number): SourceMatrix;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SourceMatrix.AsObject;
            static toObject(includeInstance: boolean, msg: SourceMatrix): SourceMatrix.AsObject;
            static serializeBinaryToWriter(message: SourceMatrix, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SourceMatrix;
            static deserializeBinaryFromReader(message: SourceMatrix, reader: jspb.BinaryReader): SourceMatrix;
          }

          export namespace SourceMatrix {
            export type AsObject = {
              target?: Wallet.Asset.Transaction.Metadata.MatrixHeader.AsObject,
              source?: Wallet.Asset.Transaction.Metadata.MatrixHeader.AsObject,
              level: number,
            }
          }


          export class CardPool extends jspb.Message {
            getCardId(): number;
            setCardId(value: number): CardPool;

            getPoolPartId(): number;
            setPoolPartId(value: number): CardPool;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CardPool.AsObject;
            static toObject(includeInstance: boolean, msg: CardPool): CardPool.AsObject;
            static serializeBinaryToWriter(message: CardPool, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CardPool;
            static deserializeBinaryFromReader(message: CardPool, reader: jspb.BinaryReader): CardPool;
          }

          export namespace CardPool {
            export type AsObject = {
              cardId: number,
              poolPartId: number,
            }
          }


          export enum SourceCase { 
            SOURCE_NOT_SET = 0,
            MATRIX = 2,
            CARD_PARTNER_DAO = 3,
            CARD_BONUS_HUNTER = 4,
            DESCRIPTION = 5,
          }
        }


        export enum UniqueFieldCase { 
          UNIQUE_FIELD_NOT_SET = 0,
          DESCRIPTION = 1,
          WITHDRAWAL = 2,
          MATRIX_KEEPER_INITIAL_TREE_ID = 3,
          MATRIX_KEEPER_REINVEST = 4,
          BONUS = 5,
          ACCOUNT_ID = 6,
          MATRIX_POSITION_CREATED = 7,
          AMOUNT = 8,
        }
      }

    }


    export class WithdrawalCapacity extends jspb.Message {
      getUsed(): string;
      setUsed(value: string): WithdrawalCapacity;

      getCapacity(): string;
      setCapacity(value: string): WithdrawalCapacity;

      getAvailable(): string;
      setAvailable(value: string): WithdrawalCapacity;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): WithdrawalCapacity.AsObject;
      static toObject(includeInstance: boolean, msg: WithdrawalCapacity): WithdrawalCapacity.AsObject;
      static serializeBinaryToWriter(message: WithdrawalCapacity, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): WithdrawalCapacity;
      static deserializeBinaryFromReader(message: WithdrawalCapacity, reader: jspb.BinaryReader): WithdrawalCapacity;
    }

    export namespace WithdrawalCapacity {
      export type AsObject = {
        used: string,
        capacity: string,
        available: string,
      }
    }


    export class List extends jspb.Message {
      getItemsList(): Array<Wallet.Asset>;
      setItemsList(value: Array<Wallet.Asset>): List;
      clearItemsList(): List;
      addItems(value?: Wallet.Asset, index?: number): Wallet.Asset;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): List.AsObject;
      static toObject(includeInstance: boolean, msg: List): List.AsObject;
      static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): List;
      static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
      export type AsObject = {
        itemsList: Array<Wallet.Asset.AsObject>,
      }
    }

  }


  export class Processing extends jspb.Message {
    getProcessingId(): number;
    setProcessingId(value: number): Processing;

    getProcessingName(): string;
    setProcessingName(value: string): Processing;

    getAssetsList(): Array<Wallet.Processing.Asset>;
    setAssetsList(value: Array<Wallet.Processing.Asset>): Processing;
    clearAssetsList(): Processing;
    addAssets(value?: Wallet.Processing.Asset, index?: number): Wallet.Processing.Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Processing.AsObject;
    static toObject(includeInstance: boolean, msg: Processing): Processing.AsObject;
    static serializeBinaryToWriter(message: Processing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Processing;
    static deserializeBinaryFromReader(message: Processing, reader: jspb.BinaryReader): Processing;
  }

  export namespace Processing {
    export type AsObject = {
      processingId: number,
      processingName: string,
      assetsList: Array<Wallet.Processing.Asset.AsObject>,
    }

    export class Id extends jspb.Message {
      getProcessingId(): number;
      setProcessingId(value: number): Id;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Id.AsObject;
      static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
      static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Id;
      static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
    }

    export namespace Id {
      export type AsObject = {
        processingId: number,
      }
    }


    export class Asset extends jspb.Message {
      getAssetId(): number;
      setAssetId(value: number): Asset;

      getSettingsDepositEnabled(): boolean;
      setSettingsDepositEnabled(value: boolean): Asset;

      getSettingsWithdrawalEnabled(): boolean;
      setSettingsWithdrawalEnabled(value: boolean): Asset;

      getSettingsWithdrawalFeeBase(): string;
      setSettingsWithdrawalFeeBase(value: string): Asset;

      getSettingsWithdrawalFeePercent(): string;
      setSettingsWithdrawalFeePercent(value: string): Asset;

      getSettingsWithdrawalOperationValueMin(): string;
      setSettingsWithdrawalOperationValueMin(value: string): Asset;

      getSettingsWithdrawalOperationValueMax(): string;
      setSettingsWithdrawalOperationValueMax(value: string): Asset;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Asset.AsObject;
      static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
      static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Asset;
      static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
    }

    export namespace Asset {
      export type AsObject = {
        assetId: number,
        settingsDepositEnabled: boolean,
        settingsWithdrawalEnabled: boolean,
        settingsWithdrawalFeeBase: string,
        settingsWithdrawalFeePercent: string,
        settingsWithdrawalOperationValueMin: string,
        settingsWithdrawalOperationValueMax: string,
      }

      export class Id extends jspb.Message {
        getProcessingId(): number;
        setProcessingId(value: number): Id;

        getAssetId(): number;
        setAssetId(value: number): Id;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Id.AsObject;
        static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
        static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Id;
        static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
      }

      export namespace Id {
        export type AsObject = {
          processingId: number,
          assetId: number,
        }
      }

    }


    export class List extends jspb.Message {
      getItemsList(): Array<Wallet.Processing>;
      setItemsList(value: Array<Wallet.Processing>): List;
      clearItemsList(): List;
      addItems(value?: Wallet.Processing, index?: number): Wallet.Processing;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): List.AsObject;
      static toObject(includeInstance: boolean, msg: List): List.AsObject;
      static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): List;
      static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
      export type AsObject = {
        itemsList: Array<Wallet.Processing.AsObject>,
      }
    }

  }

}

