import gql from 'graphql-tag';

export const POSTS = gql`
  query {
    posts{
      docs{
        _id
        title
      }
    }
  }
`;

export const POSTS_QUERY_LIST = gql`
  query retrievePosts(
      $id: ID, 
      $author: String,
      $category: String,
      $title: String,
      $shortDesc: String,
      $description: String,
      $type: String,
      $createdDate: String,
      $updatedDate: String,
      $page: Int!
      $limit: Int!
    ){
    posts (
      id: $id,
      author: $author,
      category: $category,
      title: $title,
      shortDesc: $shortDesc,
      description: $description,
      type: $type,
      createdDate: $createdDate,
      updatedDate: $updatedDate,
      page: $page,
      limit: $limit,
    ){
      docs {
        _id
        title
        shortDesc
        coverImg
        type
        createdDate
        isCommentAble
        isArchived
        author {
          _id
          username
        }
      }
      totalDocs
      limit
      totalPages
      page
      pagingCounter
      hasPrevPage
      hasNextPage
    }
  }
`;

export const HOME_CATEGORY = gql`
query homeQuery{
  categories (id: "5ea1703f76ee0030856b08ca"){
    _id
    name
    description
    bannerPost{
      _id
      title
      coverImg
      author{
        username
      }
    }
    trendPosts{
      _id
      title
      coverImg
      author{
        username
      }
    }
    popularPosts{
      _id
      title
      coverImg
      author{
        username
      }
    }
    ratedPosts{
      _id
      title
      coverImg
      author{
        username
      }
    }
  }
}
`;