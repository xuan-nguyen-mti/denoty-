import db from "../db/mongo.ts"

class ReceiptRepository{
  constructor() {
    
  } 
  
  readonly receiptCollection = db.collection("receipts");

  async find(){
    const receipts = await this.receiptCollection.find();
    return receipts;
  }

  // async insertOne()
}

export default ReceiptRepository;