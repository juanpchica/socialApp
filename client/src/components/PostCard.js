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
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            as={Link}
            to={`/posts/${id}`}
            labelPosition="left"
            style={{ paddingRight: 25 }}
          >
            <Button color="red">
              <Icon name="heart" />
              Like
            </Button>
            <Label basic color="red" pointing="left">
              {likeCount}
            </Label>
          </Button>
          <Button as={Link} to={`/posts/${id}`} labelPosition="right">
            <Button basic color="blue">
              <Icon name="comments" />
              Comment
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
