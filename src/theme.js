import {deepOrange900, amber700,orange800, deepPurple500,
white, darkBlack, fullBlack,
cyan500, cyan700, pinkA200, grey900,
grey100, grey300, grey400, grey500,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

const theme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Montserrat, sans-serif',
  palette: {
    primary1Color: deepOrange900,
    primary2Color: amber700,
    primary3Color: grey400,
    accent1Color: amber700,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});

export default theme;

