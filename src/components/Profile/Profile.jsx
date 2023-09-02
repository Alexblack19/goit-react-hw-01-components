import PropTypes from 'prop-types';
import {
  Section,
  Container,
  CardWrap,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Li,
} from './Profile.styled';

export const Profile = ({
  item: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Section>
      <Container>
        <CardWrap>
          <Avatar src={avatar} alt="User avatar" />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>

          <Stats>
            <Li>
              <span className="label">Followers</span>
              <span className="quantity">{followers}</span>
            </Li>
            <Li>
              <span className="label">Views</span>
              <span className="quantity">{views}</span>
            </Li>
            <Li>
              <span className="label">Likes</span>
              <span className="quantity">{likes}</span>
            </Li>
          </Stats>
        </CardWrap>
      </Container>
    </Section>
  );
};

Profile.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
