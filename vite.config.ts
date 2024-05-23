import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    WindiCSS(),
    
  ],
  build:{
    outDir:"./docs"
  },
  base:"/PortFolioWeb",


  server:{
    open:true,
    port:9000,
    proxy:{
      '/api':{
        target: 'http://localhost.9000',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/, '')
      }
    }
  }
})
