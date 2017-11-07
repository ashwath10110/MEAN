"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var customer_model_1 = require("./customer.model");
var base_1 = require("./../base");
var CustomerCtrl = (function (_super) {
    __extends(CustomerCtrl, _super);
    function CustomerCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = customer_model_1.default;
        _this.my = function (req, res) {
            req.query.where = { uid: req.user._id };
            req.query.sort = '-updatedAt';
            _this.index(req, res);
        };
        _this.create = function (req, res) {
            req.body.uid = req.user._id;
            _this.insert(req, res);
        };
        return _this;
    }
    return CustomerCtrl;
}(base_1.default));
exports.default = CustomerCtrl;
//# sourceMappingURL=customer.controller.js.map