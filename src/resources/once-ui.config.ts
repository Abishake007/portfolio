import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { home } from "./index";

// 🔥 IMPORTANT: Change this after deployment
const baseURL: string = "https://abishake.vercel.app";

// ================== ROUTES ==================
const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/contact": true,
  "/blog": false,
  "/gallery": false, // disabled for clean portfolio
};

// ================== DISPLAY ==================
const display: DisplayConfig = {
  location: true,
  time: false,
  themeSwitcher: true,
};

// ================== PROTECTED ROUTES ==================
const protectedRoutes: ProtectedRoutesConfig = {};

// ================== FONTS ==================
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts: FontsConfig = {
  heading,
  body,
  label,
  code,
};

// ================== STYLE (Professional Look) ==================
const style: StyleConfig = {
  theme: "system",
  neutral: "gray",
  brand: "blue",
  accent: "indigo",
  solid: "contrast",
  solidStyle: "flat",
  border: "rounded",
  surface: "filled",
  transition: "micro",
  scaling: "100",
};

// ================== DATA STYLE ==================
const dataStyle: DataStyleConfig = {
  variant: "flat",
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

// ================== EFFECTS (Minimal - Clean UI) ==================
const effects: EffectsConfig = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 0,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: false,
    opacity: 0,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 0,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 0,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

// ================== MAILCHIMP (Disabled) ==================
const mailchimp: MailchimpConfig = {
  action: "",
  effects: effects,
};

// ================== SCHEMA (SEO - VERY IMPORTANT) ==================
const schema: SchemaConfig = {
  logo: "/images/profile.png", // optional
  type: "Person",
  name: "Abishake A",
  description:
    "Full Stack Developer | Java | Spring boot| React | Angular",
  email: "abishakearunagirinathan16@gmail.com",
};

// ================== SOCIAL LINKS ==================
const sameAs: SameAsConfig = {
  linkedin: "https://www.linkedin.com/in/your-link/",
  Github: "https://github.com/your-username",
  Leetcode:"https://leetcode.com/u/Abishake007/"
};

// ================== SOCIAL SHARING ==================
const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: false,
    linkedin: true,
    facebook: false,
    pinterest: false,
    whatsapp: false,
    reddit: false,
    telegram: false,
    email: true,
    copyLink: true,
  },
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
};