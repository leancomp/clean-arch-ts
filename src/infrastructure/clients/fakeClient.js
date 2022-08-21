"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeClient = void 0;
class FakeClient {
    mimic(o) {
        return Promise.resolve(o);
    }
}
exports.FakeClient = FakeClient;
