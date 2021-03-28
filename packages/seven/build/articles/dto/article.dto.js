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
exports.ArticleInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var class_validator_1 = require("class-validator");
var ArticleInput = /** @class */ (function () {
    function ArticleInput() {
    }
    __decorate([
        graphql_1.Field(),
        class_validator_1.MaxLength(30),
        __metadata("design:type", String)
    ], ArticleInput.prototype, "title");
    __decorate([
        graphql_1.Field(),
        class_validator_1.Length(1, 255),
        __metadata("design:type", String)
    ], ArticleInput.prototype, "description");
    __decorate([
        graphql_1.Field(),
        class_validator_1.Length(1, 255),
        __metadata("design:type", String)
    ], ArticleInput.prototype, "image");
    __decorate([
        graphql_1.Field(),
        class_validator_1.Length(1, 255),
        __metadata("design:type", String)
    ], ArticleInput.prototype, "markdown");
    __decorate([
        graphql_1.Field({ name: "internal_link" }),
        __metadata("design:type", String)
    ], ArticleInput.prototype, "internalLink");
    __decorate([
        graphql_1.Field({ name: "external_link" }),
        __metadata("design:type", String)
    ], ArticleInput.prototype, "externalLink");
    ArticleInput = __decorate([
        graphql_1.InputType()
    ], ArticleInput);
    return ArticleInput;
}());
exports.ArticleInput = ArticleInput;
//# sourceMappingURL=article.dto.js.map