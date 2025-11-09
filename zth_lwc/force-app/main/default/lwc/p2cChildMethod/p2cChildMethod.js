import { LightningElement, api } from 'lwc';

export default class P2cChildMethod extends LightningElement {
    val=20

    changeHandler(e){
        this.val=e.target.val
    }

    @api resetSlider(){
        this.val=50
    }
}