import { Navigate } from 'react-router'
import axios from 'axios'

 async function create_task(formData) {
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/task/create/`,  formData, {
            headers: {
              'Authorization': `Token ${localStorage.getItem('token')}`
            }
          });
    
        if (res.status === 201) {
            localStorage.setItem('data', JSON.stringify(res.data))

        } else {
            console.error(res.status)
        }
    }
    catch(err){
        console.error(err)
    }
 }

 export default create_task