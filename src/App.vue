<template>
  <v-app id="main" v-resize="onResize">
    <v-parallax
      :src="require('@/assets/img/parallax14.jpg')"
      :height="parallaxHeight"
    >
      <v-row align="center" justify="center">
        <v-col
          class="parallaxContainer d-flex justify-space-between flex-wrap"
          cols="12"
        >
          <div
            class="leftContainer d-flex flex-column justify-space-between flex-wrap"
          >
            <div class="topContainer">
              <h1 class="font-weight-medium">Matvey Kostukovsky</h1>
              <h3 class="font-weight-regular">Software Developer</h3>
            </div>

            <div class="bottomContainer d-flex align-center flex-wrap">
              <!-- <h4>
                <span class="font-weight-regular text-decoration-underline">
                  Expertise</span
                >:
              </h4> -->

              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-chip
                    v-bind="attrs"
                    v-on="on"
                    class="ma-2 d-flex align-center wiggle1"
                    color="light-green"
                  >
                    <v-icon left class="white--text"> mdi-apple </v-icon>
                    <span class="white--text">iOS</span>
                  </v-chip>
                </template>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>Swift</td>
                      </tr>
                      <tr>
                        <td>XCode</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-tooltip>

              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-chip
                    v-bind="attrs"
                    v-on="on"
                    class="ma-2 d-flex align-center wiggle2"
                    color="amber darken-2"
                  >
                    <v-icon left class="white--text"> mdi-web </v-icon>
                    <span class="white--text">Web</span>
                  </v-chip>
                </template>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>Vue</td>
                      </tr>
                      <tr>
                        <td>Node/Express</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-tooltip>

              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-chip
                    v-bind="attrs"
                    v-on="on"
                    class="ma-2 d-flex align-center wiggle3"
                    color="light-blue accent-2"
                  >
                    <v-icon left class="white--text">
                      mdi-image-filter-black-white
                    </v-icon>
                    <span class="white--text">UI/UX</span>
                  </v-chip>
                </template>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td>Sketch</td>
                      </tr>
                      <tr>
                        <td>Photoshop</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </v-tooltip>
            </div>
          </div>

          <div
            class="rightContainer d-flex justify-space-around align-center px-6 mx-n1"
          >
            <v-btn small color="white">
              <v-icon left> mdi-linkedin </v-icon>
              <span>LinkedIn</span>
            </v-btn>
            <v-btn small color="white">
              <v-icon left> mdi-github </v-icon><span>Github</span>
            </v-btn>
            <v-btn small color="white">
              <v-icon left> mdi-email </v-icon>
              <span>E-mail</span>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-parallax>

    <v-alert class="banner text-center"><h2>Recent Projects:</h2></v-alert>

    <v-expansion-panels v-model="panel" multiple focusable>
      <!-- PROJECT 1 -->
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>
            <strong>Solbe: </strong>
            Swift & Xcode, SwiftUI, Node/Express, SQL Server
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div
            class="d-flex justify-space-between flex-wrap flex-sm-nowrap py-5 px-0"
            fill-height
          >
            <div class="textContainer ma-3" width="70%">
              <p>
                Solbe is minimalistic social networking app designed to
                demonstrate that thoughts really do travel. As various friends
                and family members pop into your mind throughout the day, Solbe
                allows you to register these seemingly random occurences with a
                simple tap. When two people tap each other's names within a
                certain period of time a <em>connection</em> is recorded and
                stored in the database for later analysis and to be shown in the
                Personal Stats tab. Over time users are able to see who they're
                most <em>"connected"</em> to and how their telepathic skills
                stack up against those closest to them.
              </p>

              <p>
                The iOS app uses Apple's SwiftUI framework and connects to an
                Express API hosted on Heroku for login and account creation,
                registering thoughts, and to obtain the latest group, member,
                and stats data. The Express app utilizes the Tedious library in
                order to query the SQL Server database. Most of the app
                functionality is in the form of stored procedures which the
                Express app triggers.
              </p>
            </div>
            <div class="videoContainerContainer ma-3 elevation-5" width="30%">
              <div class="videoContainer">
                <video
                  height="500"
                  autoplay
                  loop
                  muted="muted"
                  poster="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.jpg"
                  class="block"
                >
                  <source
                    type="video/mp4"
                    src="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.mp4"
                  />

                  <source
                    type="video/webm"
                    src="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.webm"
                  />

                  Your browser does not support HTML5 video tag.

                  <a
                    href="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.gif"
                    >Click here to view original GIF</a
                  >
                </video>
              </div>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- PROJECT 2 -->
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>
            <strong>Piano Notes Trainer: </strong>
            Swift & Xcode, UIKit, AVFoundation; Sketch
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div
            class="d-flex justify-space-between flex-wrap flex-sm-nowrap py-5 px-0"
            fill-height
          >
            <div class="textContainer ma-3" width="70%">
              <p>
                The Piano Notes Trainer app is designed to supplement piano lessons and help students learn to find and recognize notes on the piano as well as the musical staff.

Piano Notes Trainer includes a LEARN section and an interactive PLAY SECTION.

The LEARN section consists of slides that introduce the student to the piano keyboard, as well as basic music theory and the fundamentals of music notation.

The PLAY section allows the students to practice their note-naming and note-finding skills in a game-like manner. The goal is to get the answers right consistently (just like a real piece of music would require) in order to earn points, stars, and pass levels.

There is a FREEPLAY section designed for teachers, parents, and more advanced students who need to customize the training session.
              </p>

              <p>
                The iOS app uses Apple's SwiftUI framework and connects to an
                Express API hosted on Heroku for login and account creation,
                registering thoughts, and to obtain the latest group, member,
                and stats data. The Express app utilizes the Tedious library in
                order to query the SQL Server database. Most of the app
                functionality is in the form of stored procedures which the
                Express app triggers.
              </p>
            </div>
            <div class="videoContainerContainer ma-3 elevation-5" width="30%">
              <div class="videoContainer">
                <video
                  height="500"
                  autoplay
                  loop
                  muted="muted"
                  poster="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.jpg"
                  class="block"
                >
                  <source
                    type="video/mp4"
                    src="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.mp4"
                  />

                  <source
                    type="video/webm"
                    src="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.webm"
                  />

                  Your browser does not support HTML5 video tag.

                  <a
                    href="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.gif"
                    >Click here to view original GIF</a
                  >
                </video>
              </div>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>


    <!-- PROJECT 3 -->
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>
            <strong>Gemrover eBay Template & Website: </strong>
            HTML5, CSS, and lots of flexbox
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div
            class="d-flex justify-space-between flex-wrap flex-sm-nowrap py-5 px-0"
            fill-height
          >
            <div class="textContainer ma-3" width="70%">
              <p>
                The Piano Notes Trainer app is designed to supplement piano lessons and help students learn to find and recognize notes on the piano as well as the musical staff.

Piano Notes Trainer includes a LEARN section and an interactive PLAY SECTION.

The LEARN section consists of slides that introduce the student to the piano keyboard, as well as basic music theory and the fundamentals of music notation.

The PLAY section allows the students to practice their note-naming and note-finding skills in a game-like manner. The goal is to get the answers right consistently (just like a real piece of music would require) in order to earn points, stars, and pass levels.

There is a FREEPLAY section designed for teachers, parents, and more advanced students who need to customize the training session.
              </p>

              <p>
                The iOS app uses Apple's SwiftUI framework and connects to an
                Express API hosted on Heroku for login and account creation,
                registering thoughts, and to obtain the latest group, member,
                and stats data. The Express app utilizes the Tedious library in
                order to query the SQL Server database. Most of the app
                functionality is in the form of stored procedures which the
                Express app triggers.
              </p>
            </div>
            <div class="videoContainerContainer ma-3 elevation-5" width="30%">
              <div class="videoContainer">
                <video
                  height="500"
                  autoplay
                  loop
                  muted="muted"
                  poster="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.jpg"
                  class="block"
                >
                  <source
                    type="video/mp4"
                    src="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.mp4"
                  />

                  <source
                    type="video/webm"
                    src="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.webm"
                  />

                  Your browser does not support HTML5 video tag.

                  <a
                    href="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.gif"
                    >Click here to view original GIF</a
                  >
                </video>
              </div>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- PROJECT 4 -->
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>
            <strong>Mashup - Local News Articles on Google Maps: </strong>
            Python & Flask, AJAX, jQuery, HTML & CSS, SQLite 3, Google Maps API
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div
            class="d-flex justify-space-between flex-wrap flex-sm-nowrap py-5 px-0"
            fill-height
          >
            <div class="textContainer ma-3" width="70%">
              <p>
                The Piano Notes Trainer app is designed to supplement piano lessons and help students learn to find and recognize notes on the piano as well as the musical staff.

Piano Notes Trainer includes a LEARN section and an interactive PLAY SECTION.

The LEARN section consists of slides that introduce the student to the piano keyboard, as well as basic music theory and the fundamentals of music notation.

The PLAY section allows the students to practice their note-naming and note-finding skills in a game-like manner. The goal is to get the answers right consistently (just like a real piece of music would require) in order to earn points, stars, and pass levels.

There is a FREEPLAY section designed for teachers, parents, and more advanced students who need to customize the training session.
              </p>

              <p>
                The iOS app uses Apple's SwiftUI framework and connects to an
                Express API hosted on Heroku for login and account creation,
                registering thoughts, and to obtain the latest group, member,
                and stats data. The Express app utilizes the Tedious library in
                order to query the SQL Server database. Most of the app
                functionality is in the form of stored procedures which the
                Express app triggers.
              </p>
            </div>
            <div class="videoContainerContainer ma-3 elevation-5" width="30%">
              <div class="videoContainer">
                <video
                  height="500"
                  autoplay
                  loop
                  muted="muted"
                  poster="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.jpg"
                  class="block"
                >
                  <source
                    type="video/mp4"
                    src="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.mp4"
                  />

                  <source
                    type="video/webm"
                    src="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.webm"
                  />

                  Your browser does not support HTML5 video tag.

                  <a
                    href="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.gif"
                    >Click here to view original GIF</a
                  >
                </video>
              </div>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

  <!-- PROJECT 5 -->
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>
            <strong>Finance - Stock Quotes & Trading: </strong>
            IEX Trading API, Python & Flask, SQLite 3 & phpLiteAdmin
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div
            class="d-flex justify-space-between flex-wrap flex-sm-nowrap py-5 px-0"
            fill-height
          >
            <div class="textContainer ma-3" width="70%">
              <p>
                The Piano Notes Trainer app is designed to supplement piano lessons and help students learn to find and recognize notes on the piano as well as the musical staff.

Piano Notes Trainer includes a LEARN section and an interactive PLAY SECTION.

The LEARN section consists of slides that introduce the student to the piano keyboard, as well as basic music theory and the fundamentals of music notation.

The PLAY section allows the students to practice their note-naming and note-finding skills in a game-like manner. The goal is to get the answers right consistently (just like a real piece of music would require) in order to earn points, stars, and pass levels.

There is a FREEPLAY section designed for teachers, parents, and more advanced students who need to customize the training session.
              </p>

              <p>
                The iOS app uses Apple's SwiftUI framework and connects to an
                Express API hosted on Heroku for login and account creation,
                registering thoughts, and to obtain the latest group, member,
                and stats data. The Express app utilizes the Tedious library in
                order to query the SQL Server database. Most of the app
                functionality is in the form of stored procedures which the
                Express app triggers.
              </p>
            </div>
            <div class="videoContainerContainer ma-3 elevation-5" width="30%">
              <div class="videoContainer">
                <video
                  height="500"
                  autoplay
                  loop
                  muted="muted"
                  poster="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.jpg"
                  class="block"
                >
                  <source
                    type="video/mp4"
                    src="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.mp4"
                  />

                  <source
                    type="video/webm"
                    src="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.webm"
                  />

                  Your browser does not support HTML5 video tag.

                  <a
                    href="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.gif"
                    >Click here to view original GIF</a
                  >
                </video>
              </div>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-expansion-panels>

    <v-speed-dial
      fixed
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab x-large>
          <v-icon v-if="fab"> mdi-close </v-icon>
          <img
            :src="require('@/assets/img/Matvey Kostukovsky stack.png')"
            class="photo"
          />
          <!-- <v-icon v-else> mdi-account-circle </v-icon> -->
        </v-btn>
      </template>
      <v-btn fab dark small color="green">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab dark small color="red">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-app>
</template>

<script>
export default {
  name: "App",

  // components: {
  // },

  data() {
    return {
      parallaxHeight: 200,
      panel: [],
      items: 5,
      direction: "top",
      fab: false,
      fling: false,
      hover: true,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: "scale-transition",
      windowSize: {
        x: 0,
        y: 0,
      },
    };
  },

  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    },
  },

  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    },
  },

  methods: {
    // Create an array the length of our items
    // with all values as true
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i);
    },
    // Reset the panel
    none() {
      this.panel = [];
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (window.innerWidth <= 558) {
        this.parallaxHeight = 290;
      } else {
        this.parallaxHeight = 260;
      }
      console.log(this.parallaxHeight);
    },
  },

  mounted() {
    this.onResize();
  },
};
</script>

<style>
#main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  /* border-radius: 10px !important;
  overflow: hidden; */
}

.parallaxContainer {
  height: 100%;
  color: rgb(58, 58, 58);
  /* display: -webkit-flex !important;
  display: flex !important;
  -webkit-justify-content: space-between !important;
  justify-content: space-between !important; */
}

.v-parallax__image-container {
  background-color: rgba(255, 181, 83, 0.12);
}

.v-parallax__image {
  /* max-width: 20% !important; */
  opacity: 0.17 !important;
  filter: blur(2px);
  /* top: -3382px; */
  /* left: -50%; */
}

.leftContainer {
  min-width: 300px;
}

.rightContainer {
  flex-direction: column;
  min-width: 157px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
}

.rightContainer:before {
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
  filter: blur(10px);
  margin: -20px;
}

.banner {
  height: 125px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  color: #4e4e4e !important;
  margin-bottom: 0 !important;
}

button span {
  line-height: 1.4;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
}

.photo {
  max-height: 110px;
  border-radius: 50%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transition: all 2.8s;
}

.videoContainerContainer {
  max-width: 281px;
  max-height: 494px;
}

.videoContainer {
  overflow: hidden;
}

.videoContainer video {
  transform: translateY(-2px);
}

.wiggle1 {
  -webkit-animation-name: wiggle1;
  -ms-animation-name: wiggle1;
  -ms-animation-duration: 2500ms;
  -webkit-animation-duration: 2500ms;
  -webkit-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
  -ms-animation-timing-function: ease-in-out;
}

.wiggle2 {
  -webkit-animation-name: wiggle2;
  -ms-animation-name: wiggle2;
  -ms-animation-duration: 2900ms;
  -webkit-animation-duration: 2900ms;
  -webkit-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
  -ms-animation-timing-function: ease-in-out;
}

.wiggle3 {
  -webkit-animation-name: wiggle3;
  -ms-animation-name: wiggle3;
  -ms-animation-duration: 3450ms;
  -webkit-animation-duration: 3450ms;
  -webkit-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
  -ms-animation-timing-function: ease-in-out;
}

@-webkit-keyframes wiggle1 {
  0% {
    -webkit-transform: rotate(1deg);
  }
  5% {
    -webkit-transform: rotate(-2deg);
  }
  10% {
    -webkit-transform: rotate(2deg);
  }
  15% {
    -webkit-transform: rotate(-1deg);
  }
  20% {
    -webkit-transform: rotate(0deg);
  }
}

@-ms-keyframes wiggle1 {
  0% {
    -ms-transform: rotate(0.1deg);
  }
  5% {
    -ms-transform: rotate(-0.2deg);
  }
  10% {
    -ms-transform: rotate(0.2deg);
  }
  15% {
    -ms-transform: rotate(-0.1deg);
  }
  20% {
    -ms-transform: rotate(0deg);
  }
}

@keyframes wiggle1 {
  0% {
    transform: rotate(1deg);
  }
  5% {
    transform: rotate(-2deg);
  }
  10% {
    transform: rotate(2deg);
  }
  15% {
    transform: rotate(-1deg);
  }
  20% {
    transform: rotate(0deg);
  }
}

@-webkit-keyframes wiggle2 {
  40% {
    -webkit-transform: translateY(0.1px);
  }
  45% {
    -webkit-transform: translateX(-1px);
  }
  50% {
    -webkit-transform: translateX(0.5px);
  }
  55% {
    -webkit-transform: translateX(-0.5px);
  }
  60% {
    -webkit-transform: translateX(0px);
  }
}

@-ms-keyframes wiggle2 {
  40% {
    -ms-transform: translateY(0.1px);
  }
  45% {
    -ms-transform: translateX(-1px);
  }
  50% {
    -ms-transform: translateX(0.5px);
  }
  55% {
    -ms-transform: translateX(-0.5px);
  }
  60% {
    -ms-transform: translateX(0px);
  }
}

@keyframes wiggle2 {
  40% {
    transform: translateY(0.1px);
  }
  45% {
    transform: translateX(-1px);
  }
  50% {
    transform: translateX(0.5px);
  }
  55% {
    transform: translateX(-0.5px);
  }
  60% {
    transform: translateX(0px);
  }
}

@-webkit-keyframes wiggle3 {
  80% {
    -webkit-transform: translateY(1px);
  }
  85% {
    -webkit-transform: translateY(-1px);
  }
  90% {
    -webkit-transform: translateY(0.5px);
  }
  95% {
    -webkit-transform: translateY(-0.5px);
  }
  100% {
    -webkit-transform: translateY(0px);
  }
}

@-ms-keyframes wiggle3 {
  80% {
    -ms-transform: translateY(1px);
  }
  85% {
    -ms-transform: translateY(-1px);
  }
  90% {
    -ms-transform: translateY(0.5px);
  }
  95% {
    -ms-transform: translateY(-0.5px);
  }
  100% {
    -ms-transform: translateY(0px);
  }
}

@keyframes wiggle3 {
  80% {
    transform: translateY(1px);
  }
  85% {
    transform: translateY(-1px);
  }
  90% {
    transform: translateY(0.5px);
  }
  95% {
    transform: translateY(-0.5px);
  }
  100% {
    transform: translateY(0px);
  }
}

.v-expansion-panel-header {
  min-height: 97px !important;
}

@media screen and (max-width: 558px) {
  #main {
    padding: 0px;
  }
  .leftContainer {
    width: 100%;
  }
  .bottomContainer {
    width: 100%;
    justify-content: space-around;
  }
  .rightContainer {
    flex-direction: row;
    width: 100%;
  }
}

@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .parallaxContainer {
      height: 236px !important;
    }
  }
}
</style>
