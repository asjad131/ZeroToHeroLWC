import { LightningElement, wire } from 'lwc';
import getAccountsByType from '@salesforce/apex/AccountController.getAccountsByType'
export default class ApexWireWithParamsDemo extends LightningElement {

    selectedType=''

    @wire(getAccountsByType,{type:'$selectedType'})
    accountsByType

    get typeOptions(){
        return[
            {label:"Customer - Channel",value:"Customer - Channel"},
            {label:"Customer - Direct",value:"Customer - Direct"}
        ]
    }

    typeHandler(event){
        this.selectedType = event.target.value;
    }

}