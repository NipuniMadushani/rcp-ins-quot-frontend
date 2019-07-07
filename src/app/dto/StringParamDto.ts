export class StringParamDto{
    constructor(
        private stringParamsId?: string,
        private createBy?: string,
        private createDate?: string,
        private isEnable?: number,
        private modifyBy?: string,
        private modifyDate?: string,
        private name?: string,
        private sName?: string
    ){}

    get StringParamId(){
        return this.stringParamsId;
    }

    set StringParamId(stringParamsId: string){
        this.stringParamsId=stringParamsId;
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