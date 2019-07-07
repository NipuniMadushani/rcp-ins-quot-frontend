import { ProductNumParamsDto } from './ProductNumParamsDto';
import { RiderProductDto } from './RiderProductDto';
import { CommonProductdtop } from './CommonProductDtop';
import { ProductStringParamDto } from './ProdStringParamsDto';
export class UpdateParams {
    constructor(
        private pro?: CommonProductdtop,
        private rpd?: RiderProductDto[],
        private pnp?: ProductNumParamsDto[],
        private psp?: ProductStringParamDto[]

    ) { }

    get Pro() {
        return this.pro;
    }

    set Pro(pro: CommonProductdtop) {
        this.pro = pro;
    }

    get Rpd() {
        return this.rpd;
    }

    set Rpd(rpd: RiderProductDto[]) {
        this.rpd = rpd;
    }

    get Pnp() {
        return this.pnp;
    }

    set Pnp(pnp: ProductNumParamsDto[]) {
        this.pnp = pnp;
    }

    get Psp() {
        return this.psp;
    }

    set Psp(psp: ProductStringParamDto[]) {
        this.psp = psp;
    }
}
