import React from 'react';
import FriendCard from './FriendCard'
// import axios from 'axios';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Title from './Title'

const FriendList = props => {

    const linkStyle = {
        textDecoration: 'none',
        paddingBottom: '3rem',
      };
    return(
        <Container maxWidth="md">
            <Title title={'Friends'} />
            <Grid container className='friend-list' spacing={4}>
            {/* <div className='friend-list'> */}
                {props.friends.map(f => (
                    <Link to={`/friend/${f.id}`} style={linkStyle}>
                        <FriendCard key={f.id} friend={f} />
                    </Link>
                ))}
            </Grid>
            </Container>
    )
}

export default FriendList