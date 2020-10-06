import React, { useState } from "react"
import { Link } from "gatsby"
import { AnimatePresence, motion, useTapGesture } from "framer-motion"

// Styled Component
import {
  Nav,
  NavHeader,
  NavList,
  NavFooter,
  CloseNav,
  NavVideos,
} from "../styles/navigationStyles"
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"

// Icons
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons"

// routes
const navRoutes = [
  {
    id: 0,
    title: "not humble",
    path: "/not-humble",
    video: "featured-video.mp4",
  },
  {
    id: 1,
    title: "bleeping easy",
    path: "/bleeping-easy",
    video: "easy.mp4",
  },
  {
    id: 2,
    title: "make it zero",
    path: "/make-it-zero",
    video: "make-it-zero.mp4",
  },
  {
    id: 3,
    title: "it takes an island",
    path: "/it-takes-an-island",
    video: "it-takes-an-island.mp4",
  },
  {
    id: 4,
    title: "50 beaches",
    path: "/50-beaches",
    video: "50-beaches.mp4",
  },
]

const Navigation = ({ onMouse, toggleMenu, setToggleMenu }) => {
  const [VideoHover, setVideoHover] = useState({
    show: false,
    video: "featured-video.mp4",
    id: "0",
  })

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? "0" : "-100%" }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h3>Projects</h3>
                  <CloseNav
                    onClick={() => {
                      setToggleMenu(!toggleMenu)
                    }}
                    onMouseEnter={() => onMouse("pointer")}
                    onMouseLeave={() => onMouse("")}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map(route => {
                    return (
                      <motion.li
                        key={route.id}
                        onHoverStart={() =>
                          setVideoHover({
                            show: true,
                            video: route.video,
                            id: route.id,
                          })
                        }
                        onHoverEnd={() =>
                          setVideoHover({
                            show: false,
                            video: route.video,
                            id: route.id,
                          })
                        }
                        onMouseEnter={() => onMouse("pointer")}
                        onMouseLeave={() => onMouse("")}
                      >
                        <Link to={`/project/${route.path}`}>
                          <motion.div
                            className="link"
                            initial={{
                              x: -52,
                            }}
                            whileHover={{
                              x: 0,
                              transition: {
                                duration: 0.4,
                                ease: [0.6, 0.05, -0.01, 0.9],
                              },
                            }}
                          >
                            <div className="arrow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 101 57"
                              >
                                <path
                                  d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                  fill="#FFF"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <span>{route.title}</span>
                          </motion.div>
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </NavList>
              <NavFooter>
                <Container>
                  <Flex spaceBetween>
                    <FooterContent>
                      <p>info@furrow.studio</p>
                    </FooterContent>
                    <FooterContent wider>
                      <p>902.315.1279</p>
                    </FooterContent>
                    <FooterSocial>
                      <a
                        onMouseEnter={() => onMouse("pointer")}
                        onMouseLeave={() => onMouse("")}
                        href="/"
                      >
                        <Instagram />
                      </a>
                      <a
                        onMouseEnter={() => onMouse("pointer")}
                        onMouseLeave={() => onMouse("")}
                        href="/"
                      >
                        <Facebook />
                      </a>
                      <a
                        onMouseEnter={() => onMouse("pointer")}
                        onMouseLeave={() => onMouse("")}
                        href="/"
                      >
                        <Vimeo />
                      </a>
                    </FooterSocial>
                  </Flex>
                </Container>
              </NavFooter>
              <NavVideos>
                <motion.div
                  className="reveal"
                  animate={{ width: VideoHover.show ? 0 : "100%" }}
                ></motion.div>
                <motion.div
                  className="video"
                  // animate={{ left: VideoHover.show ? "15%" : "200%" }}
                >
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={VideoHover.id}
                      src={require(`../assets/video/${VideoHover.video}`)}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      loop
                      autoPlay
                    ></motion.video>
                  </AnimatePresence>
                </motion.div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
