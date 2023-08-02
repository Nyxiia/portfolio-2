import Image from "next/image";
import BordrApp from "../public/images/bordr-app.png";
import FintechExploration from "../public/images/fintech-exploration-2.png";

const Projects = () => (
  <>
    <div id="container01" className="container columns full screen">
      <div className="wrapper">
        <div
          className="inner"
          data-onvisible-trigger="1"
          data-reorder="0,1"
          data-reorder-breakpoint="medium"
        >
          <div>
            <div id="image04" className="style3 image full">
              <span className="frame">
                <Image src={BordrApp} priority={true} alt="Bordr mobile app" />
              </span>
            </div>
          </div>
          <div>
            <h2 id="text07" className="style3">
              <a href="https://www.behance.net/gallery/149189779/Bordr-Meeting-App">
                Bordr
              </a>
            </h2>
            <p id="text04" className="style2">
              Bordr is a social app designed to help you find new friends based
              on your gaming preferences. Designed and prototyped in Figma and
              developed using React Native and Expo. Borrowing successful
              elements from platforms like Tinder and Bumble, such as the
              &quot;interests &quot;feature, Bordr differs by putting the
              spotlight on shared games and interests rather than individual
              profiles.
            </p>
            <div id="video01" className="video">
              <div className="frame">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/_jrC4McrBO8?autoplay=0&amp;rel=0&amp;loop=0&amp;controls=1&amp;cc_load_policy=0"
                  allowFullScreen="1"
                ></iframe>
              </div>
            </div>
            <ul id="buttons13" className="style1 buttons">
              <li>
                <a
                  href="https://www.behance.net/gallery/149189779/Bordr-Meeting-App"
                  className="button n01"
                >
                  <svg>
                    <use xlinkHref="#icon-67ad41ecc66a1b1cd00d0d3b20c00017"></use>
                  </svg>
                  <span className="label">More info</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="container06" className="container columns full screen">
      <div className="wrapper">
        <div
          className="inner"
          data-onvisible-trigger="1"
          data-reorder="1,0"
          data-reorder-breakpoint="medium"
        >
          <div>
            <h2 id="text11" className="style3">
              <a href="https://www.behance.net/gallery/165342737/UXUI-FinTech-Exploration?">
                Fintech Exploration
              </a>
            </h2>
            <p id="text12" className="style2">
              An exploration into a potential FinTech product, designed and
              prototyped in Figma. This project is a method of streamlining how
              to automate and manage payment requests and recurring bills in
              larger organisations.
            </p>
            <ul id="buttons06" className="style1 buttons">
              <li>
                <a
                  href="https://www.behance.net/gallery/165342737/UXUI-FinTech-Exploration?"
                  className="button n01"
                >
                  <svg>
                    <use xlinkHref="#icon-67ad41ecc66a1b1cd00d0d3b20c00017"></use>
                  </svg>
                  <span className="label">More info</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div
              id="image06"
              className="style2 image full"
              data-position="center"
            >
              <span className="frame">
                <Image
                  src={FintechExploration}
                  alt="Fintech mobile exploration"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Projects;
