import { gql } from "apollo-boost";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      firstname
      lastname
      email
      gender
      birthdate
    }
  }
`;

