import { LightningElement, wire } from 'lwc';
import {getListUi} from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class GetListViewDemo extends LightningElement {
contacts = [];
pageToken = null;
nextPageToken = null;
previousPageToken = null;

@wire(getListUi,{
    objectApiName:CONTACT_OBJECT,
    listViewApiName:'AllContacts',
    pageSize:10,
    pageToken:'$pageToken'
})
handleListView({data,error}){
    if(data){

        console.log(data);
        this.contacts=data.records.records;
        this.nextPageToken=data.records.nextPageToken;
        this.previousPageToken=data.records.previousPageToken;
    }
    if(error){
        console.log(error)
    }
}
handleNextPageToken(){
  this.pageToken=this.nextPageToken;
}
handlePreviousPageToken(){
   this.pageToken=this.previousPageToken;
}
}