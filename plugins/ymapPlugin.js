import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: '5e60783f-0e05-4235-95d1-d66aea7d48f1',
  lang: 'ru_RU',
}

Vue.use(YmapPlugin, settings);