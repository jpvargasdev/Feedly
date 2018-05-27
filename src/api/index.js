/**
 * 
 */
import { URL_SERVER } from '../config/urls';

class Api{

    auth = null;

    static headers(){
        return{
            'Authorization': this.auth,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    static setAuth(auth){
        this.auth = auth;
    }

    static get(route, query_params){

        if ( query_params.length ){
            let params = "";
            for (let i in query_params){
                params += query_params[i].key + "=" + query_params[i].value +'&';
            }
            route += "?" + params;
            route = route.substring(0, route.length - 1);

        }

        return this.xhr(route,null, 'GET');
    }

    static xhr(route, params, verb){
    
        const host = URL_SERVER;
        const url = `${host}${route}`;
        let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);
        options.headers = Api.headers();
        console.log(url);
        return fetch(url, options).then(resp => {
            console.log(resp); 
            let json = resp.json();
            if(resp.ok){
                return json;
            }
            return json.then(err => {
                console.log(err);
                throw err
            });
        });
    }
}

export default Api;