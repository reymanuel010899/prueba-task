// import Layout from '../../hocs/Layout'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router'

import update_task from '../services/Update'

const Update = ({
  loading
}) => {
    const { pk } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        gmail: ''
    })

    const { 
        title,
        description,
        gmail
    } = formData;


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e =>{
        e.preventDefault();
        console.log(title, gmail, description)
        update_task(pk, formData).then(() => {
            navigate('/home');  // Redirect to the task list view
        }).catch(err => console.error(err));
    }

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <h3>Update task</h3>
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={e=>onSubmit(e)} className="space-y-6 login">

              <div >
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  title
                </label>
                <div className="mt-1">
                  <input
                    name="title"
                    value={title}
                    onChange={e=>onChange(e)}
                    type="username"
                    required
                    className="appearance-none block w-full px-3 py-2 input border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  description
                </label>
                <div className="mt-1">
                  <input
                    name="description"
                    value={description}
                    onChange={e=>onChange(e)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="gmail" className="block text-sm font-medium text-gray-700">
                  gmail
                </label>
                <div className="mt-1">
                  <input
                    name="gmail"
                    value={gmail}
                    onChange={e=>onChange(e)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">

                <div className="text-sm">
                 
                </div>
              </div>

              <div>
                { loading ? 
                <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <h3>cargando</h3>
              </button>:
              <button
              type="submit"
              className="w-full send flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update
            </button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Update

