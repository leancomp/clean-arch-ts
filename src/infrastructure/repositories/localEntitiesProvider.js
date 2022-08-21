"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalEntitiesProvider = void 0;
const tsyringe_1 = require("tsyringe");
let LocalEntitiesProvider = class LocalEntitiesProvider {
    addOne(num) {
        console.log('Running addOne() on entities provider locally');
        return Promise.resolve(String(num + 1));
    }
    doMagic(word) {
        console.log('Running doMagic() on entities provider locally');
        const rand = Math.floor(Math.random() * 10);
        const magicChars = word
            .split('')
            .map(i => String.fromCharCode(i.charCodeAt(0) + rand));
        return Promise.resolve(magicChars);
    }
};
LocalEntitiesProvider = __decorate([
    (0, tsyringe_1.injectable)()
], LocalEntitiesProvider);
exports.LocalEntitiesProvider = LocalEntitiesProvider;
