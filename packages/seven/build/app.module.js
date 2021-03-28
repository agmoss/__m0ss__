"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var _config_1 = require("@config");
var common_1 = require("@nestjs/common");
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("@nestjs/typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var articles_module_1 = require("./articles/articles.module");
var profiles_module_1 = require("./profiles/profiles.module");
var media_module_1 = require("./media/media.module");
var users_module_1 = require("./users/users.module");
var auth_module_1 = require("./auth/auth.module");
var auth_controller_1 = require("./auth/auth.controller");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                graphql_1.GraphQLModule.forRootAsync({
                    useClass: _config_1.GraphqlOptions
                }),
                typeorm_1.TypeOrmModule.forRootAsync({
                    useClass: _config_1.TypeOrmService
                }),
                articles_module_1.ArticlesModule,
                profiles_module_1.ProfilesModule,
                media_module_1.MediaModule,
                users_module_1.UsersModule,
                auth_module_1.AuthModule,
            ],
            controllers: [app_controller_1.AppController, auth_controller_1.AuthController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map