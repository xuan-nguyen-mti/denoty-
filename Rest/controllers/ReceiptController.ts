import {RouterContext} from "https://deno.land/x/oak/mod.ts";
import ReceiptService from "../services/ReceiptService.ts"

const receiptService = new ReceiptService();

export const getReceipts = async(context: RouterContext)=>{
  context.response.body = await receiptService.getReceipts();
}