# clean-arch-ts
<p align="center">
  <img src="docs/cookiecutter-logo.png" alt="Template"><br>
</p>
<p align="center">
  <a href="#about-this-template">About this template</a> •
  <a href="#structure">Structure</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#installation">Installation</a><br>
</p>

## About this template
Lightweight clean architecture template.

### What's included?
- 🖼️ Clean architecture principles
- ʦ nodeJs + TypeScript
- 📦 DI container ([tsyringe](https://github.com/microsoft/tsyringe))
- :whale: Multi stage lightweight Dockerfile 
- :octocat: GitHub workflows
- 🔧 Makefile

## Structure
Directories structure proposal:

```text
📦src
 ┣ 📂delivery
 ┃ ┗ ...
 ┣ 📂domain
 ┃ ┣ 📂controllers
 ┃ ┃ ...
 ┃ ┣ 📂entities
 ┃ ┃ ...
 ┃ ┣ 📂repositories
 ┃ ┃ ...
 ┃ ┗ 📂useCases
 ┃ ┃ ...
 ┗ 📂infrastructure
 ┃ ┣ 📂clients
 ┃ ┃ ...
 ┃ ┣ 📂repositories
 ┃ ┃ ...
 ┃ ┣ 📜config.ts
 ┃ ┗ 📜register.ts
```

## How it works
TODO

## Installation

```bash
> npm i
```

```bash
> npm run build
```

## DI usage

> Dependency injection (DI) is a programming technique that makes a class independent of its dependencies. 
> It achieves that by decoupling the usage of an object from its creation. 
> This helps you to follow SOLID's dependency inversion and single responsibility principles.

In the infrastructure layer you can find the DI container register where dependency injection rules are defined using
[tsyringe package](https://github.com/microsoft/tsyringe) for constructor injection.

```ts
const client = new FakeClient()
client.connect()
container.registerInstance('FakeClient', client)

if (isLocal) {
    container.registerSingleton('IBazProvider', SomeBazProvider)
} else {
    container.registerSingleton('IBazProvider', AnotherBazProvider)
}

container.registerSingleton('ExampleController', ExampleController)
container.registerSingleton('SomeUseCase', SomeUseCase)
container.registerSingleton('SomeOtherUseCase', SomeOtherUseCase)
```

Let's simulate that we need to run the code with the local implementation of some provider.

Running `> npm run start:local` will output something like:

```bash
> clean-arch-ts@1.0.0 start:local
> LOCAL_ENVIRONMENT=1 node .

[SomeBazProvider] Running addOne() on baz provider locally
doSomething(3) 4
[SomeBazProvider] Running doMagic() on baz provider locally
doSomethingElse('hello') [ 'o', 'l', 's', 's', 'v' ]
```

Otherwise, the DI registry will set the external provider implementation.

Running `> npm run start` will output something like:

```bash
> clean-arch-ts@1.0.0 start
> node .

[AnotherBazProvider] Running addOne() on baz provider externally
doSomething(3) 4
[AnotherBazProvider] Running doMagic() on baz provider externally
doSomethingElse('hello') [ 'm', 'j', 'q', 'q', 't' ]
```

## Multi-stage Dockerfile
Using multi-stage and final from scratch the total image size was reduced to ~40MB.

Let's make a comparative table:

![img.png](docs/docker-size-comparative.png)

* The first tag, `:large`, is a single-stage container file (building and running at the same stage) using the official `node:14` image as a base. **1.04GB**
* In the second one, `:large-alpine`, we improve a bit the size using `node:14-alpine` as a base. **271MB**
* The third one, `:multi-stage-alpine`, use the multi-stage strategy, splitting builder and final stages, using `node:14-alpine` as a base for both. **118MB**
* And the last one, `:multi-stage-small`, is the same multi-stage container file but using the [scratch-node](https://github.com/astefanutti/scratch-node/pkgs/container/scratch-node) minified image as final. **39.8MB**
