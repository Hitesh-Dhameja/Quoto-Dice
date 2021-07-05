import React from 'react';
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TwitterIcon from '@material-ui/icons/Twitter';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function CardAll({ quotes, getQuote, tweetQuote }) {
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
            left: '38%',
            top: '20%',
            position: 'absolute',
            transform: 'translate( - 50 % ,  - 50 % )',

        },

        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
        cards: {
            boxShadow: '0 19px 38px rgba(0,33,0,0.30), 0 15px 12px rgba(0,0,33,0.22)',
            transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        },
    }));
    const classes = useStyles();
    return (
        <div>
            <Card className={`${classes.root} ${classes.cards} 'card-1'`}>
                <CardHeader avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>

                    </Avatar>
                }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={quotes.author}
                    subheader={quotes.dateAdded}
                />
                <CardMedia
                    className={classes.media}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBqgHM0qX3y-sjP3aBFjpcyZVuBSzu4KARQ&usqp=CAU"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontWeight: 'bold' }}>
                        {quotes.content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" style={{ color: 'red' }}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="tweet" color='primary'>
                        <TwitterIcon onClick={tweetQuote} />
                    </IconButton>
                    <Button variant="contained" color="primary" onClick={getQuote} style={{ marginLeft: '100px' }}>Quote</Button>


                </CardActions>

            </Card>



        </div >
    )
}

export default CardAll
