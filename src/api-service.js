export default class API{

    static allUsers(){
        return fetch('http://127.0.0.1:3000/users',{
            method:"GET",
            headers:{
                'Content-Type':"text/html; charset=utf-8",
            },
        }).then(resp => resp)
    }

    static registerUser(body){
        return fetch('http://127.0.0.1:3000/register-user',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then(resp => console.log(resp.json()))
    }
    static loginUser(body){
        return fetch('http://127.0.0.1:3000/user/login',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
    

}