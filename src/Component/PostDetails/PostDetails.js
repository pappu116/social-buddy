import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const PostDetails = () => {
    const classes = useStyles();
    //post Details area-code
    const { pstId } = useParams();
    const [post,setPost] = useState([])
    const url = `https://jsonplaceholder.typicode.com/posts/${pstId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
        .then(data =>setPost(data))
        
    }, [])
    
    const { title, body } = post;

//comment area code
    const [comment, setComment] = useState([]);
    const cmnt=`https://jsonplaceholder.typicode.com/comments?postId=${pstId}`
    useEffect(() => {
        fetch(cmnt)
            .then(res => res.json())
            .then(data => setComment(data) )
      
    }, [])
   
   
    return (
        <>
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Your-Post-Details
                </Typography>
                        <Typography variant="h5" component="h2">
                            {title}
                </Typography>
                <Typography variant="body2" component="p">
                {body}
                </Typography>
            </CardContent>
            </Card>
            <div>
                <h2>Comments</h2>
                {
                    comment.map(comment =><Comment comment={comment}></Comment>)
                }
            </div>
            </>
    );
};

export default PostDetails;