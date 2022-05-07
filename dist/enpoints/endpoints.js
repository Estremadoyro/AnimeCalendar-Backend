"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEndpoints = void 0;
var endpointFactory_1 = require("./endpointFactory");
var animes_1 = __importDefault(require("../routes/animes"));
var user_1 = __importDefault(require("../routes/user"));
var endpointManager_1 = require("src/interfaces/endpointManager");
var AppEndpoints = (function (_super) {
    __extends(AppEndpoints, _super);
    function AppEndpoints(app, api) {
        var _this = _super.call(this) || this;
        _this.app = app;
        _this.api = api;
        return _this;
    }
    AppEndpoints.prototype.configureEndpoints = function () {
        var endpoints = this.getEndpoints();
        var paths = this.getPaths(endpoints);
        this.configureRoutes(paths);
    };
    AppEndpoints.prototype.getEndpoints = function () {
        var endpointFactory = new endpointFactory_1.EndpointFactory(this.api);
        var animesEndpoint = endpointFactory.getEndpoint(0);
        var userEndpoint = endpointFactory.getEndpoint(1);
        return [animesEndpoint, userEndpoint];
    };
    AppEndpoints.prototype.getPaths = function (endpoints) {
        return endpoints.flatMap(function (endpoint) { return endpoint.endpoint(); });
    };
    AppEndpoints.prototype.configureRoutes = function (paths) {
        var _this = this;
        var routes = [animes_1.default, user_1.default];
        paths.forEach(function (path, index) {
            _this.app.use(path, routes[index]);
        });
    };
    return AppEndpoints;
}(endpointManager_1.EndpointManager));
exports.AppEndpoints = AppEndpoints;
//# sourceMappingURL=endpoints.js.map