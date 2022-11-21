<script setup>
import PhoneContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Phone.vue";
import EmailContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Email.vue";
import WebsiteContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Website.vue";
import AddressContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Address.vue";
import SocialIcons from "@/components/Editor/Main/Layout/Reuseables/SocialIcons.vue";
import Addons from "@/components/Editor/Main/Layout/Reuseables/Addons/index.vue";
const prop = defineProps(["data"]);
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
    <tr v-if="data.addons.signoff">
      <td
        style="padding-bottom: 6px"
        :style="{
          color: data.addons.signoff.style.color,
          'font-size': data.addons.signoff.style.fontSize + 'px',
          'font-family': data.addons.signoff.style.fontFamily,
        }"
      >
        {{ data.addons.signoff.value }}
      </td>
    </tr>
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border-0>
          <tr>
            <td
              style="padding-right: 10px"
              :style="{
                width: data.design.image.width + 'px',
              }"
               v-if="data.image.img || data.image.imgSrc"
            >
              <img
                :src="data.image.img || data.image.imgSrc"
                alt=""
                style="display: inline-block"
                :style="{
                  width: data.design.image.width + 'px',
                  borderRadius: data.design.image.roundness + '%',
                }"
              />
            </td>
            <td style="padding-right: 6px" valign="top">
              <table
                cellspacing="0"
                cellpadding="0"
                border-0
                vertical-align="top"
              >
                <tr>
                  <td>
                    {{ data.name }}
                  </td>
                </tr>
                <tr v-if="data.position">
                  <td>
                    {{ data.position }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <span v-if="data.department">{{ data.department }}</span>
                      <span v-if="data.department && data.company"
                        >&nbsp;|&nbsp;</span
                      >
                      <span v-if="data.company">{{ data.company }}</span>
                    </p>
                  </td>
                </tr>
                <tr style="vertical-align: middle">
                  <table cellspacing="0" cellpadding="0" border-0>
                    <tr
                      style="vertical-align: middle"
                      v-if="data.contactInfo.basicInfo.phone"
                    >
                      <td>
                        <PhoneContact
                          :data="data"
                          :color="data.design.layout.templateColor"
                          v-if="data.contactInfo.basicInfo.phone"
                        />
                      </td>
                    </tr>
                    <tr
                      style="vertical-align: middle"
                      v-if="data.contactInfo.basicInfo.website"
                    >
                      <td>
                        <WebsiteContact
                          :data="data"
                          :color="data.design.layout.templateColor"
                          v-if="data.contactInfo.basicInfo.website"
                        />
                      </td>
                    </tr>
                    <tr
                      style="vertical-align: middle"
                      v-if="data.contactInfo.basicInfo.email"
                    >
                      <td>
                        <EmailContact
                          :data="data"
                          :color="data.design.layout.templateColor"
                          v-if="data.contactInfo.basicInfo.email"
                        />
                      </td>
                    </tr>
                    <tr
                      style="vertical-align: middle"
                      v-if="data.contactInfo.basicInfo.address"
                    >
                      <td>
                        <AddressContact
                          :data="data"
                          :color="data.design.layout.templateColor"
                          v-if="data.contactInfo.basicInfo.address"
                        />
                      </td>
                    </tr>
                  </table>
                </tr>
                <tr
                  style="vertical-align: middle"
                  v-for="data in data.contactInfo.customInfo"
                  :key="data.id"
                >
                  <td>
                    <span
                      >{{ data.field }}<span v-if="data.field">:</span>
                      {{ data.value }}</span
                    >
                  </td>
                </tr>
              </table>
            </td>
            <td
              style="padding-left: 5px; border-left: 3px solid"
              :style="{
                color: data.design.layout.templateColor,
              }"
              v-if="data.socialInfo"
            >
              <SocialIcons :data="data" type="vertical" />
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
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
