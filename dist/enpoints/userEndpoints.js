"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEndpoints = void 0;
var UserEndpoints = (function () {
    function UserEndpoints(api) {
        this.user = "user";
        this.api = api;
    }
    UserEndpoints.prototype.endpoint = function () {
        return "".concat(this.api.path, "/").concat(this.user);
    };
    return UserEndpoints;
}());
exports.UserEndpoints = UserEndpoints;
//# sourceMappingURL=userEndpoints.js.map