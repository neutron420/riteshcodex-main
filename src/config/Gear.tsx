import { Headphones, Keyboard, Laptop, Mouse, Phone } from "lucide-react";

export const devices = [
  {
    name: "HP Victus (Ryzen 5, RTX 3050)",
    icon: <Laptop className="size-4" />,
  },

  {
    name: "ANT Esports MK1000",
    icon: <Keyboard className="size-4" />,
  },
  {
    name: "Logitech Mouse",
    icon: <Mouse className="size-4" />,
  },
  {
    name: "Sony WH-CH250",
    icon: <Headphones className="size-4" />,
  },
  {
    name: "OnePlus Nord Buds 3",
    icon: <Headphones className="size-4" />,
  },
  {
    name: "Realme 9 Pro+ / Narzo",
    icon: <Phone className="size-4" />,
  },
];

export const webExtensions = [
  { name: "Dark Mode", href: "https://mybrowseraddon.com/dark-mode.html" },
  { name: "uBlock Origin", href: "https://ublockorigin.com/" },
  { name: "Responsive Viewer", href: "https://responsiveviewer.org/" },
  {
    name: "Control Panel for Twitter",
    href: "https://soitis.dev/control-panel-for-twitter",
  },
  {
    name: "Save image as Type",
    href: "https://chromewebstore.google.com/detail/gabfmnliflodkdafenbcpjdlppllnemd?utm_source=item-share-cb",
  },
  {
    name: "WhatFont",
    href: "https://chromewebstore.google.com/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en",
  },
  {
    name: "React Developer Tools",
    href: "https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en",
  },
  { name: "daily.dev", href: "https://daily.dev/" },
  { name: "Grammarly", href: "https://www.grammarly.com/" },
  { name: "Wappalyzer", href: "https://www.wappalyzer.com/" },
  {
    name: "ColorZilla",
    href: "https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en",
  },
];

export const software = [
  { name: "Brave", href: "https://brave.com/" },
  { name: "Notion", href: "https://www.notion.so/desktop" },
  { name: "TickTick", href: "https://ticktick.com/download" },
  { name: "Cap ( Recording for Windows )", href: "https://cap.so" },
  {
    name: "OpenScreen ( Recording for Linux )",
    href: "https://openscreen.vercel.app/",
  },
  { name: "VLC", href: "https://www.videolan.org/vlc/" },
  {
    name: "Flow Launcher ( on Windows )",
    href: "https://www.flowlauncher.com/",
  },
  { name: "Ulauncher ( on Linux )", href: "https://ulauncher.io/" },
];
