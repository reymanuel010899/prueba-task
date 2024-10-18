import axios from 'axios'

 async function login(username, password) {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const body = JSON.stringify({
        username,
        password
    });

    try {
        const res = await axios.post('http://127.0.0.1:8000/users/login/', body, config);
        if (res.status === 200) {
            localStorage.setItem('activated', true)
            localStorage.setItem('Token', res.data.user.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
        } else {
            console.error(res.status)
        }
    }
    catch(err){
        console.error(err)
        
    }
 }


 export default login