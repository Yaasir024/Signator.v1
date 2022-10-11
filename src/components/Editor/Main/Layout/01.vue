<script setup>
import IconSocial from "@/components/Editor/Main/Icon/Social.vue";
import IconVideoMeeting from "@/components/Editor/Main/Icon/VideoMeeting.vue";
const prop = defineProps(["data"]);
</script>

<template>
  <table
    style="
      vertical-align: -webkit-baseline-middle;
      font-size: medium;
      font-family: Arial;
      width: 100%;
    "
    :style="{ color: data.design.layout.textColor }"
  >
    <tbody>
      <tr>
        <td style="text-align: center">
          <img
            :src="data.image.imgSrc || '/images/placeholder-small.jpg'"
            alt=""
            style="display: inline-block"
            :style="{ width: data.design.image.width + 'px' }"
          />
        </td>
      </tr>
      <tr>
        <td height="15"></td>
      </tr>
      <tr style="text-align: center">
        <td>
          <h3>{{ data.name || "Full Name" }}</h3>
          <p>{{ data.position || "Position" }}</p>
          <p>
            <span>{{ data.department || "Department" }}</span>
            <span>&nbsp;|&nbsp;</span>
            <span>{{ data.company || "Company" }}</span>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <table
            cellpadding="0"
            cellspacing="0"
            style="
              vertical-align: -webkit-baseline-middle;
              font-size: medium;
              font-family: Arial;
              width: 100%;
            "
          >
            <tbody>
              <tr>
                <td height="30"></td>
              </tr>
              <tr>
                <td
                  direction="horizontal"
                  height="1"
                  style="
                    width: 100%;
                    border-bottom: 1px solid;
                    border-left: none;
                    display: block;
                  "
                  :style="{
                    'border-bottom-color': data.design.layout.templateColor,
                  }"
                ></td>
              </tr>
              <tr>
                <td height="30"></td>
              </tr>
            </tbody>
          </table>
          <table
            cellpadding="0"
            cellspacing="0"
            style="vertical-align: -webkit-baseline-middle; width: 100%"
          >
            <tbody>
              <tr style="vertical-align: top">
                <td>
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    style="vertical-align: -webkit-baseline-middle"
                  >
                    <tbody>
                      <tr
                        height="25"
                        style="vertical-align: middle"
                        v-for="data in data.contactInfo"
                        :key="data.id"
                      >
                        <td>
                          <span style="padding: 5px"
                            >{{ data.field || "Field" }}:</span
                          >
                        </td>
                        <td>
                          <span>{{ data.value }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td width="15"><div></div></td>
                <td>
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    style="vertical-align: -webkit-baseline-middle; width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <span
                            v-for="social in data.socialInfo"
                            :key="social.id"
                            style="
                              padding-right: 4px;
                              padding-bottom: 4px;
                              display: inline-block;
                            "
                          >
                            <a :href="social.url" target="_blank">
                                <IconSocial :icon="social.name" :data="data.design.socialIcon" />
                            </a>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table cellspacing="0" cellpadding="0" border-0>
            <tr v-if="data.addons.social.isAdded">
              <td
                style="margin: 0.1px"
                :style="{
                  'padding-top': data.addons.social.style.paddingTop + 'px',
                }"
              >
                <span
                  v-for="social in data.addons.social.items"
                  :key="social.id"
                >
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
                      :height="42"
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
            <tr v-if="data.addons.videoMeeting.isAdded">
              <td
                style="margin: 0.1px"
                :style="{
                  'padding-top':
                    data.addons.videoMeeting.style.paddingTop + 'px',
                }"
              >
                <a :href="data.addons.videoMeeting.items.url" target="_blank">
                  <IconVideoMeeting
                    :type="data.addons.videoMeeting.items.name"
                    :text="data.addons.videoMeeting.items.text"
                  />
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</template>
