import Redis from 'ioredis';
import { promisify } from 'util';

const redisClient = new Redis({
    host: "localhost",
    password: "Senac123"
});

const getRedis = (value: string) => {
    const syncRedisGet = promisify(redisClient.get).bind(redisClient);
    return syncRedisGet(value);
}

const setRedis = (key: string, value: string) => {
    const syncRedisSet = promisify(redisClient.set).bind(redisClient)
    return syncRedisSet(key, value);
}

export { redisClient, getRedis, setRedis };