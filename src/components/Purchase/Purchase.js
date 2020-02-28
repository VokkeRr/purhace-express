import React from 'react'
import { useContext } from 'react'
import PurchaseContext from '../../contexts/PurchaseContext'
import Loader from '../Loader/Loader'
import { removePurchaseConfirm, removePurchaseById, getPurchases, removePurchaseCancel, removePurchaseFailure, editPurchaseExisting, getDescriptionByIdCancel, getDescriptionById, getDescriptionByIdFailure } from '../../actions/actionCreators'


export default function Purchase({ purchaseItem }) {
    const { state: { removedPurchase, descriptionPurchase }, dispatch } = useContext(PurchaseContext) // TO ASC


    const handleRemove = evt => { // evt releated to button to add to it prevent default /// because it is in form 
        evt.preventDefault()
        dispatch(removePurchaseConfirm(purchaseItem.id))
    }

    const handleRemovePrecess = async evt => {
        evt.preventDefault();
        try {
            await removePurchaseById(dispatch, purchaseItem.id)
            await getPurchases(dispatch)
        } catch (e) {
            dispatch(removePurchaseFailure(e))
        }
    }

    const handleEdit = evt => {
        evt.preventDefault();
        dispatch(editPurchaseExisting(purchaseItem))
    }

    const handleCancel = async evt => {
        evt.preventDefault()
        dispatch(removePurchaseCancel())

    }

    const handleCancelDesc = evt => {
        evt.preventDefault()
        dispatch(getDescriptionByIdCancel())
    }

    const handleProcessDesc = async evt => {
        evt.preventDefault()
        try {
            await getDescriptionById(dispatch, purchaseItem.id)
        } catch (e) {
            dispatch(getDescriptionByIdFailure(e))
        }
    }

    const handleShowDescription = async evt => {
        evt.preventDefault();
        try {
            await getDescriptionById(dispatch, purchaseItem.id)
        } catch (e) {
            dispatch(getDescriptionByIdFailure(e))
        }
    }

    const getDescription = () => {
        if (descriptionPurchase.id !== purchaseItem.id) {
            return (
                <>
                    <button className="descbutton" onClick={handleShowDescription}>Open description</button>
                </>
            )
        }

        if (descriptionPurchase.loading) {
            return <Loader />
        }

        if (descriptionPurchase.error) { 
            return (
                <div>
                    Description load error, retry?
                <button onClick={handleProcessDesc}>Yes</button>
                    <button onClick={handleCancelDesc}>No</button>
                </div>
            )
        }

        const { description } = descriptionPurchase;
        return (
            <div className="desctop">
                Description: {description}
            </div>
        )
    }

    const getFooter = () => {
        if (removedPurchase.id !== purchaseItem.id) {
            return (
                <div>
                    <button className="editman" onClick={handleEdit}>✎</button>
                    <button className="removemen" onClick={handleRemove}>✘</button>
                </div>
            )
        }
        if (removedPurchase.loading) {
            return <Loader />
        }
        if (removedPurchase.error) {
            return (
                <div>
                    Fatal Error. Retry?
                <button onClick={handleRemovePrecess}>Yes</button>
                    <button onClick={handleCancel}>No</button>
                </div>
            )
        }
        return (
            <div className="ashure">
                Are you sure, want to delete purchase?
            <button className="agry" onClick={handleRemovePrecess}>Yes</button>
                <button className="disagry" onClick={handleCancel}>No</button>
            </div>
        )
    }
     
    return (
        <div>
            <div className="Purchase" >
                <p>Category: {purchaseItem.category}</p>
                <p>Sum: {purchaseItem.amount}</p>
            </div>
            {getFooter()}
            {getDescription()}
        </div>  
    )
}
