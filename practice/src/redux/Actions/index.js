import * as type from "../contants"
export function submitForm(payload) {
  console.log("action dispatch")
  return{
    type:type.SUBMIT_FORM,
    payload:payload,
  } 
}