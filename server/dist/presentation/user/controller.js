"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const Users_1 = require("../../domain/useCases/Users");
const dtos_1 = require("../../domain/dtos");
class UserController {
    constructor(repository) {
        this.repository = repository;
    }
    getAllUser(req, res) {
        console.log(req.params, "auit");
        const [err, dto] = dtos_1.GetAllUsersDto.create((req.params));
        if (err)
            return res.status(400).json({ err });
        new Users_1.getAllUsers(this.repository)
            .execute(dto, req.params.query)
            .then(response => res.json(response))
            .catch(err => res.status(400).json(err));
    }
}
exports.UserController = UserController;
