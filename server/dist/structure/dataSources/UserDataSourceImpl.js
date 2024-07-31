"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataSourceImpl = void 0;
const User_1 = require("../../database/models/User");
const dataSources_1 = require("../../domain/dataSources");
const entities_1 = require("../../domain/entities");
class UserDataSourceImpl extends dataSources_1.UserDataSource {
    getAllUsers(getAllUserDto, query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const searchQuery = { _id: { $ne: getAllUserDto.id } };
                if (query) {
                    searchQuery.name = { $regex: query, $options: 'i' };
                }
                const data = yield User_1.User.find(searchQuery, { password: 0 });
                console.log(data);
                const users = data.map((user => entities_1.UserEntity.mapper(user)));
                return users;
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
}
exports.UserDataSourceImpl = UserDataSourceImpl;
