import MaskFactory from 'angular-input-masks/src/node_modules/mask-factory';
import BrV from 'br-validations';
import StringMask from 'string-mask';

class CpfMaskDirective {

    constructor(){
        this.cpfPattern = new StringMask('000.000.000-00');

        this.validations = {
            cpf: this.cpfValidation
        }
    }

    clearValue(rawValue) {
        return rawValue.replace(/[^\d]/g, '').slice(0, 11);
    }

    format(cleanValue) {
        return (this.cpfPattern.apply(cleanValue) || '').trim().replace(/[^0-9]$/, '');
    }

    cpfValidation(value){
        return BrV.cpf.validate(value);
    }
}

CpfMaskDirective.$inject = [];

export default MaskFactory(new CpfMaskDirective());