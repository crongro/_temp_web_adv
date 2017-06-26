import './css/index.css';
import Controller from './controller';

// GO Service !!
const initData = {
  url : "https://tlhm20eugk.execute-api.ap-northeast-2.amazonaws.com/prod/lambda_get_blog_info"
}

Controller(initData);
