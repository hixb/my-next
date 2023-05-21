import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetMini
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetMini()
  ],
});