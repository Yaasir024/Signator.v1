<script setup>
import { ref, onMounted, computed } from "vue";

import Table from "@/components/Organization/Main/Employee/Table.vue";
import Checkbox from "@/components/Organization/Checkbox.vue";
const employees = [
  {
    id: "12345643",
    name: "Yaasir Falana",
    email: "falana@gmail.com",
    group: "Finance",
    lastUpdated: "27/01/2022",
  },
  {
    id: "236678j9",
    name: "Yaasir Mailak",
    email: "mailak@gmail.com",
    group: "Development",
    lastUpdated: "27/01/2022",
  },
  {
    id: "123j6g43",
    name: "Suzie Watson",
    email: "watson@gmail.com",
    group: "Finance",
    lastUpdated: "26/01/2022",
  },
  {
    id: "1234hj78",
    name: "Harry Potter",
    email: "wyzerd@gmail.com",
    group: "Marketing",
    lastUpdated: "29/01/2022",
  },
  {
    id: "12h6323",
    name: "Peter Garfield",
    email: "andrewwebs@gmail.com",
    group: "Development",
    lastUpdated: "27/01/2022",
  },
  {
    id: "13s7223",
    name: "Michelle Stone",
    email: "mj002@gmail.com",
    group: "Development",
    lastUpdated: "27/01/2022",
  },
  {
    id: "1jk7223",
    name: "Danyhu Yhawch",
    email: "qwinchi@gmail.com",
    group: "Marketing",
    lastUpdated: "29/01/2022",
  },
  {
    id: "1262p23",
    name: "Merry Go Usopp",
    email: "kamiussopp@gmail.com",
    group: "Development",
    lastUpdated: "29/01/2022",
  },
  {
    id: "24t623",
    name: "Nara Shikamaru",
    email: "kage20nara@gmail.com",
    group: "Marketing",
    lastUpdated: "22/01/2022",
  },
  {
    id: "3tu623",
    name: "Kazuto Kirigaya",
    email: "kirito@gmail.com",
    group: "Development",
    lastUpdated: "22/01/2022",
  },
  {
    id: "238623",
    name: "Klien kenzuki",
    email: "klienred@gmail.com",
    group: "Development",
    lastUpdated: "22/01/2022",
  },
  {
    id: "238h23",
    name: "Franky WaterSebun",
    email: "suuper@gmail.com",
    group: "Development",
    lastUpdated: "22/01/2022",
  },
];

const paginateArray = (array, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  let data = array.slice(startIndex, startIndex + pageSize);
  return {
    data: data,
    startIndex: startIndex + 1,
    last: startIndex + data.length,
    originLength: array.length,
  };
};

const currentPage = ref(1);
const pageSize = 10;

const paginatedData = computed(() => {
  return paginateArray(employees, currentPage.value, pageSize);
});

const nextPage = () => {
  if (paginatedData.value.last != paginatedData.value.originLength) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (paginatedData.value.startIndex != 1) {
    currentPage.value--;
  }
};

const selectedEmployees = ref([]);
const checkSelectedEmployee = (id) => {
  if (selectedEmployees.value.includes(id)) return true;
  return false;
};
const allChecked = ref(false);
const checkAllEmployees = () => {
  let ids = paginatedData.value.data.map((i) => {
    return i.id;
  });
  if (allChecked.value || selectedEmployees.value == ids) {
    allChecked.value = false;
    selectedEmployees.value = [];
  } else {
    allChecked.value = true;
    selectedEmployees.value = ids;
  }
};
const toggleEmployeeSelect = (id) => {
  if (checkSelectedEmployee(id)) {
    allChecked.value = false;
    selectedEmployees.value.splice(selectedEmployees.value.indexOf(id), 1);
    // selectedEmployees.value = selectedEmployees.value.filter(id => id != id);
  } else {
    selectedEmployees.value.push(id);
    console.log("Does not include");
  }
};

const checked = ref(false);
</script>

<template>
  <div class="mt-14 px-6">
    <div class="flex items-center justify-between mb-5 px-2">
      <div class="">
        <button
          class="hidden hover:bg-canvas-color p-3 rounded-full transition-all duration-300 ease-in-out"
          title="Delete"
        >
          <svg
            fill="currentColor"
            class="w-[20px] h-[20px]"
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
      </div>
      <div class="flex items-center text-base">
        <span
          >{{ paginatedData.startIndex }}-{{ paginatedData.last }} of
          {{ paginatedData.originLength }}</span
        >
        <div class="flex ml-2">
          <button
            class="p-2 rounded-full transition-all duration-200 ease-in-out"
            :class="
              paginatedData.startIndex != 1
                ? 'text-black cursor-pointer hover:bg-canvas-color'
                : 'text-gray-300 cursor-default'
            "
            title="previous"
            @click="prevPage()"
          >
            <svg
              fill="currentColor"
              class="w-[24px] h-[24px]"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591zm-.289 7.563v-5.446l-3.522 2.719z"
                fill-rule="nonzero"
              />
            </svg>
          </button>
          <button
            class="p-2 rounded-full transition-all duration-200 ease-in-out"
            :class="
              paginatedData.last != paginatedData.originLength
                ? 'text-black cursor-pointer hover:bg-canvas-color'
                : 'text-gray-300 cursor-default'
            "
            title="next"
            @click="nextPage()"
          >
            <svg
              fill="currentColor"
              class="w-[24px] h-[24px]"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z"
                fill-rule="nonzero"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    {{ selectedEmployees }}
    <table class="table">
      <thead>
        <tr class="">
          <th>
            <Checkbox @clicked="checkAllEmployees()" :checked="allChecked" />
          </th>
          <th>
            <span>ID</span>
          </th>
          <th>
            <span>Name</span>
          </th>
          <th>
            <span>Email</span>
          </th>
          <th>
            <span>Last Updated</span>
          </th>
          <th>
            <span>Group</span>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="" v-for="employee in paginatedData.data" :key="employee.id">
          <td>
            <Checkbox
              @clicked="toggleEmployeeSelect(employee.id)"
              :checked="checkSelectedEmployee(employee.id) ? true : false"
            />
          </td>
          <td>
            <span>{{ employee.id }}</span>
          </td>
          <td>
            <span>{{ employee.name }}</span>
          </td>
          <td>
            <span>{{ employee.email }}</span>
          </td>
          <td>
            <span>{{ employee.group }}</span>
          </td>
          <td>
            <span>{{ employee.lastUpdated }}</span>
          </td>
          <td>
            <span>
              <button class="hover:bg-canvas-color p-2 rounded-full mr-1.5">
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
              <button class="hover:bg-canvas-color p-2 rounded-full">
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
  width: 100%;
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
.table tbody tr {
  border-bottom: 1px solid #dddd;
}
.table tbody tr:last-of-type {
  border-bottom: 4px solid #f3f2ef;
}
</style>
