"use client";
import React from "react";
import { Nav } from "./elements/nav";
import { slide as Menu } from "react-burger-menu";

export const MobMenu = ({}) => {
  return (
    <Menu right className="mob-menu" pageWrapId="home" outerContainerId="root">
      <Nav render="menu" />
    </Menu>
  );
};
