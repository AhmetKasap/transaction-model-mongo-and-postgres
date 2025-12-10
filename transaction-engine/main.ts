import { TransactionEngine } from "./transaction.engine";

interface BankData {
  balance: number;
  name: string;
}

const db = new TransactionEngine<BankData>({
  balance: 100,
  name: "Ahmet"
});

try {
  db.begin();

  const current = db.get("balance");
  db.set("balance", current - 30);

  console.log("Buffer balance:", db.get("balance")); // 70

  db.commit();
} catch (error) {
  db.rollback();
}

console.log("Final balance:", db.get("balance")); // 70
