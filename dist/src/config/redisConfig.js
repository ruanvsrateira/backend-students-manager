"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRedis = exports.getRedis = exports.redisClient = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const util_1 = require("util");
const redisClient = new ioredis_1.default({
    host: "localhost",
    password: "Senac123"
});
exports.redisClient = redisClient;
const getRedis = (value) => {
    const syncRedisGet = (0, util_1.promisify)(redisClient.get).bind(redisClient);
    return syncRedisGet(value);
};
exports.getRedis = getRedis;
const setRedis = (key, value) => {
    const syncRedisSet = (0, util_1.promisify)(redisClient.set).bind(redisClient);
    return syncRedisSet(key, value);
};
exports.setRedis = setRedis;
