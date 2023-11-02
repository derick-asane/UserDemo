import React, {useEffect, useState} from "react";
import NavBar from "../components/navbar";
import { Link } from 'react-router-dom';

import { FormattedMessage } from "react-intl";
import { useQuery, gql } from "@apollo/client";
import {GET_USERS} from '../graphql/query.jsx';



const ListUser = () =>{
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
                            <td><Link to="/list-user/edit-user"><button className="text-blue-500">edit</button></Link></td>
                            <td><Link to="/"><button className="text-blue-500">delete</button></Link></td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ListUser;