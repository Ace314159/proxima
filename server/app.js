import { Application } from "./deps.js";
import { router } from "./routes/routes.js";
import * as basicMiddleware from './middlewares/basicMiddleware.js';

const app = new Application();

app.use(basicMiddleware.errorMiddleware);
app.use(basicMiddleware.requestTimingMiddleware);
app.use(basicMiddleware.serveStaticFilesMiddleware);

app.use(router.routes());

app.listen({ port: 7777 });