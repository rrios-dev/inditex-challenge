import { createContext } from "react";

import { ProgressBarContext } from "./interfaces";

const context = createContext<ProgressBarContext | null>(null);

export default context;
