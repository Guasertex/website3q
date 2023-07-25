<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      countryModel: ref(null),
      countries: ["USA", "Russia", "China", "Britan", "Kazahstan"],
      // ПЕРЕДЕЛАТЬ ====================================!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!++++++++++++=================
      setVal1: ref(false),
      setVal2: ref(false),
      setVal3: ref(false),
      groupVal: ref(null),
      setVal: [
        {
          label: "Push Notifications",
          value: "pushNotification",
          color: "green",
        },
        {
          label: "Same as email",
          value: "pushEmailNotification",
          color: "orange",
        },
        {
          label: "No push notifications",
          value: "dontPushNotification",
          color: "red",
        },
      ],
    };
  },
};
</script>
<template>
  <q-page class="py-5 px-70">
    <q-form>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <p
                for="username"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </p>
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <span
                    class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                    >workcation.com/</span
                  >
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autocomplete="username"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div class="col-span-full">
              <p
                for="about"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                About
              </p>
              <div class="mt-2">
                <q-input
                  id="about"
                  name="about"
                  rows="3"
                  outlined
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>

            <div class="flex row">
              <div
                for="photo"
                class="text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </div>
              <div class="mt-2 flex items-center gap-x-3">
                <q-icon
                  name="add_a_photo"
                  class="5xl p-4 text-gray-300"
                  aria-hidden="true"
                />
                <q-btn
                  rounded
                  class="px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm"
                >
                  Change
                </q-btn>
              </div>
            </div>

            <div class="col-span-full">
              <div
                for="cover-photo"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Cover photo
              </div>
              <div
                class="filed-component mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
              >
                <div class="text-center" transparent>
                  <q-icon
                    name="photo"
                    class="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <div
                      for="file-upload"
                      class="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <q-input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </div>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <p
                for="first-name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </p>
              <div class="mt-2">
                <q-input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  outlined
                  class="w-150 py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <p
                for="last-name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </p>
              <div class="mt-2">
                <q-input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  outlined
                  class="w-150 border-0 py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Email address</label
              >
              <div class="mt-2">
                <q-input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  outlined
                  class="w-150 py-1.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <p
                for="country"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </p>
              <div class="mt-2">
                <q-select
                  id="country"
                  name="country"
                  v-model="countryModel"
                  :options="countries"
                  autocomplete="country-name"
                  outlined
                  class="w-full text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="col-span-full">
              <p
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </p>
              <div class="mt-2">
                <q-input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  outlined
                  class="w-full text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <p
                for="city"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </p>
              <div class="mt-2">
                <q-input
                  type="text"
                  name="city"
                  id="city"
                  autocomplete="address-level2"
                  outlined
                  class="w-full text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <p
                for="region"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province
              </p>
              <div class="mt-2">
                <q-input
                  type="text"
                  name="region"
                  id="region"
                  autocomplete="address-level1"
                  outlined
                  class="w-full text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <p
                for="postal-code"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </p>
              <div class="mt-2">
                <q-input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  outlined
                  class="w-full text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Notifications
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            We&rsquo;ll always let you know about important changes, but you
            pick what else you want to hear about.
          </p>

          <div class="mt-10 space-y-10">
            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900">
                By Email
              </legend>
              <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <q-checkbox v-model="setVal1" />
                  </div>
                  <div class="text-sm leading-6">
                    <div for="comments" class="font-medium text-gray-900">
                      Comments
                    </div>
                    <p class="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <q-checkbox v-model="setVal2" />
                  </div>
                  <div class="text-sm leading-6">
                    <div for="candidates" class="font-medium text-gray-900">
                      Candidates
                    </div>
                    <p class="text-gray-500">
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <q-checkbox v-model="setVal3" />
                  </div>
                  <div class="text-sm leading-6">
                    <div for="offers" class="font-medium text-gray-900">
                      Offers
                    </div>
                    <p class="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900">
                Push Notifications
              </legend>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                These are delivered via SMS to your mobile phone.
              </p>
              <div class="">
                <q-option-group
                  :options="setVal"
                  type="radio"
                  v-model="groupVal"
                />
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <q-btn
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </q-btn>
        <q-btn
          type="button"
          class="px-3 py-2 text-sm font-semibold shadow-sm hover:whitesmoke focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:whitesmoke"
        >
          Save
        </q-btn>
      </div>
    </q-form>
  </q-page>
</template>
<style lang="scss" scoped>
.body--dark {
  div, p {
    color: #bdc2c7;
    background-color: transparent;
  }
  .q-btn {
    color: whitesmoke;
  }
  .filed-component {
    border-color: #bdc2c7;
  }
  .text-gray-900 {
    color: whitesmoke;
  }
}
</style>
