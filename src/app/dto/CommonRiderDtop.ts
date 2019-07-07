import { CommonProductRiderDtop } from 'src/app/dto/CommonProductRiderDtop';
export class CommonRiderdtop {
  id?: String;
  combination?: string;
  code?: string;

  name?: string;
  sName?: string;

  createBy?: string;
  createDate?: string;
validation?: string;
  type?: string;
  gridOrder?: number;
  printOrder?: number;
  commonproductRiderDto: Array<CommonProductRiderDtop> = [];


}
