import React, { useState, useEffect } from "react";
import ClickMe from "./ClickMe";
import "./Laptop.css";

const Laptop = ({ project }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  const handleClick = (e) => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="click-me">
        <ClickMe />
      </div>
      <svg
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          imageRendering: "optimizeQuality",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        viewBox="0 0 512 512"
        className={modal ? "laptop-modal" : "laptop"}
        onClick={handleClick}
        space="preserve"
      >
        <defs></defs>
        <g id="Layer_x0020_1" className="actual-laptop">
          <rect className="fil0" y="0.000377953" />

          <g id="_275676976">
            <rect
              className="fil1"
              height="14.3085"
              id="_394806096"
              width="332.046"
              x="89.1175"
              y="343.602"
            />
            <path
              className="fil2"
              d="M94.8858 136.354l320.496 0c3.17254,0 5.76832,2.59616 5.76832,5.76832l0 205.45c0,3.17254 -2.59616,5.76832 -5.76832,5.76832l-320.496 0c-3.17254,0 -5.76832,-2.5954 -5.76832,-5.76832l0 -205.45c0,-3.17254 2.59578,-5.76832 5.76832,-5.76832z"
              id="_394805568"
            />
            {modal ? (
              <rect
                className="screen"
                id="_394805856"
                x="99.7316"
                y="148.522"
                opacity="0"
              />
            ) : (
              <>
                <clipPath id="screen">
                  <rect className="screen" id="_394805856" x="0" y="148.522" />
                </clipPath>
                <image
                  className="screen-image"
                  href={project.imageUrl}
                  clipPath="url(#screen)"
                />
              </>
            )}
            <g>
              <rect
                className="fil4"
                height="10.9501"
                id="_394805928"
                width="410.281"
                x="50.86"
                y="357.853"
              />
              <path
                className="fil5"
                d="M227.684 357.853l56.6317 0 0 1.70608c0,2.10784 -1.7246,3.83244 -3.83244,3.83244l-48.9672 0c-2.10784,0 -3.83244,-1.7246 -3.83244,-3.83244l0 -1.70608 0.000377953 0z"
                id="_394805712"
              />
              <path
                className="fil6"
                d="M256 368.803l204.626 0c0.0941103,0 0.170457,0.0767244 0.170457,0.170457 0,3.18047 -14.0413,5.96825 -22.3797,6.67276l-182.417 0 -182.417 0c-8.3384,-0.704126 -22.3797,-3.49191 -22.3797,-6.67276 0,-0.0937323 0.0767244,-0.170457 0.170457,-0.170457l204.626 0 0.000755906 0z"
                id="_394805496"
              />
            </g>
            <g>
              <circle
                className="fil7"
                id="_275677048"
                r="1.2"
                transform="matrix(1.30067 1.32352 -1.32373 1.30047 255.134 142.182)"
              />
              <circle
                className="fil8"
                id="_275677096"
                r="1.2"
                transform="matrix(1.00675 1.02443 -1.02459 1.00659 255.134 142.182)"
              />
              <path
                className="fil9"
                d="M256.364 140.973c0.667087,0.678803 0.657638,1.76995 -0.0215433,2.43704 -0.12548,0.123591 -0.265323,0.223748 -0.414236,0.300851 -0.48,-0.256252 -0.895748,-0.718489 -1.12743,-1.31943 -0.258142,-0.669355 -0.231685,-1.36479 0.0188976,-1.90564 0.544252,-0.100535 1.12706,0.0623622 1.54432,0.486803l0 0.000377953z"
                id="_275676280"
              />
            </g>
          </g>
        </g>
      </svg>
      <div
        onClick={handleClick}
        className={modal ? "video-modal" : "hide-video"}
      >
        <div className="exit-video" onClick={() => setModal(false)}>
          &#9746;
        </div>
        {modal ? (
          <iframe
            src={project.videoLink}
            title="description"
            className={modal ? "video" : "hide-video"}
            allow="autoplay"
            allowfullscreen
            frameborder="0"
            pauseVideo={!modal ? "true" : "false"}
            allowFullScreen
          ></iframe>
        ) : null}
      </div>
    </div>
  );
};

export default Laptop;
