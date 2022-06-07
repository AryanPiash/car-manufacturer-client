import React from 'react';
import { useQuery } from 'react-query'
import LoadingSpinner from '../Shared/LoadingSpinner';
import ClientRow from './ClientRow';

const Clients = () => {
    const { data: clients, isLoading, refetch } = useQuery('clients', () => fetch('https://car-manufacturer.herokuapp.com/clients',{
        method: 'GET',
         headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`   
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='px-8 pt-5'>
            <h1 className='text-xl text-center font-semibold text-blue-800 mb-4'>Make An Admin</h1>
            <div className="overflow-x-auto border rounded-lg">
                <table className="table w-full">

                    <thead>
                        <tr><th>No.</th>
                            <th>User</th>
                            <th>Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clients?.map((user, index) => <ClientRow 
                            key={index}
                            user={user}
                            index={index}
                            refetch={refetch}
                            ></ClientRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Clients;