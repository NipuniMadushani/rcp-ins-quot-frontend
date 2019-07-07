export class Productdto{
  
constructor (private produciId?: string,
   private calculation?: string, 
   private code?: string,
   private max_age?:number,
   private min_age?:number,
   private name?:string,
   private s_name?:string,
   private validation?:string ) {}
  
    get productId() {
      return this.productId;
    }
    set productId(productId: string) {
      this.productId = productId;
    }
      
    get Calculation() {
        return this.calculation;
      }
      set Calculation(calculation: string) {
        this.calculation = calculation;
      }
    
    get Code() {
        return this.code;
      }
      set Code(code: string) {
        this.code = code;
      }

     set Max_age (max_age:number) {
        this.max_age = max_age;
      }

      get Max_age() {
        return this.max_age;
      }

      set Min_age (min_age:number) {
        this.min_age= min_age;
      }

      get Min_age() {
        return this.min_age;
      }
       set Name (name:string) {
        this.name= name;
      }

      get Name() {
        return this.name;
      }

      set S_Name (s_name:string) {
        this.s_name= s_name;
      }

      get S_Name() {
        return this.s_name;
      }
      
      set Validation (validation:string) {
        this.validation= validation;
      }

      get Validation() {
        return this.validation;
      }


}