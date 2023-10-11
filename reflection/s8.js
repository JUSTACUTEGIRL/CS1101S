function make_withdraw(balance, password) {
    let count = 0;
    function withdraw(amount, pass) {
        if (pass !== password) {
            count = count + 1;
            return "Wrong password; no withdraw";
        } else if (count >= 3) {
            return "Account disabled";
        } else if (balance >= amount) {
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds";
        }
    }
    return withdraw;
}

