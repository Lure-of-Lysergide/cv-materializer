import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// Custom Material UI Theme
export default createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});
