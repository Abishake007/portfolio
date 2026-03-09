import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiLeetcode,
  SiReact,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiFirebase,
} from "react-icons/si";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaThreads,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaPinterest,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
  FaJava,
} from "react-icons/fa6";

import { TbDatabase, TbCloud } from "react-icons/tb";

export const iconLibrary: Record<string, IconType> = {
  // Navigation
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  openLink: HiOutlineLink,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  calendar: HiCalendarDays,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,

  // Layout
  home: PiHouseDuotone,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  gallery: PiImageDuotone,

  // Visibility
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,

  // Social
  github: FaGithub,
  linkedin: FaLinkedin,
  discord: FaDiscord,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
  leetcode: SiLeetcode,

  // Programming
  java: FaJava,
  javascript: SiJavascript,

  // Frontend
  react: SiReact,
  angular: SiAngular,
  html: SiHtml5,
  css: SiCss3,
  nextjs: SiNextdotjs,

  // Backend
  springboot: SiSpringboot,
  nodejs: SiNodedotjs,
  supabase: SiSupabase,

  // Database
  mysql: SiMysql,
  mongodb: SiMongodb,
  database: TbDatabase,

  // Cloud / Tools
  firebase: SiFirebase,
  cloud: TbCloud,
  figma: SiFigma,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;