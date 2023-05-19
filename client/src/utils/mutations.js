import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        clothes {
          _id
          name
          itemUrl
          imageUrl
        }
        outfits {
          _id
          item1 {
            _id
            name
            itemUrl
            imageUrl
          }
          item2 {
            _id
            name
            itemUrl
            imageUrl
          }
          item3 {
            _id
            name
            itemUrl
            imageUrl
          }
          item4 {
            _id
            name
            itemUrl
            imageUrl
          }
          item5 {
            _id
            name
            itemUrl
            imageUrl
          }
          item6 {
            _id
            name
            itemUrl
            imageUrl
          }
          item7 {
            _id
            name
            itemUrl
            imageUrl
          }
        }
      }
    }
  }
`;

export const ADD_OUTFIT = gql`
  mutation addOutfit(
    $item1: ID!
    $item2: ID!
    $item3: ID!
    $item4: ID
    $item5: ID
    $item6: ID
    $item7: ID
  ) {
    addOutfit(
      item1: $item1
      item2: $item2
      item3: $item3
      item4: $item4
      item5: $item5
      item6: $item6
      item7: $item7
    ) {
      _id
      item1 {
        _id
        name
        itemUrl
        imageUrl
      }
      item2 {
        _id
        name
        itemUrl
        imageUrl
      }
      item3 {
        _id
        name
        itemUrl
        imageUrl
      }
      item4 {
        _id
        name
        itemUrl
        imageUrl
      }
      item5 {
        _id
        name
        itemUrl
        imageUrl
      }
      item6 {
        _id
        name
        itemUrl
        imageUrl
      }
      item7 {
        _id
        name
        itemUrl
        imageUrl
      }
    }
  }
`;

export const ADD_CLOTHES = gql`
  mutation addClothes($name: String!, $itemUrl: String!, $imageUrl: String!) {
    addClothes(name: $name, itemUrl: $itemUrl, imageUrl: $imageUrl) {
      _id
      name
      itemUrl
      imageUrl
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        clothes {
          _id
          name
          itemUrl
          imageUrl
        }
        outfits {
          _id
          item1 {
            _id
            name
            itemUrl
            imageUrl
          }
          item2 {
            _id
            name
            itemUrl
            imageUrl
          }
          item3 {
            _id
            name
            itemUrl
            imageUrl
          }
          item4 {
            _id
            name
            itemUrl
            imageUrl
          }
          item5 {
            _id
            name
            itemUrl
            imageUrl
          }
          item6 {
            _id
            name
            itemUrl
            imageUrl
          }
          item7 {
            _id
            name
            itemUrl
            imageUrl
          }
        }
      }
    }
  }
`;

export const DELETE_CLOTHES = gql`
  mutation deleteClothes($_id: ID!) {
    deleteClothes(_id: $_id) {
      _id
      name
      itemUrl
      imageUrl
    }
  }
`;

export const DELETE_OUTFIT = gql`
  mutation deleteOutfit($_id: ID!) {
    deleteOutfit(_id: $_id) {
      _id
      item1 {
        _id
        name
        itemUrl
        imageUrl
      }
      item2 {
        _id
        name
        itemUrl
        imageUrl
      }
      item3 {
        _id
        name
        itemUrl
        imageUrl
      }
      item4 {
        _id
        name
        itemUrl
        imageUrl
      }
      item5 {
        _id
        name
        itemUrl
        imageUrl
      }
      item6 {
        _id
        name
        itemUrl
        imageUrl
      }
      item7 {
        _id
        name
        itemUrl
        imageUrl
      }
    }
  }
`;


