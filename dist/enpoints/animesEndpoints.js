"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeEndpoints = void 0;
var AnimeEndpoints = (function () {
    function AnimeEndpoints(api) {
        this.animes = "animes";
        this.api = api;
    }
    AnimeEndpoints.prototype.endpoint = function () {
        return "".concat(this.api.path, "/").concat(this.animes);
    };
    return AnimeEndpoints;
}());
exports.AnimeEndpoints = AnimeEndpoints;
//# sourceMappingURL=animesEndpoints.js.map