import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueAxios from "vue-axios";
import axios from "axios";
import '../src/assets/style.css'
import PrimeVue from 'primevue/config';
import Toast from "primevue/toast";
import ToastService from 'primevue/toastservice'
import InputText from "primevue/inputtext";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import Badge from 'primevue/badge';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App);
app.use(store)
app.use(router)
app.use(VueAxios, axios)

app.use(PrimeVue)
app.use(ToastService);
app.component("Toast", Toast)
app.component("InputText", InputText)
app.component("Column", Column)
app.component("DataTable", DataTable)
app.component("Menubar", Menubar)
app.component("Card", Card)
app.component("Badge", Badge)

app.mount('#app')
