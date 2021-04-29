import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { Card, Image, Button, Icon, Label } from "semantic-ui-react";

const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) => {
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

          <Button as={Link} to={`/posts/${id}`} labelPosition="right">
            <Button basic color="blue">
              <Icon name="comments" />
              Comment
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
          <Button as="div" color="red" floated="right">
            <Icon name="trash" style={{ margin: 0 }} />
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
