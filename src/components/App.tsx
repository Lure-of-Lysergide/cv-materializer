import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { me, experience, projects, contacts } from '../assets';
import Header from './Header';
import Banner from './Banner';
import Section from './Section';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'About me', url: '/me', contents: [me] },
  { title: 'My projects', url: '/projects', contents: [projects] },
  { title: 'My experience', url: '/experience', contents: [experience] },
  { title: 'My contacts', url: '/contacts', contents: [contacts] },
];

const bannerContents = {
  title: process.env.REACT_APP_WELCOME_MESSAGE,
  description: process.env.REACT_APP_DESCRIPTION,
  image: `${process.env.PUBLIC_URL}/logo.png`,
  imageText: process.env.REACT_APP_NAME,
  linkTarget: window.location.href.includes(sections[1].url) ? sections[0].url : sections[1].url,
  linkText: window.location.href.includes(sections[1].url) ? sections[0].title : sections[1].title,
};

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={process.env.REACT_APP_DOMAIN} sections={sections} />
        <Router>
          <main>
            <Banner contents={bannerContents} />
            <Grid container spacing={5} className={classes.mainGrid}>
              <Switch>
                {sections.map((s) => (
                  <Route
                    key={`route-${s.title}`}
                    path={s.url}
                    exact
                    component={(): JSX.Element => <Section contents={s.contents} />}
                  />
                ))}
                <Redirect from="/" to={sections[0].url} />
              </Switch>
            </Grid>
          </main>
        </Router>
      </Container>
      <Footer title={`${process.env.REACT_APP_NAME} Portfolio`} />
    </>
  );
};

export default App;
