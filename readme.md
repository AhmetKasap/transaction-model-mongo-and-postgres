## What is a Transaction? 

A transaction represents a sequence of one or more CRUD operations executed as a single logical unit within a database. All operations inside a transaction must either complete successfully (commit) or be entirely undone (rollback).

A transaction ensures that grouped operations behave as one atomic action. If any step within the process fails, all preceding operations can be rolled back to maintain data integrity.

For example, consider a simple bank transfer scenario. The following steps would be handled as a single transaction:

Start – The transaction is initiated.

Update Account #1 – Money is withdrawn from the first account.

Update Account #2 – The same amount is deposited into the second account.

Commit – If all steps succeed, the transaction is committed.

Rollback – If any step fails, all operations are reverted.

Transactions are essential for maintaining correctness, especially when multiple operations must occur together without leaving the system in an inconsistent state.

## What is ACID?

The foundation of a transaction is the ACID principle.

These four properties ensure that a data operation is safe, consistent, recoverable, and properly isolated.

Atomicity

All operations within a transaction must either be completed entirely or not executed at all.
If the transaction is interrupted or an error occurs, all operations are rolled back.
This guarantees that the transaction either fully succeeds or fully fails as a whole.

Consistency

Transactions must take the database from one valid state to another valid state.
When the transaction completes, the database must remain consistent and follow all integrity rules.

Isolation

The effects of one transaction must be isolated from others.
When multiple transactions execute simultaneously, each one should run as if it were alone.

Example: If two operations (T1 and T2) target the same account at the same time, T2 must wait until T1 is fully completed to prevent inconsistent results.

Durability

Once a transaction is committed, the results become permanent.
Even in the event of a crash or system failure, the committed data must remain intact.
Durability ensures that once data is written, it cannot be undone by unexpected failures.


## Nodejs Transaction Simulator
- How does "Transaction" work? (basic level)
- SAVEPOINT (Nested Transactions)
- CONCURRENCY (Dirty read, Dirty write, Lost update, Non-repeatable read, Read skew, Write skew, Phantom read)
- MVCC (Multi-Version Concurrency Control)
- LOCK MECHANISMS (Shared Lock (S), Exclusive Lock (X), Row-level locks, Table-level locks, Deadlock detection)

## MongoDB Transaction

## PostgreSQL Transaction

## Example of a transaction with a money transfer

## Microservices Transaction (Saga and Outbox Pattern)