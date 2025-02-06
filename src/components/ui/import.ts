export {Button} from './button'
export {Checkbox} from './checkbox'
export {Dialog} from './dialog'
export {Drawer} from './drawer'
export {Select} from './select'
export {Popover} from './popover'
export {Slider} from './slider'
export {Skeleton} from './skeleton'
export {Input} from './input'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
import "tailwindcss";