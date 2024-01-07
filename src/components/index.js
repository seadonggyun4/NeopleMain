import Vue from "vue";

// [ common ] ========================================================================================================
import TheCurtain from "@/components/common/TheCurtain.vue";
import TheHeader from "@/components/common/TheHeader.vue";
import TheNavigation from "@/components/common/TheNavigation.vue";
import TheFooter from "@/components/common/TheFooter.vue";

Vue.component("TheCurtain", TheCurtain);
Vue.component("TheHeader", TheHeader);
Vue.component("TheNavigation", TheNavigation);
Vue.component("TheFooter", TheFooter);

// [ element ] ========================================================================================================
import TheModal from "@/components/element/TheModal.vue";
import TheAlertModal from "@/components/element/TheAlertModal.vue";
import TheLoadingModal from "@/components/element/TheLoadingModal.vue";
import TheButton from "@/components/element/TheButton.vue";
import TheNavButton from "@/components/element/TheNavButton.vue";

Vue.component("TheModal", TheModal);
Vue.component("TheAlertModal", TheAlertModal);
Vue.component("TheLoadingModal", TheLoadingModal);
Vue.component("TheButton", TheButton);
Vue.component("TheNavButton", TheNavButton);

// [ plugin ]
import Lottie from "vue-lottie";

Vue.component("Lottie", Lottie);
