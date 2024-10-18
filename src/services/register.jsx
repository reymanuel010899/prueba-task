import axios from 'axios'

 async function register(formData) {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post('http://127.0.0.1:8000/users/create-user/', formData, config);
        
        if (res.status === 200) {
            // localStorage.setItem('Token', res.data.user.token)
            console.log(res.status)
        }  else {
            console.error(res.status)
        }
    }
    catch(err){
        console.error(err)
    }
 }

 export default register