import { AppBar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export interface ThroughHeaderProps {
  routes: { name: string; path: string }[];
}

const sxProps = { mr: 2 };

export const ThroughHeader: React.FC<ThroughHeaderProps> = ({ routes }) => (
  <AppBar position="sticky">
    {routes.map((route) => (
      <Link key={route.path} to={route.path}>
        <Typography component="div" variant="h6" sx={sxProps} noWrap>
          {route.name}
        </Typography>
      </Link>
    ))}
  </AppBar>
);
