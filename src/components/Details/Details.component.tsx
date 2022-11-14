/** @jsxImportSource @emotion/react */
import { Typography } from "@mui/material";
import { styles } from "./Details.styles";

export const Details = () => {
  return (
    <div css={styles.container}>
      <Typography variant="body1">
        Welcome to the Countries Dashboard!
      </Typography>
      <Typography variant="body2">Let's learn about geography 🌎</Typography>
    </div>
  );
};
