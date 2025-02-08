# Generated JavaScript SDK

```bash
export MLMBOX_API_PATH="$HOME/Documents/GitHub/mlm-tonmason/apis"

protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/account.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/asset.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/asset_pair.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/bonus.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/exchanger.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/league.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/locale.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/management.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/notification.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/product.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/relationship.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/scheme.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/sort.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/status.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/types/wallet.proto

protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/account/account.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/app/app.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/asset/asset.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/asset_pair/asset_pair.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/auth/auth.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/finance/wallet.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/league/league.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/locale/locale.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/management/management.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/matrix/matrix.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/network/network.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. mlmbox/client/product/product.proto

protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/any.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/api.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/descriptor.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/duration.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/empty.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/field_mask.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/source_context.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/struct.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/timestamp.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/type.proto
protoc -I=$MLMBOX_API_PATH --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. google/protobuf/wrappers.proto
```