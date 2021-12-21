import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const Home = () => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        console.log("kaisa he bro ?????")
        loaduser();
    },[])


    const loaduser = async() => {
         const result = await axios.get('https://fakestoreapi.com/users')
        //  console.log(result)
        setUsers(result.data)
    }


    const deleteuser =async id => {
        await axios.delete(`https://fakestoreapi.com/users/${id}`)
        loaduser();
    }

    return(
        <div className="container">
            <div className="py 4">
                <h1>home page</h1>
                <table class="table boarder shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">phone</th>
                            <th scope="col">username</th>
                            {/* {console.log(users)} */}
                            <th scope="col">email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (<tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.phone}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    
                                        <Link className="btn btn-outline-danger" to={`/viewsusers${user.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary" to={`/edituse${user.id}`} >Edit</Link>
                                        <Link className="btn btn-outline-danger" onClick={() => deleteuser(user.id)}>Delete</Link>
                                    
                                </tr>)
                            })
                        }
                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default Home;