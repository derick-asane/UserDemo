import { gql } from "apollo-boost";


export const ADD_USER = gql`
  mutation GetUsers($user: AddUserInput!) {
    addUser(user: $user){
    firstname ,
    lastname,
    email,
    gender,
    birthdate
  }
  }
`;