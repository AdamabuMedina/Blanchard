import _vars from "../_vars";
import SimpleBar from "simplebar";


_vars.headerSelectList.forEach(item => {
  let simplebar = new SimpleBar(item, {
    autoHide: false,
  });
})
