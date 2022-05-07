"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMiddleWare = void 0;
var express_1 = __importDefault(require("express"));
var AppMiddleWare = (function () {
    function AppMiddleWare(app) {
        this.app = app;
    }
    AppMiddleWare.prototype.configureMiddleware = function () {
        console.log("Configured middleware");
        this.app.use(express_1.default.json());
    };
    return AppMiddleWare;
}());
exports.AppMiddleWare = AppMiddleWare;
//# sourceMappingURL=middleware.js.map