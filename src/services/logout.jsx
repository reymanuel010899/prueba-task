import axios from 'axios'

 async function logout() {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    // const body = {
    //     'token_id': localStorage.getItem('Token')
    // };
    const body = JSON.stringify({
        'token_id': localStorage.getItem('Token')
    })
    console.log(body)
    try {
        const res = await axios.post(`http://127.0.0.1:8000/users/logout/`, body, config);
        console.log(res)

        if (res.status === 200) {
            console.log(res.status)
            localStorage.removeItem('Token')
            localStorage.removeItem('activated')
            localStorage.removeItem('user')
        } else {
            console.error(res.status)
        }
    }
    catch(err){
        console.error(err)
    }
 }

 export default logout