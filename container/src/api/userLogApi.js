import axios from 'axios';

const getUserLogs = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/log');
        return response.data;
    } catch (error) {
        console.error('Error fetching user logs:', error);
        throw error;
    }
};

export default getUserLogs;