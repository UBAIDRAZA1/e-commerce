import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // .env.local mein API key rakhi hai
const BASE_URL = 'https://api.shipengine.com/v1';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const createShipmentLabel = async (shipmentData) => {
  try {
    const response = await apiClient.post('/labels', shipmentData);
    return response.data;
  } catch (error) {
    console.error('Error creating shipment label:', error);
    throw error;
  }
};
