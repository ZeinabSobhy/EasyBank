import axios from 'axios';

const baseURL ='https://support.eas.ae/'
export default axios.create({
	baseURL,
	headers: { 'Content-Type': 'application/json;charset=UTF-8 '}
});
