/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[9].use[4]!./src/components/testeMenu/menu.module.sass":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[9].use[4]!./src/components/testeMenu/menu.module.sass ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".menu_menuContainer__m9gz0 {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  text-align: center;\\n  justify-content: center;\\n  width: 100%;\\n  padding: 20px;\\n  margin: 30px 0;\\n  gap: 20px;\\n}\\n.menu_menuContainer__m9gz0 h2 {\\n  color: #3C3C3B;\\n  font-weight: 500;\\n  font-size: 1.5rem;\\n}\\n.menu_menuContainer__m9gz0 .menu_menuOptions__7srxq {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n}\\n.menu_menuContainer__m9gz0 .menu_menuOptions__7srxq button {\\n  margin: 10px 10px;\\n  border-radius: 10px;\\n  padding: 20px;\\n  font-size: 1rem;\\n  font-weight: 700;\\n  color: #3C3C3B;\\n  background-color: rgba(238, 238, 238, 0);\\n  border: 1px solid #F9B233;\\n  cursor: pointer;\\n}\\n.menu_menuContainer__m9gz0 .menu_menuOptions__7srxq button:hover {\\n  background-color: #f0f0f0;\\n}\\n.menu_menuContainer__m9gz0 .menu_content__D0Thm {\\n  transition: opacity 0.5s ease;\\n}\\n.menu_menuContainer__m9gz0 .menu_content__D0Thm.menu_hidden__Y_eDX {\\n  opacity: 0;\\n}\\n\\n.menu_linhaDecorativa__Nvhje {\\n  width: 96%;\\n  background-color: #F9B233;\\n  height: 2px;\\n  margin-left: 23px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/components/testeMenu/menu.module.sass\"],\"names\":[],\"mappings\":\"AAAA;EACE,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,uBAAA;EACA,WAAA;EACA,aAAA;EACA,cAAA;EACA,SAAA;AACF;AAAE;EACE,cAAA;EACA,gBAAA;EACA,iBAAA;AAEJ;AADE;EACE,aAAA;EACA,qCAAA;AAGJ;AAFI;EACE,iBAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;EACA,wCAAA;EACA,yBAAA;EACA,eAAA;AAIN;AAHM;EACE,yBAAA;AAKR;AAJE;EACE,6BAAA;AAMJ;AAJI;EACE,UAAA;AAMN;;AAEA;EACE,UAAA;EACA,yBAAA;EACA,WAAA;EACA,iBAAA;AACF\",\"sourcesContent\":[\".menuContainer\\n  font-family: 'Roboto', sans-serif \\n  display: flex\\n  flex-direction: column\\n  text-align: center\\n  justify-content: center\\n  width: 100%\\n  padding: 20px\\n  margin: 30px 0\\n  gap: 20px\\n  h2\\n    color: #3C3C3B\\n    font-weight: 500\\n    font-size: 1.5rem\\n  .menuOptions \\n    display: grid\\n    grid-template-columns: repeat(4, 1fr)\\n    button \\n      margin: 10px 10px\\n      border-radius: 10px\\n      padding: 20px\\n      font-size: 1rem\\n      font-weight: 700\\n      color: #3C3C3B\\n      background-color: #eeeeee00\\n      border: 1px solid #F9B233\\n      cursor: pointer\\n      &:hover \\n        background-color: #f0f0f0  \\n  .content \\n    transition: opacity 0.5s ease // Propriedade de transição para suavizar a mudança de opacidade\\n    //opacity: 1 // Definir a opacidade inicial para 1, ou seja, visível\\n    &.hidden \\n      opacity: 0 // Opacidade 0 para esconder o conteúdo\\n\\n\\n\\n\\n\\n\\n\\n.linhaDecorativa\\n  width: 96%\\n  background-color: #F9B233\\n  height: 2px\\n  margin-left: 23px\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"menuContainer\": \"menu_menuContainer__m9gz0\",\n\t\"menuOptions\": \"menu_menuOptions__7srxq\",\n\t\"content\": \"menu_content__D0Thm\",\n\t\"hidden\": \"menu_hidden__Y_eDX\",\n\t\"linhaDecorativa\": \"menu_linhaDecorativa__Nvhje\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzldLnVzZVs0XSEuL3NyYy9jb21wb25lbnRzL3Rlc3RlTWVudS9tZW51Lm1vZHVsZS5zYXNzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMseUtBQXFGO0FBQy9IO0FBQ0E7QUFDQSxzRUFBc0Usd0NBQXdDLGtCQUFrQiwyQkFBMkIsdUJBQXVCLDRCQUE0QixnQkFBZ0Isa0JBQWtCLG1CQUFtQixjQUFjLEdBQUcsaUNBQWlDLG1CQUFtQixxQkFBcUIsc0JBQXNCLEdBQUcsdURBQXVELGtCQUFrQiwwQ0FBMEMsR0FBRyw4REFBOEQsc0JBQXNCLHdCQUF3QixrQkFBa0Isb0JBQW9CLHFCQUFxQixtQkFBbUIsNkNBQTZDLDhCQUE4QixvQkFBb0IsR0FBRyxvRUFBb0UsOEJBQThCLEdBQUcsbURBQW1ELGtDQUFrQyxHQUFHLHNFQUFzRSxlQUFlLEdBQUcsa0NBQWtDLGVBQWUsOEJBQThCLGdCQUFnQixzQkFBc0IsR0FBRyxPQUFPLDBHQUEwRyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsK2lDQUEraUM7QUFDeHJGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90ZXN0ZU1lbnUvbWVudS5tb2R1bGUuc2Fzcz9lYWE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWVudV9tZW51Q29udGFpbmVyX19tOWd6MCB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAzMHB4IDA7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5tZW51X21lbnVDb250YWluZXJfX205Z3owIGgyIHtcXG4gIGNvbG9yOiAjM0MzQzNCO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ubWVudV9tZW51Q29udGFpbmVyX19tOWd6MCAubWVudV9tZW51T3B0aW9uc19fN3NyeHEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxufVxcbi5tZW51X21lbnVDb250YWluZXJfX205Z3owIC5tZW51X21lbnVPcHRpb25zX183c3J4cSBidXR0b24ge1xcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzNDM0MzQjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRjlCMjMzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVudV9tZW51Q29udGFpbmVyX19tOWd6MCAubWVudV9tZW51T3B0aW9uc19fN3NyeHEgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxufVxcbi5tZW51X21lbnVDb250YWluZXJfX205Z3owIC5tZW51X2NvbnRlbnRfX0QwVGhtIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xcbn1cXG4ubWVudV9tZW51Q29udGFpbmVyX19tOWd6MCAubWVudV9jb250ZW50X19EMFRobS5tZW51X2hpZGRlbl9fWV9lRFgge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1lbnVfbGluaGFEZWNvcmF0aXZhX19OdmhqZSB7XFxuICB3aWR0aDogOTYlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QjIzMztcXG4gIGhlaWdodDogMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIzcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY29tcG9uZW50cy90ZXN0ZU1lbnUvbWVudS5tb2R1bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQURFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FBR0o7QUFGSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBSU47QUFITTtFQUNFLHlCQUFBO0FBS1I7QUFKRTtFQUNFLDZCQUFBO0FBTUo7QUFKSTtFQUNFLFVBQUE7QUFNTjs7QUFFQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tZW51Q29udGFpbmVyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYgXFxuICBkaXNwbGF5OiBmbGV4XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICB0ZXh0LWFsaWduOiBjZW50ZXJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICB3aWR0aDogMTAwJVxcbiAgcGFkZGluZzogMjBweFxcbiAgbWFyZ2luOiAzMHB4IDBcXG4gIGdhcDogMjBweFxcbiAgaDJcXG4gICAgY29sb3I6ICMzQzNDM0JcXG4gICAgZm9udC13ZWlnaHQ6IDUwMFxcbiAgICBmb250LXNpemU6IDEuNXJlbVxcbiAgLm1lbnVPcHRpb25zIFxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcilcXG4gICAgYnV0dG9uIFxcbiAgICAgIG1hcmdpbjogMTBweCAxMHB4XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxcbiAgICAgIHBhZGRpbmc6IDIwcHhcXG4gICAgICBmb250LXNpemU6IDFyZW1cXG4gICAgICBmb250LXdlaWdodDogNzAwXFxuICAgICAgY29sb3I6ICMzQzNDM0JcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlMDBcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjlCMjMzXFxuICAgICAgY3Vyc29yOiBwb2ludGVyXFxuICAgICAgJjpob3ZlciBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjAgIFxcbiAgLmNvbnRlbnQgXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlIC8vIFByb3ByaWVkYWRlIGRlIHRyYW5zacOnw6NvIHBhcmEgc3Vhdml6YXIgYSBtdWRhbsOnYSBkZSBvcGFjaWRhZGVcXG4gICAgLy9vcGFjaXR5OiAxIC8vIERlZmluaXIgYSBvcGFjaWRhZGUgaW5pY2lhbCBwYXJhIDEsIG91IHNlamEsIHZpc8OtdmVsXFxuICAgICYuaGlkZGVuIFxcbiAgICAgIG9wYWNpdHk6IDAgLy8gT3BhY2lkYWRlIDAgcGFyYSBlc2NvbmRlciBvIGNvbnRlw7pkb1xcblxcblxcblxcblxcblxcblxcblxcbi5saW5oYURlY29yYXRpdmFcXG4gIHdpZHRoOiA5NiVcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUIyMzNcXG4gIGhlaWdodDogMnB4XFxuICBtYXJnaW4tbGVmdDogMjNweFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1lbnVDb250YWluZXJcIjogXCJtZW51X21lbnVDb250YWluZXJfX205Z3owXCIsXG5cdFwibWVudU9wdGlvbnNcIjogXCJtZW51X21lbnVPcHRpb25zX183c3J4cVwiLFxuXHRcImNvbnRlbnRcIjogXCJtZW51X2NvbnRlbnRfX0QwVGhtXCIsXG5cdFwiaGlkZGVuXCI6IFwibWVudV9oaWRkZW5fX1lfZURYXCIsXG5cdFwibGluaGFEZWNvcmF0aXZhXCI6IFwibWVudV9saW5oYURlY29yYXRpdmFfX052aGplXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[9].use[4]!./src/components/testeMenu/menu.module.sass\n"));

/***/ })

});