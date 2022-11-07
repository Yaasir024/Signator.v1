<script setup>
import PhoneContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Phone.vue";
import EmailContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Email.vue";
import WebsiteContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Website.vue";
import AddressContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Address.vue";
import SocialIcons from "@/components/Editor/Main/Layout/Reuseables/SocialIcons.vue";
import SocialButton from "@/components/Editor/Main/Layout/Reuseables/SocialButton.vue";
import VideoMeeting from "@/components/Editor/Main/Layout/Reuseables/VideoMeeting.vue";
import GreenMessage from "@/components/Editor/Main/Layout/Reuseables/GreenMessage.vue";
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
            <td
              style="padding-left: 10px; border-left: 2px solid"
              :style="{ 'border-left-color': data.design.layout.templateColor }"
            >
              <table cellspacing="0" cellpadding="0" border-0>
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
                <tr v-if="data.socialInfo">
                  <td style="padding-top: 5px">
                    <SocialIcons :data="data" type="horizontal" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr v-if="data.addons.videoMeeting">
      <td
        style="margin: 0.1px; width: 100%; font-size: 16px"
        :style="{
          'padding-top': data.addons.videoMeeting.style.paddingTop + 'px',
        }"
      >
        <VideoMeeting :data="data" />
      </td>
    </tr>
    <tr v-if="data.addons.social">
      <table cellspacing="0" cellpadding="0" border-0>
        <tr>
          <td
            :style="{
              'padding-top': data.addons.social.style.paddingTop + 'px',
            }"
          >
            <span v-for="social in data.addons.social.items" :key="social.id">
              <a
                :href="social.url"
                target="_blank"
                style="
                  padding-right: 4px;
                  padding-bottom: 4px;
                  display: inline-block;
                "
              >
                <img
                  :src="'/icons/addons/' + social.name + '_1' + '.png'"
                  :alt="social.name"
                  :style="{
                    height: data.addons.social.style.height + 'px',
                  }"
                />
              </a>
            </span>
          </td>
        </tr>
      </table>
    </tr>
    <tr v-if="data.addons.cta">
      <td
        style="width: 100%; text-align: center"
        :style="{
          'padding-top': data.addons.cta.style.paddingTop + 'px',
        }"
      >
        <a :href="data.addons.cta.item.url" target="_blank">
          <div
            style="
              display: inline-block;
              padding: 0px 8px;
              cursor: pointer;
              font-size: 18px;
              font-weight: bold;
              line-height: 36px;
              min-width: 100px;
            "
            :style="{
              background: data.addons.cta.style.buttonColor,
              color: data.addons.cta.style.textColor,
            }"
          >
            {{ data.addons.cta.item.text }}
          </div>
        </a>
      </td>
    </tr>
    <tr v-if="data.addons.disclaimer">
      <table cellspacing="0" cellpadding="0" border-0 style="margin-top: 10px">
        <tr>
          <td
            style="margin: 0.1px; width: 100%; line-height: 1.3"
            :style="{
              'font-size': data.addons.disclaimer.style.fontSize,
              color: data.addons.disclaimer.style.textColor,
            }"
          >
            {{ data.addons.disclaimer.text }}
          </td>
        </tr>
      </table>
    </tr>
    <tr v-if="data.addons.greenMessage">
      <td style="padding-right: 5px; width: 100%; padding-top: 10px">
        <GreenMessage :data="data" />
      </td>
    </tr>
  </table>
</template>
