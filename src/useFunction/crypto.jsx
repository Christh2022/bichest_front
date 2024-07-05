const API_URL = "https://127.0.0.1:8000"
import axios from "axios";
async function fetchData() {
    try {
        const response = await fetch('http://localhost:3001/api/data');
        if (!response.ok) {
            throw new Error('Erreur réseau');
        }
        const jsonData = await response.json();
        return (jsonData.data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

async function getCryptoService() {

    var options = {
    method: 'GET',
    url: API_URL+'/api/crypto/list',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    data: {symbol: 'BTC', name: 'bitcoins', date: '2024-05-10', price: 70000.05}
    };

    return axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}

const buyCrypto = (quantity, price, id, name) => {
    var options = {
    method: 'POST',
    url: API_URL+'/api/buycrypto',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    data: {quantity: quantity, price: price, id: id, name: name.toUpperCase()}
    };

    return axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data;
    }).catch(function (error) {
    return (error.json());
    });
}





export default {
    fetchData,
    getCryptoService,
    buyCrypto
}