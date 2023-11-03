import React, {useEffect, useState} from "react";
import NavBar from "../components/navbar";
import { Link } from 'react-router-dom';

import { FormattedMessage } from "react-intl";
import { useQuery, gql } from "@apollo/client";
import {GET_USERS} from '../graphql/query.jsx';

import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { DELETE_USER } from "../graphql/delete-user.jsx";
import { useMutation } from "@apollo/client";



const ListUser = () =>{


    // we are deleting a user at this point
    const [deleteUser] = useMutation(DELETE_USER);

   
    const handleDelete = async (id) => {
        try {
          const { data } = await deleteUser({ variables: { id: id } });
          console.log('Deleted user:', data.deleteUser);
          // handle any necessary UI updates or notifications
        } catch (error) {
          console.error('Error deleting user:', error);
          // handle or display error accordingly
        }
      };
    



//here this is the section to fetch the data

    const [users, setUser] = useState([])

    const { loading, error, data } = useQuery(GET_USERS);

    useEffect(()=>{
        if(data){
        setUser(data.users)
       }
        console.log(data)
    }, [data])

 const UserList =[
    {
        "firstname" : "Asane",
        "lastname" : "Enow",
        "email" : "derickasne@gmail.com",
        "gender" : "male",
        "birthdate" : "08-12-2023"
    },
    {
        "firstname" : "Shalom",
        "lastname" : "Bong",
        "email" : "shalom@gmail.com",
        "gender" : "female",
        "birthdate" : "06-01-2023"
    }
 ]


    return(
        <div>
            <NavBar />
            <h1 className="text-green-300">User list</h1>
            <div className="mt-5">
                <table width="90%" className="mx-auto border ">
                    <thead>
                    <tr className="border">
                    <th>
                            <FormattedMessage
                                id="id"
                                defaultMessage="id"
                            />
                        </th>
                        <th>
                            <FormattedMessage
                                id="first.name"
                                defaultMessage="first name"
                            />
                        </th>
                        <th>
                            <FormattedMessage
                                id="last.name"
                                defaultMessage="last name"
                            />
                        </th>
                        <th>
                            <FormattedMessage
                                id="email"
                                defaultMessage="email"
                            />
                        </th>
                        <th>
                            <FormattedMessage
                                id="gender"
                                defaultMessage="gender"
                            />
                        </th>
                        <th>
                            <FormattedMessage
                                id="birth.date"
                                defaultMessage="birth date"
                            />
                        </th>
                        <th>
                            <FormattedMessage
                                id="edit"
                                defaultMessage="Edit"
                            />
                        </th>
                        <th>
                            <FormattedMessage
                                id="delete"
                                defaultMessage="delete"
                            />
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((item, index) => (
                        <tr className="border" key={index}>
                            <td>{item.id}</td>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.birthdate}</td>
                            <td><Link  to={{ pathname: '/list-user/edit-user', state: {item}  }} ><button className="text-blue-500"><FaEdit className="text-green-500" /></button></Link></td>
                            <td><button className="text-blue-500"onClick={() => handleDelete(item.id)}><FaTrash className="text-red-500" /></button></td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ListUser;