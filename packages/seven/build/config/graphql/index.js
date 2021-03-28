"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GraphqlOptions = void 0;
var common_1 = require("@nestjs/common");
var GraphqlOptions = /** @class */ (function () {
    function GraphqlOptions() {
    }
    GraphqlOptions.prototype.createGqlOptions = function () {
        return {
            autoSchemaFile: true,
            sortSchema: true,
            context: function (_a) {
                var req = _a.req, res = _a.res;
                return ({ req: req, res: res });
            },
            debug: true,
            playground: true
        };
    };
    GraphqlOptions = __decorate([
        common_1.Injectable()
    ], GraphqlOptions);
    return GraphqlOptions;
}());
exports.GraphqlOptions = GraphqlOptions;
//# sourceMappingURL=index.js.map