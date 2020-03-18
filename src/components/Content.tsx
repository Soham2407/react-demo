import Box from "@material-ui/core/Box";
import React from "react";
//import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
//import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const Content = () => {
  return (
    <Container maxWidth="md">
      <Typography component="div">
        <Box
          textAlign="center"
          m={2}
          fontWeight="fontWeightBold"
          fontSize="h2.fontSize"
          fontFamily="Oleo Script"
          letterSpacing={3}
          color="#4d4d4d"
        >
          These All are the parts of Fab 4
        </Box>
      </Typography>

      <Typography>
        <Box
          textAlign="center"
          m={2}
          fontWeight="fontWeightLight"
          fontFamily="serif"
          fontStyle="oblique"
          fontSize={18}
          lineHeight="2em"
        >
          The 'Fab Four' of the current generation are dominating world cricket
          now. The Fab Four includes Team India captain Virat Kohli, former
          Australia captain Steven Smith, New Zealand captain Kane Williamson,
          and England Test captain Joe Root.
        </Box>
      </Typography>
    </Container>
  );
};

export default Content;
