"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.ComplexityPlugin = void 0;
var graphql_1 = require("@nestjs/graphql");
var graphql_2 = require("graphql");
var graphql_query_complexity_1 = require("graphql-query-complexity");
var ComplexityPlugin = /** @class */ (function () {
    function ComplexityPlugin(gqlSchemaHost) {
        this.gqlSchemaHost = gqlSchemaHost;
    }
    ComplexityPlugin.prototype.requestDidStart = function () {
        var schema = this.gqlSchemaHost.schema;
        return {
            didResolveOperation: function (_a) {
                var request = _a.request, document = _a.document;
                var complexity = graphql_query_complexity_1.getComplexity({
                    schema: schema,
                    operationName: request.operationName,
                    query: document,
                    variables: request.variables,
                    estimators: [
                        graphql_query_complexity_1.fieldExtensionsEstimator(),
                        graphql_query_complexity_1.simpleEstimator({ defaultComplexity: 1 }),
                    ]
                });
                if (complexity >= 20) {
                    throw new graphql_2.GraphQLError("Query is too complex: " + complexity + ". Maximum allowed complexity: 20");
                }
                console.log("Query Complexity:", complexity);
            }
        };
    };
    ComplexityPlugin = __decorate([
        graphql_1.Plugin(),
        __metadata("design:paramtypes", [graphql_1.GraphQLSchemaHost])
    ], ComplexityPlugin);
    return ComplexityPlugin;
}());
exports.ComplexityPlugin = ComplexityPlugin;
//# sourceMappingURL=complexity.plugin.js.map