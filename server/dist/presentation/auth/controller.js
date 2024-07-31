"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const Register_user_user_case_1 = require("../../domain/useCases/auth/Register-user.user-case");
const dtos_1 = require("../../domain/dtos");
const Login_user_user_case_1 = require("../../domain/useCases/auth/Login-user.user-case");
class AuthController {
    constructor(repository) {
        this.repository = repository;
    }
    register(req, res) {
        const body = req.body;
        const [error, dto] = dtos_1.RegisterDto.createDto(body);
        if (error)
            return res.status(400).json({ error });
        new Register_user_user_case_1.RegisterUser(this.repository)
            .execute(dto)
            .then(result => res.status(201).json(result))
            .catch(error => {
            res.status(400).json(error.message);
        });
    }
    login(req, res) {
        const [error, dto] = dtos_1.LoginDto.createDto(req.body);
        if (error)
            return res.status(400).json(error);
        new Login_user_user_case_1.LoginUser(this.repository)
            .execute(dto)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err.message));
    }
}
exports.AuthController = AuthController;
