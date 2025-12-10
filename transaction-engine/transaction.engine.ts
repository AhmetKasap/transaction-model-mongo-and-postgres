export class TransactionEngine<T extends Record<string, any>> {
    private data: T;
    private transactionBuffer: T | null = null;
    private inTransaction = false;
  
    constructor(initialData: T) {
      // real database data
      this.data = structuredClone(initialData);
    }
  
    public begin(): void {
      if (this.inTransaction) {
        throw new Error("Transaction already started");
      }
  
      // snapshot (copy-on-write)
      this.transactionBuffer = structuredClone(this.data);
      this.inTransaction = true;
    }
  
    public get<K extends keyof T>(key: K): T[K] {
      if (this.inTransaction && this.transactionBuffer) {
        return this.transactionBuffer[key];
      }
      return this.data[key];
    }
  
    public set<K extends keyof T>(key: K, value: T[K]): void {
      if (!this.inTransaction || !this.transactionBuffer) {
        throw new Error("Not in transaction");
      }
  
      this.transactionBuffer[key] = value;
    }
  
    public commit(): void {
      if (!this.inTransaction || !this.transactionBuffer) {
        throw new Error("Not in transaction");
      }
  
      // buffer → main data
      this.data = this.transactionBuffer;
      this.transactionBuffer = null;
      this.inTransaction = false;
    }
  
    public rollback(): void {
      if (!this.inTransaction) {
        throw new Error("Not in transaction");
      }
  
      // change to garbage
      this.transactionBuffer = null;
      this.inTransaction = false;
    }
  
    public debug() {
      console.log("Current Data:", this.data);
      console.log("Buffer:", this.transactionBuffer);
      console.log("Transaction:", this.inTransaction);
    }
  }
  