import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'
import getAccountsByName from '@salesforce/apex/AccountController.getAccountsByName'
export default class ApexWireImperativeDemo extends LightningElement {

accounts
callApex(){
    getAccounts()
    .then(result =>{
        this.accounts = result
    })
    .catch(error =>{
        console.log(error)
    })
}

//with param
resAccounts
handleSearch(event) {
        const searchValue = event.target.value;

        getAccountsByName({ searchKey: searchValue })
            .then(result => {
                this.resAccounts = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.resAccounts = undefined;
            });
    }
}