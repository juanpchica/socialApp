import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";

import { Grid } from "semantic-ui-react";
import PostCard from "../components/PostCard";

import { AuthContext } from "../context/auth";
import PostForm from "../components/PostForm";
const Home = () => {
  const { user } = useContext(AuthContext);

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
  const { loading, error, data: { getPosts: posts } = {} } = useQuery(
    FETCH_POSTS_QUERY
  );
  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
          posts &&
          posts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Home;
