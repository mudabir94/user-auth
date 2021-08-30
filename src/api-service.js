export default class API{

    static registerUser(body){
        return fetch('http://127.0.0.1:5000/users',{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
    static loginUser(body){
        return fetch('http://127.0.0.1:5000/users/login',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
    

}