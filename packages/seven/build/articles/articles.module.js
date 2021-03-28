"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArticlesModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var articles_service_1 = require("./articles.service");
var articles_resolver_1 = require("./articles.resolver");
var article_entity_1 = require("./article.entity");
var ArticlesModule = /** @class */ (function () {
    function ArticlesModule() {
    }
    ArticlesModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([article_entity_1.Article])],
            providers: [articles_service_1.ArticlesService, articles_resolver_1.ArticlesResolver]
        })
    ], ArticlesModule);
    return ArticlesModule;
}());
exports.ArticlesModule = ArticlesModule;
//# sourceMappingURL=articles.module.js.map