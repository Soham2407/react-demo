import React from "react";
import {
  makeStyles,
  useTheme,
  createStyles,
  Theme
} from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";

const tutorialSteps = [
  {
    label: "",
    imgPath: "https://www.hdwallpapers.in/download/virat_kohli_2-HD.jpg"
  },
  {
    label: "",
    imgPath:
      "https://s.yimg.com/uu/api/res/1.2/yj8aofoRvnx1L5tkHMn_Cg--~B/aD0xMDgwO3c9MTkyMDtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en-GB/homerun/omnisport.uk/ac453970086568706d1fdf74f4480b50"
  },
  {
    label: "",
    imgPath:
      "https://resources.pulse.icc-cricket.com/ICC/photo/2019/04/05/b4c20f4a-d6a5-40fa-90eb-630dd41d05d3/GettyImages-688415300.jpg"
  },
  {
    label: "",
    imgPath:
      "https://e0.365dm.com/20/01/2048x1152/skysports-joe-root-england_4903759.jpg"
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      overflow: "hidden",
      display: "block",
      width: "100%"
    }
  })
);

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            color="primary"
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
