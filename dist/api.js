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
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = exports.AnimeCalendarAPI = void 0;
var AnimeCalendarAPI = (function () {
    function AnimeCalendarAPI() {
    }
    return AnimeCalendarAPI;
}());
exports.AnimeCalendarAPI = AnimeCalendarAPI;
var API = (function (_super) {
    __extends(API, _super);
    function API() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.version = "v1.0";
        _this.api = "api";
        _this.path = "".concat(_this.api, "/").concat(_this.version);
        return _this;
    }
    return API;
}(AnimeCalendarAPI));
exports.API = API;
//# sourceMappingURL=api.js.map