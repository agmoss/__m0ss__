"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfilesModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var profile_entity_1 = require("./profile.entity");
var profiles_resolver_1 = require("./profiles.resolver");
var profiles_service_1 = require("./profiles.service");
var ProfilesModule = /** @class */ (function () {
    function ProfilesModule() {
    }
    ProfilesModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([profile_entity_1.Profile])],
            providers: [profiles_resolver_1.ProfilesResolver, profiles_service_1.ProfilesService]
        })
    ], ProfilesModule);
    return ProfilesModule;
}());
exports.ProfilesModule = ProfilesModule;
//# sourceMappingURL=profiles.module.js.map