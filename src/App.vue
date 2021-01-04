<template>
  <v-app id="main" v-resize="onResize" class="mt-md-5">
    <!-- HEADER -->
    <v-parallax
      :src="require('@/assets/img/parallax19.jpg')"
      :height="parallaxHeight"
      fade-img-on-scroll
      scroll-target="#firstProject"
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
              <h1 class="font-weight-medium" id="myName">Matvey Kostukovsky</h1>
              <h3 class="font-weight-regular" id="myTitle">Software Developer</h3>
            </div>

            <div class="bottomContainer">
              <!-- <h4>
                <span class="font-weight-regular text-decoration-underline">
                  Expertise</span
                >:
              </h4> -->

              <v-tooltip :bottom="showTooltipOnTop" :left="!showTooltipOnTop">
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

                    <h4>Languages:</h4>
                    <p>Swift, Objective C</p>

                    <h4>Frameworks:</h4>
                    <p>UIKit, Cocoa, SwiftUI, Combine, CoreData, AVFoundation, AudioKit, Alamofire, CryptoKit</p>

                    <h4>Tools:</h4>
                    <p class="mb-0">Xcode, Simulator, TestFlight</p>

                </div>
              </v-tooltip>

              <v-tooltip :bottom="showTooltipOnTop" :left="!showTooltipOnTop">
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

                    <h4>Languages:</h4>
                    <p>JavaScript, Python, HTML, CSS/SASS/SCSS</p>

                    <h4>Frameworks:</h4>
                    <p>Vue, Meteor, Django, Vuetify, PrimeVue, Bootstrap</p>

                    <h4>Back-End & Tools:</h4>
                    <p class="mb-0">Node & Express, Git, Docker, Postman</p>

                </div>
              </v-tooltip>

              <v-tooltip :bottom="showTooltipOnTop" :left="!showTooltipOnTop">
                <template v-slot:activator="{ on, attrs }">
                  <v-chip
                    v-bind="attrs"
                    v-on="on"
                    class="ma-2 d-flex align-center wiggle3"
                    color="light-blue accent-2"
                  >
                    <v-icon left class="white--text">
                      mdi-database-check
                    </v-icon>
                    <span class="white--text">Data</span>
                  </v-chip>
                </template>
                <div>

                    <h4>Database:</h4>
                    <p>SQL Server, MongoDB, Firebase, PostgreSQL, SQLite</p>

                    <h4>Tools:</h4>
                    <p class="mb-0">SSMS, Azure Data Studio, Studio3T</p>

                </div>
              </v-tooltip>
            </div>
          </div>

          <div
            class="rightContainer d-flex justify-space-around align-center px-sm-6 mx-n1"
          >
            <a
              href="https://www.linkedin.com/in/matvey-kostukovsky/"
              target="_blank"
            >
              <v-btn
                :small="$vuetify.breakpoint.smAndUp"
                :x-small="$vuetify.breakpoint.smAndDown"
                color="white"
                class="contactButton"
              >
                <v-icon left class="contactButtonIcon"> mdi-linkedin </v-icon>
                <span class="contactButtonText">LinkedIn</span>
              </v-btn>
            </a>

            <a href="https://github.com/matvelius" target="_blank">
              <v-btn
                :small="$vuetify.breakpoint.smAndUp"
                :x-small="$vuetify.breakpoint.smAndDown"
                color="white"
                class="contactButton"
              >
                <v-icon left class="contactButtonIcon"> mdi-github </v-icon
                ><span class="contactButtonText">Github</span>
              </v-btn>
            </a>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <a
                  href="mailto: email@matveycodes.com"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-btn
                    :small="$vuetify.breakpoint.smAndUp"
                    :x-small="$vuetify.breakpoint.smAndDown"
                    color="white"
                    class="contactButton"
                  >
                    <v-icon left class="contactButtonIcon"> mdi-email </v-icon>
                    <span class="contactButtonText">E-mail</span>
                  </v-btn>
                </a>
              </template>
              <div>email@matveycodes.com</div>
            </v-tooltip>
          </div>
        </v-col>
      </v-row>
    </v-parallax>

    <h2 class="text-center font-weight-medium my-8 sectionTitle">
      Current Work Projects:
    </h2>

    <v-card outlined class="mb-8 pa-4">
      <p class="mb-0">
        <ul>
          <li>an updated & super-slick version of our client portal that contains and provides access to a unique array of automated SMS, call, e-mail, and survey functionality &#38; reporting our company offers</li>
          <li>a versatile and secure doctor-patient web &#38; iOS chat app that gives us an opportunity to tap into a new market</li>
          <li>a new set of pages, tables, and graphs centered around surveys and survey result analysis to update and expand our survey capabilities</li>
        </ul>
      </p>

      <p class="blue-grey--text text--darken-4 my-2 ml-1">
        <strong>Tech stack:</strong>
        Vue.js &#8226; Meteor &#8226; Express &#8226; SQL Server &#8226; Firebase &#8226; MongoDB
      </p>

      <p class="blue-grey--text text--darken-4 my-2 ml-1">
        <strong>Frameworks & Libraries:</strong>
        Vuetify &#8226; PrimeVue &#8226; Bootstrap &#8226; FusionCharts &#8226; ApexCharts &#8226; Chart.js &#8226; Tabulator &#8226; DataTables
      </p>
      
    </v-card>

    <h2 class="text-center font-weight-medium mb-9 sectionTitle">
      Recent Side Projects:
      <p class="caption mb-0">(click to expand/collapse)</p>
    </h2>

    <v-expansion-panels
      id="projectExpansionPanelSection"
      class="mb-9"
      v-model="panel"
      multiple
      focusable
    >
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
            class="verticalVideoOuterContainer my-5 elevation-5"
            id="firstProject"
            width="30%"
          >
            <div class="verticalVideoContainer">
              <video
                height="500"
                autoplay
                loop
                muted="muted"
                poster="https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.jpg"
                class="block"
                playsinline
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
          <div class="textContainer solbeTextContainer my-4" width="70%">
            <p>
              Solbe is minimalistic social networking app designed to
              demonstrate that thoughts really do travel. As various friends and
              family members pop into your mind throughout the day, Solbe allows
              you to register these seemingly random occurences with a simple
              tap. When two people tap each other's names within a certain
              period of time a <em>connection</em> is recorded and stored in the
              database for later analysis and to be shown in the Personal Stats
              tab. Over time users are able to see who they're most
              <em>"connected"</em> to and how their telepathic skills stack up
              against those closest to them.
            </p>

            <p>
              The iOS app uses Apple's SwiftUI framework and connects to an
              Express API hosted on Heroku for login and account creation,
              registering thoughts, and to obtain the latest group, member, and
              stats data. The Express app utilizes the Tedious library in order
              to query the SQL Server database. Most of the app functionality is
              in the form of stored procedures which the Express app triggers.
              The iOS app takes care of basic front-end validation of user
              input, and most of the app's business logic is in SQL, with some
              additional filtering taking place on the Express server. One of
              the reasons I decided to take this approach was to make it easier
              to create the Android and web apps in the future, if we decide to
              do so.
            </p>

            <p>
              This project is a collaboration with a good friend, and we have
              recently recruited a group of our mutual friends to take the app
              through its paces via Apple's Test Flight. We are currently
              ironing out various bugs and creating additional statistical
              queries and views in order to provide the user with more insight
              and make the app more interesting and fun to use.
            </p>
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
          <div class="panelContent py-5 px-0">
            <div class="outerVideoContainer elevation-5">
              <span class="horizontalVideoContainer"
                ><video
                  width="100%"
                  max-height="100%"
                  autoplay
                  loop
                  muted="muted"
                  poster="https://res.cloudinary.com/solbe/video/upload/v1607662549/matveycodes.com/piano_app_rn34bq.jpg"
                  class="block pianoAppVideo"
                  playsinline
                >
                  <source
                    type="video/mp4"
                    src="https://res.cloudinary.com/solbe/video/upload/v1607662549/matveycodes.com/piano_app_rn34bq.mp4"
                  />

                  <source
                    type="video/webm"
                    src="https://res.cloudinary.com/solbe/video/upload/v1607662549/matveycodes.com/piano_app_rn34bq.webm"
                  />

                  Your browser does not support HTML5 video tag.

                  <a
                    href="https://res.cloudinary.com/solbe/video/upload/v1607662549/matveycodes.com/piano_app_rn34bq.gif"
                    >Click here to view original GIF</a
                  >
                </video></span
              >
            </div>
            <div>
              <p>
                The Piano Notes Trainer app is designed to supplement piano
                lessons and help students learn to find and recognize notes on
                the piano and the musical staff. The app is divided into two
                sections, one for learning the basics by going through slides,
                and another for gamifying the learning experience.
              </p>

              <p>
                The LEARN section introduces the student to the piano keyboard,
                as well as basic music theory and the fundamentals of music
                notation. The PLAY section allows the students to practice their
                note-naming and note-finding skills while earning points, stars,
                and passing levels. There is a FREEPLAY section designed for
                teachers, parents, and more advanced students who need to
                customize the training session.
              </p>

              <h4 class="mb-2">Features & challenges:</h4>

              <p>
                My goal was to make the piano look as realistic as possible. The
                main screen of the PLAY section is built around a beautiful
                stock photo of the piano keyboard I stumbled upon one day. Since
                I did not go with a simple 2D drawing with clear parallel and
                perpendicular lines, which is what you see in most piano-related
                apps, there is real perspective to deal with. There are custom
                key buttons superimposed on top of the photograph, and to get
                their proper dimensions, angles, and positioning, I created an
                algorithm that uses CGAffineTransforms (mainly rotation and
                scaling) to calculate the specs needed to get every key
                perfectly in place. This results in some interesting chained
                statements such as:
              </p>

              <prism language="swift"
                >positiveRotationTransforms.append(CGAffineTransform(rotationAngle:CGFloat(angleMult
                * angleInc)))</prism
              >

              <p>
                The biggest challenge, though, turned out to be game logic, as
                music theory itself presents some interesting problems to solve.
                It took some time to figure out how to best programmatically
                deal with enharmonic equivalents (e.g. F# & Gb), especially when
                octave changes are involved (e.g. B#3 == C4). I also decided to
                use two versions of the middle C, as well as C# & Cb, to help
                students deal with the confusion of switching clefs.
              </p>

              <p>
                For game levels that are designed around the musical staff I had
                to use a different image in order to display a bigger range.
              </p>

              <p>
                The note on staff moves up and down with a simple
                swiping/panning gesture with one finger. To add this
                functionality, I used the UIPanGestureRecognizer in combination
                with some basic, albeit slightly tricky algebra that calculates
                the current note to display by factoring in image height and
                finger position on the image view.
              </p>

              <p>
                The last few weeks of the development process were mainly spent
                perfecting the logic of the multitude of options I decided to
                add to the settings menu. My goal was to enable students,
                teachers, and parents to set up the game to train for very
                specific goals, such as focusing on just the treble clef (or
                just the bass clef), or only practicing the sharps flats in a
                specific range.
              </p>

              <p>
                App Store link:
                <a href="https://apple.co/2NeIkm6">https://apple.co/2NeIkm6</a>
              </p>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- PROJECT 3 -->
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>
            <strong>Gemrover eBay Template & Website: </strong>
            HTML, CSS, and lots of flexbox
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div
            class="d-flex justify-space-between flex-wrap py-5 px-0"
            fill-height
          >
            <div class="panelContent py-5 px-0">
              <div class="contentBlock">
                <img
                  class="projectImage float-sm-right rounded-lg elevation-5"
                  :src="require('@/assets/img/gemrover_ebay_2.png')"
                  style="max-height: 590px; width: auto"
                  id="gemroverTopImage"
                />

                <div class="">
                  <p>
                    Gemrover is a jewelry & gemstone business located in the
                    heart of the LA Diamond District. Their online business is
                    growing, and I was hired to help create a template for their
                    eBay listings as well as a brand new online store.
                  </p>

                  <h4 class="mb-2">Features & challenges:</h4>

                  <p>
                    When it comes to eBay templates, scripts are strictly
                    prohibited, so the page has to be made with pure HTML & CSS
                    and will live inside an iframe. To further complicate
                    things, I've discovered that the iPhone and Android eBay
                    apps had slight differences in how they handled CSS as well
                    (not to mention all the usuall cross-browser compatibility
                    issues when it comes to layout, design, typography, etc.) --
                    all this required a variety of alternative approaches,
                    hacks, and workarounds.
                  </p>

                  <p>
                    Initially I wanted to make sure the page still has an image
                    gallery with clickable thumbnails. JavaScript wasn't an
                    option due to eBay's restrictions, so I used the checkbox /
                    radio button hack as the workaround:
                  </p>

                  <prism language="css"
                    >#id1:checked ~ #image1 { opacity: 1; animation: gallery .5s
                    linear; }
                  </prism>

                  <p>
                    Live version of the page can be seen here:
                    <a href="https://bit.ly/2Yf6T3z" target="_blank"
                      >https://bit.ly/2Yf6T3z</a
                    >
                    <br /><br />
                    And here is the corresponding eBay posting:
                    <a href="https://ebay.to/2IRYrSl" target="_blank"
                      >https://ebay.to/2IRYrSl</a
                    >
                  </p>
                </div>
              </div>

              <div class="contentBlock">
                <img
                  class="projectImage float-md-right twoImageRight rounded-lg elevation-5"
                  :src="require('@/assets/img/gemrover_ebay_3.png')"
                />

                <img
                  class="projectImage narrowImage twoImageLeft float-sm-right float-md-left rounded-lg elevation-5"
                  :src="require('@/assets/img/gemrover_ebay_4.png')"
                />

                <div class="">
                  <p>
                    Adding video to the page and making sure it would load on as
                    many platforms and in as many browsers as possible was
                    another interesting challenge - Safari (especially the iOS
                    version) is pretty finicky when it comes to video formats.
                  </p>

                  <p>
                    I chose to use flexbox in combination with media queries to
                    make the page responsive down to 300px-wide screen sizes.
                  </p>

                  <p>
                    Once the Gemrover team started to test and implement the
                    template, we decided to create several versions of it for
                    different types of products.
                  </p>

                  <p>
                    Here is an example of a variation that uses additional small
                    images in place of a video:
                    <a href="https://bit.ly/2Xde7bU" target="_blank"
                      >https://bit.ly/2Xde7bU</a
                    >
                  </p>

                  <p>
                    And here is a more minimalistic version for products that
                    only have one image and video:
                    <a href="https://bit.ly/2IW8PsB" target="_blank"
                      >https://bit.ly/2IW8PsB</a
                    >
                  </p>
                </div>
              </div>

              <div class="contentBlock">
                <img
                  class="projectImage float-sm-left rounded-lg elevation-5"
                  :src="require('@/assets/img/gemrover_website_1.png')"
                  id="gemroverBottomImage"
                />
                <div class="">
                  <h4 class="mb-2">
                    Website: Django, Microsoft SQL Server, Docker
                  </h4>

                  <p>
                    The next step is to create a full-blown website for the
                    company. Gemrover uses a somewhat outdated piece of software
                    called White Diamonds Pro for their inventory, which works
                    with a Microsoft SQL Server database, and my goal was to
                    first display these items on the website and eventually add
                    functionality to enable online sales.
                  </p>

                  <p>
                    Given my past experience with Python, I decided to go with
                    Django as the front-end framework. Setting up SQL Server on
                    a mac is not very common, and setting up the connection with
                    Django wasn't trivial. I ended up using a Docker container
                    for the database, and with the help of Kitematic, Azure Data
                    Studio, and many hours spent reading the docs, I was able to
                    create a proof of concept.
                  </p>

                  <p>
                    The Gemrover team is currently considering migrating to a
                    more modern cloud-based solution for the database. There are
                    several ready-to-go frameworks & services available that
                    cater directly to diamond, gemstone, and jewelry sales, and
                    the main factors to consider are:
                  </p>

                  <ul>
                    <li>
                      amount of time it would take to set up the new system
                    </li>
                    <li>
                      how much training the team would need to go through to
                      complete the migration
                    </li>
                    <li>
                      costs of these 3rd-party services vs. cost of developing a
                      custom-tailored system from scratch
                    </li>
                    <li>
                      integration with eBay, Rapnet, Amazon,and other online
                      sales platforms
                    </li>
                  </ul>
                </div>
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
            Python & Flask, SQLite 3, Google Maps API, AJAX, HTML & CSS, jQuery
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="" fill-height>
            <div class="panelContent py-5 px-0">
              <div class="contentBlock">
                <img
                  class="projectImage float-sm-right rounded-lg elevation-5"
                  :src="require('@/assets/img/google_maps_3.png')"
                  id="mashupTopImage"
                />

                <div class="">
                  <p>
                    This was the last project in Harvard's CS50, and one of my
                    favorites to work on. It involves a combination of a bunch
                    of technologies, hence the name. The idea is to allow the
                    user to enter a location by name or zip code and display
                    news articles atop Google maps.
                  </p>

                  <h4 class="mb-2">Features & challenges:</h4>

                  <p>
                    The first step was to learn about the Google Maps API as
                    well Google News. Thankfully the official docs are
                    well-written and easy to understand. For instance, when it
                    was available, looking up news was as simple as generating a
                    URL such as:
                    <span style="white-space: pre-wrap; word-break: break-all"
                      >https://news.google.com/news/rss/local/section/geo/02138</span
                    >
                  </p>

                  <p>
                    Using the Google Maps JavaScript API is also fairly
                    straightforward. For example, to initialize a map, you
                    simply configure the way the canvas looks and set up some
                    options (like where the map is centered, zoom settings,
                    etc.) and then run:
                  </p>

                  <prism language="javascript"
                    >map = new google.maps.Map(canvas, options);
                  </prism>
                </div>
              </div>

              <div class="contentBlock">
                <img
                  class="projectImage narrowImage narrowImageLeft float-sm-left rounded-lg elevation-5"
                  :src="require('@/assets/img/google_maps_2.png')"
                />

                <div class="">
                  <p>
                    To make the form dynamic we used Twitter’s typeahead.js
                    library. It returns search results asynchronously as the
                    user begins to type a zip code or location name.
                  </p>

                  <p>
                    As a starting point, we were given a text file with U.S.
                    city, state, and zip code information, delimited with a tab
                    character (\t), similar to the .csv format. I imported this
                    into the SQLite database to allow fast lookup, and used
                    Python & Flask to query it:
                  </p>

                  <p>
                    Using the Google Maps JavaScript API is also fairly
                    straightforward. For example, to initialize a map, you
                    simply configure the way the canvas looks and set up some
                    options (like where the map is centered, zoom settings,
                    etc.) and then run:
                  </p>

                  <prism language="python"
                    >q = request.args.get("q") + "*" places =
                    db.execute('''SELECT * FROM virt_table WHERE virt_table
                    MATCH :q''', q=q) return jsonify(places)
                  </prism>
                </div>
              </div>

              <div class="contentBlock">
                <!-- <img
                  class="projectImage float-sm-right rounded-lg elevation-5"
                  :src="require('@/assets/img/google_maps_3.png')"
                /> -->

                <pre>
                  <prism language="javascript" id="mashupBottomCode" class="mb-3 mt-15 ml-3 float-right" style="height: 500px; max-width: 380px; min-width: 280px;">
marker.addListener('click', function(event) {
  howInfo(marker, null, event); 
  $.getJSON(Url, function(data) {
    info.open(map, marker); 
    contentString = "" 
    for (let i = 0; i &lt; 5; i++) { 
      articleLink = data[0][i]["link"] 
      articleTitle = data[0][i]["title"] 
      contentString += `${articleTitle}` 
    }
    contentString += "" showInfo(marker, contentString, event);
  }); 
});
                  </prism>
                </pre>

                <div class="ma-3">
                  <p>
                    Once the user chooses a location, the map is updated with
                    markers. The user can move around on the map and zoom in and
                    out, and the markers are updated accordingly. The
                    addMarker() function chooses a point on the map based on
                    latitude and longitude found in the database.
                  </p>

                  <p>
                    The script sends a GET request via the /update route, after
                    which the backend (Flask) queries the database and returns
                    the data in a JSON format via the jsonify function. The
                    update() function determines the current bounds of the map
                    based on the current northeast and southwest coordinates in
                    order to return only the results within the current view.
                  </p>

                  <p>
                    Each marker has an event listener which waits for a user to
                    select it. Once clicked, a marker displays the top 5
                    articles of the local news. The article data is displayed
                    using HandlebarsJS, a templating language for JavaScript.
                  </p>

                  <p>
                    There is a built-in fallback on Onion articles if no "real"
                    news articles are available for that particular location
                    (which explains some of the strange article titles that show
                    up :)).
                  </p>
                </div>
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
            IEX Trading API, Python & Flask, SQLite 3 & phpLiteAdmin, Bootstrap
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="" fill-height>
            <div class="panelContent py-5 px-0">
              <div class="contentBlock">
                <img
                  class="projectImage float-sm-right rounded-lg elevation-5"
                  :src="require('@/assets/img/finance_1.png')"
                  id="financeTopImage"
                />

                <div class="">
                  <p>
                    Another project from Harvard's CS50, this application allows
                    the user to create an account, get real-time stock quotes,
                    and simulate buying and selling stocks via API calls to IEX
                    Trading. Data is stored using SQLite, and the front-end is
                    written in Python & Flask to keep things simple and
                    light-weight. The app is very generous: every new user gets
                    $10,000 to play with!
                  </p>

                  <h4 class="mb-2">Features & challenges:</h4>

                  <p>
                    When a new user registers (and the username and password
                    fields have been validated on the front-end), we first make
                    a call to check whether or not the username is already
                    taken:
                  </p>

                  <pre>
                    <prism language="python" id="financeCode1" class="">
rows = db.execute("SELECT * FROM users WHERE username = :username", username=request.form.get("username")) 

  if len(rows) == 1: 
    if rows[0]['username'] ==
      request.form.get("username"): return apology("this username is already taken", 400)
                    </prism>
                  </pre>

                  <p>
                    Once we have made sure that the username doesn't already
                    exist in our database, the password is hashed and the new
                    user is added to the database:
                  </p>

                  <pre>
                    <prism language="python" id="financeCode2" class="">
hash = generate_password_hash(request.form.get("password"))

session["user_id"] = db.execute("INSERT INTO users (username, hash) VALUES (:username, :hash)",
username=request.form.get("username"), hash=hash)
                    </prism>
                  </pre>
                </div>
              </div>

              <div class="contentBlock">
                <img
                  class="projectImage float-sm-left rounded-lg elevation-5"
                  :src="require('@/assets/img/finance_2.png')"
                  id="financeSecondImage"
                />

                <div class="">
                  <p>
                    Once logged in, the user is presented with menu of options
                    that outline the apps various features; the first view is a
                    list of the stocks he/she owns and the total balance based
                    on current stock prices and amount of cash in the account.
                    The styling is done using Bootstrap classes.
                  </p>

                  <p>
                    Financial data is stored as a series of transactions in the
                    database, which is retrieved as follows:
                  </p>

                  <pre>
                    <prism language="python" id="financeCode2" class="">
stocks_owned = db.execute("SELECT transactions.symbol, SUM(transactions.shares) AS 
    shares FROM transactions WHERE user_id=:id GROUP BY transactions.symbol",
    id=session["user_id"])

    for index, stock in enumerate(stocks_owned):
        this_stock_info = lookup(stock['symbol'])
        stocks_owned[index]['name'] = this_stock_info['name']
        stocks_owned[index]['price'] = usd(this_stock_info['price'])
        stocks_owned[index]['total'] = usd(this_stock_info['price'] * stock['shares'])
        total_value += this_stock_info['price'] * stock['shares']
                    </prism>
                  </pre>

                  <p>
                    In order to get a quote for or trade a specific stock, we
                    make a call to the IEX Trading API using Python's requests
                    and urllib.parse libraries and a URL like this:
                    "https://cloud.iexapis.com/stable/stock/{urllib.parse.quote_plus(symbol)}/quote?token={myToken}"
                  </p>
                </div>
              </div>

              <div class="contentBlock">
                <img
                  class="projectImage float-sm-right rounded-lg elevation-5"
                  :src="require('@/assets/img/finance_3.png')"
                  id="financeLastImage"
                />

                <div class="">
                  <p>
                    All errors, such as invalid logins, misspelled stock
                    symbols, and insufficient funds, are handled in the most
                    professional and user-friendly manner possible -- with the
                    use of the grumpy cat meme, of course.
                  </p>

                  <p>
                    We define the errorhandler method, which takes in the "e"
                    parameter (for "error") and responds with an apology.
                  </p>

                  <pre>
                    <prism language="python" id="financeCode3" class="">
def errorhandler(e):
    """Handle error"""
    return apology(e.name, e.code)
                    </prism>
                  </pre>

                  <p>
                    The apology method generates an apology.html page using a
                    call to http://memegen.link/ with the appropriate top and
                    bottom strings.
                  </p>

                  <pre>
                    <prism language="python" id="financeCode3" class="">
def apology(message, code=400):
    def escape(s):
        """Escape special characters: https://github.com/jacebrowning/memegen#special-characters"""
        for old, new in [("-", "--"), (" ", "-"), ("_", "__"), ("?", "~q"),
                         ("%", "~p"), ("#", "~h"), ("/", "~s"), ("\"", "''")]:
            s = s.replace(old, new)
        return s
    return render_template("apology.html", top=code, bottom=escape(message)), code
                    </prism>
                  </pre>

                  <p>
                    Other functionality of the Finance website includes
                    transaction history and a user settings page where the user
                    can change his or her password.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <h2 class="text-center font-weight-medium mb-9 sectionTitle">About me:</h2>

    <v-card outlined class="mb-9 pa-4" id="aboutMeCard">
      <img
        class="float-sm-right rounded-lg elevation-5 ma-3"
        :src="require('@/assets/img/Matvey Kostukovsky cropped.jpg')"
        id="myPhoto"
      />

      <div class="my-1 mx-2">
        <p class="mb-3">
          When it comes to software development, I strive to create things and
          experiences that are functional, intuitive, modern, and aesthetically
          pleasing. I enjoy diving deep into the logic of an app, website, or
          feature, looking for ways to simplify and optimize both the app flow
          and the underlying code.
        </p>

        <p>
          Outside of work, I am typically either practicing jazz tunes on
          clarinet, piano, or this sweet 7-string bass I recently got, producing
          experimental music, working on side projects, hiking, or rock
          climbing. I am also a co-founder of
          <a href="https://www.terrasounds.com" target="_blank"
            >Terra Sounds School of Music & Arts</a
          >.
        </p>
      </div>
    </v-card>
  </v-app>
</template>

<script>
import "prismjs";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/themes/prism-okaidia.css";

import Prism from "vue-prism-component";

export default {
  name: "App",

  components: {
    Prism,
  },

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
      showTooltipOnTop: true,
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
        this.showTooltipOnTop = false;
        this.parallaxHeight = 290;
      } else {
        this.showTooltipOnTop = true;
        this.parallaxHeight = 260;
      }
    },
  },

  mounted() {
    this.onResize();
    // Prism.highlightAll();
  },
};
</script>

<style>
body,
#main {
  font-family: "Quicksand", sans-serif !important;
}

#main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
  background: #f9f9f9;
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

.v-parallax {
  border-radius: 5px;
  overflow: hidden;
}

.v-parallax__image-container {
  background-color: rgba(255, 181, 83, 0.12);
}

.v-parallax__image {
  /* max-width: 5% !important; */
  opacity: 0.19 !important;
  filter: blur(1px);
  /* top: -3382px; */
  /* left: -50%; */
  /* max-width: 100%;
  max-height: 100%;*/
  /* object-fit: cover; */
}

#myName {
  color: #00345f;
}

#myTitle {
  color: #005296;
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

.bottomContainer {
  display: flex;
  align-items: center !important;
  /* margin-top: -50px; */
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

  color: #00345f;
}

.contactButton {
  width: 119px;
}

.contactButtonIcon {
  font-size: 20px !important;

  color: #00345f !important;
}

.contactButtonText {
  text-decoration: none !important;
}

.photo {
  max-height: 110px;
  border-radius: 50%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transition: all 2.8s;
}

.sectionTitle {
  color: #60b102;
}

.contentBlock:not(:first-of-type) {
  margin: 85px 0;
}

.videoContainerContainer {
  min-width: 281px;
  max-height: 499px;
  border-radius: 5px;
  overflow: hidden;
}

.videoContainer video {
  transform: scale(1.015);
}

.solbeMainContainer {
  overflow-wrap: anywhere;
}

.verticalVideoOuterContainer {
  width: 280px;
  border-radius: 5px;
  overflow: hidden;
  float: right;
  margin-left: 15px;
}

.verticalVideoContainer {
  max-height: 499px;
}

.verticalVideoContainer video {
  transform: translateY(-1px) scale(1.0005);
}

.solbeTextContainer {
  max-width: 65%;
}

.roundedVideoContainer {
  border-radius: 8px;
  overflow: hidden;
  min-width: 50%;
  max-height: auto;
}

.roundedVideoContainer .videoContainer video {
  transform: scale(1.004) !important;
  shape-outside: url(https://res.cloudinary.com/solbe/video/upload/v1607321303/matveycodes.com/solbe-web_jg8c0o.mp4);
  float: left;
}

.pianoAppVideo {
  transform: scale(1.003);
  -webkit-border-radius: 11px !important;
  -khtml-border-radius: 11px !important;
  -moz-border-radius: 11px !important;
  border-radius: 11px !important;
  overflow: hidden;
}

.projectImage {
  width: 55%;
  margin: 5px 15px;
}

.narrowImage {
  width: 30%;
}

.projectImage:hover {
  /* opacity: .95; */
  transform: scale(1.005);
  transition: all 0.4s;
  /* box-shadow: .2rem .2rem .5rem rgba(0, 0, 0, 0.95);
    border-radius: 10px; */
}

.twoImageLeft {
  max-width: 265px;
}

.twoImageRight {
  max-width: 410px;
}

#gemroverBottomImage {
  margin: 0 30px 30px 15px;
}

/* #mashupTopImage {
  width: 55%;
  max-height: 470px;
  height: 100%;
} */

#financeTopImage {
  max-width: 412px;
}

#financeSecondImage {
  width: 64%;
}

#financeLastImage {
  width: 33%;
}

/* #mashupBottomCode {
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 3px solid #f36d33;
  color: #666;
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: normal;
  white-space: pre-wrap !important;
  word-spacing: normal !important;
  word-break: normal !important;
  word-wrap: normal !important;
  line-height: 1.5 !important;
  -moz-tab-size: 4 !important;
  -o-tab-size: 4 !important;
  tab-size: 4 !important;
} */

.outerVideoContainer {
  min-width: 272px;
  max-width: 700px;
  height: auto;
  color: #111;
  text-align: center;
  line-height: 0;
  /* font-size: 90px; */
  float: left;
  shape-outside: margin-box;
  margin-right: 30px;
  margin-bottom: 25px;
  -webkit-border-radius: 11px !important;
  -khtml-border-radius: 11px !important;
  -moz-border-radius: 11px !important;
  border-radius: 11px !important;
  overflow: hidden;
}

.horizontalVideoContainer {
  display: inline-block;
}

.v-application code {
  background-color: inherit !important;
  color: inherit !important;
  padding: 0 !important;
}

.v-application code,
.v-application kbd {
  border-radius: 0 !important;
  font-size: inherit !important;
  font-weight: inherit !important;
}

code {
  width: 100% !important;
}

code[class*="language-"] {
  white-space: normal !important;
  word-break: break-word !important;
  font-size: 13px !important;
  font-family: monospace !important;

  /* white-space: -moz-pre-wrap !important;
  white-space: -o-pre-wrap !important;
  white-space: unset !important;
  word-wrap: break-word !important; */
}

pre code,
#financeCode1 code,
#financeCode2 code,
#financeCode3 code,
#mashupBottomCode code {
  text-align: left !important;
  white-space: pre !important;
  word-spacing: normal !important;
  word-break: normal !important;
  word-wrap: normal !important;
  line-height: 1.5 !important;
  -moz-tab-size: 4 !important;
  -o-tab-size: 4 !important;
  tab-size: 4 !important;
}

#aboutMeCard {
  max-width: 63%;
  margin: 0 auto;
}

#myPhoto {
  max-width: 230px;
  opacity: 0.95;
}

.v-tooltip__content {
  /* background: #fff !important;  */
  background: #fafff6 !important;
  color: rgb(97, 97, 97) !important;
  font-size: 13px !important;
  opacity: 1 !important;
  padding: 0 3px !important;
  margin: 0 !important;
  max-width: 210px;
  -webkit-box-shadow: 4px 0px 18px 3px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 4px 0px 18px 3px rgba(0, 0, 0, 0.09);
  box-shadow: 4px 0px 18px 3px rgba(0, 0, 0, 0.09);
}

.v-tooltip__content:nth-of-type(3) {
  background: #fff6e7 !important;
}

.v-tooltip__content:nth-of-type(4) {
  background: #effaff !important;
}

a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
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

@media screen and (max-width: 1120px) {
  #financeCode1 {
    width: 60%;
  }
  #financeTopImage {
    max-width: 340px;
  }
  #financeSecondImage {
    float: right !important;
    margin: 0 0 15px 15px;
  }
}

@media screen and (max-width: 1080px) {
  #financeSecondImage {
    width: 70%;
  }
  #financeCode2 {
    width: 100%;
  }
}

@media screen and (max-width: 1005px) {
  .twoImageLeft {
    max-width: 300px;
    margin: 0 90px 30px 0;
  }

  .twoImageRight {
    max-width: 472px;
    margin: 0 0 30px 40px;
  }
  #financeCode1 {
    width: 100%;
  }
  #financeTopImage {
    max-width: 412px;
    float: left !important;
    margin: 0 15px 15px 0 !important;
  }
}

@media screen and (max-width: 959px) {
  .twoImageLeft {
    max-width: 280px;
    margin: 0 0 0 15px;
  }

  .twoImageRight {
    display: block;
    margin: 50px auto;
    margin-top: -40px;
  }

  #gemroverBottomImage {
    margin: 0 40px 40px 0;
  }
  .narrowImage {
    margin-left: 40px;
    margin-bottom: 40px;
  }

  .narrowImageLeft {
    margin-left: 0;
    margin-right: 15px;
    margin-bottom: 15px;
    min-width: 215px;
  }

  #aboutMeCard {
    max-width: 70%;
  }
}

@media screen and (max-width: 900px) {
  .outerVideoContainer {
    margin: 20px auto;
    float: none;
  }
  #financeLastImage {
    width: 50%;
  }
}

@media screen and (max-width: 870px) {
  #gemroverTopImage {
    width: 100% !important;
    max-width: 623px !important;
    height: auto !important;
    margin: 30px auto !important;
    display: block;
    float: none !important;
  }
}

@media screen and (max-width: 790px) {
  .solbeTextContainer {
    min-width: 100% !important;
  }
  .videoContainerContainer {
    display: block;
  }
  #mashupBottomCode {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
    float: none !important;
    display: block !important;
    margin: 15px auto !important;
  }
  #aboutMeCard {
    max-width: 80%;
  }
}

@media screen and (max-width: 730px) {
  .twoImageLeft {
    max-width: 300px;
    width: 35%;
    margin: 0 0 15px 15px;
  }

  .twoImageRight {
    display: block;
    float: none;
    width: 56%;
    margin: 30px auto;
  }
}

@media screen and (max-width: 700px) {
  #financeLastImage {
    margin-bottom: 15px;
  }
  #financeCode3 {
    width: 100%;
  }

  #aboutMeCard {
    max-width: 90%;
  }
}

@media screen and (max-width: 600px) {
  .projectImage {
    width: 100%;
    margin: 30px auto !important;
    display: block;
  }
  .narrowImage {
    width: 80%;
    margin: 30px auto;
  }
  #financeTopImage,
  #financeSecondImage,
  #financeLastImage {
    float: none !important;
    margin: 30px auto !important;
    width: 100% !important;
  }
  #aboutMeCard {
    max-width: 100%;
    border-radius: 0 !important;
  }
  #myPhoto {
    display: block;
    margin: 30px auto !important;
  }
}

@media screen and (max-width: 558px) {
  #main {
    padding: 0px;
  }
  .parallaxContainer {
    padding: 3px !important;
  }
  .leftContainer {
    width: 100%;
  }
  .bottomContainer {
    width: 100%;
    flex-direction: column;
    align-items: flex-end !important;
    margin-top: -50px;
  }
  .rightContainer {
    flex-direction: row;
    width: 100%;
    box-shadow: none !important;
  }

  .rightContainer::before {
    box-shadow: none !important;
  }
}

@media screen and (max-width: 530px) {
  .verticalVideoOuterContainer {
    /* width: 280px; */
    margin: 25px auto !important;
    float: none;
  }
  .v-expansion-panel-content__wrap {
    padding: 14px !important;
  }
}

@media screen and (max-width: 459px) {
  .contactButton {
    width: 95px;
  }
  .contactButtonIcon {
    font-size: 17px !important;
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