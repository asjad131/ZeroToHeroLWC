import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import Rating_FIELD from '@salesforce/schema/Account.Rating';

export default class GetRecordDemo extends LightningElement {
    
    AccountName
    AnnualRevenue
    Rating
    @api recordId
    @wire(getRecord, {recordId:'$recordId', fields:[NAME_FIELD, ANNUALREVENUE_FIELD, Rating_FIELD]})
    accounthandler({data}){

        if(data){
            console.log(data)
            this.AccountName= data.fields.Name.value
            this.AnnualRevenue= data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue:data.fields.AnnualRevenue.value
            this.Rating= data.fields.Rating.value
        }

    }

}