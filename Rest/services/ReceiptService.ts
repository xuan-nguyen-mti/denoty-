import ReceiptRepository from "../repositories/ReceiptRepository.ts"

class ReceiptService{
  constructor(){

  }

  readonly receiptRepository = new ReceiptRepository();
  getReceipts = async()=> {
    return await this.receiptRepository.find();
  }

}

export default ReceiptService;