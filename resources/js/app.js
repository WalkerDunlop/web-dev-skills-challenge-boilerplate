import './bootstrap';
import {createApp, defineAsyncComponent} from "vue";
import IncrementCounter from './components/ExampleComponent.vue';

createApp({}).component(
    'example-component',
    IncrementCounter
).mount('#app');
