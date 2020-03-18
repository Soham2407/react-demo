import React, { useState } from "react";
//import AppBar from "@material-ui/core/AppBar";
//import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import "./cards.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    }
  })
);

function DisplayCard(props: {
  country: string;
  player: string;
  image: string;
  description: string;
  more: string;
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  return (
    <Card
      className="card-container"
      style={{ width: 300, marginTop: 20, backgroundColor: "#e6e6e6" }}
    >
      <CardContent>
        <Typography
          style={{ color: "navy" }}
          variant="h6"
          color="textSecondary"
          gutterBottom
        >
          {props.country}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.player}
        </Typography>
        <Typography color="textSecondary">Cricketer</Typography>
      </CardContent>
      <CardMedia
        style={{ height: 0, paddingTop: "72.25%" }}
        image={props.image}
      ></CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={() => {
              setExpanded(!expanded);
            }}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Info</Typography>
            <Typography paragraph>{props.more}</Typography>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  );
}

const Cards = () => {
  const data = [
    {
      key: "key1",
      country: "India",
      player: "Virat Kohli",
      image:
        "https://images.firstpost.com/wp-content/uploads/2020/01/Virat-Kohli-380-3.jpg",
      description:
        "A spunky, chubby teenager with gelled hair shot to fame after leading India to glory in the Under-19 World Cup at Kuala Lumpur in early 2008. In an Indian team filled with saint-like icons",
      more:
        "In the first week of 2018, Kohli went on to lead India in South Africa, a few weeks after he tied the knot with Indian actress and long-time girlfriend, Anushka Sharma. India went on to concede the series in the first two Tests, but came back to win the third Test match on a difficult wicket. In a series full of difficult wickets, Kohli exhibited tighter technique than he had in England, and batted better than he did in his more prolific tour of South Africa in 2013/14. Kohli went on to conquer his (personal) final frontier in England later in 2018 too, scoring 593 runs in 10 innings, including 2 hundreds, and not conceding his wicket to his fabled nemesis, Anderson, even once. India went on to lose the series 1-4, and Kohli's record as captain was tainted by two consecutive Test series losses away."
    },
    {
      key: "key2",
      country: "Australia",
      player: "Steve Smith",
      image:
        "https://e2.365dm.com/19/05/1600x900/skysports-steve-smith-australia_4678426.jpg",
      description:
        "The best Test batsman at present, Steven Smith's career redemption is a story for the ages. Having made his name initially as a potential leg-spinner who could bat a bit, there was immense criticism.",
      more:
        "A young Smith was at the forefront of Australia’s victorious World Cup win in 2015. Consistent through the tournament, it was his antics at the business end that were laudable. His last five knocks in the tournament were all fifty-plus scores and he became the first player to have such knocks in the quarterfinal, semifinal and final of the World Cup. It wasn’t his first World Cup though, as he had played in the 2011 edition but more as a bowling all-rounder who could bowl leg spin. As a premier player, 2015 was his first real test and he passed it with flying colors. Come the 2019 tournament, Smith will be the glue around which Australia’s batting revolves."
    },
    {
      key: "key3",
      country: "New Zealand",
      player: "Kane Williamson",
      image:
        "data:image/jpeg;base64,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",
      description:
        "Kane Williamson had been a wonder kid since his teenage days. His exceptional talent included the rare Non-Asian skill to play quality spin apart from being adept against fast bowling.",
      more:
        "Williamson has not only grown as a player but also as a leader over the last few years - it's only been an upward climb for the talented player. Although his previous two World Cups haven't been great, there would be a lot of expectations of him this time around. With the likes of Guptill and Taylor in the team, Williamson has got experienced players by his side. His ability to perform under pressure makes him one of the vital cogs in the team and it would be interesting to see how New Zealand perform under his leadership during WC 2019. Also, it wouldn't be a surprise if Williamson ends up being New Zealand's highest run-getter in the tournament."
    },
    {
      key: "key4",
      country: "England",
      player: "Joe Root",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1vVIUqHlUUXgTUcqShhUIWZKb_gjhUJ3vhPQlgbun56JsJn2m",
      description:
        "Joe Root, born on 30th December 1990, hails from a rich cricketing background. His grandfather captained Rotherham CC in the Yorkshire League for several seasons whilst his younger brother Billy.",
      more:
        "The youngest player in the 15-member squad of England in the 2015 World Cup, Root was one of the two English batters to score more than 200 runs in the competition. In his first-ever World Cup, Root recorded a century at a 110+ strike-rate, but he ended up on the losing side against Sri Lanka. You could call Root an exception in a team that is flooded with aggressive-and-powerful batsmen. This is despite him scoring 3498 runs from 74 innings at a strike-rate of 91 - England’s highest run-getter - since the 2015 World Cup. While Root may not be grabbing the headlines, he’s the glue around which the other batters play. This was exactly what he was required to do in the 2019 edition of the tournament. A 'new England' under Eoin Morgan had emerged and Root was to be a vital cog of it. Playing at home, England were firm favourites to lift their maiden World Cup trophy. That they eventually did win in a less than cavalier fashion will not take away the fact that they were clearly at the top of their game. So was Root, who ended the tournament as the fifth highest run-scorer, with 556 runs from 11 innings."
    }
  ];

  return (
    <div style={{ marginLeft: 50 }}>
      <Grid item xs={12}>
        <Grid container justify="space-evenly" spacing={6}>
          {data.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.key}>
              <DisplayCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
