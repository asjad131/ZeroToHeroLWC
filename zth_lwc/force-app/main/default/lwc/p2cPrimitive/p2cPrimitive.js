import { LightningElement ,api} from 'lwc';

export default class P2cPrimitive extends LightningElement {
    @api message;
    @api title;
    @api number;
    @api isValid;

}