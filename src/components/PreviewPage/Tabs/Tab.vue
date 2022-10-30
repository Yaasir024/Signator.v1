<script setup>
import { ref, reactive, computed, inject } from "vue";
import TabSection from "@/components/PreviewPage/Tabs/TabSections.vue";

const currentTab = inject("currentTab");
const copyToClipboard = () => {
  console.log("Copy to Clipboard");
};
</script>
<template>
  <transition-group name="tabs">
    <TabSection :title="'Gmail'" v-if="currentTab == 'gmail'">
      <template #steps>
        <li class="item">Create an email signature with Signator editor.</li>
        <li class="item">
          Click on
          <span class="text-primary-color" @click="copyToClipboard()"
            >Copy to clipboard.</span
          >
        </li>
        <li class="item">
          Go to <span class="text-primary-color">Gmail</span>
        </li>
        <li class="item">
          Click <strong>Settings</strong> in the top right, then
          <strong>General</strong> > <strong>Signature Settings</strong>.
        </li>
        <li class="item">
          Paste your signature using
          <strong>(Ctrl+V or Command+V)</strong> into the
          <strong>"Signature"</strong> section.
        </li>
        <li class="item">
          At the bottom of the page, click
          <strong>Save Changes</strong>.
        </li>
      </template>
    </TabSection>
    <TabSection :title="'Outlook'" v-if="currentTab == 'outlook'">
      <template #steps>
        <li class="item">Create an email signature with Signator editor.</li>
        <li class="item">
          Click on
          <span class="text-primary-color" @click="copyToClipboard()"
            >Copy to clipboard.</span
          >
        </li>
        <li class="item">
          Go to <span class="text-primary-color">Outlook</span> and compose a
          new mail.
        </li>
        <li class="item">
          Go to <strong>Message Tab</strong> and click
          <strong>Signature > Signatures</strong>.
        </li>
        <li class="item">
          Click on
          <strong>New</strong> and give your signature a name.
        </li>
        <li class="item">
          Click on the
          <strong>+</strong> icon to add a signature.
        </li>
        <li class="item">
          <strong>For Mac:</strong>
          Paste your signature into the signature box using
          <strong>(Ctrl+V or Command+V)</strong><br />
          Then, click on the clipboard that popped-up and select
          <strong>Keep Source Formatting</strong> pasting option and click OK.
          <strong>For Windows:</strong>
          Right click the
          <strong>Edit Signature box</strong><br />
          and choose
          <strong>Keep Source Formatting</strong> pasting option and click OK.
        </li>
      </template>
    </TabSection>
    <TabSection :title="'Yahoo'" v-if="currentTab == 'yahoo'">
      <template #steps>
        <li class="item">Create an email signature with Signator editor.</li>
        <li class="item">
          Click on
          <span class="text-primary-color" @click="copyToClipboard()"
            >Copy to clipboard.</span
          >
        </li>
        <li class="item">
          Go to <span class="text-primary-color">Gmail</span>
        </li>
        <li class="item">
          Click <strong>Settings</strong> in the top right, then
          <strong>More Settings > Writing emails</strong>.
        </li>
        <li class="item">
          Click checkbox button opposite your email and paste your signature
          using
          <strong>(Ctrl+V or Command+V)</strong> into the textarea.
        </li>
        <li class="item">
          At the bottom of the page, click
          <strong>Save Changes</strong>.
        </li>
      </template>
    </TabSection>
    <TabSection :title="'Apple Mail'" v-if="currentTab == 'apple'">
      <template #steps>
        <li class="item">Create an email signature with Signator editor.</li>
        <li class="item">
          Click on
          <span class="text-primary-color" @click="copyToClipboard()"
            >Copy to clipboard.</span
          >
        </li>
        <li class="item">
          Go to <span class="text-primary-color">Gmail</span>
        </li>
        <li class="item">
          Click <strong>Settings</strong> in the top right, then
          <strong>General</strong> > <strong>Signature Settings</strong>.
        </li>
        <li class="item">
          Paste your signature using
          <strong>(Ctrl+V or Command+V)</strong> into the
          <strong>"Signature"</strong> section.
        </li>
        <li class="item">
          At the bottom of the page, click
          <strong>Save Changes</strong>.
        </li>
      </template>
    </TabSection>
  </transition-group>
</template>

<style scoped>
article .item {
  padding-left: 15px;
  counter-increment: item;
  position: relative;
  line-height: 22.8px;
}
article .item strong {
  font-weight: 600;
}
article .item::before {
  position: absolute;
  left: 0;
  width: 12px;
  content: counter(item) ".";
}
/* 
.tabs-enter-active,
.tabs-leave-active {
  transition: all 0.03s ease;

}
.tabs-leave-active {
  transition-delay: .1s;
}
.tabs-enter-active {
  transition-delay: 1s;
}
.tabs-enter-from,
.tabs-leave-to {
  opacity: 0;
} */
</style>
