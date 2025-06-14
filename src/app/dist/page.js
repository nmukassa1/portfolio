"use client";
"use strict";
exports.__esModule = true;
var About_1 = require("./components/About");
var Projects_1 = require("./components/Projects");
var gsap_1 = require("gsap");
var react_1 = require("react");
function Home() {
    react_1.useEffect(function () {
        // Get html elements
        var headerLinks = document.querySelectorAll(".header-link");
        var aboutParagraph = document.querySelector("#aboutParagraph");
        var projects = document.querySelectorAll(".project");
        var projectContainer = document.querySelector("#projects-container");
        // Initialise GSAP timeline
        var tl = gsap_1.gsap.timeline();
        tl.fromTo(headerLinks, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.8 })
            .fromTo(aboutParagraph, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
            .fromTo(projectContainer, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
            .fromTo(projects, { opacity: 0, y: -20 }, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.1
        }, "<");
    }, []);
    return (React.createElement("div", { id: "home-page", className: "" },
        React.createElement(About_1["default"], null),
        React.createElement(Projects_1["default"], null)));
}
exports["default"] = Home;
