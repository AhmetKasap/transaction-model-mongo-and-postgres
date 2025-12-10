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