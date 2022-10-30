<script setup>
import IconSocial from "@/components/Editor/Main/Icon/Social.vue";
import IconVideoMeeting from "@/components/Editor/Main/Icon/VideoMeeting.vue";
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
                        <span
                          ><span
                            :style="{
                              color: data.addons.signoff.style.templateColor,
                            }"
                          >
                            <span v-if="data.design.details.label == 'full'"
                              >Phone</span
                            >
                            <span v-if="data.design.details.label == 'initial'"
                              >P</span
                            >
                            <span v-if="data.design.details.label == 'icon'">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="currentColor"
                                viewBox="0 0 512 512"
                                style="display: inline-block"
                              >
                                <path
                                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                                />
                              </svg>
                            </span>
                          </span>
                          {{ data.contactInfo.basicInfo.phone }}</span
                        >
                      </td>
                    </tr>
                    <tr
                      style="vertical-align: middle"
                      v-if="data.contactInfo.basicInfo.website"
                    >
                      <td>
                        <span
                          ><span
                            :style="{
                              color: data.addons.signoff.style.templateColor,
                              display: inline - block,
                            }"
                          >
                            <span v-if="data.design.details.label == 'full'"
                              >Website</span
                            >
                            <span v-if="data.design.details.label == 'initial'"
                              >W</span
                            >
                            <span v-if="data.design.details.label == 'icon'">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="currentColor"
                                viewBox="0 0 512 512"
                                style="display: inline-block"
                              >
                                <path
                                  d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                                />
                              </svg>
                            </span>
                          </span>
                          {{ data.contactInfo.basicInfo.website }}</span
                        >
                      </td>
                    </tr>
                    <tr
                      style="vertical-align: middle"
                      v-if="data.contactInfo.basicInfo.email"
                    >
                      <td>
                        <span
                          ><span
                            :style="{
                              color: data.addons.signoff.style.templateColor,
                            }"
                          >
                            <span v-if="data.design.details.label == 'full'"
                              >Email</span
                            >
                            <span v-if="data.design.details.label == 'initial'"
                              >E</span
                            >
                            <span v-if="data.design.details.label == 'icon'">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="currentColor"
                                viewBox="0 0 512 512"
                                style="display: inline-block"
                              >
                                <path
                                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                                />
                              </svg>
                            </span>
                          </span>
                          {{ data.contactInfo.basicInfo.email }}</span
                        >
                      </td>
                    </tr>
                    <tr
                      style="vertical-align: middle"
                      v-if="data.contactInfo.basicInfo.address"
                    >
                      <td>
                        <span
                          ><span
                            :style="{
                              color: data.addons.signoff.style.templateColor,
                            }"
                          >
                            <span v-if="data.design.details.label == 'full'"
                              >Address</span
                            >
                            <span v-if="data.design.details.label == 'initial'"
                              >A</span
                            >
                            <span v-if="data.design.details.label == 'icon'"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                                style="display: inline-block"
                              >
                                <path
                                  d="M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
                                />
                              </svg>
                            </span>
                          </span>
                          {{ data.contactInfo.basicInfo.address }}</span
                        >
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
                        <IconSocial
                          :icon="social.name"
                          :data="data.design.socialIcon"
                        />
                      </a>
                    </span>
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
        <a :href="data.addons.videoMeeting.items.url" target="_blank">
          <IconVideoMeeting
            :type="data.addons.videoMeeting.items.name"
            :text="data.addons.videoMeeting.items.text"
          />
        </a>
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
      <table cellspacing="0" cellpadding="0" border-0 style="margin-top: 10px">
        <tr
          :style="{
            'font-size': data.addons.greenMessage.style.fontSize,
            color: data.addons.greenMessage.style.textColor,
          }"
        >
          <td
            style="padding-right: 5px"
            v-if="data.addons.greenMessage.items.icon"
          >
            <img
              :src="
                '/images/greenMessage/' + data.addons.greenMessage.items.icon
              "
              alt=""
            />
          </td>
          <td>{{ data.addons.greenMessage.items.text }}</td>
        </tr>
      </table>
      <td style="margin: 0.1px; width: 100%; line-height: 1.3">
        <p>
          <span style="height: 32px; width: 32px; display: inline-block"></span>
        </p>
      </td>
    </tr>
  </table>
</template>
