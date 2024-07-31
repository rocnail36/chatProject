"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
class LoginDto {
    constructor(password, email) {
        this.password = password;
        this.email = email;
    }
    static createDto(object) {
        const { email, password } = object;
        console.log(object, "jeeeeeeee");
        if (!email)
            return ["debes tener un correo valido"];
        if (!password)
            return ["debes introducir un password valido"];
        return [undefined, new LoginDto(password, email)];
    }
}
exports.LoginDto = LoginDto;
