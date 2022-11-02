<script setup>
import General from "@/components/Editor/Sidebar/Section/General.vue";
import Social from "@/components/Editor/Sidebar/Section/Social.vue";
import Addons from "@/components/Editor/Sidebar/Section/Addon/index.vue";
import Design from "@/components/Editor/Sidebar/Section/Design.vue";
import Layout from "@/components/Editor/Sidebar/Section/Layout.vue";
import Addon from "@/components/Editor/Sidebar/Section/Addon/index.vue";
import { editorStore } from "@/stores/editor";
const useEditorStore = editorStore();
</script>

<template>
    <div class="editor-tools h-full w-full overflow-y-auto">
        <div class="px-4 pt-8 pb-14">
            <General v-if="useEditorStore.currentEditorNav === 'general'"/>
            <Social v-if="useEditorStore.currentEditorNav === 'social'" />
            <Addon v-if="useEditorStore.currentEditorNav === 'addons'"/>
            <Design v-if="useEditorStore.currentEditorNav === 'design'"/>
            <Layout v-if="useEditorStore.currentEditorNav === 'layout'"/>
        </div>
    </div>
</template>