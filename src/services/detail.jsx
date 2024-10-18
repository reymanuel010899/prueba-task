import axios from 'axios'

 async function get_task_detail(pk) {
    try {
        const res = await axios.get(`http://127.0.0.1:8000/api/task/detail/${pk}/`);

        if (res.status === 200) {
            return res.data

        } else {
            console.error(res.status)
        }
    }
    catch(err){
        console.error(err)
    }
 }

 export default get_task_detail