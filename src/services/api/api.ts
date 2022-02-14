import axios from 'axios';

import config from 'src/config';

const api = axios.create({
  ...config.api,
});

export default api;
