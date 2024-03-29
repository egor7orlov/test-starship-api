# Test Starship API assignment

## Usage

```shell
npm install

npm run start

# There are also e2e tests in `test` folder
npm run test:e2e
```

## Description

I've implemented text processing next way: I iterate over words of text and check if word is a keyword. There are
predefined answers for each keyword. If there are more than one keyword in text those answers a joined by 2 newline
characters ("\n\n").

At this moment there are three folders which contain parts of application, each of which has its own concerns:

- [domain](./src/domain) - contains everything related to work with certain entities (services, repositories, etc.)
- [use-cases](./src/use-cases) - contains "use case" classes which inject services and proceed complex logic which (
  potentially) involves multiple entities from `domain` folder. Use cases are used to avoid mixing services with each
  other.
- [http-api](./src/http-api) - contains HTTP controllers. Controllers inject use cases. Direct access to
  entities is not recommended but not forbidden. Ideally each endpoint should execute one use case and return result of
  this execution. Why not put controllers next to the services and repos? Because controllers has nothing to do with
  entities. It's a different layer of application. Also, later there may be some other form of API we'll need to add or
  switch to. We'll put it in another API-related folder (e.g. `aws-lambda-handlers`, `message-listeners`, etc.).

During development, I kept in mind an idea
of [clean architecture](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*0u-ekVHFu7Om7Z-VTwFHvg.png) with its 
layers of application. I have to say that in some cases such structure is probably an overkill but in most cases it is 
perfect in terms of development experience.

## LangChain integration

LangChain can be easily integrated into app using separate
module [LangChainModule](./src/domain/lang-chain/lang-chain.module.ts) and its dependencies.
I don't know much about LangChain but usually 3rd-party integrations done quite easily when there are separate modules
for each of them.
