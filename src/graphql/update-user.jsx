import { gql } from "apollo-boost";


export const  UPDATE_USER = gql`
    mutation updateUser($id: ID!, $edits: EditUserInput!){
    updateUser(id: $updateUserId, edits: $edits) {
        id,
        firstname,
        lastname,
        email,
        gender
        birthdate
  }
}
`;