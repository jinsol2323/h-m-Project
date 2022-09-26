function getProDetail(id){
    return async(dispatch,getState)=>{
        let url = `https://my-json-server.typicode.com/jinsol2323/hnm-Project/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODETAIL_SUCCESS",payload:{data}})
    }
}

export const proDetailAction = {getProDetail};