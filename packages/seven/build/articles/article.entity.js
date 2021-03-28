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
exports.Article = void 0;
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("typeorm");
var Article = /** @class */ (function () {
    function Article() {
    }
    __decorate([
        graphql_1.Field(),
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Article.prototype, "id");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Article.prototype, "title");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Article.prototype, "description");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Article.prototype, "image");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Article.prototype, "markdown");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Article.prototype, "internal_link");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Article.prototype, "external_link");
    __decorate([
        graphql_1.Field(),
        typeorm_1.Column({ "default": true }),
        __metadata("design:type", Boolean)
    ], Article.prototype, "isActive");
    Article = __decorate([
        typeorm_1.Entity({
            name: "articles"
        }),
        graphql_1.ObjectType()
    ], Article);
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.entity.js.map