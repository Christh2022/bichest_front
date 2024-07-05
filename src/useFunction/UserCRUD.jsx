import axios from 'axios';
const API_URL = 'https://127.0.0.1:8000';

const userDetail = async (userId) => {
    const url = `${API_URL}/api/user/${userId}/show`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        console.log("Response data:", response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error("Error response:", error.response.data);
            console.error("Status code:", error.response.status);
            console.error("Headers:", error.response.headers);
        } else if (error.request) {
            console.error("Error request:", error.request);
        } else {
            console.error("Error message:", error.message);
        }
        console.error("Error config:", error.config);
        throw error;
    }
};


const userEdit = async (obj) => {
    let lastname = obj.lastName || '';
    let firstname = obj.firstName || '';
    let address = obj.address || '';
    let password = obj.password || '';
    let balance = obj.balance || '';
    const userId = obj.id;

    const editUrl = `${API_URL}/api/user/${userId}/edit`;
    console.log(`Making a request to: ${editUrl}`);

    const options = {
        method: 'POST',
        url: editUrl,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: {
            last_name: lastname,
            first_name: firstname,
            address: address,
            password: password,
            balance: balance
        }
    };

    try {
        const response = await axios.request(options);
        console.log("Response data:", response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error("Error response:", error.response.data);
            console.error("Status code:", error.response.status);
            console.error("Headers:", error.response.headers);
        } else if (error.request) {
            console.error("Error request:", error.request);
        } else {
            console.error("Error message:", error.message);
        }
        console.error("Error config:", error.config);
        throw error;
    }
};


    
    
    


export default {
    userDetail,
    userEdit,
    // add more functions here...
};