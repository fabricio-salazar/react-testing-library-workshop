import { css } from "@emotion/react";
import { SimplePaletteColorOptions, ThemeOptions } from "@mui/material";

export const styles = {
  container: (theme: ThemeOptions) => css`
    background-color: ${(theme.palette?.secondary as SimplePaletteColorOptions)
      .main};
    border-radius: 4px;
    margin-bottom: 2.5rem;
    padding: 2.5rem;
  `
};
