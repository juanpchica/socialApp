import React, { useContext } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { Card, Image, Button, Icon, Label } from "semantic-ui-react";
import { AuthContext } from "../context/auth";
import LikeButton from "../components/LikeButton";
import DeleteButton from "./DeleteButton";
import MyPopup from "../utils/MyPopup";
const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) => {
  const { user } = useContext(AuthContext);

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <LikeButton user={user} post={{ id, likes, likeCount }} />
          <MyPopup content="Comment on post">
            <Button as={Link} to={`/posts/${id}`} labelPosition="right">
              <Button basic color="blue">
                <Icon name="comments" />
              </Button>
              <Label basic color="blue" pointing="left">
                {commentCount}
              </Label>
            </Button>
          </MyPopup>
          {user && user.username === username && <DeleteButton postId={id} />}
        </div>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
