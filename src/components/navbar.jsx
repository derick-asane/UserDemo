import React from "react";
import { Link } from 'react-router-dom';




   const NavBar=()=>{

        return(
            <div>
                <div className="flex justify-evenly  bg-stone-100 mb-4" >
                    <Link to="/create-user"> <span className="text-blue-500">Create User</span></Link>
                    <Link to="/"><span className="text-blue-500">list of users</span></Link>
                </div>
            </div> 
        );
};

export default NavBar;