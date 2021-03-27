import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getSeven(): string {
        return "seven";
    }
}
