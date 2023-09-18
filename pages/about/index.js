import React from "react";
import { CustomSlideIn } from "../../components/animated/CustomReveal";
import { Fade, Slide } from "react-awesome-reveal";
import MutaEveryone from "../../components/new/everyone/Everyone";
import styles from "./about.module.css";
function index() {
  return (
    <>
      <div className="main">
        <div className={styles.about}>
          <br />
          <br />
          <h1>ABOUT ME</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.descCont}>
            <h1 className={styles.title}>PABLO THE CREATOR</h1>
            <p class="">&nbsp;</p>
            <div>
              {" "}
              <img
                style={{ float: "right" }}
                src="/images/man-x.jpg"
                alt="head-shot"
                className={styles.image}
              />
              {/* <Fade delay={1e3} cascade damping={1e-1}> */}
              Who ElCesart ? Spirited, Skilled And Sincere Are Only A Few Words
              To Describe The Upcoming Artist.
              {/* </Fade> */}
            </div>

            {/* <div className={styles.secondP}> */}
            <p style={{ paddingTop: "20px" }}>
              Ngabo D.Cesar Also Known As ElCesart Is A 27 years old Visual
              Artist & Illustrator Creating Honest Work Celebrating Black
              People, Culture And Afro-Futurism. His Work Takes The Form Of
              Digital Illustration, Paint, Apparel Designing, And Photography.
              ElCesart Explores Pop Society, Turning It Into An Intriguing Globe
              Of Bold Colours, Textures And Prints. Uplifted And Inspired By
              Black Culture His Work Brings Together
            </p>

            <p style={{ paddingTop: "20px" }}>
              Those Who Articulate A Healthy Relationship With Life. His Work
              Features Characters From Music Artists And Film Stars To Raw
              Beautiful Women And Men. Connecting With Viewers Who Understand
              The Concept Of Cultural Aesthetic.
            </p>
            <p style={{ paddingTop: "20px" }}>
              {" "}
              Nudity Can Be Expected In His Magnetic Work. Initially Wanting A
              Career As An Animator Or Concept Artist For Games And Comic Books,
              ElCesart Is An Emerging Influencer Of The New Era Inspired To Push
              Boundaries Within Art Representing Black Africans. Gaining Over
              Forty Thousand Fans From Around The World On Instagram His Artwork
              Has Gathered Many Praises Including A-List Celebrities From
              Michael B.Jordan, Lupita Nyongo, Anderson Paak, Jaden And Willow
              Smith, T- Pain, Ty Dolla $ign, Just To Name a Few.
            </p>
            <p style={{ paddingTop: "20px" }}>
              {" "}
              Although The Story Of This 27-Year Old May Sound Like A Typical
              Teenager Graduating From High School And Attending College- His
              Work Is Very Far From The Norm. Staying True To His Vision And
              Beliefs Of Shedding Light On Communities Of Black Africans,
              ElCesart Has Launched His Own Streetwear Collection That You Can
              Purchase Straight From His Website. Taking Steps Into The Fashion
              Industry Was Yet Another Strong Method To Expand His Parameters As
              An Artist And Creative Designer.{" "}
            </p>
            <p style={{ paddingTop: "20px" }}>
              ElCesart Has Taken A Bigger Steps By Starting To Collaborate With
              Known Hollywood entertainment companies, TV and Magazines Such As
              H.B.O, Amazon Prime, HULU, BLEACHERS REPORT, Revolt TV, and
              particularly Annapurna Studio A Production House Where By He
              Created Amazing Artworks For Their Oscar Winning Movie If Beale
              Street Could Talk A Movie Directed By The Oscar Winning Director
              Barry Jenkins. ElCesart Also worked on other films like Lovecraft
              Country, Phat Tuesday Documentary, The U.S vs Billie Holiday,
              etc..{" "}
            </p>
            <p style={{ paddingTop: "20px" }}>
              {" "}
              Private Buyers Can Also Pay For Commissioned Artwork, In Which
              They Automatically Become The Almighty Painted On A Canvas Of
              Their Own Body And Face. Desires Bright And Detailed
              Interpretations Show His Persistent Pure Motives To Empower Black
              Culture And Help The Audience Connect With Their Experiences. He
              Addresses The Representation Of Black Beauty, Sexuality And Power
              In Toda`s World. ElCesart Is Defiantly Rare In Rendering Paint
              Against Canvas And Digital Illustration, But What Really Sets His
              Work Apart Is Its Celebratory Soul, That Each Piece Of Work
              Showcases.
            </p>
            <p style={{ paddingTop: "20px" }}>
              {" "}
              Desires Work Offers Inspiration, Interest And Thought. From Here
              Onwards He Will Continue To Invite The Audience On To A Trip
              Through His Artwork, Photographs And Designs, For Those Who Join
              Prepare To Encounter A Thrilling Journey.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <MutaEveryone />
    </>
  );
}

export default index;
