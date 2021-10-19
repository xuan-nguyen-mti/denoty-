import { Router } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import { getReceipts } from "./controllers/ReceiptController.ts";

const router = new Router();

router.get("/receipts", getReceipts);

export default router;