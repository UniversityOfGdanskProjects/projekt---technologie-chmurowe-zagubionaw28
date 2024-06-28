import axios from 'axios';

async function communicateWithDatabase() {
    const backendUrl = `http://localhost:3050`;
    const response = await axios.get(backendUrl);
    return response.data;
}

export default communicateWithDatabase;
