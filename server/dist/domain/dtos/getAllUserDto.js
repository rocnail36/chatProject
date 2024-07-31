"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersDto = void 0;
class GetAllUsersDto {
    constructor(id) {
        this.id = id;
    }
    static create(object) {
        const { id } = object;
        if (!id)
            return ["falta el id"];
        return [undefined, new GetAllUsersDto(id)];
    }
}
exports.GetAllUsersDto = GetAllUsersDto;
