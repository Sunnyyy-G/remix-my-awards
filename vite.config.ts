import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import postcssCustomProperties from 'postcss-custom-properties';
import postcssImport from 'postcss-import';
import postcssMixins from  'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssExtendRule from 'postcss-extend-rule';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
    }),
    tsconfigPaths(),
  ],
  css: {
    postcss: {
      plugins: [
        // 处理 CSS @import 规则，将外部样式文件内联引入
        postcssImport, 
        // 支持 CSS 混合宏，方便复用样式代码
        postcssMixins, 
        // 允许嵌套的 CSS 语法，使样式结构更清晰
        postcssNested, 
        // 扩展 CSS 规则，类似 Sass 的 @extend 功能
        // require('postcss-extend-rule'), 
        postcssExtendRule,
        // 根据目标浏览器自动添加 CSS 前缀，确保兼容性
        autoprefixer,
        // 支持 CSS 自定义样式属性
        postcssCustomProperties
      ],
    }
  }
});
