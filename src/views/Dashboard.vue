<script setup>
import { ref, reactive, onBeforeMount, onMounted, computed } from "vue";
import { dashboardStore } from "@/stores/dashboard";
import { authStore } from "@/stores/auth";
import { systemStore } from "@/stores/system";
import { useRouter } from "vue-router";

import Navbar from "@/components/Navbar.vue";
import Overlay from "@/components/Overlay.vue";
import Snackbar from "@/components/Snackbar.vue";
import Delete from "@/components/Modal/ConfirmDelete.vue";
import Rename from "@/components/Modal/Rename.vue";
import Card from "@/components/Dashboard/Card.vue";
import Toast from "@/components/Toast/index.vue";

const router = useRouter();

const useDashboard = dashboardStore();
const useAuth = authStore();
const useSystemStore = systemStore();

onMounted(() => {
  // useSystemStore.getUnpublishedDrafts();
  useDashboard.getSignatures();
  console.log(useDashboard.allSignatures.length);
});

const currentTab = ref("published");

const newSignature = async () => {};

const checkDrafts = (data) => {
  if (useSystemStore.drafts.some((e) => e.uid === data.uid)) {
    return true;
  } else {
    return false;
  }
};

const editSignature = (data) => {
  if (checkDrafts(data)) {
    router.push({ path: `/editor/${data.uid}` });
  } else {
    useSystemStore.addDraft(data, true);
  }
};

// Rename
const signatureCurrentTitle = ref("");
// Id of Signature to be renamed
const renameSignatureId = ref("");
// Visibility of Rename Modal
const renameModal = ref(false);
const openRenameModal = (id, title) => {
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
  deleteModal.value = true;
  deleteSignatureId.value = id;
};
const closeDeleteModal = () => {
  deleteModal.value = false;
  deleteSignatureId.value = "";
};
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <main class="py-8 px-8">
      <div class="flex">
        <main class="w-full py-4 px-2">
          <div class="header w-full px-2 flex justify-between">
            <ul class="flex items-center ml-3">
              <li
                class="py-2 px-4 border rounded-l-xl text-base cursor-pointer transition-all ease-in-out duration-300"
                :class="
                  currentTab == 'published'
                    ? 'bg-primary-color text-white'
                    : 'text-primary-color'
                "
                @click="currentTab = 'published'"
              >
                Published
              </li>
              <li
                class="py-2 px-4 border rounded-r-xl text-base cursor-pointer transition-all ease-in-out duration-300"
                :class="
                  currentTab == 'drafts'
                    ? 'bg-primary-color text-white'
                    : 'text-primary-color'
                "
                @click="currentTab = 'drafts'"
              >
                Drafts
              </li>
            </ul>
            <button
              class="py-2 px-4 bg-primary-color text-white font-medium rounded-lg"
              @click="newSignature()"
            >
              New Signature
            </button>
          </div>
          <div class="signatures px-2 py-3">
            <div class="" v-if="currentTab == 'published'">
              <Card
                v-for="data in useDashboard.allSignatures"
                :key="data.uid"
                :data="data"
                :hasDraft="checkDrafts(data)"
                :type="'published'"
              >
                <template #footer>
                  <div
                    class="pt-3 pb-4 px-2 border-t flex items-center justify-between"
                  >
                    <button
                      class="py-2 px-4 bg-primary-color text-white font-medium rounded-lg"
                      @click="editSignature(data)"
                    >
                      Edit Signature
                    </button>
                    <div class="flex items-center">
                      <div
                        class="mr-3 cursor-pointer"
                        title="Duplicate"
                        @click="useDashboard.duplicate(data)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M10 19h10v1h-10v-1zm14-13v18h-18v-6h-6v-18h18v6h6zm-18 0h10v-4h-14v14h4v-10zm16 2h-1.93c-.669 0-1.293.334-1.664.891l-1.406 2.109h-3.93l-1.406-2.109c-.371-.557-.995-.891-1.664-.891h-2v14h14v-14zm-12 6h10v-1h-10v1zm0 3h10v-1h-10v1z"
                          />
                        </svg>
                      </div>
                      <div
                        class="mr-3 cursor-pointer"
                        title="Rename"
                        @click="openRenameModal(data.uid, data.title)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z"
                          />
                        </svg>
                      </div>
                      <div
                        class="cursor-pointer"
                        title="Delete"
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
                      </div>
                    </div>
                  </div>
                </template>
              </Card>
            </div>
            <div class="" v-if="currentTab == 'drafts'">
              <div class="" v-if="useSystemStore.unpublishedDrafts.length > 0">
                <div class="w-full grid grid-cols-2 gap-3 max-w-[1250px] mx-auto">
                  <div
                    class=""
                    v-for="data in useSystemStore.unpublishedDrafts"
                    :key="data.uid"
                  >
                    <Card
                      :data="data"
                      :hasDraft="checkDrafts(data)"
                      :type="'draft'"
                    >
                      <template #footer>
                        <div
                          class="pt-3 pb-4 px-2 border-t flex items-center justify-between"
                        >
                          <button
                            class="py-2 px-4 bg-primary-color text-white font-medium rounded-lg"
                            @click="editSignature(data)"
                          >
                            Edit Signature
                          </button>
                          <div class="flex items-center">
                            <div
                              class="mr-3 cursor-pointer"
                              title="Duplicate"
                              @click="useDashboard.duplicate(data)"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path
                                  d="M10 19h10v1h-10v-1zm14-13v18h-18v-6h-6v-18h18v6h6zm-18 0h10v-4h-14v14h4v-10zm16 2h-1.93c-.669 0-1.293.334-1.664.891l-1.406 2.109h-3.93l-1.406-2.109c-.371-.557-.995-.891-1.664-.891h-2v14h14v-14zm-12 6h10v-1h-10v1zm0 3h10v-1h-10v1z"
                                />
                              </svg>
                            </div>
                            <div
                              class="cursor-pointer"
                              title="Delete"
                              @click="useSystemStore.discardDraft(data.uid)"
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
                <h1 class="text-xl font-medium">NO DRAFTS</h1>
                <p class="text-base mt-3">
                  Don't Know where to start?
                  <span class="text-primary-color cursor-pointer"
                    >Watch This Video</span
                  >
                  or visit our
                  <span class="text-primary-color cursor-pointer"
                    >Help Center</span
                  >
                </p>
              </div>
            </div>
          </div>
        </main>
        <!-- <div class="w-[450px] pt-18 px-1">
          <div
            class="card m-2 h-[220px] w-full bg-white shadow-lg border rounded-lg"
          >
            <div
              class="w-full h-full px-6 text-center flex flex-col items-center justify-center"
            >
              <p class="text-base">
                Upgrade your account to unlock Pro Features and create more
                signatures..
              </p>
              <button
                class="mt-3 py-2 px-4 bg-primary-color text-white font-medium rounded-xl"
                @click="useDashboard.duplicate()"
              >
                Upgrade Now
              </button>
            </div>
          </div>
        </div> -->
      </div>
    </main>
  </div>
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
  <Overlay v-if="deleteModal || renameModal" />
  <!-- <Snackbar /> -->
</template>
