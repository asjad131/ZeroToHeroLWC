import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    course = 'Zero to hero';
    title = 'aura';

    changeHandler(event){
        this.title = event.target.value;

    }
}