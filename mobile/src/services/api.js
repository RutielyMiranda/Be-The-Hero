import axios from 'axios';

const api = axios.create({
    baseURL: 'htpp://192.168.2.104:3333' //não esqueça de baixar o emulador no pc, é melhor que o expo no celular.
});

export default api;