# Generated JavaScript SDK

```bash
export MLMBOX_API_PATH="$HOME/Documents/GitHub/mlm-tonmason/apis"

npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/sort.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/scheme.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/exchanger.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/relationship.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/bonus.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/asset.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/account.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/status.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/asset_pair.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/wallet.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/locale.proto

npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/locale/locale.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/app/app.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/asset/asset.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/auth/auth.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/network/network.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/finance/wallet.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/account/account.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/matrix/matrix.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/asset_pair/asset_pair.proto

npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/any.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/api.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/descriptor.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/duration.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/empty.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/field_mask.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/source_context.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/struct.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/timestamp.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/type.proto
npx grpc_tools_node_protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/wrappers.proto
```