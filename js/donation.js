document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();

    const addmoney = document.getElementById('input-add-money').value;
    const addmoneynumber = parseFloat(addmoney);

    if (!isNaN(addmoneynumber) && addmoneynumber > 0) {
        const donated = document.getElementById('donated-money').innerText;
        const donatedmoney = parseFloat(donated);

        const AllMoney = document.getElementById('main-balance').innerText;
        const mainmoney = parseFloat(AllMoney);

        if (addmoneynumber > mainmoney) {
            alert('you do not have enough balance!');
            return;
        }

        const totalDonation = donatedmoney + addmoneynumber;
        const newmoney = mainmoney - addmoneynumber;

        document.getElementById('donated-money').innerText = totalDonation;
        document.getElementById('main-balance').innerText = newmoney;

        // history
        const transaction = {
            amount: addmoneynumber,
            newBalance: newmoney,
            date: new Date().toLocaleString() 
        };

        let history = JSON.parse(localStorage.getItem('transactionHistory')) || [];
        history.push(transaction);  
        localStorage.setItem('transactionHistory', JSON.stringify(history)); 

        // alert('Donation successful!');
        const modal = document.getElementById('donation-success-modal');
        modal.showModal();  

    } else {
        alert('Failed to add money, please try again later')
    }
})
// feni

document.getElementById('feni-btn')
.addEventListener('click',function(event){
    event.preventDefault();

    const addmoney = document.getElementById('feni-addmoney').value;
    const addmoneyfeni = parseFloat(addmoney);

    if (!isNaN(addmoneyfeni) && addmoneyfeni > 0)  {
        const fenidonated = document.getElementById('feni-money').innerText;
        const donatedfeni = parseFloat(fenidonated);

        const AllMoney = document.getElementById('main-balance').innerText;
        const mainmoney = parseFloat(AllMoney);

        if (addmoneyfeni > mainmoney) {
            alert('you do not have enough balance!');
            return;
        }

        const feniDonation = donatedfeni + addmoneyfeni;
        const newmoney = mainmoney - addmoneyfeni;

        document.getElementById('feni-money').innerText = feniDonation;
        document.getElementById('main-balance').innerText = newmoney;

        const transaction = {
            amount: feniDonation,
            newBalance: newmoney,
            date: new Date().toLocaleString() 
        };

        let history = JSON.parse(localStorage.getItem('transactionHistory')) || [];
        history.push(transaction);  
        localStorage.setItem('transactionHistory', JSON.stringify(history)); 

        // alert('Donation successful!');
        const modal = document.getElementById('donation-success-modal');
        modal.showModal();  



    } else {
        alert('Failed to add money, please try again later')
    }
})

// quota

document.getElementById('quota-btn')
.addEventListener('click',function(event){
    event.preventDefault();

    const quotaddmoney = document.getElementById('quota-input').value;
    const addmoneyquota = parseFloat(quotaddmoney);

    if (!isNaN(addmoneyquota) && addmoneyquota > 0) {
        const quotadonated = document.getElementById('quotahelp').innerText;
        const quotamoney = parseFloat(quotadonated);

        const AllMoney = document.getElementById('main-balance').innerText;
        const mainmoney = parseFloat(AllMoney);

        if (addmoneyquota > mainmoney) {
            alert('you do not have enough balance!');
            return;
        }

        const quotaDonation = quotamoney + addmoneyquota;
        const newmoney = mainmoney - addmoneyquota;

        document.getElementById('quotahelp').innerText = quotaDonation;
        document.getElementById('main-balance').innerText = newmoney;

        const transaction = {
            amount: addmoneyquota,
            newBalance: newmoney,
            date: new Date().toLocaleString() 
        };

        let history = JSON.parse(localStorage.getItem('transactionHistory')) || [];
        history.push(transaction);  
        localStorage.setItem('transactionHistory', JSON.stringify(history)); 

        // alert('Donation successful!');
        const modal = document.getElementById('donation-success-modal');
        modal.showModal();  



    } else {
        alert('Failed to add money, please try again later')
    }
})





// Event listener to close the modal
document.getElementById('close-modal-btn').addEventListener('click', function() {
    const modal = document.getElementById('donation-success-modal');
    modal.close();  
});