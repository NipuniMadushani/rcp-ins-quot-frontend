export class SaveTheme {
    constructor(
        private token?: string,
        private colorthemename?: string,
        private colorfsizename?: string,
        private colorffamilyname?: string,
    ) { }


    get Tokenn() { return this.token; }
    get Colorthemename() { return this.colorthemename; }
    get Colorfsizename() { return this.colorfsizename; }
    get Colorffamilyname() { return this.colorffamilyname; }

    set Tokenn(token: string) { this.token = token; }
    set Colorthemename(colorthemename: string) { this.colorthemename = colorthemename; }
    set Colorfsizename(colorfsizename: string) { this.colorfsizename = colorfsizename; }
    set Colorffamilyname(colorffamilyname: string) { this.colorffamilyname = colorffamilyname; }
}
