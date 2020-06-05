<template>
  <div class="call">
    <div v-show="!showPhone" class="ball" @click="onShowPhone" />
    <div v-show="showPhone" class="phone">
      <div class="phone__close" @click="onShowPhone">X</div>
      <div class="phone__screen">

        <v-text-field v-model="text" />
        <v-btn v-text="'GET'" @click="() => handleBtn(Method.get)" />
        <v-btn v-text="'POST'" @click="() => handleBtn(Method.post)" />
        <v-btn v-text="'PUT'" @click="() => handleBtn(Method.put)" />
        <v-btn v-text="'DELETE'" @click="() => handleBtn(Method.delete)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import api from '@/api'

enum Method {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete',
}

@Component
export default class Call extends Vue {
  Method = Method
  showPhone = false
  text = ''

  onShowPhone () {
    this.showPhone = !this.showPhone
  }

  async handleBtn (method: Method) {
    const text: string = this.text
    const methods = {
      get: (text: string) => {
        return axios.get(api.users, {
          params: { text },
        })
      },
      post: (text: string) => {
        return axios.post(api.users, {
          text,
        })
      },
      put: (text: string) => {
        return axios.put(api.users, {
          text,
        })
      },
      delete: (text: string) => {
        return axios.delete(api.users, {
          params: {
            text,
          },
        })
      },
    }
    const data = await methods[method](text)
    console.log(data)
    console.log(method)
  }
}
</script>

<style lang="scss" scoped>
.call {
  .ball {
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: black;
  }

  .phone {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 250px;
    height: 450px;
    border: 4px solid black;
    background-color: white;

    &__close {
      align-self: flex-end;
    }

    &__screen {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
