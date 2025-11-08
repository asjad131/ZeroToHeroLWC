import { LightningElement } from 'lwc';

export default class ParentLifeCycle extends LightningElement {

    constructor(){
        super();
        console.log('Parent constructor called');
    }
    connectedCallback(){
        console.log('Parent connectedCallback called');

    }
}