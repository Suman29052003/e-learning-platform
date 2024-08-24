import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

export default function CustomCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      className="m-auto w-full"
    >
      {/* First Slide */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center m-auto p-8 gap-0">
        <div className="video w-full flex justify-center">
          <video
            crossorigin="anonymous"
            src="https://videos.ctfassets.net/wp1lcwdav1p1/7BohjrOdNUaG5xcxSbPJSO/3a315ebaf7c4263bb24de5cfbd61dbce/Till_Ba_rnighausen_-_MSIE_student_from_HEC_Paris_share_their_experience-_1080p_.mp4"
            controlslist="nodownload"
            className="rounded-l-lg w-full max-w-[100%]"
            // autoPlay
            controls
          >
            <track
              label="Audio description"
              kind="descriptions"
              srclang="en"
              src="https://assets.ctfassets.net/wp1lcwdav1p1/78puW9Eu4yfqIGTTekE9Er/06a9ed738743d8a13225f5d2b653eda8/Till_Ba_rnighausen_-_Extended.vtt"
            />
          </video>
        </div>
        <div className="text-content text-center p-4 md:p-8 bg-white  w-full h-full flex  items-center rounded-r-md">
          <p className="text-black text-lg md:text-2xl md:text-left font-medium">
            "The program is wonderfully flexible. I want to maintain my job
            while gaining the skills to be a better entrepreneur and
            intrapreneur... I've become a better boss, a better collaborator,
            and a better inspirer of my teams worldwide."
          </p>
        </div>
      </div>

      {/* Second Slide */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center m-auto p-8 gap-0">
        <div className="video w-full flex justify-center">
          <video
            crossorigin="anonymous"
            tabindex="-1"
            className="rounded-l-lg w-full max-w-[100%]"
            // autoPlay
            controls
            src="https://videos.ctfassets.net/wp1lcwdav1p1/6ximVvEmpGrcXze6CtpM22/b9d8b2d3cb74298691ee46909167f38b/MCIT_Online_Student_Profile_-_Angela_Wen-_1080p_.mp4"
            controlslist="nodownload"
            class="css-1ovtxmk"
          >
            <track
              label="Audio description"
              kind="descriptions"
              srclang="en"
              src="https://assets.ctfassets.net/wp1lcwdav1p1/1WWglLEm2WgWT2KPffjZTq/dfc8fa8286a8c64301a212dc07485840/Angela_Wen.vtt"
            />
          </video>
        </div>
        <div className="text-content text-center p-4 md:p-8 bg-white  w-full h-full flex  items-center rounded-r-md">
          <p className="text-black text-lg md:text-2xl md:text-left font-medium">
            "There's a strong community on Slack and online—maybe even stronger
            than some of us experienced in our first degree programs on campus."
          </p>
        </div>
      </div>

      {/* Third Slide */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center m-auto p-8 gap-0">
        <div className="video w-full flex justify-center">
          <video
            crossorigin="anonymous"
            tabindex="-1"
            src="https://videos.ctfassets.net/wp1lcwdav1p1/leE96Z8ZnO8GKAQTrBJhJ/07ac75aede019a691ae53a2ac661c59d/Abdihakim_Abdi___M.A._in_International_Relations__Security__and_Strategy-_1080p_.mp4"
            controls
            controlslist="nodownload"
            class="css-1ovtxmk"
            className="rounded-l-lg w-full max-w-[100%]"
            // autoPlay
          >
            <track
              label="Audio description"
              kind="descriptions"
              srclang="en"
              src="https://assets.ctfassets.net/wp1lcwdav1p1/507dgbjT7zRNxwqknXzKtd/1aa27894f8b8859827ca51dd8d04335d/Abdihakim_Abdi_-_Extended.vtt"
            />
          </video>
        </div>
        <div className="text-content text-center p-4 md:p-8 bg-white  w-full h-full flex  items-center rounded-r-md">
          <p className="text-black text-lg md:text-2xl md:text-left font-medium">"I love the flexibility that this programme offers. The fact that I can view material and attend live lectures from anywhere using my phone or laptop is great."</p>

        </div>
      </div>
    </Carousel>
  );
}
