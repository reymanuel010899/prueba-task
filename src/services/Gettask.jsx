import axios from 'axios'

 async function get_task() {
    try {
        const res = await axios.get('http://127.0.0.1:8000/api/task/list');

        if (res.status === 200) {
            return res.data
        }  else {
            console.error(res.status)
        }
    }
    catch(err){
        console.error(err)
    }
 }

 export default get_task