import "./App.css";
import { useState } from "react";
import {
  IoFlashSharp,
  IoDiscSharp,
  IoSparklesSharp,
  IoPeopleSharp,
  IoLinkSharp,
  IoGlobeSharp,
  IoChatbubblesSharp,
  IoSchoolSharp,
  IoPeopleCircleSharp,
  IoShieldCheckmarkSharp,
  IoCompassSharp,
} from "react-icons/io5";
import tinderLogo from "./assets/logos/tinderLogo.jpeg";
import bumbleLogo from "./assets/logos/bumbleLogo.png";
import hingeLogo from "./assets/logos/hingeLogo.png";
import rayaLogo from "./assets/logos/rayaLogo.png";
import heroImage from "./assets/images/friendsSitting.jpg";
import aboutImage from "./assets/images/headphonesGuy.jpg";
import flowImage from "./assets/images/hoodieGuy.jpg";
import marketImage from "./assets/images/invites.jpg";
import investorImage from "./assets/images/guyInChair.jpg";
import teamImage from "./assets/images/collegeKid.jpg";
import ctaImage from "./assets/images/folksWaiting.jpg";
// TODO: Download these images from iCloud: userProfileCreation.png, groupDiscovery.png, groupPipeline.png
// Using temporary placeholders until files are downloaded
import profileCreationImg from "./assets/images/groupFormation.png"; // Temporary placeholder
import groupCreationImg from "./assets/images/groupFormation.png";
import groupDiscoveryImg from "./assets/images/groupFormation.png"; // Temporary placeholder
import groupPipelineImg from "./assets/images/groupFormation.png"; // Temporary placeholder
import democraticMatchImg from "./assets/images/democraticMatchTrigger.jpeg";
import groupChatImg from "./assets/images/groupChat.png";

function App() {
  const ACCESS_PASSWORD = "!nvest!nM!nk";
  const [unlockedSections, setUnlockedSections] = useState({
    market: false,
    investors: false,
    team: false,
  });
  const [passwords, setPasswords] = useState({
    market: "",
    investors: "",
    team: "",
  });
  const [errors, setErrors] = useState({
    market: "",
    investors: "",
    team: "",
  });

  const handlePasswordChange = (section, value) => {
    setPasswords((prev) => ({ ...prev, [section]: value }));
    if (errors[section]) {
      setErrors((prev) => ({ ...prev, [section]: "" }));
    }
  };

  const handleUnlock = (section, event) => {
    event.preventDefault();
    if (passwords[section].trim() === ACCESS_PASSWORD) {
      setUnlockedSections((prev) => ({ ...prev, [section]: true }));
      setErrors((prev) => ({ ...prev, [section]: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [section]: "Incorrect password. Try again.",
      }));
    }
  };

  const renderPasswordGate = (section, label) => (
    <div className="password-gate">
      <h3>{label} Content Locked</h3>
      <p>Enter the investor password to view this section.</p>
      <form
        onSubmit={(event) => handleUnlock(section, event)}
        className="password-form"
      >
        <input
          type="password"
          value={passwords[section]}
          onChange={(event) =>
            handlePasswordChange(section, event.target.value)
          }
          placeholder="Enter password"
          aria-label={`${label} access password`}
        />
        <button type="submit" className="btn btn-primary">
          Unlock
        </button>
      </form>
      {errors[section] && <p className="password-error">{errors[section]}</p>}
    </div>
  );

  const howSteps = [
    {
      number: "1",
      title: "User Profile Creation",
      description:
        "Users create individual profiles to get started on the platform.",
      image: profileCreationImg,
      alt: "User completing their Mink profile on a laptop",
    },
    {
      number: "2",
      title: "Group Formation/Joining",
      description:
        "Users can join or create groups of up to 8 other users, forming their social circle.",
      image: groupCreationImg,
      alt: "Friends standing together after creating a group",
    },
    {
      number: "3",
      title: "Group Discovery (Swiping)",
      description:
        "Users swipe right or left on groups displayed on their homepage, similar to dating apps but for groups.",
      image: groupDiscoveryImg,
      alt: "User browsing new groups inside the app",
    },
    {
      number: "4",
      title: "Group Pipeline & Voting",
      description:
        "Swiped groups enter a pipeline where all members vote on whether to match. Groups are removed after 7 days without a match.",
      image: groupPipelineImg,
      alt: "Members reviewing group pipeline updates",
    },
    {
      number: "5",
      title: "Democratic Match Trigger",
      description:
        "A match is triggered when more than 50% of users in both groups vote yes. A single downvote stops the match, ensuring quality connections.",
      image: democraticMatchImg,
      alt: "Two friends confirming a group match",
    },
    {
      number: "6",
      title: "Group Chat",
      description:
        "Matched groups form a group chat, enabling seamless communication and planning for in-person meetups.",
      image: groupChatImg,
      alt: "Mink users chatting together in the app",
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">Mink Social</h1>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#features">Features</a>
            <a href="#market">Market</a>
            <a href="#investors">Investors</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <h2 className="hero-title">Meet People With Your People</h2>
              <p className="hero-subheader">
                Mink is an innovative app designed to facilitate connections
                between groups of users.
              </p>
              <p className="hero-subtitle">
                Mink helps groups of friends looking to collaborate, socialize,
                or explore common interests by matching them with other friend
                groups by location or University. Mink aims to create a dynamic
                platform for discovering and connecting with like-minded
                individuals in various settings, enhancing engagement in shared
                activities or pursuits.{" "}
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src={heroImage}
                alt="Friends hanging out together as a group"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section about">
          <div className="container">
            <h2 className="section-title">About Mink</h2>
            <div className="about-layout">
              <div className="about-content">
                <div className="about-copy">
                  <div className="about-visual">
                    <img
                      src={aboutImage}
                      alt="Students collaborating at a table with headphones"
                      loading="lazy"
                    />
                  </div>
                  <div className="about-text">
                    <p className="lead">
                      Mink revolutionizes how groups interact online. Unlike
                      traditional social networks that focus on individual
                      connections, Mink is built with a unique approach to
                      group-to-group networking.
                    </p>
                    <p>
                      Mink blends concepts from Facebook Groups with a dating
                      app's voting structure. With a core innovation being a
                      streamlined group-based voting system that addresses three
                      major issues:
                    </p>
                  </div>
                </div>
                <div className="about-tiles" style={{ marginTop: "2rem" }}>
                  <div className="feature-card">
                    <div className="feature-icon theme-icon">
                      <IoFlashSharp />
                    </div>
                    <h3>Efficient Matching</h3>
                    <p>
                      Implements group voting instead of individual votes to
                      ensure groups are matched efficiently, avoiding random or
                      fragmented selections.
                    </p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon theme-icon">
                      <IoDiscSharp />
                    </div>
                    <h3>Relevant Connections</h3>
                    <p>
                      Allows users to join unique groups based on shared
                      interests and demographics, enhancing match relevance,
                      rather than just user location.
                    </p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon theme-icon">
                      <IoSparklesSharp />
                    </div>
                    <h3>Clarity</h3>
                    <p>
                      Prevents the confusion of showing individuals from
                      different groups randomly, consolidating the voting
                      process for smooth and accurate group recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section id="how-it-works" className="section how-it-works">
          <div className="container">
            <h2 className="section-title">How Mink Works</h2>
            <div className="how-summary">
              <ul className="how-list">
                <li>Profile creation and onboarding</li>
                <li>Group creation and discovery</li>
                <li>Democratic matching via group voting</li>
              </ul>
            </div>
            <div className="how-layout">
              <div className="steps">
                {howSteps.map((step) => (
                  <div className="step" key={step.number}>
                    <div className="step-number">{step.number}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <img
                      src={step.image}
                      alt={step.alt}
                      loading="lazy"
                      className="step-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="section features">
          <div className="container">
            <h2 className="section-title">Why Users Love Mink</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon theme-icon">
                  <IoPeopleSharp />
                </div>
                <h3>Group-Centric Design</h3>
                <p>
                  Built specifically for groups, not individuals. Create,
                  manage, and grow your community with tools designed for
                  collective engagement.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon theme-icon">
                  <IoLinkSharp />
                </div>
                <h3>Group-to-Group Connections</h3>
                <p>
                  Discover and connect with other groups that align with your
                  interests, activities, or mission. Build networks between
                  communities.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon theme-icon">
                  <IoGlobeSharp />
                </div>
                <h3>Expand Your Network</h3>
                <p>
                  Break out of your bubble and explore new communities. Find
                  groups for collaboration, events, shared interests, and more.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon theme-icon">
                  <IoChatbubblesSharp />
                </div>
                <h3>Collaborative Communication</h3>
                <p>
                  Engage in group-to-group discussions, plan joint events, share
                  resources, and foster meaningful inter-community
                  relationships.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon theme-icon">
                  <IoSchoolSharp />
                </div>
                <h3>University & Location Filters</h3>
                <p>
                  Connect with groups from your university by registering with a
                  verified university email address, or find groups based on
                  location. Filter and discover groups that are most relevant to
                  you.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon theme-icon">
                  <IoPeopleCircleSharp />
                </div>
                <h3>Meaningful Offline Relationships</h3>
                <p>
                  Mink is meeting-driven and voting-based, enabling groups no
                  larger than 8 users to find other counterparts with the intent
                  of expanding their social network.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon theme-icon">
                  <IoCompassSharp />
                </div>
                <h3>Smart Matching</h3>
                <p>
                  Our intelligent voting system helps you find groups that match
                  your group's interests, values, and goals for more meaningful
                  connections.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon theme-icon">
                  <IoShieldCheckmarkSharp />
                </div>
                <h3>Privacy & Control</h3>
                <p>
                  Maintain control over your group's privacy settings and decide
                  who can connect with your group and what information is
                  shared.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MARKET CHALLENGES & OPPORTUNITIES */}
        <section id="market" className="section market">
          <div className="container">
            <h2 className="section-title">Market Opportunity</h2>
            {unlockedSections.market ? (
              <div className="market-layout">
                <div className="market-content">
                  <div className="market-section">
                    <h3>Market Challenges (Headwinds)</h3>
                    <div className="challenge-card">
                      <h4>Pivot From Dating Apps</h4>
                      <p>
                        Gen Z is increasingly dissatisfied with dating apps due
                        to superficial connections, overemphasis on appearance,
                        burnout from endless swiping, safety concerns,
                        misrepresentation, and impersonal nature. There's a
                        shift towards organic meeting methods (hobbies, social
                        events, mutual friends) for deeper, authentic
                        connections.
                      </p>
                    </div>
                    <div className="challenge-card">
                      <h4>Backlash Against Social Media</h4>
                      <p>
                        Growing dissatisfaction with digital interaction,
                        especially among Gen Z, regarding mental health impacts.
                        A 2022 Pew Research survey found 64% of young adults
                        take breaks from social platforms due to anxiety, social
                        comparison, and FOMO. The American Psychological
                        Association links increased screen time to loneliness
                        and depression.
                      </p>
                    </div>
                    <div className="challenge-card">
                      <h4>Preference for In-Person Connections</h4>
                      <p>
                        An Eventbrite report states 75% of millennials and Gen Z
                        value experiences over possessions, prioritizing
                        face-to-face interactions for deeper, meaningful
                        connections.
                      </p>
                    </div>
                    <div className="challenge-card">
                      <h4>
                        Chronically Online World Leading to Record Loneliness
                      </h4>
                      <p>
                        Despite promises of connection, rising social media use
                        is linked to higher loneliness levels. A UPenn study
                        showed reduced social media use (30 mins/day) decreased
                        loneliness and depression. The Global Web Index reported
                        42% of social media users feel lonely, and a 2021 study
                        found users spending over two hours daily on social
                        media were twice as likely to feel socially isolated.
                      </p>
                    </div>
                    <div className="solution-highlight">
                      <h4>Mink's Solution</h4>
                      <p>
                        Mink aims to provide deep user connectivity by fostering
                        group-related in-person connections, positioning itself
                        as a solution to these headwinds.
                      </p>
                    </div>
                  </div>

                  <div className="market-section">
                    <h3>Total Addressable Market (TAM)</h3>
                    <div className="tam-grid">
                      <div className="tam-card">
                        <h4>Global Online Dating Market (2024)</h4>
                        <p className="tam-value">$7.0B - $7.9B</p>
                      </div>
                      <div className="tam-card">
                        <h4>Global Social Media Market (2024)</h4>
                        <p className="tam-value">~$250B</p>
                      </div>
                      <div className="tam-card">
                        <h4>US TAM (18-34 social media users)</h4>
                        <p className="tam-value">$4.6B</p>
                        <p className="tam-detail">
                          76.1M users × $5/month subscription
                        </p>
                      </div>
                      <div className="tam-card highlight">
                        <h4>Initial Focus - US College Students</h4>
                        <p className="tam-value">$1.1B TAM</p>
                        <p className="tam-detail">~18M US college students</p>
                      </div>
                    </div>
                  </div>

                  <div className="market-competitive">
                    <h3>Competitive Landscape</h3>
                    <p
                      className="lead"
                      style={{ textAlign: "center", marginBottom: "3rem" }}
                    >
                      Mink's end-user market combines the online dating
                      application pool and the global social media application
                      economy. Customer acquisition is not a zero-sum game.
                    </p>

                    <div className="competitor-grid">
                      <div className="competitor-card">
                        <div className="competitor-header">
                          <h3>Tinder</h3>
                          <img
                            className="competitor-logo"
                            src={tinderLogo}
                            alt="Tinder logo"
                            loading="lazy"
                          />
                        </div>
                        <div className="competitor-stats">
                          <p>
                            <strong>Revenue (2023):</strong> $1.8B+
                          </p>
                          <p>
                            <strong>Paying Users:</strong> ~10M
                          </p>
                          <p>
                            <strong>Total Users:</strong> ~75M
                          </p>
                          <p>
                            <strong>Monthly Fee:</strong> $10-$40
                          </p>
                        </div>
                        <p className="competitor-note">
                          Known for simple swiping interface and gamified
                          matching.
                        </p>
                      </div>

                      <div className="competitor-card">
                        <div className="competitor-header">
                          <h3>Bumble</h3>
                          <img
                            className="competitor-logo"
                            src={bumbleLogo}
                            alt="Bumble logo"
                            loading="lazy"
                          />
                        </div>
                        <div className="competitor-stats">
                          <p>
                            <strong>Revenue (2023):</strong> ~$900M
                          </p>
                          <p>
                            <strong>Paying Users:</strong> ~2.5M
                          </p>
                          <p>
                            <strong>Total Users:</strong> ~40M
                          </p>
                          <p>
                            <strong>Monthly Fee:</strong> $20-$40
                          </p>
                        </div>
                        <p className="competitor-note">
                          Women make the first move; extends to BFF and Bizz.
                        </p>
                      </div>

                      <div className="competitor-card">
                        <div className="competitor-header">
                          <h3>Hinge</h3>
                          <img
                            className="competitor-logo"
                            src={hingeLogo}
                            alt="Hinge logo"
                            loading="lazy"
                          />
                        </div>
                        <div className="competitor-stats">
                          <p>
                            <strong>Revenue (2023):</strong> ~$400M
                          </p>
                          <p>
                            <strong>Paying Users:</strong> ~1.5M
                          </p>
                          <p>
                            <strong>Total Users:</strong> ~20M
                          </p>
                          <p>
                            <strong>Monthly Fee:</strong> ~$35
                          </p>
                        </div>
                        <p className="competitor-note">
                          Markets as "the app designed to be deleted" with
                          detailed profiles.
                        </p>
                      </div>

                      <div className="competitor-card">
                        <div className="competitor-header">
                          <h3>Raya</h3>
                          <img
                            className="competitor-logo"
                            src={rayaLogo}
                            alt="Raya logo"
                            loading="lazy"
                          />
                        </div>
                        <div className="competitor-stats">
                          <p>
                            <strong>Revenue (2023):</strong> ~$100M
                          </p>
                          <p>
                            <strong>Paying Users:</strong> ~0.1M
                          </p>
                          <p>
                            <strong>Total Users:</strong> ~0.5M
                          </p>
                          <p>
                            <strong>Monthly Fee:</strong> ~$20
                          </p>
                        </div>
                        <p className="competitor-note">
                          Exclusive, invitation-only platform for celebrities
                          and influencers.
                        </p>
                      </div>
                    </div>

                    <div className="mink-differentiator">
                      <h3>What Makes Mink Different</h3>
                      <p>
                        Unlike individual-focused dating apps, Mink enables
                        groups of up to 8 users to connect with other groups
                        through a democratic voting system. This creates more
                        meaningful, in-person connections while addressing the
                        loneliness epidemic and superficiality of current
                        platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="market-visual">
                  <img
                    src={marketImage}
                    alt="Group of friends exchanging invitations"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              renderPasswordGate("market", "Market")
            )}
          </div>
        </section>

        {/* INVESTOR SECTION */}
        <section id="investors" className="section investors">
          <div className="container">
            <h2 className="section-title">Investor Opportunity</h2>

            {unlockedSections.investors ? (
              <div className="investor-layout">
                <div className="investor-content">
                  <div className="investor-section">
                    <h3>Revenue Model</h3>
                    <div className="revenue-model">
                      <h4>Freemium Subscription Model</h4>
                      <ul>
                        <li>
                          <strong>Free Tier:</strong> Limited number of
                          swipes/votes per 24 hours, access to one group
                        </li>
                        <li>
                          <strong>Premium Subscription:</strong> $5/month for
                          unlimited swipes/votes and additional groups
                        </li>
                        <li>
                          Financial model built using percentage of paying users
                          comparable to competitors historically
                        </li>
                        <li>
                          Management believes this is conservative as groups
                          have unique social dynamics that may influence higher
                          rates of paying users
                        </li>
                      </ul>
                    </div>

                    <h4 style={{ marginTop: "2rem" }}>
                      Long-Term Revenue: Marketing Partners
                    </h4>
                    <p>
                      Advertisers are highly compelled to target applications
                      with a predominantly college-aged user base (18-34). This
                      demographic:
                    </p>
                    <ul>
                      <li>62% make purchasing decisions based on online ads</li>
                      <li>
                        Estimated annual spending power of over{" "}
                        <strong>$1 trillion in the U.S.</strong>
                      </li>
                      <li>
                        Digital natives spend an average of{" "}
                        <strong>3.5 hours per day</strong> on mobile apps
                      </li>
                      <li>
                        75% more likely to try new products and services, making
                        them a prime audience for advertisers seeking long-term
                        consumer relationships
                      </li>
                    </ul>
                  </div>

                  <div className="investor-section">
                    <h3>Go-to-Market Strategy</h3>

                    <div className="gtm-phase">
                      <h4>Phase 1: University-Focused Strategy</h4>
                      <p>
                        <strong>Target Market:</strong> Collegiate initial user
                        demographic with a TAM of $1.1 billion
                      </p>
                      <p>
                        <strong>Initial Focus:</strong> Three State
                        Universities:
                      </p>
                      <ul>
                        <li>University of Texas Austin</li>
                        <li>University of Arizona</li>
                        <li>San Diego State University</li>
                      </ul>

                      <h5>Ambassador Program</h5>
                      <ul>
                        <li>
                          Sales representatives assigned to each university to
                          deliver marketing materials to Greek institutions and
                          recruit ambassador applicants
                        </li>
                        <li>
                          <strong>Ambassador Requirements:</strong> Social Media
                          Accounts, Statement of Interest, Age, and Collegiate
                          year
                        </li>
                        <li>
                          <strong>Ambassador Benefits:</strong> Onboarding
                          package, expectations for social media posts, biannual
                          merchandise drops, $100 gift card quarterly,
                          Ambassador Happy Hour for 21+ college students
                        </li>
                        <li>
                          Data collection twice a year (December 30th and June
                          30th) for user engagement data, product
                          recommendations, and additional marketing strategies
                        </li>
                      </ul>

                      <p>
                        <strong>Product Launch:</strong> Sales representatives
                        schedule meetings with 5-10 Greek Organizations per
                        university. Accounts created weekly, with launch date
                        within two weeks of initial meetings.
                      </p>
                    </div>

                    <div className="gtm-phase">
                      <h4>Phase 2: Club-Focused City-Based Marketing</h4>
                      <p>
                        <strong>Target:</strong> Los Angeles Metro area
                      </p>
                      <p>
                        <strong>Approach:</strong> Group-focused face-to-face
                        marketing targeting existing clubs for group networking
                        and social engagement (e.g., Penmar Happy Hour, Venice
                        Run Club, Coffee & Chill)
                      </p>
                      <p>
                        <strong>City Tab:</strong> Group selection for users
                        available via "Los Angeles" city tab
                      </p>
                      <p>
                        <strong>Product Launch:</strong> Sales representatives
                        contact and schedule meetings at clubs. Accounts created
                        weekly, with launch date within one month of initial
                        meetings.
                      </p>
                      <p>
                        <strong>Promotion:</strong> Text reminders sent to all
                        signed-up users on launch date. Promotion tables at
                        events to recruit users and distribute merchandise. QR
                        flyers placed in select bars (leveraging CEO
                        relationships).
                      </p>
                      <p>
                        <strong>Annual Event:</strong> Mink hosts an annual
                        happy hour for users to mingle and meet.
                      </p>
                    </div>

                    <div className="gtm-phase">
                      <h4>Phase 3: Social Media & Influencer Marketing</h4>
                      <p>
                        As the company matures, marketing strategies shift from
                        Ambassador + Sales Associate grassroots methods towards
                        larger social media-focused and regionally focused
                        face-to-face marketing frameworks.
                      </p>
                      <p>
                        <strong>Influencer Strategy:</strong> Utilizing a blend
                        of mid-level and micro-influencers, and online social
                        media accounts, to focus on specific geographies,
                        regions, and user demographics.
                      </p>
                      <p>
                        <strong>Core Principle:</strong> User quality and
                        face-to-face marketing are central to Mink's onboarding
                        approach, aiming for "interesting users recommending our
                        product!"
                      </p>
                    </div>
                  </div>

                  <div className="investor-section">
                    <h3>Key Strengths</h3>

                    <div className="strength-card">
                      <h4>Constructed Application Allows for Quick Pivots</h4>
                      <p>
                        Utilizing a pre-constructed application allows the
                        Company to quickly pivot technologically without the
                        need for extensive development time or fund raising, by
                        offering significant agility in responding to market
                        demands or user feedback while catching any inertia
                        early marketing tactics may invigorate.
                      </p>
                      <p>
                        This reduction in technical overhead frees up cash flow,
                        allowing the startup to focus its burn on critical areas
                        like marketing and advertising.
                      </p>
                    </div>

                    <div className="strength-card">
                      <h4>Grass Roots Marketing</h4>
                      <p>
                        Growth driven by word-of-mouth and face-to-face
                        marketing tends to be more sustainable and consistent
                        compared to online advertising, as it builds trust and
                        personal connections that digital ads often lack.
                      </p>
                      <p>
                        <strong>Research Findings:</strong>
                      </p>
                      <ul>
                        <li>
                          92% of consumers trust recommendations from friends
                          and family over any other form of marketing
                        </li>
                        <li>
                          Word-of-mouth marketing results in five times more
                          sales than paid advertising
                        </li>
                        <li>Increases brand recall by up to 30%</li>
                        <li>
                          EventTrack: ~74% of consumers engaging with a brand at
                          a live event are more likely to recommend it
                        </li>
                        <li>
                          Customers acquired through referrals have a 16% higher
                          lifetime value and are more likely to refer others
                        </li>
                      </ul>
                      <p>
                        Mink's ability to connect with high-quality users
                        face-to-face and catalyze customer referrals is
                        considered the "lifeblood of the application."
                      </p>
                    </div>

                    <div className="strength-card">
                      <h4>Lean Company Structure</h4>
                      <p>
                        Mink's financial strategy involves designing a lean
                        company which can directly control its burn rate by
                        accelerating or slowing its marketing spend. Given
                        Marketing is the number one revenue generating factor
                        for consumer focused mobile applications, creating a
                        sound application which can quickly pivot or insert
                        group options based on early user adoption will enable
                        all growth efforts and resources to be applied to the
                        most important areas of product launch.
                      </p>
                    </div>
                  </div>

                  <div className="investor-section">
                    <h3>Marketing Expense Strategy</h3>
                    <p>
                      The operating team's objective is to generate cash flow as
                      early as possible, while maintaining engaged high quality
                      users, which will catalyze a balanced growth strategy.
                    </p>

                    <h4>Merchandising</h4>
                    <p>
                      Merchandise is a large portion of the Company's early
                      marketing budget and strategy. As such the line item must
                      be tightly controlled and timed. Mink's CEO has a
                      relationship with a merchandising manufacturer based out
                      of Los Angeles, who is expected to provide products at a
                      competitive price, and in a timely manner. Product
                      selection will include hats, hoodies, and crop tops
                      initially, and may expand depending on initial user
                      engagement.
                    </p>

                    <h4>Influencer Focused Spend</h4>
                    <div className="influencer-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Followers</th>
                            <th>Price Per Post</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Nano influencers</td>
                            <td>10,000</td>
                            <td>$100</td>
                          </tr>
                          <tr>
                            <td>Microinfluencers</td>
                            <td>10,000-50,000</td>
                            <td>$500</td>
                          </tr>
                          <tr>
                            <td>Mid Tier</td>
                            <td>100,000-500,000</td>
                            <td>$5,000</td>
                          </tr>
                          <tr>
                            <td>Macro</td>
                            <td>500,000+</td>
                            <td>$10,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      Spend associated with influencers and social media
                      marketing must follow successful efforts for community
                      development and engagement within existing user
                      geographies on the application. Executing social media
                      marketing in a step-wise function enables a more efficient
                      user expense ratio, as targeted influencer marketing will
                      only be effective if social media-derived users join an
                      existing and large user ecosystem, and favorable user
                      retention metrics will follow.
                    </p>
                  </div>
                </div>

                <div className="cta-section">
                  <button className="btn btn-primary btn-large">
                    Request Full Investment Deck
                  </button>
                </div>
                <div className="investor-visual">
                  <img
                    src={investorImage}
                    alt="Investor reviewing Mink pitch deck on a tablet"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              renderPasswordGate("investors", "Investor")
            )}
          </div>
        </section>

        {/* TEAM SECTION */}
        <section id="team" className="section team">
          <div className="container">
            <h2 className="section-title">Leadership & Team</h2>

            {unlockedSections.team ? (
              <div className="team-layout">
                <div className="team-content">
                  <div className="leadership-grid">
                    <div className="leader-card">
                      <h3>Trevor Lohr</h3>
                      <p className="role">CEO</p>
                      <p>
                        2.5 years of experience in Leveraged Finance and Startup
                        Lending with Silicon Valley Bank. Roles include building
                        and integrating the application's front-end UI and
                        logic, overseeing marketing structure, sales
                        representatives, financial operations, and managing user
                        scale demands.
                      </p>
                    </div>
                    <div className="leader-card">
                      <h3>Matthew Dvertola</h3>
                      <p className="role">CTO</p>
                      <p>
                        4 years of experience in cloud security and automation,
                        alongside software engineering for serverless
                        applications at Hunter Strategies. Focuses include
                        creating back architecture and operations. Expected to
                        manage application updates and changes through scale.
                      </p>
                    </div>
                  </div>

                  <h3 style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
                    Board Members
                  </h3>
                  <div className="board-grid">
                    <div className="board-card">
                      <h4>Dean Kimball</h4>
                      <p>
                        Experience includes diverse companies, some of the
                        largest technology corporations, where he managed teams
                        up to 500 people and annual product revenue over $400
                        million.
                      </p>
                    </div>
                    <div className="board-card">
                      <h4>John Schilling</h4>
                      <p>
                        Over 20 years of consulting and CFO work across various
                        startups, including Kymeta, Intellectual Ventures,
                        UniSite Software, and Widemile.
                      </p>
                    </div>
                  </div>

                  <h3 style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
                    Key Team Members
                  </h3>
                  <div className="team-grid">
                    <div className="team-member">
                      <h4>Social Media Manager</h4>
                      <p>Meredith Lindsey</p>
                    </div>
                  </div>

                  <h4 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                    University-Based Sales Representatives
                  </h4>
                  <div className="team-grid">
                    <div className="team-member">
                      <h4>San Diego State University</h4>
                      <p>Katy Farley</p>
                    </div>
                    <div className="team-member">
                      <h4>University of Texas Austin</h4>
                      <p>Andy Buchanan</p>
                    </div>
                    <div className="team-member">
                      <h4>University of Arizona</h4>
                      <p>Trevor Lohr</p>
                    </div>
                  </div>

                  <h4 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                    Group-Focused Sales Representatives
                  </h4>
                  <div className="team-grid">
                    <div className="team-member">
                      <h4>Los Angeles</h4>
                      <p>Trevor Lohr</p>
                    </div>
                  </div>
                </div>
                <div className="team-visual">
                  <img
                    src={teamImage}
                    alt="University ambassador standing proudly on campus"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              renderPasswordGate("team", "Team")
            )}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section cta">
          <div className="container cta-content">
            <div className="cta-textual">
              <h2 className="section-title">Ready to Connect?</h2>
              <p className="cta-text">
                Join Mink today and start building meaningful connections
                between your group and others around the world.
              </p>
              <div className="contact-buttons">
                <button className="btn btn-white btn-large">Sign Up Now</button>
                <a
                  href="mailto:invest@minkapp.com"
                  className="btn btn-secondary btn-large"
                >
                  Investor Inquiries
                </a>
              </div>
            </div>
            <div className="cta-visual">
              <img
                src={ctaImage}
                alt="Friends waiting outside to meet another group"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Mink Social. All rights reserved.</p>
          <p className="footer-tagline">
            Connecting groups, building communities.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
