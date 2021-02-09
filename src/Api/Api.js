
import axiosInstance from '../axios/axiosInstance';

export   const getMakemodel = () =>
axiosInstance.get(`api/CustomerCarSellApi/GetMakeModels`);