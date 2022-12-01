<script setup>
import PhoneContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Phone.vue";
import EmailContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Email.vue";
import WebsiteContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Website.vue";
import AddressContact from "@/components/Editor/Main/Layout/Reuseables/ContactInfo/Address.vue";
import SocialIcons from "@/components/Editor/Main/Layout/Reuseables/SocialIcons.vue";
import Addons from "@/components/Editor/Main/Layout/Reuseables/Addons/index.vue";
const prop = defineProps(["data"]);

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
                  :src="data.image.img"
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
            <Addons :addonData="data.addons" />
          </tbody>
        </table>
      </td>
    </tr>
  </table>
</template>
