import app from './app';
import { config } from 'dotenv';

config();

app.listen(3333, () => {
    console.log("Servidor rodando ...");
});
