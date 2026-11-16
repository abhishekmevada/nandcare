import Header from "./Header";
import "../style/Home.css";
import { ChevronRight, Eye, Goal } from "lucide-react";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.7, ease: "easeOut" }}
        className="HeroSection"
      >
        <div className="heroSectionContainer">
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.9, ease: "easeOut" }}
            className="heroSectionTag"
          >
            EMPOWERING COMMUNITIES. ENABLING CHANGE
          </motion.p>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Building Better Lives. Creating Opportunities. Restoring Dignity
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.1, ease: "easeOut" }}
            className="heroSectionSubtitle"
          >
            Nand Care Foundation works alongside tribal communities, coal-mining
            families and underserved populations to improve access to education,
            nutritious food, healthcare and sustainable livelihoods.
          </motion.p>
          <div className="herosectionBox">
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              className="herocta-but"
            >
              Donate Now
            </motion.p>
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              className="herogost-but"
            >
              Explore Our Work{" "}
              <span className="cta-span">
                <ChevronRight className="icone" />
              </span>
            </motion.p>
          </div>
        </div>
      </motion.section>
      <section className="IntroductionSection">
        <div className="IntroductionSecContainera">
          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="introSectionTag"
          >
            ABOUT NAND CARE FOUNDATION
          </motion.p>
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 2.3, ease: "easeOut" }}
            className="h2Title inroh2Titleb"
          >
            Working Together to Build Stronger Communities
          </motion.h2>
          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 2.4, ease: "easeOut" }}
            className="introPara"
          >
            Nand Care Foundation (NCF) is a grassroots non-profit organisation
            committed to supporting underserved and vulnerable communities,
            particularly tribal communities, coal-mining families and rural
            populations.
            <br />
            <br />
            We believe that every individual deserves access to basic
            necessities, meaningful opportunities and the support needed to live
            a life of security and dignity.
            <br />
            <br />
            Working closely with communities, we focus on understanding their
            everyday challenges and developing practical solutions through
            education, hunger and nutrition, elderly care and livelihood
            support.
          </motion.p>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="arror-gost-cta-but"
          >
            Learn More About Us{" "}
            <span className="gost-cta-span">
              <ChevronRight className="icone" />
            </span>
          </motion.p>
        </div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="IntroductionSecContainerb"
        >
          <img
            src="/images/intobg.jpg"
            alt="Nand Care Foundation"
            className="introSecBgImg"
          />
        </motion.div>
      </section>
      <section className="whatweWorkSection">
        <p className="introSectionTag">WHAT WE DO</p>
        <h2 className="h2Title">
          Creating Change Through Four Key Focus Areas
        </h2>
        <p>
          We work alongside underserved communities to address everyday
          challenges and create opportunities for a healthier, more secure and
          dignified life.
        </p>
        <div className="WhatWeWorkContainer">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="whatweworkCarda"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="whatweworkCardImgBoxa"
            >
              <img
                src="/images/what_we_do_first.jpg"
                alt=""
                className="whatweworkCardImg"
              />
            </motion.div>
            <div className="whatweworkCardBodya">
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                className="whatweworkTitle"
              >
                Education
              </motion.p>
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 2.5, delay: 1.5, ease: "easeOut" }}
                className="whatweworkP"
              >
                Helping children overcome barriers to learning, stay connected
                to education and build brighter futures.
              </motion.p>
              <motion.p
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 3, delay: 1.5, ease: "easeOut" }}
                className="arror-gost-cta-but"
              >
                Learn More{" "}
                <span className="gost-cta-span">
                  <ChevronRight className="icone" />
                </span>
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="whatweworkCardb"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="whatweworkCardImgBox"
            >
              <img
                src="/images/what_we_do_second.jpg"
                alt=""
                className="whatweworkCardImg"
              />
            </motion.div>
            <div className="whatweworkCardBody">
              <motion.p
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                className="whatweworkTitle"
              >
                Hunger & Nutrition
              </motion.p>
              <motion.p
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                className="whatweworkP"
              >
                Supporting families facing food insecurity through nutritious
                meals and essential nutritional support.
              </motion.p>
              <motion.p
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                className="arror-gost-cta-but"
              >
                Learn More{" "}
                <span className="gost-cta-span">
                  <ChevronRight className="icone" />
                </span>
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="whatweworkCardc"
          >
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="whatweworkCardImgBox"
            >
              <img
                src="/images/what_we_do_third.jpg"
                alt=""
                className="whatweworkCardImg"
              />
            </motion.div>
            <div className="whatweworkCardBody">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                className="whatweworkTitle"
              >
                Elderly Care
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 2, delay: 2, ease: "easeOut" }}
                className="whatweworkP"
              >
                Supporting older people with nutritious food, medical assistance
                and care so they can live with dignity.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 2, delay: 2.5, ease: "easeOut" }}
                className="arror-gost-cta-but"
              >
                Learn More{" "}
                <span className="gost-cta-span">
                  <ChevronRight className="icone" />
                </span>
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="whatweworkCardd"
          >
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="whatweworkCardImgBoxa"
              style={{ width: "100%" }}
            >
              <img
                src="/images/what_we_do_fourth.jpg"
                alt=""
                className="whatweworkCardImg"
              />
            </motion.div>
            <div className="whatweworkCardBody">
              <motion.p
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                className="whatweworkTitle"
              >
                Livelihoods
              </motion.p>
              <motion.p
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 2, delay: 2, ease: "easeOut" }}
                className="whatweworkP"
              >
                Helping women and vulnerable households develop practical skills
                and opportunities for economic independence.
              </motion.p>
              <motion.p
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 2, delay: 2.5, ease: "easeOut" }}
                className="arror-gost-cta-but"
              >
                Learn More{" "}
                <span className="gost-cta-span">
                  <ChevronRight className="icone" />
                </span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="AboutSection">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="AboutContainera"
        >
          <img
            src="/images/about_img.jpg"
            alt="About NCF"
            className="aboutImg"
          />
        </motion.div>
        <div className="AboutContainerb">
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="introSectionTag"
          >
            OUR STORY
          </motion.p>
          <motion.h2
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
            className="h2Title"
          >
            Rooted in Communities. Driven by Compassion.
          </motion.h2>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 2, delay: 2, ease: "easeOut" }}
          >
            Nand Care Foundation began with a simple belief: meaningful
            development starts by understanding people and the challenges they
            face every day.
            <br />
            <br />
            Founded by Deepak Kumar, NCF works closely with underserved and
            vulnerable communities, particularly tribal communities, coal-mining
            families and rural populations.
            <br />
            <br />
            We believe that lasting change cannot come from temporary solutions
            alone. It requires listening to communities, understanding their
            needs and creating practical opportunities that help individuals and
            families build more secure and dignified lives.
            <br />
            <br />
            Through our work in education, hunger and nutrition, elderly care
            and livelihoods, we strive to make support accessible to those who
            need it most.
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 2, delay: 2.5, ease: "easeOut" }}
            className="arror-gost-cta-but"
          >
            Discover Our Story{" "}
            <span className="gost-cta-span">
              <ChevronRight className="icone" />
            </span>
          </motion.p>
        </div>
      </section>
      <section className="OurImpactSection">
        <p className="introSectionTag">OUR IMPACT</p>
        <h2 className="h2Title">
          Creating Change. Touching Lives. Building Futures.
        </h2>
        <p>
          Through our continued efforts, Nand Care Foundation works to support
          families, create educational opportunities for children and improve
          the well-being of elderly people. Every initiative represents a step
          towards stronger, healthier and more empowered communities.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="ourimapctContainer"
        >
          <div className="ourimpactBoxes">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 2, delay: 1, ease: "easeOut" }}
              className="ourImpactNumberBox"
            >
              <p className="ourImpactNumber">50,000+</p>
              <p className="ourImpactLable">Families Reached</p>
              <p className="ourImpactP">
                Supporting families and strengthening communities.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
              className="ourImpactNumberBox"
            >
              <p className="ourImpactNumber">15+</p>
              <p className="ourImpactLable">Coaching Centres</p>
              <p className="ourImpactP">
                Creating access to educational support and learning
                opportunities.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 2, delay: 2, ease: "easeOut" }}
              className="ourImpactNumberBox"
            >
              <p className="ourImpactNumber">1,200+</p>
              <p className="ourImpactLable">Children Impacted</p>
              <p className="ourImpactP">
                Helping children access learning and educational support.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 2, delay: 2.5, ease: "easeOut" }}
              className="ourImpactNumberBox"
            >
              <p className="ourImpactNumber">5,000+</p>
              <p className="ourImpactLable">Elderly People Reached</p>
              <p className="ourImpactP">
                Extending care and support to older members of communities.
              </p>
            </motion.div>
          </div>
        </motion.div>
        <p style={{ marginTop: "20px" }}>
          Together, we are working towards a future where every family has
          opportunities, every child can learn and every elderly person can live
          with dignity.
        </p>
        <p className="arror-gost-cta-but">
          Explore Our Work{" "}
          <span className="gost-cta-span">
            <ChevronRight className="icone" />
          </span>
        </p>
      </section>
      <section className="VisionMissionSection">
        <p className="introSectionTag">OUR PURPOSE</p>
        <h2 className="h2Title">A Vision for a Better Tomorrow</h2>
        <p>
          We believe that every community deserves the opportunity to grow,
          every individual deserves dignity, and every family deserves a chance
          at a better future.
        </p>
        <div className="VisionMissionContainer">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="visionContainer"
          >
            <p className="visionLable">
              <span className="visionIcon">
                <Eye className="icone" />
              </span>
              A Future Filled with Opportunity and Dignity
            </p>
            <p className="visionP">
              A future where tribal communities, coal-mining families and
              underserved populations overcome challenges, access essential
              opportunities and build better lives for themselves and future
              generations.
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="missionContainer"
          >
            <p className="visionLable">
              <span className="visionIcon">
                <Goal className="icone" />
              </span>
              Turning Community Needs into Meaningful Action
            </p>
            <p className="visionP">
              To work alongside tribal communities and coal-mining families,
              addressing their immediate needs while creating lasting
              opportunities through education, hunger and nutrition support,
              elderly care and sustainable livelihoods.
            </p>
          </motion.div>
        </div>
        <p style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>
          Together, We Can Build Stronger Communities.
        </p>
      </section>
      <section className="WhoWeSupportSection">
        <p className="introSectionTag">THE COMMUNITIES WE SERVE</p>
        <h2 className="h2Title">
          Standing Together with Those Who Need Support
        </h2>
        <p>
          We work alongside underserved and vulnerable communities, supporting
          individuals and families through essential services, meaningful
          opportunities and compassionate care.
        </p>
        <div className="WhoWeSupportContainer">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="WhoWeSupportBox"
          >
            <div className="whowesupportImgBox">
              <img
                src="/images/whowesupport.jpg"
                alt="Building Brighter Futures"
                className="whowesupportImg"
              />
            </div>
            <div className="whowesupportBody">
              <p className="whowesupportBoxLabel">Building Brighter Futures</p>
              <p className="whowesupportBoxP">
                We support children from underserved communities by helping them
                access education, learning resources and opportunities to build
                a better future
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            className="WhoWeSupportBox"
          >
            <div className="whowesupportImgBox">
              <img
                src="/images/whowesupportb.jpg"
                alt="Building Brighter Futures"
                className="whowesupportImg"
              />
            </div>
            <div className="whowesupportBody">
              <p className="whowesupportBoxLabel">
                Strengthening Families and Communities
              </p>
              <p className="whowesupportBoxP">
                We work with vulnerable families, particularly tribal
                communities and coal-mining families, to address essential needs
                and improve their opportunities for a secure and self-reliant
                life.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
            className="WhoWeSupportBox"
          >
            <div className="whowesupportImgBox">
              <img
                src="/images/whowesupportc.jpg"
                alt="Building Brighter Futures"
                className="whowesupportImg"
              />
            </div>
            <div className="whowesupportBody">
              <p className="whowesupportBoxLabel">Promoting Care and Dignity</p>
              <p className="whowesupportBoxP">
                We extend support to elderly people through care, essential
                assistance and initiatives that help them live with dignity and
                well-being.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
            className="WhoWeSupportBox"
          >
            <div className="whowesupportImgBox">
              <img
                src="/images/whowesupportd.jpg"
                alt="Building Brighter Futures"
                className="whowesupportImg"
              />
            </div>
            <div className="whowesupportBody">
              <p className="whowesupportBoxLabel">
                Creating Opportunities for Independence
              </p>
              <p className="whowesupportBoxP">
                We encourage skill development and livelihood opportunities that
                help women and vulnerable individuals build confidence and move
                towards economic self-reliance.
              </p>
            </div>
          </motion.div>
        </div>
        <p className="arror-gost-cta-but">
          Explore Our Work{" "}
          <span className="gost-cta-span">
            <ChevronRight className="icone" />
          </span>
        </p>
      </section>
      <section className="GetInvolvedSection">
        <p className="introSectionTag">BE A PART OF THE CHANGE</p>
        <h2 className="h2Title">Together, We Can Make a Difference</h2>
        <p>
          Meaningful change happens when people come together. Whether you
          contribute, volunteer your time or build a partnership with us, your
          support can help create better opportunities and stronger communities.
        </p>
        <div className="getinvolvedContainer">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="getInvolvedBoxa"
          >
            <div className="getInvolvedBody">
              <p className="getInvolvedBodyLabel">
                Your Support Can Change Lives
              </p>
              <div className="getInvolvedHidden">
                <div className="getInvolvedHiddenInner">
                  <p className="getInvolvedBodyP">
                    Your contribution helps support NCF's initiatives in
                    education, hunger and nutrition, elderly care and livelihood
                    development.
                  </p>
                </div>
              </div>
              <p className="arror-gost-cta-but getinvolveCta">
                Donate Now{" "}
                <span className="gost-cta-span">
                  <ChevronRight className="icone" />
                </span>
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="getInvolvedBoxb"
          >
            <div className="getInvolvedBody">
              <p className="getInvolvedBodyLabel">
                Give Your Time. Make an Impact.
              </p>
              <div className="getInvolvedHidden">
                <div className="getInvolvedHiddenInner">
                  <p className="getInvolvedBodyP">
                    Share your time, skills and knowledge to support community
                    initiatives and make a meaningful difference in people's
                    lives.
                  </p>
                </div>
              </div>
              <p className="arror-gost-cta-but">
                Become a Volunteer{" "}
                <span className="gost-cta-span">
                  <ChevronRight className="icone" />
                </span>
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            className="getInvolvedBoxc"
          >
            <div className="getInvolvedBody">
              <p className="getInvolvedBodyLabel">
                Create Greater Impact Together
              </p>
              <div className="getInvolvedHidden">
                <div className="getInvolvedHiddenInner">
                  <p className="getInvolvedBodyP">
                    Collaborate with Nand Care Foundation as an organisation,
                    institution or community partner to support initiatives and
                    expand opportunities for underserved communities.
                  </p>
                </div>
              </div>
              <p className="arror-gost-cta-but">
                Partner With Us{" "}
                <span className="gost-cta-span">
                  <ChevronRight className="icone" />
                </span>
              </p>
            </div>
          </motion.div>
        </div>
        <p style={{ fontSize: "20px", fontWeight: "600" }}>
          Small Contributions. Collective Impact. Better Futures.
        </p>
        <p className="arror-gost-cta-but">
          Get Involved Today{" "}
          <span className="gost-cta-span">
            <ChevronRight className="icone" />
          </span>
        </p>
      </section>
      <section className="testimonialSection">
        <p className="introSectionTag">VOICES FROM OUR COMMUNITY</p>
        <h2 className="h2Title">
          Real Stories. Real Experiences. Meaningful Change.
        </h2>
        <p>
          Behind every initiative is a person, a family or a community with a
          story to share. Hear from the people who are part of Nand Care
          Foundation's journey towards creating stronger and more empowered
          communities.
        </p>
        <div className="testimonialContainer">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            className="testimonialBox"
          >
            <p className="testimonialTesti">
              "Education gives children the confidence to dream bigger. The
              support provided through Nand Care Foundation has helped create
              better learning opportunities for children in our community. We
              are grateful for the efforts being made towards their future."
            </p>
            <p className="testimonialName">A Parent</p>
            <p className="testimonialSmallLabel">Parent · Community Member</p>
          </motion.div>
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="testimonialBox"
          >
            <p className="testimonialTesti">
              "Nand Care Foundation's work gives families like ours hope for a
              better future. Their efforts to support underserved communities
              and address everyday needs are important steps towards building
              stronger and more self-reliant communities."
            </p>
            <p className="testimonialName">A Community Member</p>
            <p className="testimonialSmallLabel">Community Beneficiary</p>
          </motion.div>
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="testimonialBox"
          >
            <p className="testimonialTesti">
              "Being part of community initiatives has shown me how meaningful
              even small efforts can be. Working alongside Nand Care Foundation
              has given me an opportunity to contribute my time and skills
              towards creating positive change in people's lives."
            </p>
            <p className="testimonialName">Volunteer</p>
            <p className="testimonialSmallLabel">A NCF Volunteer</p>
          </motion.div>
        </div>
      </section>
      <section className="FinalCTASection">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="finalCTAContainer"
        >
          <p className="introSectionTag">BE A PART OF THE CHANGE</p>
          <h2
            className="h2Title"
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
            }}
          >
            Together, We Can Build a Better Tomorrow.
          </h2>
          <p className="finalctaP">
            Every child deserves an opportunity to learn. Every family deserves
            access to essential support. Every elderly person deserves care and
            dignity. With your support, Nand Care Foundation can continue
            working towards stronger communities and brighter futures.
          </p>
          <div className="herosectionBox">
            <p className="herocta-but">Donate Now</p>
            <p className="herogost-but">
              Become a Volunteer{" "}
              <span className="cta-span">
                <ChevronRight className="icone" />
              </span>
            </p>
          </div>
        </motion.div>
      </section>
      <footer className="HomeFooterSection">
        <div className="footerContainera">
          <div className="footerContainerBoxa">
            <div className="footerContainerMinBox">
              {/* SCALE IN */}
              <motion.img
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
                src="/images/ncf_logo_nobg.webp"
                alt="Nand Care Foundation"
                className="footerLogo"
              />
              {/* SLIDE FROM RIGHT */}
              <motion.p
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="footerNCFTitle"
              >
                Nand Care
                <br />
                Foundation
              </motion.p>
            </div>
            {/* FADE IN */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="footerLabel"
            >
              Building Better Lives. Creating Opportunities. Restoring Dignity.
            </motion.p>
            {/* SLIDE UP + FADE */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Working towards stronger communities through education, hunger and
              nutrition, elderly care and livelihood support.
            </motion.p>
          </div>

          <div className="footerContainerBoxb">
            {/* SCALE IN, one after another */}
            <motion.p
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                delay: 0.2,
              }}
              whileHover={{ scale: 1.2 }}
              className="footerSocialMediaIco"
            >
              <ImFacebook2 className="react-icone" />
            </motion.p>
            <motion.p
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                delay: 0.35,
              }}
              whileHover={{ scale: 1.2 }}
              className="footerSocialMediaIco"
            >
              <GrInstagram className="react-icone" />
            </motion.p>
            <motion.p
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                delay: 0.5,
              }}
              whileHover={{ scale: 1.2 }}
              className="footerSocialMediaIco"
            >
              <BsLinkedin className="react-icone" />
            </motion.p>
          </div>
        </div>

        <div className="footerContainerb">
          {/* COLUMN 1: SLIDE FROM LEFT */}
          <div className="footerContainerbNavLink">
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ fontWeight: "600", fontSize: "20px" }}
            >
              Quick Links
            </motion.p>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="footerLink"
            >
              Home
            </motion.p>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="footerLink"
            >
              About Us
            </motion.p>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="footerLink"
            >
              Our Work
            </motion.p>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="footerLink"
            >
              Our Impact
            </motion.p>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="footerLink"
            >
              Where We Work
            </motion.p>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="footerLink"
            >
              Get Involved
            </motion.p>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="footerLink"
            >
              Gallery
            </motion.p>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="footerLink"
            >
              Contact Us
            </motion.p>
          </div>

          {/* COLUMN 2: SLIDE UP + FADE */}
          <div className="footerContainerbNavLink">
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ fontWeight: "600", fontSize: "20px" }}
            >
              Our Focus Areas
            </motion.p>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="footerLink"
            >
              Education
            </motion.p>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="footerLink"
            >
              Hunger & Nutrition
            </motion.p>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="footerLink"
            >
              Elderly Care
            </motion.p>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="footerLink"
            >
              Livelihoods
            </motion.p>
          </div>

          {/* COLUMN 3: FADE IN */}
          <div className="footerContainerbNavLink">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ fontWeight: "600", fontSize: "20px" }}
            >
              Contact Us
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="footerLinkb"
            >
              <span style={{ fontWeight: "600" }}>Registered Office: </span>
              2-A/3, Second Floor, Front Side, Asaf Ali Road, Turkman Gate, New
              Delhi, Delhi 110002, India
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="footerLinkb"
            >
              <span style={{ fontWeight: "600" }}>Working Area: </span>
              Dhanbad, Jharkhand, India
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="footerLinkb"
            >
              +91 7909054585
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="footerLinkb"
            >
              Nandcarefoundation@gmail.com
            </motion.p>
          </div>

          {/* COLUMN 4: SLIDE FROM RIGHT + SCALE TAGS */}
          <div className="footerContainerbNavLink">
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ fontWeight: "600", fontSize: "20px" }}
            >
              Registration & Trust
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="footerLinkb"
            >
              <span style={{ fontWeight: "600" }}>CIN: </span>
              U85320DL2019NPL358219
            </motion.p>
            <motion.p
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 12,
                delay: 0.4,
              }}
              className="introSectionTag"
            >
              80G Certified
            </motion.p>
            <motion.p
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 12,
                delay: 0.55,
              }}
              className="introSectionTag"
            >
              Razorpay Verified
            </motion.p>
          </div>
        </div>
      </footer>
      <div className="footerprivacypolicyCon">
        <div className="footerprivacypolicyBox">
          {/* SLIDE FROM LEFT */}
          <motion.p
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="policyP"
          >
            Privacy policy
          </motion.p>

          {/* SLIDE UP + FADE */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="policyP"
          >
            Terms of Use
          </motion.p>

          {/* SCALE IN */}
          <motion.p
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 12,
              delay: 0.4,
            }}
            className="policyP"
          >
            Refund & cancellation
          </motion.p>

          {/* SLIDE FROM RIGHT */}
          <motion.p
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="policyP"
          >
            Donation policy
          </motion.p>
        </div>

        {/* FADE IN */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          © 2026 Nand Care Foundation. All Rights Reserved.
        </motion.p>
      </div>
    </>
  );
}
