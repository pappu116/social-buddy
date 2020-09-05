import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Comment.css'
const useStyles = makeStyles({
  root: {
        minWidth: 275,
        display: 'flex',
        marginBottom: '10px',
        margin:'20px'
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
   
});
const Comment = (props) => {
   
    const classes = useStyles();
    const { name, body, id, email } = props.comment;
    //image use api
    
    const image = `https://joeschmoe.io/api/v1/${id}`

    //anothers image api 
    // const [picture,setPicture] =useState([])
    // const image =`https://jsonplaceholder.typicode.com/photos/${id}`
    
    // useEffect(() => {
    //     fetch(image)
    //         .then(res => res.json())
    //     .then(data =>setPicture(data))
    // })
    // const {thumbnailUrl} = picture;
    
    return (
        <>
     <Card className={classes.root} variant="outlined">
                <CardContent className="image" >
                    < img src={image} alt="" />
                 </CardContent>
             <CardContent className="content.text">
                <Typography className={classes.title} color="textSecondary">
                User Id👨‍✈️: {id}
                </Typography>
                <Typography variant="h5" component="h2">
                 {name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Email: {email}
                </Typography>
                <Typography variant="body2" component="p">
                    Statuse:  {body}
                </Typography>
            </CardContent>
     </Card>
            
            </>
    );
};

export default Comment;