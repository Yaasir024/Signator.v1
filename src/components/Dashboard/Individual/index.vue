<script setup>
import {
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  onUnmounted,
  computed,
  watch,
} from "vue";
import { useRouter } from "vue-router";

import { dashboardStore } from "@/stores/dashboard";
import { authStore } from "@/stores/auth";
import { systemStore } from "@/stores/system";
import { editorStore } from "@/stores/editor";

import { useClickOutside } from "@/composables/useClickOutside";

import PageLoading from "@/components/LoadingState/PageLoading.vue";

import HeaderLayout from "@/components/Layout/HeaderOnly.vue";
import Overlay from "@/components/Overlay.vue";
import Snackbar from "@/components/Snackbar.vue";
import Delete from "@/components/Modal/ConfirmDelete.vue";
import ConfirmDraft from "@/components/Modal/ConfirmDraft.vue";
import Rename from "@/components/Modal/Rename.vue";
import Card from "@/components/Dashboard/Card.vue";
import Toast from "@/components/Toast/index.vue";

const router = useRouter();

const useEditorStore = editorStore();
const useDashboard = dashboardStore();
const useAuth = authStore();
const useSystemStore = systemStore();

const currentTab = ref("published");

const newSignature = () => {
  if (useSystemStore.isEligibleToCreate()) {
    useEditorStore.data = {};
    router.push({ path: "/editor" });
  } else {
    useSystemStore.addNotificationData({
      message: "Upgrade to create more signatures.",
      type: "error",
    });
  }
};

// Confirm Draft
const deleteDraft = () => {
  useDashboard.confirmDraftModal = false;
  useEditorStore.deleteDraft();
};
const editDraft = () => {
  useDashboard.confirmDraftModal = false;
  router.push({ path: "/editor" });
};

const editSignature = (data) => {
  useEditorStore.data = data;
  router.push({ path: "/editor" });
};

const optionsMenu = ref("");
const toggleOptionsMenu = (uid) => {
  if (optionsMenu.value == "") {
    optionsMenu.value = uid;
  } else {
    optionsMenu.value = "";
  }
};
const optionsMenuPopup = ref([]);

function handleClickOutside(event) {
  for (const ref of optionsMenuPopup.value) {
    if (ref.contains(event.target)) {
      // The event target is inside the element with the dynamic ref
      return;
    }
  }
  // The event target is outside the elements with the dynamic ref
  optionsMenu.value = "";
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

// Go TO Preview Page
const previewSignature = (uid) => {
  router.push({ path: `/preview/${uid}` });
};


// Rename
const signatureCurrentTitle = ref("");
// Id of Signature to be renamed
const renameSignatureId = ref("");
// Visibility of Rename Modal
const renameModal = ref(false);
const openRenameModal = (id, title) => {
  optionsMenu.value = "";
  renameModal.value = true;
  renameSignatureId.value = id;
  signatureCurrentTitle.value = title;
};
const closeRenameModal = () => {
  renameModal.value = false;
  renameSignatureId.value = "";
  signatureCurrentTitle.value = "";
};

// Delete
// Id of Signature to be deleted
const deleteSignatureId = ref("");
// Visibility of Delete Modal
const deleteModal = ref(false);
// Open Delete Modal
const confirmDelete = (id) => {
  optionsMenu.value = "";
  deleteModal.value = true;
  deleteSignatureId.value = id;
};
const closeDeleteModal = () => {
  deleteModal.value = false;
  deleteSignatureId.value = "";
};

const showLoader = computed(() => {
  if (useDashboard.allSignatures.status && useSystemStore.userData.status) {
    return false;
  } else {
    return true;
  }
});


</script>

<template>
  <HeaderLayout>
    <section>
      <div class="" v-if="showLoader">
        <PageLoading />
      </div>
      <div class="" v-if="!showLoader">
        <div class="min-h-[calc(100vh_-_68px)]">
          <div class="py-8 px-4">
            <main class="w-full pb-4 max-w-[1280px] mx-auto">
              <div class="signatures py-3">
                <div
                  class="header w-full px-6 flex items-center justify-between"
                >
                  <div class="text-lg font-medium" v-if="useSystemStore.userData.status">
                    Signatures({{
                      useSystemStore.userData.data.publishedSignatures.length
                    }}/
                    {{
                      useSystemStore.userData.data.subscriptionData
                        .signaturePackage
                    }})
                  </div>
                  <button
                    class="py-1.5 px-4 bg-primary-color border-primary-color text-white text-base font-medium rounded-lg"
                    @click="newSignature()"
                  >
                    New Signature
                  </button>
                </div>
                <div class="" v-if="useDashboard.allSignatures.data.length != 0">
                  <!-- v-if="useDashboard.allSignatures" -->

                  <div
                    class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-5 lg:gap-y-3 px-4 py-6"
                  >
                    <div
                      class=""
                      v-for="data in useDashboard.allSignatures.data"
                      :key="data.uid"
                    >
                      <Card
                        :data="data"
                        :hasDraft="useEditorStore.data.uid == data.uid"
                      >
                        <template #footer>
                          <div
                            class="pt-3 pb-4 px-2 border-t flex items-center justify-between"
                          >
                            <button
                              class="py-2 px-4 bg-primary-color text-white font-medium text-base rounded-md"
                              @click="editSignature(data)"
                            >
                              Edit Signature
                            </button>
                            <div class="flex items-center">
                              <div class="mr-2">
                                <button
                                  class="px-2 py-1 border-2 border-primary-color rounded-md text-base text-primary-color flex items-center"
                                  @click="previewSignature(data.uid)"
                                >
                                  <div class="mr-1">
                                    <svg
                                      width="24"
                                      height="24"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                    >
                                      <path
                                        d="M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z"
                                      />
                                    </svg>
                                  </div>
                                  Preview
                                </button>
                              </div>
                              <div class="relative" ref="optionsMenuPopup">
                                <button
                                  class="cursor-pointer"
                                  @click="toggleOptionsMenu(data.uid)"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"
                                    />
                                  </svg>
                                </button>
                                <transition name="menu">
                                  <div
                                    class="absolute bg-white border rounded-xl shadow-md bottom-9 right-0 w-[150px] overflow-hidden"
                                    v-if="optionsMenu == data.uid"
                                  >
                                    <ul class="text-base">
                                      <li
                                        class="hover:bg-gray-200 transition-all duration-300 ease-in-out"
                                      >
                                        <div
                                          class="cursor-pointer flex items-center px-4 py-3"
                                          @click="useDashboard.duplicate(data)"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                          >
                                            <path
                                              d="M10 19h10v1h-10v-1zm14-13v18h-18v-6h-6v-18h18v6h6zm-18 0h10v-4h-14v14h4v-10zm16 2h-1.93c-.669 0-1.293.334-1.664.891l-1.406 2.109h-3.93l-1.406-2.109c-.371-.557-.995-.891-1.664-.891h-2v14h14v-14zm-12 6h10v-1h-10v1zm0 3h10v-1h-10v1z"
                                            />
                                          </svg>
                                          <span class="ml-2">Duplicate</span>
                                        </div>
                                      </li>
                                      <li
                                        class="border-b hover:bg-gray-200 transition-all duration-300 ease-in-out"
                                      >
                                        <div
                                          class="cursor-pointer flex items-center px-4 py-3"
                                          @click="
                                            openRenameModal(
                                              data.uid,
                                              data.title
                                            )
                                          "
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                          >
                                            <path
                                              d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z"
                                            />
                                          </svg>
                                          <span class="ml-2">Rename</span>
                                        </div>
                                      </li>
                                      <li
                                        class="hover:bg-gray-200 transition-all duration-300 ease-in-out"
                                      >
                                        <div
                                          class="cursor-pointer flex items-center px-5 py-3 text-red-600"
                                          @click="confirmDelete(data.uid)"
                                        >
                                          <svg
                                            width="20"
                                            height="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"
                                            />
                                          </svg>
                                          <span class="ml-2">Delete</span>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </transition>
                              </div>
                            </div>
                          </div>
                        </template>
                      </Card>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full flex flex-col items-center justify-center"
                  v-else
                >
                  <img
                    src="/images/emptyLogo.png"
                    alt=""
                    class="max-h-[265px] h-full"
                  />
                  <h1 class="text-xl font-medium uppercase">
                    NO Signatures Yet
                  </h1>
                  <span
                    class="text-base text-primary-color cursor-pointer mt-1"
                    @click="newSignature()"
                    >Create one</span
                  >
                  <p class="text-base mt-2">
                    Don't Know where to start? Visit our
                    <RouterLink to="/help-center">
                      <span class="text-primary-color cursor-pointer"
                        >Help Center</span
                      >
                    </RouterLink>
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
        <ConfirmDraft
          v-if="useDashboard.confirmDraftModal"
          @delete-draft="deleteDraft()"
          @edit-draft="editDraft()"
        />
        <Delete
          v-if="deleteModal"
          @close-delete-modal="closeDeleteModal()"
          :id="deleteSignatureId"
        />
        <Rename
          v-if="renameModal"
          @close-rename-modal="closeRenameModal()"
          :title="signatureCurrentTitle"
          :id="renameSignatureId"
        />
        <Overlay
          v-if="deleteModal || renameModal || useDashboard.confirmDraftModal"
        />
      </div>
    </section>
  </HeaderLayout>
</template>

<style scoped>
.panel-enter-active,
.panel-leave-active {
  transition: 0.32s ease all;
}
.panel-enter-from,
.panel-leave-to {
  transform: translateX(100%);
}

.menu-enter-active,
.menu-leave-active {
  transition: 0.32s ease all;
  transform-origin: bottom right;
}
.menu-enter-from,
.menu-leave-to {
  transform: scale(0);
}
</style>
