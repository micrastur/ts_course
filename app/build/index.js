"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basicTypes_1 = require("./basicTypes/basicTypes");
var tsInterfaces_1 = __importDefault(require("./tsInterfaces/tsInterfaces"));
window.onload = function () {
    console.log('s', tsInterfaces_1.default);
    tsInterfaces_1.default(basicTypes_1.commonUserData);
};
