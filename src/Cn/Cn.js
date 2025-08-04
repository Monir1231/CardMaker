import { twMerge } from "tailwind-merge";
import {clsx } from "clsx";

export const Cn = (...inputs) => twMerge(clsx(...inputs))



