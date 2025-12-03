import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';


export default class WireUserDemo extends LightningElement {

    userId=Id
    userDetail
    //@wire(getRecord, {recordId:'005g5000000qpuTAAQ',fields:['User.Name', 'User.Email']})
    @wire(getRecord, {recordId:'$userId',fields:['User.Name', 'User.Email']})
    userDetailhandler({data,error}){
        if(data){
            this.userDetail=data.fields
        }
        if(error){
            console.error(error)
        }

    }
}