import { useState, useEffect, useRef } from "react";
import "./App.css";

function FolderView({ title, folders, openWindow }) {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="folder-view">
      <h2>{title}</h2>
      <div className="folder-list">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="subfolder-icon"
            onClick={() => {
              if (isMobile) {
                openWindow(
                  folder.items
                    ? {
                        id: folder.id,
                        name: folder.name,
                        content: (
                          <FolderView
                            title={folder.name}
                            folders={folder.items}
                            openWindow={openWindow}
                          />
                        ),
                      }
                    : folder
                );
              }
            }}
            onDoubleClick={() => {
              if (!isMobile) {
                openWindow(
                  folder.items
                    ? {
                        id: folder.id,
                        name: folder.name,
                        content: (
                          <FolderView
                            title={folder.name}
                            folders={folder.items}
                            openWindow={openWindow}
                          />
                        ),
                      }
                    : folder
                );
              }
            }}
          >
            <img src={folder.img} alt={folder.name} className="icon-img" />
            <span className="icon-text">{folder.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}





export default function RetroDesktop() {
  const [openedWindows, setOpenedWindows] = useState([]);
  const [windowPositions, setWindowPositions] = useState({});

  const icons = [
    {
      id: "about",
      name: "about_me.txt",
      img: "/icons/txt.png",
      content: (
        <div>
          <h2>About Me</h2>
          <p>Hey, I'm Oli.
          I'm a uni student who loves making stuff. 
          I’m also into photography, basketball, and cars.</p>
        </div>
      ),
    },
    {
      id: "Sendometer",
      name: "Sendometer",
      img: "/icons/folder.png",
      content: (
        <div>
          <h2>Sendometer</h2>
          <p>Here are some photos from the Sendometer project:</p>
          <div className="image-gallery">
            <img
              src="/Sendometer/send1.jpeg"
              alt="Sendometer screenshot 1"
              className="project-image"
            />
            <img
              src="/Sendometer/send2.jpeg"
              alt="Sendometer photo 2"
              className="project-image"
            />
          </div>
          <h4>This project used</h4>
          <ul>
            <li>ESP32</li>
            <li>MPU6050 (3-axis gyroscope and a 3-axis accelerometer)</li>
            <li>BMP388 (Pressure sensor for altitude)</li>
            <li>GY-NEO6MV2 (GPS)</li>
            <li>SD Card Storage board</li>
            <li>RGB LED (Indicate status)</li>
          </ul>
          <h4>What is it?</h4>
          <p>The goal of this project was to capture key driving metrics—such as speed, G-forces, 
            acceleration and deceleration, altitude changes, and GPS position to analyse driving performance. 
            The Sendometer records this data onto an SD card during the drive. Afterward, the card could be 
            plugged into a computer, where the data would be processed and visualized through a user friendly Streamlit interface.</p>

            <div className="image-gallery">
            <img
              src="/Sendometer/screenshot1.png"
              alt="Sendometer screenshot 1"
              className="project-image"
            />
            <img
              src="/Sendometer/screen shot2.png"
              alt="Sendometer photo 2"
              className="project-image"
            />
          </div>
        </div>
      ),
    },
    {
      id: "connect4",
      name: "3D connect 4",
      img: "/icons/folder.png",
      content: (
        <div>
          <h2>3D connect 4</h2>
          <div className="image-gallery">
            <img
              src="/3D connect 4/Game2.png"
              alt="game photo 2"
              className="project-image"
            />
            <img
              src="/3D connect 4/Game1.png"
              alt="game photo 1"
              className="project-image"
            />
          </div>
          <h3>What is it?</h3>
          <p>This is a 3D version of Connect Four, featuring a 4x4x4 grid where players aim to get four pieces in a row, 
            whether horizontally, vertically, or diagonally within a single layer or across multiple layers. The game offers two modes: 
            you can play with a friend in two player mode or challenge an AI opponent.
             The AI is powered by the minimax algorithm, which evaluates potential moves to provide a competitive challenge.</p>

          <a href="https://github.com/olibusiness/3D-Connect-4" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      ),
    },
    {
      id: "NBA salary predictor",
      name: "NBA salary predictor",
      img: "/icons/folder.png",
      content: (
        <div>
          <h2>NBA Salary Predictor</h2>
          <p>This project aimed to predict NBA players salaries based on historical player statistics. 
            The process involved data manipulation and the application of a Random 
            Forest regression model to make salary predictions.</p>

            <a href="https://github.com/olibusiness/Nba_AI" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      ),
    },
    {
      id: "Reddit Car Spotter",
      name: "Reddit Car Spotter",
      img: "/icons/folder.png",
      content: (
        <div>
          <h2>Reddit Car Spotter</h2>
            <p>This project scrapes the r/spotted subreddit using the PRAW API to find posts tagged as "unknown", 
            capture a screenshot of the unidentified car, upload it to Google Lens for identification, 
            and then post the results as a comment on the original thread.</p>
            <a href="https://github.com/olibusiness/Reddit-Car-Spotting" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      ),
    },
    {
      id: "extra",
      name: "Extras",
      img: "/icons/folder.png",
      items: [
        {
          id: "rocket-launch-tracker",
          name: "Rocket Launch Tracker",
          img: "/icons/folder.png",
          content: (
            <div>
              <h2>Rocket Launch Tracker</h2>
              <p>This is one of my first websites I made in 2022 when I was first
                learning how to code
              </p>
              <a href="https://github.com/olibusiness/Mission-control" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <br></br>
          <a href="https://space-launch.pages.dev" target="_blank" rel="noopener noreferrer">
            Website
          </a>
            </div>
          ),
        },
        {
          id: "ENG1011",
          name: "ENG1011 Bridge",
          img: "/icons/folder.png",
          content: (
            <div>
              <h2>ENG1011 Bridge</h2>
              <div className="image-gallery">
            <img
              src="/ENG1011/bridge.png"
              alt="screenshot of complete bridge drawing"
              className="project-image"
            />
            <img
              src="/ENG1011/section b.png"
              alt="screenshot of section b cad"
              className="project-image"
            />
          </div>
              <p>This bridge design was part of a project for my ENG1011 class, where my group of four was tasked with creating a bridge that met specific engineering requirements. I was primarily responsible for the CAD design and modeling throughout the project.</p>

            </div>
          ),
        },
        {
          id: "Sale man",
          name: "Traveling Salesman Problem",
          img: "/icons/folder.png",
          content: (
            <div>
              <h2>Heuristic Solver to TSP</h2>
              <p>This project, completed as part of the VCE Algorithmics course,
                 focused on solving a variety of computational problems through algorithm design and implementation.
                  I used Dijkstra’s algorithm to find shortest paths,
                   and initially approached the Traveling Salesman Problem with a combination of the Floyd Warshall algorithm and brute force permutations. 
                   To improve efficiency on larger inputs, I developed a modified simulated annealing algorithm, reducing computation time while maintaining solution quality.</p>
              <a href="https://github.com/olibusiness/2024-Algorithmics" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </div>
          ),
        },
      ],
    }
  ];

  const dockItems = [
    {
      id: "linkedin",
      name: "LinkedIn",
      img: "/icons/linkedin.webp",
      content: (
        <div>
          <h2>LinkedIn</h2>
          <p>Check out my LinkedIn profile:</p>
          <a href="https://www.linkedin.com/in/oliver-weinzettl-4bb757251/" target="_blank" rel="noopener noreferrer">
            linkedin.com/Oliver-Weinzettl
          </a>
        </div>
      ),
    },
    {
      id: "Github",
      name: "Github",
      img: "/icons/Github.png",
      content: (
        <div>
          <h2>Github</h2>
          <p>Check out my Github profile:</p>
          <a href="https://github.com/olibusiness" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      ),
    },
    {
      id: "email",
      name: "Email Log",
      img: "/icons/new mail.png",
      content: (
        <div>
          <h2>Email</h2>
          <p>You can contact me at:</p>
          <p><strong>o.weinzettl@gmail.com</strong></p>
        </div>
      ),
    },
    {
      id: "Resume",
      name: "Resume",
      img: "/icons/txt.png",
      content: (
        <div>
          <h2>Download my Resume here</h2>
          <a href="/Resume.pdf" download="Oliver Weinzettl Resume">Download PDF</a>
        </div>
      ),
    },
    {
      id: "education",
      name: "Education",
      img: "/icons/book.png",
      content: (
        <div>
          <h2>Education</h2>
          <p>I’m currently studying engineering at Monash University and love learning by doing hands on projects.</p>
        </div>
      ),
    },
    {
      id: "Experience",
      name: "Experience",
      img: "/icons/wrench.png",
      content: (
        <div>
          <h2>Experience</h2>
          <p><strong>Monash Connected Autonomous Vehicle (MCAV):</strong></p>
          <p>I'm a Software engineering team member in the Intelligent Transport Systems (ITS) sub team at MCAV, 
            where I’ve been getting hands on experience with electronics and software development.</p>
        </div>
      ),
    },
    {
      id: "Trash",
      name: "Trash",
      img: "/icons/trash.png",
      items: [
        {
          id: "joke",
          name: "move to trash.txt",
          img: "/icons/txt.png",
          content: (
            <div>
              {/* <h2>Move To Trash.txt</h2> */}
              <p>Already in trash HAHA!</p>
            </div>
          ),
        },
        {
          id: "old website",
          name: "old website",
          img: "/icons/folder.png",
          content: (
            <div>
              <h2>old website</h2>
              <p>My old portfolio <a href="https://oliver-w.pages.dev/">website</a> when I was set on becoming a frontend web developer back in 2022</p>
            </div>
          ),
        },
      ],
    }

  ];

  const getTime = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const getDate = () => {
    const now = new Date();
    const month = now.toLocaleString("default", { month: "short" });
    const day = now.getDate();
    return `${month} ${day}, 2007`;
  };

  const [time, setTime] = useState(getTime());
  const [date, setDate] = useState(getDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
      setDate(getDate());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  function openWindow(windowData) {
  setOpenedWindows((prev) => {
    const exists = prev.find((w) => w.id === windowData.id);
    if (exists) {
      // Bring existing window to front (move it to end of array)
      const others = prev.filter((w) => w.id !== windowData.id);
      return [...others, exists];
    }
    // New window, add it
    return [...prev, windowData];
  });

  setWindowPositions((pos) => {
    if (pos[windowData.id]) return pos;
    const offset = Object.keys(pos).length * 30;
    return {
      ...pos,
      [windowData.id]: { x: 60 + offset, y: 80 + offset },
    };
  });
  }


  function closeWindow(id) {
    setOpenedWindows((prev) => prev.filter((w) => w.id !== id));
    setWindowPositions((pos) => {
      const newPos = { ...pos };
      delete newPos[id];
      return newPos;
    });
  }

  function bringToFront(id) {
    setOpenedWindows((prev) => {
      const windowToBring = prev.find((w) => w.id === id);
      if (!windowToBring) return prev;
      const others = prev.filter((w) => w.id !== id);
      return [...others, windowToBring];
    });
  }

  const dragInfo = useRef({ isDragging: false, startX: 0, startY: 0, windowId: null });

  function onMouseDown(e, id) {
    dragInfo.current = {
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      windowId: id,
    };
    bringToFront(id);
  }

  function onMouseMove(e) {
    if (!dragInfo.current.isDragging) return;

    const { startX, startY, windowId } = dragInfo.current;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    setWindowPositions((pos) => {
      const currentPos = pos[windowId];
      if (!currentPos) return pos;

      return {
        ...pos,
        [windowId]: {
          x: currentPos.x + dx,
          y: currentPos.y + dy,
        },
      };
    });

    dragInfo.current.startX = e.clientX;
    dragInfo.current.startY = e.clientY;
  }

  function onMouseUp() {
    dragInfo.current.isDragging = false;
  }

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  useEffect(() => {
    if (openedWindows.length === 0) {
      openWindow({
        id: "intro",
        name: "welcome.txt",
        content: (
          <div>
            {window.innerWidth <= 768 ? (
              <>
                <p>Thanks for visiting my portfolio. I am Oliver, an engineering
              student at Monash! click on icons to explore my projects and work.</p>
                <p style={{ marginTop: "1em" }}>
                  For the best desktop experience, open this website on your <strong>computer</strong>. Click the <strong>✕</strong> in the corner to close this window.
                </p>
              </>
            ) : (
              <p>Thanks for visiting my portfolio. I am Oliver, an engineering
              student at Monash! Double click icons to explore my projects and work.</p>
            )}
          </div>
        ),
      });
    }
  }, []);

  return (
    <div className="desktop">
      {/* Top Dock */}
      <div className="dock top-dock">
        <div className="menu">🍎 Desktop</div>
        <div className="clock">
          {date} — {time}
        </div>
      </div>

      {/* Right-Side Desktop Icons */}
      <div className="icon-column">
        {icons.map((icon) => (
      <div
        key={icon.id}
        onClick={() => {
          const isMobile = window.innerWidth <= 768;
          if (isMobile) {
            openWindow(
              icon.items
                ? {
                    id: icon.id,
                    name: icon.name,
                    content: (
                      <FolderView
                        title={icon.name}
                        folders={icon.items}
                        openWindow={openWindow}
                      />
                    ),
                  }
                : icon
            );
          }
        }}
        onDoubleClick={() => {
          const isMobile = window.innerWidth <= 768;
          if (!isMobile) {
            openWindow(
              icon.items
                ? {
                    id: icon.id,
                    name: icon.name,
                    content: (
                      <FolderView
                        title={icon.name}
                        folders={icon.items}
                        openWindow={openWindow}
                      />
                    ),
                  }
                : icon
            );
          }
        }}
        className="desktop-icon"
      >
        <img src={icon.img} alt={icon.name} className="icon-img" />
        <span className="icon-text">{icon.name}</span>
      </div>

    ))}

      </div>

      {/* Bottom Dock Icons */}
      <div className={`dock bottom-dock ${window.innerWidth <= 515 && openedWindows.length > 0 ? 'hidden' : ''}`}>

       {dockItems.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            if (item.items) {
              openWindow({
                id: item.id,
                name: item.name,
                content: (
                  <FolderView
                    title={item.name}
                    folders={item.items}
                    openWindow={openWindow}
                  />
                ),
              });
            } else {
              openWindow(item);
            }
          }}
          className="dock-icon"
          data-tooltip={item.name}
        >
          <img src={item.img} alt={item.name} className="icon-img" />
          <span className="dock-label">{item.name}</span>
        </div>
      ))}

      </div>

      {/* Render all opened windows */}
      {openedWindows.map((window, index) => {
        const pos = windowPositions[window.id] || { x: 60, y: 80 };
        return (
          <div
            key={window.id}
            id={window.id}
            className="window"
            style={{
              top: pos.y,
              left: pos.x,
              position: "absolute",
              cursor:
                dragInfo.current.isDragging &&
                dragInfo.current.windowId === window.id
                  ? "grabbing"
                  : "default",
              zIndex: 100 + index,
            }}
            onMouseDown={() => bringToFront(window.id)}
          >
            <div
              className="window-header"
              onMouseDown={(e) => {
                e.stopPropagation();
                onMouseDown(e, window.id);
              }}
              style={{ cursor: "grab", userSelect: "none" }}
            >
              <span className="window-title">{window.name}</span>
              <button
                className="close-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  closeWindow(window.id);
                }}
              >
                X
              </button>
            </div>
            <div className="window-content">{window.content}</div>
          </div>
        );
      })}
    </div>
  );
}
