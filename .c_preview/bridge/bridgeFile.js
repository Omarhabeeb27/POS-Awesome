import { render } from "../preset/vue.js";
export const bridgeData = {
    "workspaceFolder": "file:///Users/mohseenhabib/POS-Awesome-1",
    "serverRootDir": "",
    "previewFolderRelPath": "preview",
    "activeFileRelPath": "posawesome/public/js/posapp/components/pos/Invoice.vue",
    "mapFileRelPath": "posawesome/public/js/posapp/components/pos/Invoice.vue",
    "presetName": "vue",
    "workspaceFolderName": "POS-Awesome-1"
};
export const preview = () => render(getMod);
const getMod = () => import("../../posawesome/public/js/posapp/components/pos/Invoice.vue");