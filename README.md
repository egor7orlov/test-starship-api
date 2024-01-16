# Test Starship API assignment

## Usage

```shell
npm install

npm run start

# There are also e2e tests  in `test` folder
npm run test:e2e
```

## Description

At this moment there are three folders which contain parts of application, each of which has its own concerns:

- [domain](./src/domain) - contains everything related to work with certain entities (services, repositories, etc.)
- [use-cases](./src/use-cases) - contains use cases classes which inject services and proceed complex logic which (
  potentially) involves multiple entities from `domain` folder.
- [http-api](./src/http-api) - contains HTTP controllers. Controllers are injected with use cases. Direct access to
  entities is not recommended but not forbidden. Ideally each endpoint should execute one use case and return result of
  this execution. Why not put controllers next to the services and repos? Because controllers has nothing to do with
  entities. It's a different layer of application. Also, later there may be some other form of API we need to add or
  switch to. We'll put it in another API-related folder (e.g. `aws-lambda-handlers`, `message-listeners`, etc.).

During development, I kept in mind an idea
of [clean architecture](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*0u-ekVHFu7Om7Z-VTwFHvg.png) in mind
with its layers of application.

## LangChain integration

LangChain can be easily integrated into app using separate
module [LangChainModule](./src/domain/lang-chain/lang-chain.module.ts) and its dependencies.
I don't know much about LangChain but usually 3rd-party integrations done quite easily when there are separate modules
for each of them.
