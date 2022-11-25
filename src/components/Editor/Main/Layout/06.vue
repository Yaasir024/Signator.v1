<script setup>
import PhoneContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Phone.vue";
import EmailContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Email.vue";
import WebsiteContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Website.vue";
import AddressContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Address.vue";
import SocialIcons from "@/components/Editor/Main/Layout/Reuseables/SocialIcons.vue";
import Addons from "@/components/Editor/Main/Layout/Reuseables/Addons/index.vue";
const prop = defineProps(["data"]);
const isObjEmpty = (obj) => {
  if(Object.keys(obj).length == 0)
    return false
  return true
}
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
    <tr v-if="data.signoff">
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
      <td>
        <table cellspacing="0" cellpadding="0" border-0>
          <tbody>
            <tr>
              <td
                valign="top"
                style="padding-bottom: 8px"
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
              <td valign="top" style="padding: 2px 1px 2px 10px">
                <table cellspacing="0" cellpadding="0" border-0>
                  <tbody>
                    <tr>
                      <td
                        style="padding-bottom: 12px; border-bottom: 2px solid"
                        :style="{
                          borderBottomColor: data.design.layout.templateColor,
                        }"
                      >
                        <span>{{ data.name }}</span
                        ><br />
                        <p>
                          <span v-if="data.position">{{ data.position }}</span>
                          <span v-if="data.position && data.company"
                            >&nbsp;|&nbsp;</span
                          >
                          <span v-if="data.company">{{ data.company }}</span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 12px">
                        <PhoneContact
                          :data="data"
                          :color="data.design.layout.templateColor"
                          v-if="data.contactInfo.basicInfo.phone"
                        />
                        <WebsiteContact
                          :data="data"
                          :color="data.design.layout.templateColor"
                          v-if="data.contactInfo.basicInfo.website"
                        />
                        <EmailContact
                          :data="data"
                          :color="data.design.layout.templateColor"
                          v-if="data.contactInfo.basicInfo.email"
                        />
                        <AddressContact
                          :data="data"
                          :color="data.design.layout.templateColor"
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
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
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
