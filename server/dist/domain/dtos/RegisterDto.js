"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDto = void 0;
class RegisterDto {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static createDto(object = {}) {
        const { email, name, password } = object;
        console.log(email);
        if (!email)
            return ["debes tener un correo valido"];
        if (!name)
            return ["debes introducir un nombre"];
        if (!password)
            return ["debes introducir un password valido"];
        return [undefined, new RegisterDto(name, email, password)];
    }
}
exports.RegisterDto = RegisterDto;
