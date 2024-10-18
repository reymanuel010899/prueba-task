import axios from 'axios'

 async function delete_task(pk) {
    try {
        const res = await axios.delete(`http://127.0.0.1:8000/api/task/delete/${pk}/`);

        if (res.status === 200) {
            console.log(res.status)
        } else {
            console.error(res.status)
        }
    }
    catch(err){
        console.error(err)
    }
 }

 export default delete_task