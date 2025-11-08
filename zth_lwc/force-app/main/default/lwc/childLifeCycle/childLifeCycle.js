import { LightningElement } from 'lwc';

export default class ChildLifeCycle extends LightningElement {

       constructor(){
        super()
        console.log('Child constructor called.');
    }
    connectedCallback(){
        console.log('Child connectedCallback called.');

    }
    renderedCallback(){
        console.log('Child renderedCallback called.');
        throw new Error('Loading of Child component failed');
    }
    disconnectedCallback(){
        alert('Child Component disconnectedCallBack Called.')
    }
}