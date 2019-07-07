export class LoginResponse {

   constructor(private isNeedChange?: boolean, private isExpired?: boolean, private isFail?: boolean,
      private isInactive?: boolean, private isLock?: boolean, private isLogin?: boolean, private jwtToken?: string) { }

   get IsNeedChange() {
      return this.isNeedChange;
   }

   set IsNeedChange(isNeedChange: boolean) {
      this.isNeedChange = isNeedChange;
   }

   get IsExpired() {
      return this.isExpired;
   }

   set IsExpired(isExpired: boolean) {
      this.isExpired = isExpired;
   }


   get IsFail() {
      return this.isFail;
   }

   set IsFail(isFail: boolean) {
      this.isFail = isFail;
   }

   get IsInactive() {
      return this.isInactive;
   }

   set IsInactive(isInactive: boolean) {
      this.isInactive = isInactive;
   }
   get IsLock() {
      return this.isLock;
   }

   set IsLock(isLock: boolean) {
      this.isLock = isLock;
   }
   get IsLogin() {
      return this.isLogin;
   }

   set IsLogin(isLogin: boolean) {
      this.isLogin = isLogin;
   }

   get JwtToken() {
      return this.jwtToken;
   }

   set JwtToken(jwtToken: string) {
      this.jwtToken = jwtToken;
   }

}
