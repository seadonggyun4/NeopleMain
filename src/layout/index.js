import Vue from "vue";

// default
import ModalContainer from "@/layout/ModalContainer.vue";

Vue.component("ModalContainer", ModalContainer);

// mainPage
import SlideSection from "@/layout/mainPage/SlideSection.vue";
import TalkNeopleSection from "@/layout/mainPage/TalkNeopleSection.vue";
import GameSection from "@/layout/mainPage/GameSection.vue";
import EmploymentSection from "@/layout/mainPage/EmploymentSection.vue";
import BlogSection from "@/layout/mainPage/BlogSection.vue";

Vue.component("SlideSection", SlideSection);
Vue.component("TalkNeopleSection", TalkNeopleSection);
Vue.component("GameSection", GameSection);
Vue.component("EmploymentSection", EmploymentSection);
Vue.component("BlogSection", BlogSection);
