import axios from 'axios';

const ajax = axios.create({
  baseURL: import.meta.env.VITE_TOKEN_URL,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});

export default async function generateToken() {
  const token = localStorage.getItem('taiwan_bus_token');
  const expires = localStorage.getItem('taiwan_bus_expires') ?? 0;
  
  //if (token && Date.now() < expires) return;
  const { VITE_CLIENT_ID, VITE_CLIENT_SECRET } = import.meta.env;

  const postData = {
    grant_type: 'client_credentials',
    client_id: VITE_CLIENT_ID,
    client_secret: VITE_CLIENT_SECRET,
  };
  
  console.log(postData);
  const { data } = await ajax.post('/token', postData);
  localStorage.setItem('taiwan_bus_token', data.access_token);
  localStorage.setItem('taiwan_bus_expires', `${Date.now() + data.expires_in * 1000}`);

  try {
        const response = await fetch('https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=client_credentials&client_id=${VITE_CLIENT_ID}&client_secret=${VITE_CLIENT_SECRET}`
        });
        
        const data = await response.json();
        console.log('generateToken data 成功:');//
        localStorage.setItem('taiwan_bus_token', data.access_token);
        localStorage.setItem('taiwan_bus_expires', `${Date.now() + data.expires_in * 1000}`);
        return data.accessToken;
    } catch (error) {
        console.error('獲取 Token 失敗:', error);
        return null;
    }
}
// TDX API 配置
const TDX_CONFIG = {
    client_id: 'atbox-2029af23-fbae-427b',
    client_secret: 'fb3a733e-0112-4392-b388-42cec0a98256',
    base_url: 'https://tdx.transportdata.tw/api/basic'
};

// 全域變數
let accessToken = '';

// 獲取 TDX API Token
async function getAccessToken() {
    const { VITE_CLIENT_ID, VITE_CLIENT_SECRET } = import.meta.env;
    try {
        const response = await fetch('https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=client_credentials&client_id=${VITE_CLIENT_ID}&client_secret=${VITE_CLIENT_SECRET}`
          //body: `grant_type=client_credentials&client_id=${TDX_CONFIG.client_id}&client_secret=${TDX_CONFIG.client_secret}`
        });
        
        const data = await response.json();
        accessToken = data.access_token;
        console.log('getAccessToken 成功:', accessToken);//
        return accessToken;
    } catch (error) {
        console.error('獲取 Token 失敗:', error);
        return null;
    }
}

