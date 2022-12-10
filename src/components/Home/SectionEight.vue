<template>
  <section id="home-8" class="py-15">
    <v-container>
      <v-row
        dense
        justify="center"
        align="center"
        class="flex-column-reverse flex-md-row"
      >
        <v-col cols="12" md="6" class="mb-5 mb-mb-0">
          <div
            class="col-body text-center"
            :class="[$ar ? 'text-md-right' : 'text-md-left']"
          >
            <div class="text-h6 text-md-h5 main--text mb-3 font-weight-meduim">
              {{ $t("section-8.head") }}
            </div>
            <div class="text-h5 text-md-h4 white--text font-weight-bold">
              {{ $t("section-8.subhead") }}
            </div>
            <v-row dense class="mt-8" justify="center" align="center">
              <v-col
                cols="12"
                sm="6"
                md="12"
                v-for="(item, itemInd) in C_items"
                :key="itemInd"
              >
                <v-hover v-slot="{ hover }">
                  <div class="box-parent mb-5 d-flex align-start">
                    <div class="box-icon text-center custom-mt">
                      <v-icon
                        color="white"
                        class="the-icon d-flex align-center justify-center"
                        :size="$vuetify.breakpoint.smAndDown ? 25 : 31"
                        :class="{ 'custom-transition': hover }"
                        >{{ item.icon }}</v-icon
                      >
                    </div>
                    <div
                      class="col-info white--text"
                      :class="[$ar ? 'text-right' : 'text-left']"
                    >
                      <div
                        class="col-title text-h6 text-md-h5 font-weight-bold"
                      >
                        {{ item.title }}
                      </div>
                      <div
                        class="col-text text-caption text-md-body-2 font-weight-medium"
                      >
                        {{ item.text }}
                      </div>
                    </div>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="10"
          md="6"
          class="d-flex mb-10 mb-md-0 justify-center align-center"
        >
          <div
            class="col-body text-center pl-md-4"
            :class="[$ar ? 'text-md-right' : 'text-md-left']"
          >
            <div
              class="text-body-2 text-md-body-1 font-weight-medium white--text"
            >
              {{ $t("section-8.subtitle") }}
            </div>
            <v-card
              flat
              dark
              :max-width="$vuetify.breakpoint.smAndUp ? 450 : 420"
              color="transparent"
              class="mx-auto mx-md-0 section-action mt-8"
            >
              <v-form>
                <div class="px-8 px-sm-0">
                  <v-row dense>
                    <!-- <v-col cols="12" sm="6">
                      <v-text-field outlined label="First Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field outlined label="Last Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field outlined label="Email"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        outlined
                        label="Phone Number"
                      ></v-text-field>
                    </v-col> -->
                    <!--  -->
                    <template v-for="(item, itemInd) in C_fields">
                      <v-col
                        :key="itemInd"
                        cols="12"
                        sm="6"
                        v-if="!item.checkBox"
                      >
                        <v-text-field
                          outlined
                          :label="item.label"
                        ></v-text-field>
                      </v-col>
                    </template>
                  </v-row>
                </div>
                <v-checkbox color="main">
                  <!-- label="" -->
                  <template #label>
                    <div class="text-body-2 pl-2" v-html="C_checkBox.label">
                      <!-- I have read and agreed to the
                      <span class="text-decoration-underline white--text">
                        Terms and conditions
                      </span> -->
                    </div>
                  </template>
                </v-checkbox>
                <v-btn
                  color="main"
                  depressed
                  dark
                  rounded
                  large
                  class="px-8 mt-2"
                >
                  <span class="text-capitalize">
                    {{ $t("section-8.btn") }}
                  </span>
                </v-btn>
              </v-form>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          label: "First Name",
          state: "",
        },
        {
          label: "Last Name",
          state: "",
        },
        {
          label: "E-mail",
          state: "",
        },
        {
          label: "Phone Number",
          state: "",
        },
        {
          label:
            "I have read and agreed to the <span class='text-decoration-underline white--text'>Terms and conditions</span>",
          state: "",
          checkBox: true,
        },
      ],
      items: [
        {
          icon: "mdi-map-marker",
          title: "Physical address",
          text: "Global Village, Jivan’s Complex, Mont Fleuri, Mahe, Seychelles",
        },
        {
          icon: "mdi-phone",
          title: "Phone number",
          text: "+351 21 1452468",
        },
        {
          icon: "mdi-email",
          title: "Email address",
          text: "info@traders-academy.net",
        },
        {
          icon: "mdi-information",
          title: "Work hours",
          text: "Mon – Sat: 9 am – 7 pm, Sunday: CLOSED",
        },
      ],
    };
  },
  computed: {
    C_items() {
      return this.$t("section-8.items");
    },
    C_fields() {
      return this.$t("section-8.fields");
    },
    C_checkBox() {
      return this.C_fields.find((el) => el.checkBox);
    },
  },
};
</script>
<style lang="scss" scoped>
#home-8 {
  background-color: #2a2a2a;
  background-image: url("@/assets/imgs/home/section-8/img.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.box-parent {
  gap: 22px;
  .box-icon {
    background: #6d6d6d;
    padding: 10px;
    border-radius: 8px;
    overflow: hidden;
  }
}
.custom-mt {
  margin-top: 6px;
}
$time: 0.8s;
.the-icon {
  //   transition: $time ease-in-out;
}
.custom-transition {
  animation: customTransition;
  animation-duration: $time;
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
@keyframes customTransition {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  49% {
    opacity: 0;
    transform: translateY(-50px);
  }
  50% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
