var accounts = [];

function createAccount(account) {
  accounts.push(account);
  return account;
}

function getAccount(username) {
  for(var i=0; i < accounts.length; i++){
    if (accounts[i].username === username) {
      return accounts[i];
    };
  }
}

function deposit(account, amount) {
  if (typeof amount === "number") {
    account.balance += amount;
  } else{
    console.log("Your input must be a number.")
  };
  return account;
}

function withdraw(account, amount) {
  if (typeof amount === "number") {
    account.balance -= amount;
  } else{
    console.log("Your input must be a number.")
  };
  return account;
}

function createBalanceGetter() {
  return function(account) {
    console.log(account.balance);
  }
}

var brooks = createAccount({
  username: "Brooks",
  balance: 5000
})

var getBalance = createBalanceGetter();
deposit(brooks, 50);
deposit(brooks, "Thing");
withdraw(brooks, 10);
getBalance(brooks);
console.log(getAccount("Brooks"));