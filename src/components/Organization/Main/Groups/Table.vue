<script setup>
import { groupsStore } from "@/stores/Organization/groups";
const groups = [
  {
    id: 1,
    name: "Marketing",
    template: "Template 1",
  },
  {
    id: 2,
    name: "Development",
    template: "Template 1",
  },
  {
    id: 3,
    name: "Finance",
    template: "Template 1",
  },
];
const useGroupStore = groupsStore();
</script>

<template>
  <div class="">
    <table class="table">
      <thead>
        <tr class="">
          <th>
            <span>Group Name</span>
          </th>
          <th>
            <span>Template</span>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="" v-for="group in useGroupStore.allGroups.data" :key="group.id">
          <td>
            <span>{{ group.name }}</span>
          </td>
          <td>
            <span>{{ group.template }}</span>
          </td>
          <td class="icons">
            <span>
              <button class="hover:bg-canvas-color p-2 rounded-full mr-1.5" @click="useGroupStore.openEditModal(group, 'edit')">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-[15px] h-[15px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18.311 2.828l2.862 2.861-15.033 15.032-3.583.722.723-3.584 15.031-15.031zm0-2.828l-16.873 16.872-1.438 7.127 7.127-1.437 16.874-16.873-5.69-5.689z"
                  />
                </svg>
              </button>
              <button class="hover:bg-canvas-color p-2 rounded-full" @click="useGroupStore.openDeleteModal(group)">
                <svg
                  fill="currentColor"
                  class="w-[15px] h-[15px]"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                    fill-rule="nonzero"
                  />
                </svg>
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>


<style scoped>
.table {
  border-collapse: collapse;
  font-size: 18px;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
}
.table thead tr {
  background-color: #f3f2ef;
  text-align: left;
  font-weight: bold;
}

.table th,
.table td {
  padding: 12px 15px;
}
.table tbody .icons {
  text-align: right;
}
.table tbody tr {
  border-bottom: 1px solid #dddd;
}
.table tbody tr:last-of-type {
  border-bottom: 4px solid #f3f2ef;
}
</style>