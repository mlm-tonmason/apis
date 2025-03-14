/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.quest
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: mlmbox/client/quest/quest.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as mlmbox_types_quest_pb from '../../../mlmbox/types/quest_pb'; // proto import: "mlmbox/types/quest.proto"


export class QuestClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorAllQuests = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.quest.Quest/AllQuests',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_quest_pb.Quest.List,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_quest_pb.Quest.List.deserializeBinary
  );

  allQuests(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_quest_pb.Quest.List>;

  allQuests(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_quest_pb.Quest.List) => void): grpcWeb.ClientReadableStream<mlmbox_types_quest_pb.Quest.List>;

  allQuests(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_quest_pb.Quest.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.quest.Quest/AllQuests',
        request,
        metadata || {},
        this.methodDescriptorAllQuests,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.quest.Quest/AllQuests',
    request,
    metadata || {},
    this.methodDescriptorAllQuests);
  }

  methodDescriptorGetQuest = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.quest.Quest/GetQuest',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_quest_pb.Quest.Id,
    mlmbox_types_quest_pb.Quest,
    (request: mlmbox_types_quest_pb.Quest.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_quest_pb.Quest.deserializeBinary
  );

  getQuest(
    request: mlmbox_types_quest_pb.Quest.Id,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_quest_pb.Quest>;

  getQuest(
    request: mlmbox_types_quest_pb.Quest.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_quest_pb.Quest) => void): grpcWeb.ClientReadableStream<mlmbox_types_quest_pb.Quest>;

  getQuest(
    request: mlmbox_types_quest_pb.Quest.Id,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_quest_pb.Quest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.quest.Quest/GetQuest',
        request,
        metadata || {},
        this.methodDescriptorGetQuest,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.quest.Quest/GetQuest',
    request,
    metadata || {},
    this.methodDescriptorGetQuest);
  }

  methodDescriptorSubmitQuestForReview = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.quest.Quest/SubmitQuestForReview',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_quest_pb.Quest.Id,
    mlmbox_types_quest_pb.Quest,
    (request: mlmbox_types_quest_pb.Quest.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_quest_pb.Quest.deserializeBinary
  );

  submitQuestForReview(
    request: mlmbox_types_quest_pb.Quest.Id,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_quest_pb.Quest>;

  submitQuestForReview(
    request: mlmbox_types_quest_pb.Quest.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_quest_pb.Quest) => void): grpcWeb.ClientReadableStream<mlmbox_types_quest_pb.Quest>;

  submitQuestForReview(
    request: mlmbox_types_quest_pb.Quest.Id,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_quest_pb.Quest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.quest.Quest/SubmitQuestForReview',
        request,
        metadata || {},
        this.methodDescriptorSubmitQuestForReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.quest.Quest/SubmitQuestForReview',
    request,
    metadata || {},
    this.methodDescriptorSubmitQuestForReview);
  }

}

