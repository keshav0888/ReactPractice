import * as type from "../contants"
export function submitForm(payload) {
  return{
    type:type.SUBMIT_FORM,
    payload:payload,
  } 
}