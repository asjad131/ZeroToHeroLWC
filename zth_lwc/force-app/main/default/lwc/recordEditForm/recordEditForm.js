import { LightningElement } from 'lwc';

import CONTACT from '@salesforce/schema/Contact';
import NAME from '@salesforce/schema/Contact.Name';
import PHONE from '@salesforce/schema/Contact.Phone';
import EMAIL from '@salesforce/schema/Contact.Email';
import ACCOUNT from '@salesforce/schema/Contact.AccountId';

export default class RecordEditForm extends LightningElement {

    objectName = CONTACT
    fields ={
        Name: NAME,
        Phone:PHONE,
        Email:EMAIL,
        AccountId:ACCOUNT
    }

}