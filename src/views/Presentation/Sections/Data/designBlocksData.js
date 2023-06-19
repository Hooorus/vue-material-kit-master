/*
=========================================================
* Vue Material Kit 2 - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgPricing from "@/assets/img/pricing.png";
import imgFeatures from "@/assets/img/features.png";
import imgBlogPosts from "@/assets/img/blog-posts.png";
import imgTestimonials from "@/assets/img/testimonials.png";
import imgTeam from "@/assets/img/team.png";
import imgStat from "@/assets/img/stat.png";
import imgContent from "@/assets/img/content.png";
import imgPagination from "@/assets/img/pagination.png";
import imgAlert from "@/assets/img/alerts.jpg";
import imgPopover from "@/assets/img/popovers.jpg";
import imgModal from "@/assets/img/modals.jpg";
import imgDropdowns from "@/assets/img/dropdowns.jpg";

export default [
  {
    heading: "Awards & Experience",
    description:
      "In my undergraduate and postgraduate periods.",
    items: [
      {
        image: `${imagesPrefix}/buttons.jpg`,
        title: "Freshman 1",
        subtitle: "Freshman 1",
        route: "el-buttons",
        pro: false
      },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        title: "Freshman 2",
        subtitle: "Freshman 2",
        route: "el-avatars",
        pro: false
      },
      {
        image: imgDropdowns,
        title: "Sophomore 1",
        subtitle: "Sophomore 1",
        route: "el-dropdowns",
        pro: false
      },
      {
        image: `${imagesPrefix}/switch.jpg`,
        title: "Sophomore 2",
        subtitle: "Sophomore 2",
        route: "el-toggles",
        pro: false
      },
      {
        image: `${imagesPrefix}/badges.jpg`,
        title: "Junior 1",
        subtitle: "Junior 1",
        route: "el-badges",
        pro: false
      },
      {
        image: `${imagesPrefix}/progress.jpg`,
        title: "Junior 2",
        subtitle: "Junior 2",
        route: "el-progress-bars",
        pro: false
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        title: "Senior 1",
        subtitle: "Senior 1",
        route: "el-typography",
        pro: false
      },
      {
        image: `${imagesPrefix}/progress.jpg`,
        title: "Senior 2",
        subtitle: "Senior 2",
        route: "el-progress-bars",
        pro: false
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        title: "Graduate 1",
        subtitle: "Graduate 1",
        route: "el-typography",
        pro: false
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        title: "Graduate 2",
        subtitle: "Graduate 2",
        route: "el-typography",
        pro: false
      },
    ]
  },
  {
    heading: "Programs",
    description:
      "A selection of 45 page sections that fit perfectly in any combination",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        title: "Page Headers",
        subtitle: "10 Examples",
        route: "page-headers",
        pro: false
      },
      {
        image: imgFeatures,
        title: "Features",
        subtitle: "14 Examples",
        route: "page-features",
        pro: false
      },
      {
        image: `${imagesPrefix}/headers.jpg`,
        title: "Page Headers",
        subtitle: "10 Examples",
        route: "page-headers",
        pro: false
      },
      {
        image: imgFeatures,
        title: "Features",
        subtitle: "14 Examples",
        route: "page-features",
        pro: false
      },
      {
        image: `${imagesPrefix}/headers.jpg`,
        title: "Page Headers",
        subtitle: "10 Examples",
        route: "page-headers",
        pro: false
      },
      {
        image: imgFeatures,
        title: "Features",
        subtitle: "14 Examples",
        route: "page-features",
        pro: false
      },
    ]
  },
  {
    heading: "Papers",
    description: "30+ components that will help go through the pages",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        title: "Navbars",
        subtitle: "4 Examples",
        route: "navigation-navbars",
        pro: false
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        title: "Nav Tabs",
        subtitle: "2 Nav Tabs",
        route: "navigation-navtabs",
        pro: false
      },
      {
        image: imgPagination,
        title: "Pagination",
        subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      }
    ]
  },
  {
    heading: "Travel",
    description:
      "50+ elements that you need for text manipulation and insertion",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        title: "Newsletters",
        subtitle: "6 Examples",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        title: "Contact Sections",
        subtitle: "8 Examples",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        title: "Forms",
        subtitle: "3 Examples",
        route: "inputareas-forms",
        pro: false
      },
      {
        image: `${imagesPrefix}/inputs.jpg`,
        title: "Inputs",
        subtitle: "6 Examples",
        route: "inputareas-inputs",
        pro: false
      }
    ]
  },
  {
    heading: "Resources",
    description:
      "20+ Fully coded components that popup from different places of the screen",
    items: [
      {
        image: imgAlert,
        title: "Alerts",
        subtitle: "4 Examples",
        route: "ac-alerts",
        pro: false
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        title: "Notifications",
        subtitle: "3 Examples",
        route: "presentation",
        pro: false
      },
      {
        image: imgPopover,
        title: "Tooltips & Popovers",
        subtitle: "2 Examples",
        route: "ac-tooltips-popovers",
        pro: false
      },
      {
        image: imgModal,
        title: "Modals",
        subtitle: "5 Examples",
        route: "ac-modals",
        pro: false
      }
    ]
  },
];
