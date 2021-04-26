import React from "react";
import { useQuery, gql } from "@apollo/client";

const Home = () => {
  const {
    loading,
    error,
    data: { getPosts: posts },
  } = useQuery(FETCH_POSTS_QUERY);
  console.log(posts);
  return <div>Home</div>;
};

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
