## Promote

### Assignment

Create a new file called *exercise-promote.js* and program a simple tool to promote transactions.

- A prompt appears: *"Enter the hash of a tail transaction:"*.
- Use `checkInclusion` to check whether the transaction has already been confirmed, and if so, terminate with a confirmation.
- Check with `isPromotable` whether the function can be promoted. If not, the application terminates with a response. Otherwise, the transaction is promoted.

### Instructions

The call of 
```javascript
iota.getLatestInclusion(transactions)
``` 
with transactions an array of transaction hashes results in an array of booleans (true/false values) of equal length, where a value of true for the respective transaction means that it has been confirmed by a milestone.

With 
```javascript
iota.isPromotable(tail)
``` 
where tail is the hash of the tail transaction of the bundle (the transaction with index 0), we can check if a transaction can be promoted (which is not the case for example if it is too old or is in a sidetangle with inconsistent transactions). 

If the function returns true, we can use the transaction with
```javascript
iota.promoteTransaction(tail, depth, minWeightMagnitude, transfer, [options])
``` 
promote. 

Additionally, an options object can be passed with which you can define a time interval in milliseconds (delay) and an interrupt function.

A transaction that can no longer be promoted can be done with
```javascript
iota.replayBundle(tail, depth, minWeightMagnitude)
```
to reattach. It is called with the hash of a tail transaction and returns a new bundle.