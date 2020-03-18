import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Footers = () => {
  const imagePath = [
    {
      image:
        "https://ss.thgim.com/third-party/opta/article30341072.ece/alternates/FREE_380/viratkohli-cropped1ej293wrytvl610vfbkcjo7qiqjpg"
    },
    {
      image: "https://timesofindia.indiatimes.com/photo/69415515.cms"
    },
    {
      image:
        "https://caughtatpoint.com/wp-content/uploads/2019/06/Kane-Williamson-.jpg"
    },
    {
      image:
        "https://i1.wp.com/www.worldbiographynews.com/wp-content/uploads/2019/06/Joe-Root-Biography-Facts-Career-Family-Spouse-Net-Worth-More.jpg?resize=800%2C445&ssl=1"
    }
  ];

  return (
    <div style={{ margin: 50 }}>
      <Container maxWidth="md" style={{ marginBottom: 40 }}>
        <Typography component="div">
          <Box
            textAlign="center"
            m={2}
            fontWeight="fontWeightBold"
            fontFamily="Oleo Script"
            fontSize="h2.fontSize"
            letterSpacing={3}
            color="#4d4d4d"
          >
            Current Generation Top 4 Players
          </Box>
        </Typography>

        <Typography>
          <Box
            textAlign="center"
            m={2}
            fontWeight="fontWeightLight"
            fontFamily="serif"
            fontStyle="oblique"
            fontSize={20}
            lineHeight="2em"
          >
            These four players are the mainstays of their team's batting line up
            and are the considered best batsmen in today's generation. All these
            batsmen bat at either number 3 or number 4 position which is
            considered as a very important batting position for the team to post
            a competitive score.
          </Box>
        </Typography>
      </Container>

      <Grid item xs={12}>
        <Grid container justify="space-evenly" spacing={3}>
          <Box component="div" display="inline">
            <img
              style={{ width: 200, height: 175, borderRadius: 50 + "%" }}
              src={imagePath[0].image}
              alt="virat"
            ></img>
            <Typography
              style={{
                marginLeft: 13,
                color: "#4d4d4d",
                fontFamily: "Oleo Script"
              }}
              variant="h4"
              gutterBottom
            >
              King Kohli
            </Typography>
          </Box>

          <Box component="div" display="inline">
            <img
              style={{ width: 210, height: 175, borderRadius: 50 + "%" }}
              src={imagePath[1].image}
              alt="smith"
            ></img>
            <Typography
              style={{
                marginLeft: 10,
                color: "#4d4d4d",
                fontFamily: "Oleo Script"
              }}
              variant="h4"
              gutterBottom
            >
              Stylish Smith
            </Typography>
          </Box>

          <Box component="div" display="inline">
            <img
              style={{ width: 200, height: 175, borderRadius: 50 + "%" }}
              src={imagePath[2].image}
              alt="kane"
            ></img>
            <Typography
              style={{
                marginLeft: 12,
                color: "#4d4d4d",
                fontFamily: "Oleo Script"
              }}
              variant="h4"
              gutterBottom
            >
              Classy Kane
            </Typography>
          </Box>

          <Box component="div" display="inline">
            <img
              style={{ width: 200, height: 175, borderRadius: 50 + "%" }}
              src={imagePath[3].image}
              alt="Root"
            ></img>
            <Typography
              style={{
                marginLeft: 40,
                color: "#4d4d4d",
                fontFamily: "Oleo Script"
              }}
              variant="h4"
              gutterBottom
            >
              Roooot!!!
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Container maxWidth="md" style={{ marginBottom: 40, marginTop: 40 }}>
        <Typography component="div">
          <Box
            textAlign="center"
            m={2}
            fontWeight="fontWeightBold"
            fontFamily="Oleo Script"
            fontSize="h2.fontSize"
            letterSpacing={3}
            color="#4d4d4d"
          >
            Thank You For Visiting This Site
          </Box>
        </Typography>

        <Typography>
          <Box
            textAlign="center"
            m={2}
            fontWeight="fontWeightLight"
            fontFamily="serif"
            fontStyle="oblique"
            fontSize={20}
            lineHeight="2em"
          >
            Created By @Soham<span>😎</span>
          </Box>
        </Typography>
      </Container>
    </div>
  );
};

export default Footers;
