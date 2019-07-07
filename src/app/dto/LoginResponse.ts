export class LoginResponse {
    // [x: string]: any;
    UserName: string;
    Password: string;
    IsNeedChange: boolean;
    IsExpired: boolean;
    IsFail: boolean;
    IsInactive: boolean;
    IsLock: boolean;
    IsLogin: boolean;
    JwtToken: string;
    MenuDtos: string;
}
