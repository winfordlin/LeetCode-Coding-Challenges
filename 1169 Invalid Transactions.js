/*
A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.

Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.

 

Example 1:

Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
Example 2:

Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]
Example 3:

Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"]
 

Constraints:

transactions.length <= 1000
Each transactions[i] takes the form "{name},{time},{amount},{city}"
Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
Each {time} consist of digits, and represent an integer between 0 and 1000.
Each {amount} consist of digits, and represent an integer between 0 and 2000.
*/

/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
  //had trouble avoiding duplicates - so used a map data structure to map the transaction id to T/F,
  //split transactions into seperate array based on category
  //loop through the pairwise transactions making sure each pair does not violate rule 2: same name, within 60 mins, different city
  //delete both pairs and push to result
  //loop through for the rule 1: don't exceed 1000

  let res = [];
  let map = new Map();

  //map
  for (let i = 0; i < transactions.length; i++) {
    map.set(i, false);
  }

  let name = new Array(transactions.length);
  let time = new Array(transactions.length);
  let amount = new Array(transactions.length);
  let city = new Array(transactions.length);

  //split
  for (let i = 0; i < transactions.length; i++) {
    let split = transactions[i].split(",");
    name[i] = split[0];
    time[i] = parseInt(split[1]);
    amount[i] = parseInt(split[2]);
    city[i] = split[3];
  }

  // rule 1 & 2
  for (let i = 0; i < transactions.length; i++) {
    if (amount[i] > 1000) {
      map.set(i, true);
    }
    for (let j = i + 1; j < transactions.length; j++) {
      if (
        name[i] === name[j] &&
        Math.abs(time[i] - time[j]) <= 60 &&
        city[i] !== city[j]
      ) {
        map.set(i, true);
        map.set(j, true);
      }
    }
  }

  map.forEach((value, index) => {
    if (value) {
      res.push(transactions[index]);
    }
  });

  return res;
};
