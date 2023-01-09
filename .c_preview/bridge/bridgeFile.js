import { render } from "../preset/vue.js";
export const bridgeData = {
    "workspaceFolder": "file:///Users/mohseenhabib/POS-Awesome-1",
    "serverRootDir": "",
    "previewFolderRelPath": "preview",
    "activeFileRelPath": "../Desktop/pos%20appliance%20next-vue/src/views/button3.vue",
    "mapFileRelPath": "../Desktop/pos%20appliance%20next-vue/src/views/button3.vue",
    "presetName": "vue",
    "workspaceFolderName": "POS-Awesome-1"
};
export const preview = () => render(getMod);
const getMod = () => import("../../Desktop/pos%20appliance%20next-vue/src/views/button3.vue");