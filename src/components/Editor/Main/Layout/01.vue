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
          <tbody>
            <tr>
              <td style="text-align: center; padding-bottom: 12px">
                <span>{{ data.name }}</span
                ><br />
                <span>{{ data.position }}</span>
                <p>
                  <span v-if="data.department">{{ data.department }}</span>
                  <span v-if="data.department && data.company"
                    >&nbsp;|&nbsp;</span
                  >
                  <span v-if="data.company">{{ data.company }}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td valign="top" align="center" style="padding-bottom: 8px">
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
            </tr>
            <tr>
              <td
                style="vertical-align: top; text-align: center; padding: 20px"
                :style="{
                  backgroundColor: data.design.layout.templateColor,
                }"
              >
                <table
                  cellpadding="0"
                  cellspacing="0"
                  style="color: #fff"
                  align="center"
                >
                  <tr>
                    <table cellspacing="0" cellpadding="0" border-0>
                      <tr>
                        <td>
                          <PhoneContact
                            :data="data"
                            color="'#ffffff'"
                            v-if="data.contactInfo.basicInfo.phone"
                          />
                          <WebsiteContact
                            :data="data"
                            color="'#ffffff'"
                            v-if="data.contactInfo.basicInfo.website"
                          />
                          <EmailContact
                            :data="data"
                            color="'#ffffff'"
                            v-if="data.contactInfo.basicInfo.email"
                          />
                          <AddressContact
                            :data="data"
                            color="'#ffffff'"
                            v-if="data.contactInfo.basicInfo.address"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            v-for="data in data.contactInfo.customInfo"
                            :key="data.id"
                            style="display: inline-block; margin: 0px 5px"
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
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          cellspacing="0"
          cellpadding="0"
          border-0
          style="max-width: 500px; width: 100%"
        >
          <tbody>
            <tr v-if="data.addons.videoMeeting">
              <td
                style="margin: 0.1px; width: 100%; font-size: 16px"
                :style="{
                  'padding-top':
                    data.addons.videoMeeting.style.paddingTop + 'px',
                }"
              >
                <VideoMeeting :data="data" />
              </td>
            </tr>
            <tr v-if="data.addons.social">
              <table cellspacing="0" cellpadding="0" border-0>
                <tr>
                  <td
                    style="margin: 0.1px; width: 100%"
                    :style="{
                      'padding-top': data.addons.social.style.paddingTop + 'px',
                    }"
                  >
                    <SocialButton :data="data" />
                  </td>
                </tr>
              </table>
            </tr>
            <tr v-if="data.addons.cta">
              <td
                style="margin: 0.1px; width: 100%"
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
            <tr v-if="data.addons.greenMessage">
              <td style="padding-right: 5px; width: 100%; padding-top: 10px">
                <GreenMessage :data="data" />
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </table>
</template>
