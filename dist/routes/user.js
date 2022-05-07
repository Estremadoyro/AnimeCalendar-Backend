"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get("/:userId/animes", function (req, res) {
    var userId = req.params.userId;
    res.send("User ".concat(userId, " fetching animes"));
});
router.get("/:userId/animes/:date", function (req, res) {
    var _a = req.params, userId = _a.userId, date = _a.date;
    res.send("User ".concat(userId, " fetching animes from date ").concat(date));
});
router.post("/:userId/animes/:id", function (req, res) {
    var userId = req.params.userId;
    res.send("User ".concat(userId, " creating new anime"));
});
exports.default = router;
//# sourceMappingURL=user.js.map