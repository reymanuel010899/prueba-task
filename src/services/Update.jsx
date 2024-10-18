import axios from 'axios'

 async function update_task(pk, formData) {
    try {
        const res = await axios.put(`http://127.0.0.1:8000/api/task/update/${pk}/`,  formData, {
            headers: {
              'Authorization': `Token ${localStorage.getItem('token')}`
            }
          });
    
        if (res.status === 200) {
            console.log(res.status)
        }  else {
            console.error(res.status)
        }
    }
    catch(err){
       console.error(err)
    }
 }

 export default update_task