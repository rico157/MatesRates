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

export const WISHLIST = gql`
  {
      user(id: "5fa91e3486083c1f16e6ffa4") {
        wishlist {
          id
          name
          cuisine
          logo
          city {
            name
          }
        }
      }
    }
`;

export const ADD_TO_WISHLIST = gql`
  mutation AddWishlist(
    $restaurant_id: String!
    $user_id: ID!
  ) {
    addWishlist(
      restaurant_id: $restaurant_id
      user_id: $user_id
    ) {
      name
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
