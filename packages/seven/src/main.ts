import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as helmet from "helmet";
import * as rateLimit from "express-rate-limit";
import { RATE_LIMIT_MAX } from "@environments";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(compression());
    app.use(helmet());
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(
        bodyParser.urlencoded({
            limit: "50mb",
            extended: true,
            parameterLimit: 50000,
        })
    );
    app.use(
        rateLimit({
            windowMs: 1000 * 60 * 60, // an hour
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            max: RATE_LIMIT_MAX!, // limit each IP to 100 requests per windowMs
            message:
                "Too many request created from this IP, please try again after an hour",
        })
    );
    await app.listen(3000);
}
bootstrap();
