"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get("/animes", function (_req, res) {
    res.send("Fetching animes");
});
router.get("/animes/:search", function (req, res) {
    var search = req.params.search;
    res.send("Searching anime: ".concat(search));
});
exports.default = router;
//# sourceMappingURL=animes.js.map