let initialState={
    productDetailList:null,
}


function productReducer(state=initialState, action){

    let {type,payload} = action;

    switch(type){
        case "GET_PRODETAIL_SUCCESS":
            return{...state,productDetailList:payload.data};
        default :
            return {...state};
    }

}

export default productReducer


