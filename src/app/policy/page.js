"use client";

import React, { useState } from "react";
import {
  Container,
  Paper,
  Box,
  Button,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Sidebar from "@/components/Sidebar";
import Section0 from "@/components/privacy/Section0";
import Section1 from "@/components/privacy/Section1";
import Section2 from "@/components/privacy/Section2";
import Section3 from "@/components/privacy/Section3";
import Section4 from "@/components/privacy/Section4";
import Section5 from "@/components/privacy/Section5";
import Section6 from "@/components/privacy/Section6";
import Section7 from "@/components/privacy/Section7";
import Section8 from "@/components/privacy/Section8";
import Section9 from "@/components/privacy/Section9";
import Section10 from "@/components/privacy/Section10";
import Section11 from "@/components/privacy/Section11";
import Section12 from "@/components/privacy/Section12";
import Section13 from "@/components/privacy/Section13";
import Section14 from "@/components/privacy/Section14";
import Section15 from "@/components/privacy/Section15";
import Section16 from "@/components/privacy/Section16";
import Section17 from "@/components/privacy/Section17";
import Section18 from "@/components/privacy/Section18";
import Section19 from "@/components/privacy/Section19";

const sectionComponents = {
  section0: Section0,
  section1: Section1,
  section2: Section2,
  section3: Section3,
  section4: Section4,
  section5: Section5,
  section6: Section6,
  section7: Section7,
  section8: Section8,
  section9: Section9,
  section10: Section10,
  section11: Section11,
  section12: Section12,
  section13: Section13,
  section14: Section14,
  section15: Section15,
  section16: Section16,
  section17: Section17,
  section18: Section18,
  section19: Section19,
};

const initialFormData = {
  English: {
    section0: {
      mainHeading: "Privacy Policy",
    },
    section1: {
      heading: "Introduction",
      description:
        "Spectreco, LLC. (Spectreco) understands the importance of protecting the privacy of its website users. This Privacy Policy describes the policies and practices of Spectreco regarding collection of information from visitors to its websites and social media pages and the uses, maintenance, protection, and disclosure of such information by Spectreco. If you are visiting this website from a location outside the United States, your communications through this website will necessarily result in the transfer of information across international borders, and, in so doing, you consent to the processing or collection of your information in the United States. It does not apply to information collected by us offline or through other means or by any third party. Please read this policy carefully to understand our practices and policies regarding your information and how we will treat it. If you do not agree with our policies or procedures, you have the option not to use this website. By accessing, using, or interacting with this website, you agree to this Privacy Policy. This Privacy Policy may change from time to time (see the section entitled “Changes to Our Privacy Policy” below). Your continued use of this website after we make changes to this Privacy Policy is deemed to be acceptance of those changes, so please check the policy periodically for updates.",
    },
    section2: {
      heading: "Children Under the Age of 13",
      description:
        "This website is not intended for children under 13 years of age. No one under age 13 may provide any personal information to or on this website. Spectreco does not knowingly collect personal information from children – Spectreco websites are not designed to attract, nor do they seek to provide services to, any persons under the age of 13 years. Users under the age of 13 must not use or provide any information on this website or on or through any of its features, and must not register on this website or make any purchase through this website or use any of its interactive features to provide any information about themselves to us, including name, address, telephone number, e-mail address, or any screen name or user name in use. If we learn that an individual interacting with Spectreco’s website or social media pages is under the age of 13 years, we will delete that information from our databases. If you believe we might have any information from or about a child under 13, please contact us at connect@Spectreco.com.",
    },
    section3: {
      heading: "Non-United States Persons",
      description:
        "This website is hosted in the United States, and Spectreco processes data in accordance with this Privacy Policy and with applicable law in the United States. Any personal information about non-United States persons (including persons residing in the European Union (“EU”) and considered EU data subjects) provided via this website is processed in the United States by Spectreco or by a third party acting on behalf of Spectreco. In certain countries outside the United States, individuals are entitled to the right to access, correct, transmit, restrict, delete and object to processing of the personal information we have collected, and may also be entitled to withdraw consent to processing of personal information. When you provide personal information to Spectreco through this website, you consent to the processing of your information in the United States in accordance with this Privacy Policy. If you are an EU data subject, at any time you wish to know what data we process about you, you can request to gain access to that information by making a request of connect@Spectreco.com, and Spectreco will provide you with reasonable opportunities to gain access to and update or delete your information. If you are an EU data subject, you have certain other rights with respect to your information provided to Spectreco – you can make any requests with respect to those rights by e-mail to us at privacy@Spectreco.com.",
    },
    section4: {
      heading: "Personal Information Spectreco Collects",
      description1:
        "Spectreco may use a variety of technologies to collect information directly from individuals, including cookies and web beacons, and may collect information provided by the individual’s web browser, such as internet protocol address and operating system. Our web server uses an extended log file format which captures date and time of visit, referring address (location from which a visitor comes to this website), types of computing devices and Internet browsers, and visitors’ IP addresses. (Each computer that connects to the Internet is assigned a unique number, an IP address, for identification purposes). The log file does not capture a visitor’s email address. ",
      description2:
        "The information we collect automatically via Google Analytics does not include personal information, but we may maintain it or associate it with personal information we collect in other ways or receive from third parties. It helps us to improve our website and to deliver a better and more personalized service, including by enabling us to:",
      description5:
        "<ul><li>Estimate our audience size and usage patterns.</li><li>Store information about your preferences, allowing us to customize our website according to your individual interests.</li><li>Speed up your searches.</li><li>Recognize you when you return to our website.</li></ul>",
    },
    section5: {
      heading: "Removal of cookies from computing devices",
      description:
        "Individuals may remove cookies from their computing devices’ memories, including cookies placed by or through the use of the Spectreco website or social media pages. Please check with the applicable browser provider for more information on removing cookies.",
    },
    section6: {
      heading: "Nature of Spectreco’s Use of Information Collected",
      description:
        "The information collected by Spectreco on its websites and through its social media pages is used to improve the services we offer, to improve the website and social media content we provide, to contact customers regarding updates to such content and for other marketing purposes.",
    },
    section7: {
      heading:
        "Spectreco Sharing of Personally Identifiable Information with Others",
      description1:
        "Most of the information collected by Spectreco is statistical data that is not capable of identifying a particular individual (Anonymous Data). However, the information collected by Spectreco may include information that may allow an individual to be personally identified (PII). If an individual does not wish for Spectreco to share information with others as described in this Privacy Policy, such individual may choose not to interact with Spectreco’s website or social media pages. In all instances, Spectreco endeavors to design and implement its practices and policies to abide by applicable law and to reasonably secure and protect information we collect from individuals against unauthorized disclosure and third-party access. In some cases, Spectreco may disclose PII to third parties, such as:",
      description2:
        "<ul><li>Our service providers: We contract with companies who help with parts of our business operations. We require that our service providers only use PII in connection with the services they perform for us, including services performed in fulfilling the purpose for which an individual provided PII.</li><li>Service providers to our advertisers: Our advertisers may contract with companies who handle data (such as advertisers’ customer lists) for them.</li><li>Our subsidiaries and related companies:  Our affiliates may assist Spectreco in providing and marketing its services to the public, including through the use and analysis of information we collect from individuals.</li><li>Courts or opposing parties in legal proceedings: When we are under a legal obligation to do so, for example to comply with a binding order of a court, or where disclosure is necessary to exercise, establish or defend the legal rights of Spectreco, our advertisers or any other third party.</li><li>An acquirer or merger partner in connection with a sale of our business: If a third party acquires some or all of our business or assets or is merged with Spectreco, we may disclose PII in connection with the sale.</li><li>The consuming public in connection with individuals’ feedback provided to Spectreco:  If an individual provides feedback or commentary to us, we may use and disclose such feedback and commentary for any purpose, provided that if we store that feedback in a manner that connects it to the individual and his or her PII, we will treat that PII in accordance with this Privacy Policy.</li><li>Third Parties Using Aggregated and/or Anonymized Information: We may disclose Anonymous Data or aggregated or anonymized information to our advertisers and other third parties.</li><li>Any third party in accordance individuals’ express permission: We also share anonymized technical data that we collect about individuals’ Internet connections, browsing habits and computing devices and web browsers (such as data relating to our cookies, tracking pixels and similar technologies) with other advertising companies in the digital advertising ecosystem. This enables them and us to better target ads to individuals.</li></ul>",
      description3:
        "In all instances of disclosure of individual information, including PII, to third parties, Spectreco endeavors to require such third parties to abide by privacy policies and practices that are consistent with those discussed in this Privacy Policy, but Spectreco is not responsible for the privacy practices of those third parties. Spectreco encourages individuals to review the applicable privacy policies of all third parties to which they may be directed in connection with Spectreco’s website and social media pages.",
    },
    section8: {
      heading: "Opting out of receiving further Spectreco communication",
      description1:
        "We recognize how important online privacy is, so we offer the following options for controlling the targeted ads individuals receive and how we use collected data (California residents may have additional personal information rights and choices – please see the “California Privacy Rights” section below):",
      description2:
        "<ul><li>Individuals can opt-out of receiving targeted ads served by Spectreco: Individuals can opt out of receiving targeted ads served by Spectreco or on its behalf by clicking on the opt-out icon in the ads Spectreco serves. Please note that if an individual deletes cookie or upgrades a web browser after having opted out, additional opt-out action may be required. Further, if an individual uses multiple browsers or devices, opt-out action may be required on each browser or device.</li><li>Individuals can opt-out of receiving targeted, interest-based or on-line behavioral ads through advertising associations: Individuals may use the Network Advertising Initiative (NAI) opt-out tool at http://www.networkadvertising.org/choices/, which will allow the individuals to opt out of seeing targeted ads from Spectreco and from NAI-approved member companies. Individuals may also opt out of receiving targeted, interest-based or on-line behavioral ads from other companies that perform ad targeting services by visiting the Digital Advertising Alliance website at http://www.aboutads.info/choices/and Your Online Choices website at http://www.youronlinechoices.com/.</li></ul>",
    },
    section9: {
      heading: "Access to and correction of PII held by Spectreco",
      description:
        "If an individual wishes to gain access to, correct, amend, or delete any PII or other information about such individual held by Spectreco, he or she may submit a request to Spectreco’s privacy officer at the address provided below. Spectreco will exercise good faith efforts to provide access to such information to the extent it is available within a reasonable time, and to correct, amend or delete such information to the extent it is believed to be inaccurate or sought to be deleted, except where the burden or expense of providing access, correction or amendment would be disproportionate to the risks to the privacy of the individual in the particular instance or where the rights of other persons would be violated.",
    },
    section10: {
      heading: "Additional Notice for California and Virginia Consumers",
      description:
        "This part of our Privacy Policy applies to consumers who reside in the State of California or Virginia.",
    },
    section11: {
      heading:
        "Use of Personal Information about California or Virginia Consumers",
      description1:
        "We use the personal information we collect about California and Virginia consumers for the purposes disclosed within this Privacy Policy. For more information, please see “How We Use Personal Information Collected through the Sites” above.",
      description2:
        "The business purposes for which we may use personal information about California and Virginia consumers include:",
      description3:
        "<ul><li>Helping to ensure security and integrity to the extent the use of a consumer’s personal information is reasonably necessary and proportionate for these purposes;</li><li>Debugging to identify and repair errors in our systems;</li><li>Undertaking internal research for technological development and demonstration; and</li><li>Conducting activities to verify, enhance, and maintain the quality or safety of services or devices which we may own, control, or provide.</li></ul>",
      description4:
        "We may also use the information we collect for our own or our service providers’ other operational purposes, purposes for which we provide you additional notice, purposes disclosed elsewhere in this Privacy Policy, or for purposes compatible with the context in which the personal information was collected.",
      description5:
        "We do not collect or process sensitive personal information for the purpose of inferring characteristics about consumers.",
    },
    section12: {
      heading: "Your Privacy Rights ",
      description1:
        "If you are a California or Virginia resident, you have certain rights in the information listed in this Additional Notice, subject to applicable exclusions, limitations, and conditions of applicable law. You may exercise these rights free of charge except as otherwise permitted under applicable law. These rights are as follows:",
      description2:
        "<ul><li>Right to Delete. You have the right to request that we delete personal information that we have collected about you. Please note if you have requested a service that requires the use of your personal information, we may not be able to provide that service if you choose to delete your personal information.</li><li>Right to Access. You may request that we disclose to you:</li><li><ul><li>whether we are processing personal information about you;</li><li>the categories of personal information we have collected about you;</li><li>the categories of sources from which the personal information is collected;</li><li>our business or commercial purpose for collecting, selling, or sharing personal information;</li><li>the categories of third parties to whom we disclose personal information;</li><li>the specific pieces of information we have collected about you;</li><li>the categories of personal information about you, if any, that we have sold or shared and the categories of third parties to which we have sold or shared the information, by category or categories of personal information for each category of third party to whom we sold or shared the personal information</li><li>the categories of personal information about you that we disclosed for a business purpose and the categories of recipients to whom we disclosed the information for a business purpose.</li></ul></li></ul>",
      description3:
        "As used above, “sale,” “sold,” “selling,” “shared,” and “sharing” have the meanings provided in the California Consumer Privacy Act of 2018 and the Virginia Consumer Data Protection Act, each as amended.",
      description4:
        "<ul><li>Right to Correct. You have the right to request that we correct inaccurate personal information that we have collected about you.</li><li>Right to Appeal. If you are a Virginia resident and we decline to take action on a request that you make in accordance with the foregoing to exercise the foregoing privacy rights, then you may appeal our decision by directly responding to our denial decision email or as provided below under “Requests to Exercise Your Rights.”</li></ul>",
    },
    section13: {
      heading: "Requests to Exercise Your Rights",
      description1:
        "You may request to exercise these rights by emailing us at connect@Spectreco.com. As required or permitted under applicable law, please note that we may take steps to verify your identity before granting you access to information or acting on your request to exercise your rights. We may limit our response to your exercise of the above rights as permitted under applicable law. We may not discriminate against you in response to your exercise of the above rights, including by:",
      description2:
        "<ul><li>Denying goods or services to you;</li><li>Charging different prices or rates for goods or services, including through the use of discounts or other benefits or imposing penalties;</li><li>Providing a different level of quality of goods or services to you; or</li><li>Suggesting that you will receive a different price or rate for goods or services or a different level of quality goods or services.</li></ul>",
    },
    section14: {
      heading: "Agent Authorization",
      description:
        "You may designate an authorized agent to request any of the above rights on your behalf. You may make such a designation by providing the agent with written permission to act on your behalf. We will require the agent to provide proof of that written permission. We may require you to verify your own identity in response to a request, even if you choose to use an agent, to the extent permitted by law. Your agent may contact us as provided above under “Requests to Exercise Your Rights” to make a request on your behalf. ",
    },
    section15: {
      heading: "Do Not Track",
      description:
        "Please note that our website is not designed to respond to “do not track” requests from Web browsers.",
    },
    section16: {
      heading: "Data Security",
      description:
        "Spectreco endeavors to protect personal information from accidental loss and from unauthorized access, use and disclosure. The safety and security of personal information also depends on individual conduct – where Spectreco has given individuals access to certain parts of its website or social media pages through passwords and the like, such individuals are responsible for keeping such access information confidential. Unfortunately, the transmission of information via the Internet is not fully secure, and although Spectreco endeavors to protect personal information against unauthorized access or distribution, we cannot guarantee the security of personal information transmitted to Spectreco’s website or social media pages, and such transmission of personal information is at the individual’s own risk.",
    },
    section17: {
      heading: "Contact information",
      description:
        "To ask questions, comment about this Privacy Policy or Spectreco’s privacy practices, or to request access, changes or amendments to the personal information Spectreco stores about an individual, please contact us by email at connect@Spectreco.com.",
    },
    section18: {
      heading: "Changes to Our Privacy Policy",
      description:
        "Spectreco’s policy is to post any changes to this Privacy Policy on this page and to provide notice of any material changes made to how we treat users’ personal information through notice posted on the Spectreco website’s homepage. We may amend this Privacy Policy at any time. Please check back frequently for any such changes. It is the user’s responsibility to visit this page periodically to check for any changes to this Privacy Policy. Any use of this website constitutes the applicable individual’s agreement to this Privacy Policy as in effect on the date of such use. The date this Privacy Policy was last updated is identified below.",
    },
    section19: {
      description: "Last Updated: November 20, 2024",
    },

    // Define other sections as needed
  },
};

export default function PrivacyPolicyPage() {
  const [languages, setLanguages] = useState(["English", "Finnish"]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [formData, setFormData] = useState(initialFormData);

  const handleLanguageChange = (event, newValue) => {
    setSelectedLanguage(newValue);
  };

  const handleAddLanguage = () => {
    const newLanguage = prompt("Enter new language name:");
    if (newLanguage && !languages.includes(newLanguage)) {
      setLanguages([...languages, newLanguage]);
      setFormData({
        ...formData,
        [newLanguage]: {
          section0: {},
          section1: {},
          section2: {},
          section3: {},
          section4: {},
          section5: {},
          section6: {},
          section7: {},
          section8: {},
          section9: {},
          section10: {},
          section11: {},
          section12: {},
          section13: {},
          section14: {},
          section15: {},
          section16: {},
          section17: {},
          section18: {},
          section19: {},
        },
      });
    }
  };

  const handleFieldChange = (section, name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [selectedLanguage]: {
        ...prevData[selectedLanguage],
        [section]: { ...prevData[selectedLanguage][section], [name]: value },
      },
    }));
  };

  const handleSaveChanges = () => {
    console.log("Form Data Submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f8f9fc" }}>
      <Sidebar />
      <Container sx={{ flexGrow: 1, padding: 3 }}>
        <Tabs
          value={selectedLanguage}
          onChange={handleLanguageChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {languages.map((lang) => (
            <Tab key={lang} label={lang} value={lang} />
          ))}
          <IconButton onClick={handleAddLanguage}>
            <AddIcon />
          </IconButton>
        </Tabs>

        <Paper sx={{ padding: 4, borderRadius: 3, boxShadow: 3 }}>
          {Object.keys(formData[selectedLanguage] || {}).map((section) => {
            const Component = sectionComponents[section];
            return Component ? (
              <Box key={section} sx={{ marginBottom: 2 }}>
                <Component
                  formData={formData[selectedLanguage][section]}
                  onFieldChange={handleFieldChange}
                />
              </Box>
            ) : null;
          })}

          <Box textAlign="center" sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: "10px 20px", fontSize: "16px" }}
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
