"use client";
import { signup } from "@/app/action";
import React, { useEffect } from "react";

const SetSession = ({ userParams }) => {
  useEffect(() => {
    signup(userParams);
  }, []);
  return null;
};

export default SetSession;
