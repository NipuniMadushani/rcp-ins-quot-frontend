export class NumberParamsDto{
    
 constructor(
    private  numberParamId?: string,
    private  createBy?: string,
    private  createDate?: string,
	private  isEnable?: number,
	private  modifyBy?: string,
	private  modifyDate?: string,
	private  name?: string,
	private sName?: string,
    ){}

    get NumberParamId(){
        return this.numberParamId;
    }

    set NumberParamId(numberParamId: string){
        this.numberParamId=numberParamId;
    }

   get CreateBy(){
       return this.createBy;
   }
   set CreateBy(createBy: string){
       this.createBy=createBy;
   }
   get CreateDate(){
       return this.createDate;
   }
   set CreateDate(createDate: string){
       this.createDate= createDate;
   }

   get IsEnabled(){
       return this.isEnable;
   }

   set IsEnabled(isEnable: number){
       this.isEnable=isEnable;
   }

   get ModifyBy(){
       return this.modifyBy;
   }
   set Modifyby(modifyBy: string){
       this.modifyBy=modifyBy;
   }
   get ModifyDate(){
       return this.modifyDate;
   }

   set ModifyDate(modifyDate: string){
       this.modifyDate=modifyDate;
   }

   get Name(){
       return this.name;
   }

   set Name(name: string){
       this.name=name;
   }

   get SName(){
       return this.SName;
   }
   set SName(sName: string){
       this.sName=sName;
   }


    
}