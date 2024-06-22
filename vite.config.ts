import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [
        solid(), 
        viteTsconfigPaths()
    ],
})
