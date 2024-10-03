let balance = parseFloat(localStorage.getItem('balance')) || 0;

function updateBalanceDisplay() {
    document.getElementById('balance').value = balance;
}

function checkBalance() {
    document.getElementById('message').innerHTML = `Your balance is $${balance.toFixed(2)}`;
}

function deposit() {
    const depositAmount = prompt("Enter deposit amount: ");
    if (depositAmount && !isNaN(depositAmount) && parseFloat(depositAmount) > 0) {
        balance += parseFloat(depositAmount);
        localStorage.setItem('balance', balance);
        updateBalanceDisplay();
        document.getElementById('message').innerText = "Deposit Successful.";
    } else {
        document.getElementById('message').innerText = "Invalid deposit amount.";
    }
}

function withdraw() {
    const withdrawAmount = prompt("Enter amount to withdraw: ");
    if (withdrawAmount && !isNaN(withdrawAmount) && parseFloat(withdrawAmount) > 0) {
        if (balance >= withdrawAmount) {
            balance -= parseFloat(withdrawAmount);
            localStorage.setItem('balance', balance);
            updateBalanceDisplay();
            document.getElementById('message').innerText = "Withdrawal Successful.";
        } else {
            document.getElementById('message').innerText = "Insufficient balance.";
        }
    } else {
        document.getElementById('message').innerText = "Invalid withdrawal amount.";
    }
}

function exitATM() {
    document.getElementById('message').innerText = "Thank you for using ATM Simulation.";
    // document.getElementById('balance').value = 0;
}

updateBalanceDisplay();
