import { gql } from '@apollo/client';

export const GET_USER = gql`
  query getUser {
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
`;

export const GET_OUTFIT = gql`
  query getOutfit($_id: ID!) {
    outfit(_id: $_id) {
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

export const GET_OUTFITS = gql`
  query getOutfits {
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
`;

export const GET_CLOTHES = gql`
  query getClothes($_id: ID!) {
    clothes(_id: $_id) {
      _id
      name
      itemUrl
      imageUrl
    }
  }
`;
