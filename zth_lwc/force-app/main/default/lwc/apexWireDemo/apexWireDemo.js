import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'

export default class ApexWireDemo extends LightningElement {
    accountList

    @wire(getAccounts) 
    accounts

    @wire(getAccounts)
    accountHandler({data,error}){

        if(data){
            this.accountList = data.map(item=> {
                let newType = item.Type === 'Customer - Channel' ? 'Channel':
                              item.Type === 'Customer - Direct' ? 'Direct': '----';
                return {...item, newType}

            })
        }
        if(error){
            console.log(error);
        }

    }
}