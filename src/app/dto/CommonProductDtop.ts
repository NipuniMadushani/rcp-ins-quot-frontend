import { CommonProductRiderDtop } from 'src/app/dto/CommonProductRiderDtop';
import { CommonStringNumDto } from './CommonStringNumDto';
import { CommonNumberDto } from './CommonNumberDto';

export class CommonProductdtop {

  productId: any;
    calculation?: string;
    code?: string;
    createBy?: string;
    createDate?: string;
    maxAge?: number;
    minAge?: number;
    name?: string;
    sName?: string;
    validation?: string;
    gridOrder?: number;
    printOrder?: number;
    commonProductRiderDTOs: Array<CommonProductRiderDtop> = [];
    cs: Array<CommonStringNumDto> = [];
    ns: Array<CommonNumberDto> = [];

  }
