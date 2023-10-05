import * as type from "../contants"
const initialValues={
  data:[],
  loading:false
}
export default function submitForm(state=initialValues,action) {
  switch(action.type){
    case type.SUBMIT_FORM:
      return{
        ...state,
        loading:true
      }
      case type.SUBMIT_FORM_SUCCESS:
        return{
          ...state,
          data:action.payload,
          loading:false
        }
      case type.SUBMIT_FORM_SUCCESS:
        return{
          loading:false
        }  
      default:
        return state
  }
}