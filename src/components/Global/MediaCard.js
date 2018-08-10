import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Avtar from "./../../data/img_avatar.png";

const styles = theme => ({
  card: {
    display: 'flex',
    margin:'0 10 0 10'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width:'60%'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '41%',
    height: 'auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function MediaCard(props) {
  const { classes, theme } = props;
  return (
    <div className='margin-10'>
      <Card className={classes.card} >
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline" >{props.name}</Typography>
            <Typography variant="subheading" color="textSecondary" >
                {props.position}
                <br/>
                   <span className='margin-l-10'> at</span>
                <br/>
                {props.companyName}
            </Typography>
          </CardContent>
          {/* <div className={classes.controls}>
            <IconButton aria-label="Previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="Play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="Next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </div> */}
        </div>
        <CardMedia
          className={classes.cover}
          image={props.imageUrl}
          title="Live from space album cover"
        />
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
MediaCard.defaultProps = {
    name:'Rajan kumar',
    position :'Software Engineer',
    companyName :'vNative.com',
    imageUrl: Avtar
 };

export default withStyles(styles, { withTheme: true })(MediaCard);