import axios from 'axios';
import config from './frontend-config';

async function communicateWithDatabase() {
    console.error(config["api_url"]);
    const response = await axios.get(config["api_url"]);
    return response.data;
}

export default communicateWithDatabase;
