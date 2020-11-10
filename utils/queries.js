import { gql } from '@apollo/client';

export const RESTAURANTS = gql`
  {
    restaurants {
      id
      name
      cuisine
      logo
      reviews {
        body
        rating
        user_id {
          id
          name
          avatarURL
        }
      }
      city {
        name
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReview(
    $rating: Int!
    $body: String!
    $user_id: String!
    $restaurant_id: String!
  ) {
    addReview(
      rating: $rating
      body: $body
      user_id: $user_id
      restaurant_id: $restaurant_id
    ) {
      rating
      body
    }
  }
`;

export const ADD_FRIEND = gql`
mutation AddFriend(
  $user_id: String!
  $friend_id: String!
) {
  addFriend(
    user_id: $user_id
    friend_id: $friend_id
  ) {
    name
  }
}`

export const GET_USERS = gql`
{
  users {
    id
    name
    username
    avatarURL
  }
}`
