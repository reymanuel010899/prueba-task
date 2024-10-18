import React, { useEffect, useState } from 'react'
import get_task from '../services/Gettask'
import Button from '../component/Button'
import Create from '../component/Create'
import { useNavigate } from 'react-router-dom';
import Delete from '../component/Eliminar';
import CerrerSeccion from '../component/cerrarsesion';

function Home() {
    const user =  JSON.parse(localStorage.getItem('user'))
    const [tasks, setTAsk] = useState()
    const navigate = useNavigate();

    const get_data = async () => {
        const data  = await get_task()
        if (data) {
            setTAsk(data)
        } else {
            // const data = JSON.parse(localStorage.getItem('data'))
            // setTAsk(data)
        }

    }
    useEffect(() => {
        window.scrollTo(0,0)
        get_data()
   
      }, [])
      const handerClick = (e) => {
        e.preventDefault();
        console.log("clkk")
        navigate('/');

      }

      if (!localStorage.getItem('activated')) {
        localStorage.removeItem('token')
        navigate('/'); 

      }
        //
       
  return (
    <>
    <h3 className='titulo'>{user.nombre.toUpperCase()}</h3>
    <h3 className='titulo'>APP TASK LIST</h3>
    <Create/>
    
    <CerrerSeccion handerClick={handerClick}/>
    <table className='table' >
      <thead>
        <tr>
          <th>title</th>
          <th>gmail</th>
          <th>descripcion</th>
          <th>
            actions
          </th>
        </tr>
      </thead>
      <tbody>
        {
            tasks && tasks.map((task) => {
              return (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.gmail}</td>
                  <td>{task.description}</td>
                  <td>
                    <Button pk={task.id} />
                    <Delete pk={task.id}/>
                  
                  </td>
                </tr>
              )

            })

        }

      </tbody>
    </table>
    
    </>
  )
}

export default Home
