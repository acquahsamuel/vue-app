<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import Filter from "./icons/filter.vue";
import CustomerIcon from "./icons/customer.vue";
import SpinnerIcon from "./icons/spinner.vue";
import MenuIcon from "./icons/menu.vue"

</script>

<template>
  <div class="flex flex-row h-screen">
    <div
      class="flex flex-col w-16 bg-blue-100 justify-between items-center p-4"
    >
      <div class="flex flex-col space-y-4">
        <a href="">
          <div class="rounded-full bg-gray-400 w-9 h-9">
          </div>
        </a>
        <a href="">
          <div class="rounded-full bg-gray-400 w-8 h-8"></div>
        </a>
        <a href="">
          <div class="rounded-full bg-gray-400 w-8 h-8"></div>
        </a>
        <a href="">
          <div class="rounded-full bg-gray-400 w-8 h-8"></div>
        </a>
       </div>

        <div class="flex flex-col space-y-4">
          <a href="">
            <div class="rounded-full bg-gray-400 w-8 h-8"></div>
          </a>
          <a href="">
            <div class="rounded-full bg-gray-400 w-8 h-8"></div>
          </a>
          <a href="">
            <div class="rounded-full bg-gray-400 w-8 h-8"></div>
          </a>
        </div>
     
    </div>
    
    <div class="w-72 bg-gray-100 p-5">
       
       <div class="flex flex-row items-center justify-between mb-7">
        <h1> Inbox </h1>
        <MenuIcon class="h-5 w-5" />
       </div>

       <div>
         <h3> Conversation </h3>
       </div>


       <div class="flex h-64 flex-col  justify-between mb-2 space-y-4 p-2">
        <div class="flex align-center flex-row space-x-1">
            <CustomerIcon class="h-4 w-4"/> 
            <p class="flex-grow">You</p> 
            <span> 6 </span>
          </div>
           
       </div>
    </div>



    <div class="w-24 flex-auto bg-red-100">C</div>
  </div>

  <!-- <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md w-6/12">
    <h4 class=""> Create Account </h4>
    <div class="mt-1">
      <label for="" class="py-3 inline-block"> Email </label>
      <input
        id="email"
        name="email"
        type="email"
        class="w-full border border-gray-300 focus:outline-none focus:border-indigo-500 px-3 py-3 rounded-lg shadow-sm"
        autocomplete="email"
        autocorrect="email"
        placeholder="Enter Email"
      />
    </div>
    <div class="mt-1">
      <label for="" class="py-3 inline-block"> Password </label>
      <input
        id="password"
        name="password"
        type="password"
        class="w-full border border-gray-300 focus:outline-none focus:border-indigo-500 px-3 py-3 rounded-lg shadow-sm"
        autocomplete="password"
        autocorrect="email"
        placeholder="Enter Password"
      />
    </div>
  </div> -->
</template>
