import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";
import { ThroughHeaderLink } from "./ThroughHeaderLink";

export interface ThroughHeaderProps {
  routes: { name: string; path: string }[];
}

export const ThroughHeader: React.FC<ThroughHeaderProps> = ({ routes }) => (
  <AppBar position="sticky">
    <Toolbar>
      {routes.map((route) => (
        <ThroughHeaderLink to={route.path} key={route.path}>
          <Button color="inherit">{route.name}</Button>
        </ThroughHeaderLink>
      ))}
    </Toolbar>
  </AppBar>
);
