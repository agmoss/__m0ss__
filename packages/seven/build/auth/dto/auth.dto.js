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
exports.AccessToken = exports.LoginInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var class_validator_1 = require("class-validator");
var LoginInput = /** @class */ (function () {
    function LoginInput() {
    }
    __decorate([
        graphql_1.Field(),
        class_validator_1.MaxLength(30),
        __metadata("design:type", String)
    ], LoginInput.prototype, "user_name");
    __decorate([
        graphql_1.Field(),
        class_validator_1.Length(30, 50),
        __metadata("design:type", String)
    ], LoginInput.prototype, "password");
    LoginInput = __decorate([
        graphql_1.InputType()
    ], LoginInput);
    return LoginInput;
}());
exports.LoginInput = LoginInput;
var AccessToken = /** @class */ (function () {
    function AccessToken() {
    }
    __decorate([
        graphql_1.Field(),
        __metadata("design:type", String)
    ], AccessToken.prototype, "access_token");
    AccessToken = __decorate([
        graphql_1.ObjectType()
    ], AccessToken);
    return AccessToken;
}());
exports.AccessToken = AccessToken;
//# sourceMappingURL=auth.dto.js.map