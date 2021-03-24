const API_DEV_URL="http://localhost:4000/api"

const API_PROD_URL="";

const PRODUCTION = false;

const API_URL = PRODUCTION ? API_PROD_URL : API_DEV_URL;

export default API_URL;