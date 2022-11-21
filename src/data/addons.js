export default {
  // defaultAddonData: {
  //   signoff: {
  //     value: "Best Regards,",
  //     style: {
  //       fontFamily: "Sans Serif",
  //       color: "#000000",
  //       fontSize: 24,
  //     },
  //   },
  //   social: {
  //     items: [],
  //     style: {
  //       height: 40,
  //       paddingTop: 5,
  //     },
  //   },
  //   videoMeeting: {
  //     items: {
  //       name: "zoom",
  //       text: "Meet me on Zoom",
  //       url: "",
  //     },
  //     style: {
  //       height: 30,
  //       paddingTop: 10,
  //     },
  //   },
  //   cta: {
  //     item: {
  //       text: "",
  //       url: "",
  //     },
  //     style: {
  //       paddingTop: 10,
  //       textColor: "#ffffff",
  //       buttonColor: "#5489bb",
  //     },
  //   },
  //   disclaimer: {
  //     text: "",
  //     type: "",
  //     style: {
  //       width: 500,
  //       fontSize: "small",
  //       textColor: "#000000",
  //     },
  //   },
  //   greenMessage: {
  //     items: {
  //       text: "",
  //       type: "",
  //       icon: "",
  //     },
  //     style: {
  //       fontSize: "small",
  //       textColor: "#000000",
  //     },
  //   },
  // },
  defaultAddonData: {
    signoff: {
      data: {
        value: "Best Regards,",
        style: {
          fontFamily: "Sans Serif",
          color: "#000000",
          fontSize: 24,
        },
      },
      type: "signoff",
    },
    social: {
      data: {
        items: [],
        style: {
          height: 40,
          paddingTop: 5,
        },
      },
      type: "social",
    },
    videoMeeting: {
      data: {
        items: {
          name: "zoom",
          text: "Meet me on Zoom",
          url: "",
        },
        style: {
          height: 30,
          paddingTop: 10,
        },
      },
      type: "videoMeeting",
    },
    cta: {
      data: {
        item: {
          text: "",
          url: "",
        },
        style: {
          paddingTop: 10,
          textColor: "#ffffff",
          buttonColor: "#5489bb",
        },
      },
      type: "social",
    },
    disclaimer: {
      data: {
        text: "",
        type: "",
        style: {
          width: 500,
          fontSize: "small",
          textColor: "#000000",
        },
      },
      type: "disclaimer",
    },
    greenMessage: {
      data: {
        items: {
          text: "",
          type: "",
          icon: "",
        },
        style: {
          fontSize: "small",
          textColor: "#000000",
        },
      },
      type: "greenMessage",
    },
  },
  disclaimerData: {
    confidentiality:
      "IMPORTANT: The contents of this email and any attachments are confidential. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion",
    "Non-binding":
      "No employee or agent is authorized to conclude any binding agreement on behalf of the company with another party without certain confirmation",
    "Personal Opinion":
      "The views and opinions included in this email belong to the author and do not necessarily mirror the views and opinions of the company. The company will therefore not take any liability for any damages, however, caused, to any recipients of this message",
    security:
      "[Company Name] puts the security of the client at a high priority. Therefore, we have put efforts into ensuring that the message is error and virus-free. Unfortunately, full security of the email cannot be ensured as, despite our efforts, the data included in emails could be infected, intercepted, or corrupted. Therefore, the recipient should check the email for threats with proper software, as the sender does not accept liability for any damage inflicted by viewing the content of this email.",
    GDPR: "[Company Name] is compliant with the General Data Protection Regulation (GDPR) (EU) 2016/679. We are committed to guaranteeing the security and protection of the private information that we process. To understand more about how we collect, store, and process your personal information in compliance with GDPR, please take a look at our privacy policy",
  },
  greenMessageData: {
    1: "Go green, don’t print.",
    2: "Please consider the environment before printing this email.",
    3: "Save paper. Don’t print.",
    4: "Please consider your environmental responsibility. Before printing this email message",
    5: "“Look after the land and the land will look after you, destroy the land and it will destroy you.” Aboriginal Proverb",
    6: "“Nature provides a free lunch, but only if we control our appetites.” William Ruckelshaus",
  },
  featuresQualification: {
    signoff: ["free", "lite", "premium"],
    disclaimer: ["lite", "premium"],
    social: ["free", "lite", "premium"],
    greenMessage: ["lite", "premium"],
    videoMeeting: ["lite", "premium"],
    cta: ["lite", "premium"],
  },
};
