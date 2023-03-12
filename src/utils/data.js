import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { MdWorkspacesOutline } from "react-icons/md";
export const aboutExperience = [
  {
    name: "Frontend Skills",
    skills: "HTML, CSS, Javascript, React, Bootstrap, Tailwind",
    icon: MdWorkspacesOutline,
    bg: "#286F6C",
  },
  {
    name: "Backend & Other Tech Skills",
    skills: "Ruby on Rails, Java, SQL, Docker, Git",
    icon: HiOutlineDesktopComputer,
    bg: "#EEC048",
  },
  {
    name: "Professional Skills",
    skills: "Project management, Adaptability",
    icon: BsPeople,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "A motivated Developer with formerly 5+ years’ project management experience.",
  "Using proven skills in coding, data and complex problem-solving to meet business needs as a developer.",
];

export const comments = [
  {
    name: "MINESWEEPER",
    post: "javascript",
    comment:
      "Minesweeper game using Ruby on Rails and Javascript",
    img: "https://images.unsplash.com/photo-1580234831315-438a4813685c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",
  },
  {
    name: "SNOW",
    post: "pure css",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
  },
  {
    name: "MY BANK",
    post: "java",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "https://images.unsplash.com/photo-1515974256630-babc85765b1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "MONOPOLY GAME",
    post: "javascript",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const projectInfo =[
   {
    name: "Gearless",
    src: "https://github.com/the-ham/Gearless",
    tag1: "Ruby on Rails",
    tag2: "Boostrap",
    intro: "Online marketplace service aiding users to rent or lease camping and outdoor gears.",
    bg: "https://images.unsplash.com/photo-1511715885542-a3713331633d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Takestock",
    src: "http://www.takestock.dev",
    tag1: "Ruby on Rails",
    tag2: "Tailwind",
    intro: "One-stop website of social media information for stock traders or investors.",
    bg: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "X-mall",
    src: "https://github.com/CaaaseyD/X-mall",
    tag1: "Java",
    tag2: "Springboot",
    intro: "E-commerce platform for B2C businesses.(under construction)",
    bg: "https://images.unsplash.com/photo-1602532381225-eec578361933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80",
  },
];
