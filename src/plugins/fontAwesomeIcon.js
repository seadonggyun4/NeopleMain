import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faSearch,
  faLaptop,
  faLock,
  faRightFromBracket,
  faParagraph,
  faUserTie,
  faEdit,
  faTrashAlt,
  faTimes,
  faAngleDown,
  faPlayCircle,
  faChevronCircleDown,
  faChevronCircleRight,
  faBars,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSearch,
  faLaptop,
  faLock,
  faRightFromBracket,
  faParagraph,
  faUserTie,
  faEdit,
  faTrashAlt,
  faTimes,
  faAngleDown,
  faPlayCircle,
  faChevronCircleDown,
  faChevronCircleRight,
  faBars,
  faAngleRight
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
