/**
 * Api implementation
 */
import Api from './index';
import { API_KEY } from '../config/constants';

/* ============================================== */

export const getFeedData = (filter) => {
   Api.setAuth('Bearer ' + API_KEY);
   return Api.get('top-headlines', filter).then(response => Promise.all([response]));;
}