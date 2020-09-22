import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import MarkdownRender from './MarkdownRender';

export interface SectionProps {
  contents: Array<string>;
}

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

const Section: React.FC<SectionProps> = (props) => {
  const classes = useStyles();
  const { contents } = props;

  const [fetchedContents, setFetchedContents] = useState([] as Array<string>);
  useEffect(() => {
    if (fetchedContents.length === 0) {
      Promise.all(
        contents.map((c) => fetch(c).then((response) => response.text())),
      ).then((responses) => setFetchedContents([...responses]));
    }
  });

  return (
    <Grid item xs={12} md={12}>
      {fetchedContents.map((md: string) => (
        <div key={md.substring(0, 40)}>
          <Divider />
          <MarkdownRender className={classes.markdown}>{md}</MarkdownRender>
        </div>
      ))}
    </Grid>
  );
};

export default Section;
