"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1207141e-c3fc-4550-85bc-09e16b73632f");
  }, []);
  return null;
};

export default CrispChat;
