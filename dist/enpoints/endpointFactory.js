"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointFactory = void 0;
var animesEndpoints_1 = require("./animesEndpoints");
var userEndpoints_1 = require("./userEndpoints");
var EndpointFactory = (function () {
    function EndpointFactory(api) {
        this.api = api;
    }
    EndpointFactory.prototype.getEndpoint = function (endpoint) {
        switch (endpoint) {
            case 0:
                return new animesEndpoints_1.AnimeEndpoints(this.api);
            case 1:
                return new userEndpoints_1.UserEndpoints(this.api);
        }
    };
    return EndpointFactory;
}());
exports.EndpointFactory = EndpointFactory;
//# sourceMappingURL=endpointFactory.js.map