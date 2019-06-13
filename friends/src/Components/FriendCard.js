import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const FriendCard = props => {
  const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    icon: {
      color: '#ff000073', 
      paddingLeft: '5rem'
    }
  });

  const classes = useStyles();

    return(
  <Grid item key={props.friend} xs={12} sm={6} md={4}>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
            {props.friend.name}
        </Typography>
        <Typography variant="body2" component="p">
            {props.friend.age}
            <br />
                {props.friend.email}
            <br />
        </Typography>
      </CardContent>

      <CardActions>

        <Link
          to={{
            pathname: "/update", 
            title: 'Update Friend', 
            flag: 'update', 
            id: props.friend.id, 
            name: props.friend.name, 
            age: props.friend.age, 
            email: props.friend.email 
          }} >
          <Button size="small">Update Friend</Button>
        </Link>

        <Link 
          to={{
            pathname: "/delete", 
            title: 'Delete Friend', 
            flag: 'delete', 
            id: props.friend.id, 
            name: props.friend.name, 
            age: props.friend.age, 
            email: props.friend.email
          }} >
          <DeleteForeverIcon className={classes.icon} />
        </Link>

      </CardActions>
    </Card>
  </Grid>




    )
}

export default FriendCard