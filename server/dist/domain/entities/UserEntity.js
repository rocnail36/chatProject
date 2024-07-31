"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(id, name, email, status, userFriends) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.status = status;
        this.userFriends = userFriends;
    }
    static mapper(user) {
        const { _id, id, name, email, userFriends, status } = user;
        if (!_id || !id)
            throw new Error("debe tener un id");
        if (!name)
            throw new Error("debe tene un nombre");
        if (!email)
            throw new Error("debe tener un correo");
        if (!status)
            throw new Error("debe tener un contraseña");
        return new UserEntity(_id || id, name, email, status, userFriends || []);
    }
}
exports.UserEntity = UserEntity;
