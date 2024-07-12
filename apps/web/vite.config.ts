import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function antDesignIconsFix() {
  return {
    name: '@ant-design-icons-fix',
    transform(code: string, id: string) {
      if (id.includes('@ant-design/icons/lib/dist.js'))
        return code.replace(', dist as default', '');
      return code;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      plugins: [antDesignIconsFix()],
    },
  },
});
