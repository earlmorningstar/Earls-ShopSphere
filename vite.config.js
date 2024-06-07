// // https://vitejs.dev/config/
// import million from "million/compiler";
// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";
 
// export default defineConfig({
//   plugins: [million.vite({ auto: true }), react()],
// });


// https://vitejs.dev/config/
import million from "million/compiler";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  build: {
    outDir: 'dist',
  },
});
