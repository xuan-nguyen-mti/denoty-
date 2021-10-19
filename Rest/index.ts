import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const app = new Application();

app.use(router.routes());
console.log("Server started");
await app.listen({ port: 8000 });