<script setup>
const emits = defineEmits(['copy'])
</script>

<template>
  <article>
    <h2 class="text-xl font-medium mt-8">
      How do I add my new email signature to Outlook?
    </h2>
    <ol class="font-light text-sm my-2 px-3">
      <li class="item">Create an email signature with Signator editor.</li>
      <li class="item">
        Click on
        <span class="text-primary-color cursor-pointer" @click="$emit('copy')"
          >Copy to clipboard.</span
        >
      </li>
      <li class="item">
        Go to <span class="text-primary-color">Outlook</span> and compose a new
        mail.
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
        and choose <strong>Keep Source Formatting</strong> pasting option and
        click OK.
      </li>
    </ol>
  </article>
</template>

<style scoped>
.item {
  padding-left: 15px;
  counter-increment: item;
  position: relative;
  line-height: 22.8px;
}
.item strong {
  font-weight: 600;
}
.item::before {
  position: absolute;
  left: 0;
  width: 12px;
  content: counter(item) ".";
}
</style>
