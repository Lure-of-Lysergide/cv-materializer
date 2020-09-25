import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import CreateIcon from '@material-ui/icons/Create';
import GetAppIcon from '@material-ui/icons/GetApp';

interface Section {
  title: string;
  url: string;
}

export interface HeaderProps {
  sections: Array<Section>;
  title?: string;
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0),
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button
          variant="outlined"
          size="small"
          endIcon={<CreateIcon />}
          component="a"
          href={`mailto:${process.env.REACT_APP_EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Write me
        </Button>
        <Hidden xsDown>
          <Link href={`${process.env.PUBLIC_URL}/`} variant="h5" color="inherit" noWrap>
            {title}
          </Link>
        </Hidden>
        <Button
          variant="outlined"
          size="small"
          startIcon={<GetAppIcon />}
          component="a"
          href={`${process.env.PUBLIC_URL}/${process.env.REACT_APP_NAME} CV.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          download={`${process.env.REACT_APP_NAME} CV.pdf`}
        >
          Download my CV
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section: Section) => (
          <Hidden xsDown={section.url === '/experience'} key={section.title}>
            <Link
              color="inherit"
              noWrap
              variant="body2"
              href={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          </Hidden>
        ))}
      </Toolbar>
    </>
  );
};

export default Header;
