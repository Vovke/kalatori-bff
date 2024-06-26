const axios = require('axios');
const config = require('../config/config');

const kalatoriInstance = axios.create({
  baseURL: config.kalatoriHost,
});

const getHealth = async () => {
  try {
    const response = await kalatoriInstance.get('/v2/health');
    return response.data;
  } catch (error) {
    console.error('Error in getHealth:', error.message);
    throw error;
  }
};

const getStatus = async () => {
  try {
    const response = await kalatoriInstance.get('/v2/status');
    return response.data;
  } catch (error) {
    console.error('Error in getStatus:', error.message);
    throw error;
  }
};

const createOrder = async (orderId, amount, currency, callback) => {
  try {
    const response = await kalatoriInstance.post(`/v2/order/${orderId}`, {
      amount,
      currency,
      callback,
    });
    return response.data;
  } catch (error) {
    console.error('Error in createOrder:', error.message);
    throw error;
  }
};

const forceWithdrawal = async (orderId) => {
  try {
    const response = await kalatoriInstance.post(`/v2/order/${orderId}/forceWithdrawal`);
    return response.data;
  } catch (error) {
    console.error('Error in forceWithdrawal:', error.message);
    throw error;
  }
};

const getPaymentStatus = async (paymentAccount) => {
  try {
    const response = await kalatoriInstance.post(`/public/v2/payment/${paymentAccount}`);
    return response.data;
  } catch (error) {
    console.error('Error in getPaymentStatus:', error.message);
    throw error;
  }
};

const investigateOrder = async (orderId) => {
  try {
    const response = await kalatoriInstance.post(`/v2/order/${orderId}/investigate`);
    return response.data;
  } catch (error) {
    console.error('Error in investigateOrder:', error.message);
    throw error;
  }
};

module.exports = {
  getHealth,
  getStatus,
  createOrder,
  forceWithdrawal,
  getPaymentStatus,
  investigateOrder,
};
