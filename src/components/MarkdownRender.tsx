import React from 'react';
import Markdown, { MarkdownProps } from 'markdown-to-jsx';
import { withStyles, Theme, StyleRules, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link, { LinkProps } from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import PublicIcon from '@material-ui/icons/Public';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const styles = (theme: Theme): StyleRules => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

const decorableLinks = [
  { name: 'email', icon: EmailIcon, prefix: /^mailto:/i },
  { name: 'github', icon: GitHubIcon, prefix: /^(https?:\/\/)?(www.)?github.com\//i },
  { name: 'linkedin', icon: LinkedInIcon, prefix: /^(https?:\/\/)?(www.)?linkedin.com\/in\//i },
  { name: 'facebook', icon: FacebookIcon, prefix: /^(https?:\/\/)?(www.)?facebook.com\//i },
  { name: 'website', icon: PublicIcon, prefix: /^(https:\/\/)(www.)?/i },
];

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h5' },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: {
      component: (props: LinkProps & { href: string; children: Array<string> }): JSX.Element => {
        const decorableLink = decorableLinks.find(({ name }) => name === props.title);
        if (
          decorableLink &&
          decorableLink.prefix.test(props.href) &&
          new RegExp(`${props.children[0]}$`, 'i').test(props.href)
        ) {
          return (
            <Link display="block" variant="body1" href={props.href} key={props.title}>
              <Grid container spacing={1} alignItems="stretch">
                <Grid item>
                  <decorableLink.icon />
                </Grid>
                <Grid item>{props.children[0]}</Grid>
              </Grid>
            </Link>
          );
        }
        return <Link {...props} />;
      },
    },
    li: {
      component: withStyles(styles)(({ classes, ...props }: WithStyles) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
};

const MarkdownRender: React.FC<MarkdownProps> = (props) => {
  return <Markdown options={options} {...props} />;
};

export default MarkdownRender;
