"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diContainer = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const localEntitiesProvider_1 = require("./repositories/localEntitiesProvider");
const externalEntitiesProvider_1 = require("./repositories/externalEntitiesProvider");
const fakeClient_1 = require("./clients/fakeClient");
const exampleController_1 = require("../domain/controllers/exampleController");
const someUseCase_1 = require("../domain/useCases/someUseCase");
const someOtherUseCase_1 = require("../domain/useCases/someOtherUseCase");
const isLocal = !!process.env.LOCAL_ENVIRONMENT;
tsyringe_1.container.registerInstance('FakeClient', new fakeClient_1.FakeClient());
if (isLocal) {
    tsyringe_1.container.registerSingleton('IEntitiesProvider', localEntitiesProvider_1.LocalEntitiesProvider);
}
else {
    tsyringe_1.container.registerSingleton('IEntitiesProvider', externalEntitiesProvider_1.ExternalEntitiesProvider);
}
tsyringe_1.container.registerSingleton('ExampleController', exampleController_1.ExampleController);
tsyringe_1.container.registerSingleton('SomeUseCase', someUseCase_1.SomeUseCase);
tsyringe_1.container.registerSingleton('SomeOtherUseCase', someOtherUseCase_1.SomeOtherUseCase);
exports.diContainer = tsyringe_1.container;
