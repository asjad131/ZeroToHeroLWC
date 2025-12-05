import { LightningElement, wire, api } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class GetRecordUIdemo extends LightningElement {
    formFields=[
    {"fieldName":"Name", "label":"Account Name"},
    {"fieldName":"AnnualRevenue", "label":"Annual Revenue"},
    {"fieldName":"Rating", "label":"Rating"},
    {"fieldName":"Phone", "label":"Phone"}
]
    @api recordId
    @wire(getRecordUi, {recordIds:'$recordId', layoutTypes:'Full', modes:'Edit'})
    accountRecordHandler({data,error}){
        if(data){
            console.log(data)
            this.formFields=this.formFields.map(item=>{
                return {...item, value:data.records[this.recordId].fields[item.fieldName].value}
            })
        }
        if(error){
            console.log(error)
        }
    }
}