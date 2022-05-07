"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_1 = require("./api");
var endpoints_1 = require("./enpoints/endpoints");
var middleware_1 = require("./middleware");
var server_1 = require("./server");
var main = function () {
    var app = (0, express_1.default)();
    var server = new server_1.AppServer(app);
    server.bootServer();
    var middleware = new middleware_1.AppMiddleWare(app);
    middleware.configureMiddleware();
    var api = new api_1.API();
    var endpoints = new endpoints_1.AppEndpoints(app, api);
    endpoints.configureEndpoints();
};
main();
//# sourceMappingURL=index.js.map