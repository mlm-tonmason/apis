import * as jspb from 'google-protobuf'

import * as mlmbox_types_asset_pb from '../../mlmbox/types/asset_pb'; // proto import: "mlmbox/types/asset.proto"


export class Quest extends jspb.Message {
  getId(): number;
  setId(value: number): Quest;

  getTitle(): string;
  setTitle(value: string): Quest;

  getRecurring(): Quest.RecurringQuest | undefined;
  setRecurring(value?: Quest.RecurringQuest): Quest;
  hasRecurring(): boolean;
  clearRecurring(): Quest;

  getOneTime(): Quest.OneTimeQuest | undefined;
  setOneTime(value?: Quest.OneTimeQuest): Quest;
  hasOneTime(): boolean;
  clearOneTime(): Quest;

  getRewardAmount(): mlmbox_types_asset_pb.Asset.Amount | undefined;
  setRewardAmount(value?: mlmbox_types_asset_pb.Asset.Amount): Quest;
  hasRewardAmount(): boolean;
  clearRewardAmount(): Quest;

  getQuestTypeCase(): Quest.QuestTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quest.AsObject;
  static toObject(includeInstance: boolean, msg: Quest): Quest.AsObject;
  static serializeBinaryToWriter(message: Quest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quest;
  static deserializeBinaryFromReader(message: Quest, reader: jspb.BinaryReader): Quest;
}

export namespace Quest {
  export type AsObject = {
    id: number,
    title: string,
    recurring?: Quest.RecurringQuest.AsObject,
    oneTime?: Quest.OneTimeQuest.AsObject,
    rewardAmount?: mlmbox_types_asset_pb.Asset.Amount.AsObject,
  }

  export class Id extends jspb.Message {
    getQuestId(): number;
    setQuestId(value: number): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      questId: number,
    }
  }


  export class List extends jspb.Message {
    getQuestsList(): Array<Quest>;
    setQuestsList(value: Array<Quest>): List;
    clearQuestsList(): List;
    addQuests(value?: Quest, index?: number): Quest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): List.AsObject;
    static toObject(includeInstance: boolean, msg: List): List.AsObject;
    static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): List;
    static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
  }

  export namespace List {
    export type AsObject = {
      questsList: Array<Quest.AsObject>,
    }
  }


  export class RecurringQuest extends jspb.Message {
    getNextAvailableAt(): number;
    setNextAvailableAt(value: number): RecurringQuest;

    getLastCompletedAt(): number;
    setLastCompletedAt(value: number): RecurringQuest;

    getStatus(): Quest.RecurringQuest.Status;
    setStatus(value: Quest.RecurringQuest.Status): RecurringQuest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecurringQuest.AsObject;
    static toObject(includeInstance: boolean, msg: RecurringQuest): RecurringQuest.AsObject;
    static serializeBinaryToWriter(message: RecurringQuest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecurringQuest;
    static deserializeBinaryFromReader(message: RecurringQuest, reader: jspb.BinaryReader): RecurringQuest;
  }

  export namespace RecurringQuest {
    export type AsObject = {
      nextAvailableAt: number,
      lastCompletedAt: number,
      status: Quest.RecurringQuest.Status,
    }

    export enum Status { 
      AVAILABLE = 0,
      COMPLETED = 1,
    }
  }


  export class OneTimeQuest extends jspb.Message {
    getVerificationUrl(): string;
    setVerificationUrl(value: string): OneTimeQuest;

    getCheckedAt(): number;
    setCheckedAt(value: number): OneTimeQuest;

    getStatus(): Quest.OneTimeQuest.Status;
    setStatus(value: Quest.OneTimeQuest.Status): OneTimeQuest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OneTimeQuest.AsObject;
    static toObject(includeInstance: boolean, msg: OneTimeQuest): OneTimeQuest.AsObject;
    static serializeBinaryToWriter(message: OneTimeQuest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OneTimeQuest;
    static deserializeBinaryFromReader(message: OneTimeQuest, reader: jspb.BinaryReader): OneTimeQuest;
  }

  export namespace OneTimeQuest {
    export type AsObject = {
      verificationUrl: string,
      checkedAt: number,
      status: Quest.OneTimeQuest.Status,
    }

    export enum Status { 
      NOT_STARTED = 0,
      PENDING_REVIEW = 1,
      COMPLETED = 2,
      FAILED = 3,
    }
  }


  export enum QuestTypeCase { 
    QUEST_TYPE_NOT_SET = 0,
    RECURRING = 3,
    ONE_TIME = 4,
  }
}

