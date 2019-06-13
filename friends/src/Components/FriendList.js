import React from 'react';
import FriendCard from './FriendCard'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Title from './Title'

const FriendList = props => {

  const linkStyle = {
    textDecoration: 'none',
    paddingBottom: '3rem',
  };

return(
  <>
    <Title title={'Friends'} />
    <Grid container className='friend-list' spacing={4}>
        {props.friends.map(f => (
            <Link to={`/friend/${f.id}`} style={linkStyle}>
                <FriendCard key={f.id} friend={f} />
            </Link>
        ))}
    </Grid>
  </>
)
}

export default FriendList