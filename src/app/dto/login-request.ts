export class LoginRequest {
    constructor(
        private username?: string,
        private userpassword?: string
    ) { }

    get UserName() {
        return this.username;
    }

    set UserName(username: string) {
        this.username = username;
    }

    get UserPassword() {
        return this.userpassword;
    }

    set UserPassword(userpassword: string) {
        this.userpassword = userpassword;
    }
}
