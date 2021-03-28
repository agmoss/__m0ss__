"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoggingPlugin = void 0;
var graphql_1 = require("@nestjs/graphql");
var LoggingPlugin = /** @class */ (function () {
    function LoggingPlugin() {
    }
    LoggingPlugin.prototype.requestDidStart = function () {
        console.log("Request started");
        return {
            willSendResponse: function () {
                console.log("Will send response");
            }
        };
    };
    LoggingPlugin = __decorate([
        graphql_1.Plugin()
    ], LoggingPlugin);
    return LoggingPlugin;
}());
exports.LoggingPlugin = LoggingPlugin;
//# sourceMappingURL=logging.plugin.js.map