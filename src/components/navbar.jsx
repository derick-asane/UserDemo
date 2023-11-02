import React from "react";
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";




   const NavBar=()=>{

        return(
            <div>
                <div className="flex justify-evenly  bg-stone-100 mb-4" >
                    <Link to="/create-user"> <span className="text-blue-500">
                        <FormattedMessage
                            id="createUser"
                            defaultMessage="Create User"
                        />
                        
                        </span></Link>
                    <Link to="/"><span className="text-blue-500">
                    <FormattedMessage
                            id="listuser"
                            defaultMessage="list of users"
                        />
                        </span></Link>
                </div>
            </div> 
        );
};

export default NavBar;