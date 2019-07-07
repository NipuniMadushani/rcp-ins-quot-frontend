export class Occupationdto{

    // tslint:disable-next-line:max-line-length
    constructor (private id?: number, private code?: string, private create_by?: string,private create_date?: string,private is_enabled?:number, private modify_by?:string,private modify_date?:string,private name?:string,private s_name?:string ) {}
  
    get Id() {
      return this.id;
    }
    set Id(id: number) {
      this.id = id;
    }

    get Code() {
        return this.code;
      }
      set Code(code: string) {
        this.code = code;
      }

      get Create_By() {
        return this.create_by;
      }
      set Create_By(create_by: string) {
        this.create_by = create_by;
      }
      get Create_Date() {
        return this.create_date;
      }

      set Create_Date (create_date: string) {
        this.create_date = create_date;
      }

      set IS_Enabled (is_enabled:number) {
        this.is_enabled = is_enabled;
      }

      get Is_Enabled() {
        return this.is_enabled;
      }

      set Modify_By (modify_by:string) {
        this.modify_by= modify_by;
      }

      get Modify_By() {
        return this.modify_by;
      }

      set Modify_Date (modify_date:string) {
        this.modify_date= modify_date;
      }

      get Modify_Date() {
        return this.modify_date;
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
}