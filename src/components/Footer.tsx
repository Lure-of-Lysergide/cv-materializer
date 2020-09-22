import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export interface FooterProps {
  title: string;
}

const Description: React.FC = () => (
  <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
    {'Built with '}
    <Link color="textPrimary" href="https://github.com/scifier/cv-materializer">
      cv-materializer
    </Link>
  </Typography>
);

const Copyright: React.FC = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {`Copyright © ${new Date().getFullYear()} `}
    <Link color="textPrimary" href="https://scifier.dev">
      scifier.dev
    </Link>
  </Typography>
);

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const Footer: React.FC<FooterProps> = (props) => {
  const classes = useStyles();
  const { title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Description />
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
