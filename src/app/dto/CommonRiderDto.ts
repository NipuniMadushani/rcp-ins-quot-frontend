import { CommonProductRiderDto } from './CommonProductRiderDto';

export class CommonRiderdto {
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
  commonproductRiderDto: Array<CommonProductRiderDto> = [];


}


