import { css } from "@emotion/react";
import { SimplePaletteColorOptions, ThemeOptions } from "@mui/material";

export const styles = {
  container: css`
    margin: 0 auto;
    max-width: 800px;
    padding: 50px 20px;
    width: 100%;
  `,
  formContainer: (theme: ThemeOptions) => css`
    background-color: ${(theme.palette?.secondary as SimplePaletteColorOptions)
      .main};
    border-radius: 4px;
    margin-bottom: 2.5rem;
    padding: 2.5rem;
  `,
  formControl: css`
    margin-bottom: 1rem;
  `,
  titleContainer: css`
    text-align: center;
  `
};
