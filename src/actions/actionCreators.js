import { FETCH_PURCHASES_REQUEST, FETCH_PURCHASES_SUCCESS, FETCH_PURCHASES_FAILURE, REMOVE_PURCHASES_FAILURE, REMOVE_PURCHASES_SUCCESS, REMOVE_PURCHASES_REQUEST, REMOVE_PURCHASES_CANCEL, REMOVE_PURCHASES_CONFIRM, EDIT_PURCHASE_FIELD_CHANGE, EDIT_PURCHASE_REQUEST, EDIT_PURCHASE_FAILURE, EDIT_PURCHASE_SUCCESS, EDIT_PURCHASE_EXISTING, EDIT_PURCHASE_CANCEL, GET_DESCRIPTION_BY_ID_REQUEST, GET_DESCRIPTION_BY_ID_FAILURE, GET_DESCRIPTION_BY_ID_SUCCSES, GET_DESCRIPTION_BY_ID_CANCEL } from "./actionsTypes";

const api = 'https://exxpress-backend.herokuapp.com/api'

let error =  ''

export async function getPurchases(dispatch){

        dispatch(fetchPurchasesRequest())
        try{
            const response = await fetch(`${api}/purchases`)
            if(!response.ok){
                throw new Error(error);
            }
            const purchases = await response.json()
            dispatch(fetchPurchasesSuccess(purchases))
            
        }
        catch(error){
            dispatch(fetchPurchasesFailure(error));
            throw error
        }
} 

export function fetchPurchasesSuccess(purchase){
    return {
        type: FETCH_PURCHASES_SUCCESS,
        payload: {purchase},
    }
}

export function fetchPurchasesRequest(){
    return {
        type: FETCH_PURCHASES_REQUEST,
        payload: {},
    }
}


export function fetchPurchasesFailure(error){
    return {
        type: FETCH_PURCHASES_FAILURE,
        payload: {error},
    }
}

export async function removePurchaseById(dispatch, id){
    dispatch(removePurchaseRequest());
    try{
        const response = await fetch(`${api}/purchases/${id}`,{
            method: 'DELETE'
        });
        if(!response.ok){
            throw new Error(error);
        }
        dispatch(removePurchaseSuccess());
    }catch(error){
        dispatch(removePurchaseFailure(error));
        throw error;
    }
}

export function removePurchaseSuccess(){
    return{
        type: REMOVE_PURCHASES_SUCCESS,
        payload: {},
    };
}

export function removePurchaseConfirm(id){
    return{
        type: REMOVE_PURCHASES_CONFIRM,
        payload: {id},
    }
}

export function removePurchaseFailure(error){
    return{
        type: REMOVE_PURCHASES_FAILURE,
        payload:{
            error
        }
    }
}

export function removePurchaseCancel(){
    return {
        type: REMOVE_PURCHASES_CANCEL,
        payload: {},
    }
}

export function removePurchaseRequest(){
    return {
        type: REMOVE_PURCHASES_REQUEST,
        payload:{},
    }
}

// ed

export async function editPurchase(dispatch, item){
   dispatch(editPurchasesRequest())
   try{
       const response = await fetch(`${api}/purchases`, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(item)
       })
       if(!response.ok){
           throw new Error(error)
       } 
       dispatch(editPurchasesSucces())
   }catch(error){
        dispatch(editPurchasesFailure(error))
        throw error
   }
}
export function editPurchasesSucces(){ 
    return{
        type: EDIT_PURCHASE_SUCCESS,
        payload:{}
    }
}

export function editPurchasesFailure(error){ 
    return{
        type: EDIT_PURCHASE_FAILURE,
        payload:{
            error
        }
    }
}

export function editPurchasesRequest(){ 
    return{
        type: EDIT_PURCHASE_REQUEST,
        payload:{}
    }
}

export function editPurchaseChangeField(name, value){ 
    return {
        type: EDIT_PURCHASE_FIELD_CHANGE,
        payload: {name, value}
    }
}

export function editPurchaseCancel(){ 
    return {
        type: EDIT_PURCHASE_CANCEL,
        payload: {}
    }
}

export function editPurchaseExisting(item){ 
    return {
        type: EDIT_PURCHASE_EXISTING,
        payload: {item}
    }
}

export function getDescriptionByIdRequest (id){
    return {
        type: GET_DESCRIPTION_BY_ID_REQUEST,
        payload: {id}
    }
}

export function getDescriptionByIdFailure (error){
    return {
        type: GET_DESCRIPTION_BY_ID_FAILURE,
        payload: {
            error
        }
    }
}

export function getDescriptionByIdSuccess (description, id){
    return {
        type: GET_DESCRIPTION_BY_ID_SUCCSES,
        payload: {description, id}
    }
}

export function getDescriptionByIdCancel(){
    return{
        type: GET_DESCRIPTION_BY_ID_CANCEL,
        payload: {}
    }
}

// описание тут 

export async function getDescriptionById (dispatch, id){
    dispatch(getDescriptionByIdRequest(id))
    try{
        const response = await fetch(`${api}/purchases/${id}`)
    if(!response.ok){
        throw new Error(error)
    }
    const purchase = await response.json()
    const [{description}] = purchase
    dispatch(getDescriptionByIdSuccess(description, id))
    }catch(error){
        dispatch(getDescriptionByIdFailure(error))
        throw error
    }
}