"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppServer = void 0;
var PORT = 2022;
var AppServer = (function () {
    function AppServer(app) {
        this.app = app;
    }
    AppServer.prototype.bootServer = function () {
        this.app.listen(PORT, function () {
            console.log("Server running @ ".concat(PORT));
        });
    };
    return AppServer;
}());
exports.AppServer = AppServer;
//# sourceMappingURL=server.js.map