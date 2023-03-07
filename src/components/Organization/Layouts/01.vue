<script setup>
import { ref, onMounted, computed } from "vue";
import { templateStore } from "@/stores/Organization/templates";

import PhoneContact from "@/components/Organization/Layouts/Reuseables/ContactInfo/Phone.vue";
import EmailContact from "@/components/Organization/Layouts/Reuseables/ContactInfo/Email.vue";
import WebsiteContact from "@/components/Organization/Layouts/Reuseables/ContactInfo/Website.vue";
import AddressContact from "@/components/Organization/Layouts/Reuseables/ContactInfo/Address.vue";
import SocialIcons from "@/components/Organization/Layouts/Reuseables/SocialIcons.vue";
import Addons from "@/components/Organization/Layouts/Reuseables/Addons/index.vue";

const useTemplateStore = templateStore();
// const data = computed(() => {
//   return useTemplateStore.editTemplateData;
// });
const props = defineProps(["data"]);

const isObjEmpty = (obj) => {
  if (Object.keys(obj).length == 0) return false;
  return true;
};
</script>

<template>
  <table
    cellpadding="0"
    style="vertical-align: -webkit-baseline-middle; width: 500px"
    :style="{
      color: data.design.layout.textColor,
      'font-size': data.design.layout.fontSize + 'px',
      'font-family': data.design.layout.fontFamily,
    }"
  >
    <tr v-if="isObjEmpty(data.signoff)">
      <td
        style="padding-bottom: 6px"
        :style="{
          color: data.signoff.style.color,
          'font-size': data.signoff.style.fontSize + 'px',
          'font-family': data.signoff.style.fontFamily,
          'text-align': data.signoff.style.alignment,
        }"
      >
        {{ data.signoff.value }}
      </td>
    </tr>
    <tr>
      <table cellpadding="0" style="border-collapse: collapse">
        <tr valign="top">
          <td v-if="false">
            <img
              :src="data.image.img"
              alt=""
              style="display: inline-block"
              :style="{
                width: data.design.image.width + 'px',
                borderRadius: data.design.image.roundness + '%',
              }"
            />
          </td>
          <td style="padding-left: 16px" valign="top">
            <table cellpadding="0" style="border-collapse: collapse">
              <tr>
                <td style="padding-bottom: 4px">
                  <h3>{{ data.name }}</h3>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 4px">
                  <p>
                    <span>{{ data.position }}</span>
                    <span
                      v-if="
                        (data.position && data.company) ||
                        (data.position && data.department)
                      "
                      >&nbsp;|&nbsp;</span
                    >
                    <span v-if="data.company">{{ data.company }}</span>
                    <span v-if="data.department && data.company"
                      >&nbsp;|&nbsp;</span
                    >
                    <span v-if="data.department">{{ data.department }}</span>
                  </p>
                </td>
              </tr>
              <tr style="vertical-align: middle">
                <table cellspacing="0" cellpadding="0" border-0>
                  <tr style="vertical-align: middle" v-if="data.phone">
                    <td>
                      <PhoneContact
                        :data="data"
                        :color="data.design.layout.templateColor"
                        v-if="data.phone"
                      />
                    </td>
                  </tr>
                  <tr style="vertical-align: middle" v-if="data.website">
                    <td>
                      <WebsiteContact
                        :data="data"
                        :color="data.design.layout.templateColor"
                        v-if="data.website"
                      />
                    </td>
                  </tr>
                  <tr style="vertical-align: middle" v-if="data.email">
                    <td>
                      <EmailContact
                        :data="data"
                        :color="data.design.layout.templateColor"
                        v-if="data.email"
                      />
                    </td>
                  </tr>
                  <tr style="vertical-align: middle" v-if="data.address">
                    <td>
                      <AddressContact
                        :data="data"
                        :color="data.design.layout.templateColor"
                        v-if="data.address"
                      />
                    </td>
                  </tr>
                </table>
              </tr>
              <tr
                style="vertical-align: middle"
                v-for="data in data.customInfo"
                :key="data.id"
              >
                <td>
                  <span
                    >{{ data.field }}<span v-if="data.field">:</span>
                    {{ data.value }}</span
                  >
                </td>
              </tr>

              <tr>
                <td style="padding-top: 8px">
                  <SocialIcons :data="data" type="horizontal" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </tr>
    <tr v-if="false">
      <table
        cellspacing="0"
        cellpadding="0"
        border-0
        style="max-width: 500px; width: 100%"
      >
        <tbody>
          <Addons :addonData="data.addons" />
        </tbody>
      </table>
    </tr>
  </table>
</template>
