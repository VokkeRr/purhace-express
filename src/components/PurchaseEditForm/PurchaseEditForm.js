import React, { useContext } from 'react'
import PurchaseContext from '../../contexts/PurchaseContext'
import { getPurchases, editPurchaseChangeField, editPurchaseCancel, editPurchase, editPurchasesFailure } from '../../actions/actionCreators'
import Loader from '../Loader/Loader'

export default function PurchaseEditForm() {
    const { state: { editedPurchase }, dispatch } = useContext(PurchaseContext)
    const handleSubmit = async evt => {
        evt.preventDefault();
        try { 
            await editPurchase(dispatch, editedPurchase.item)
            await getPurchases(dispatch)
        } catch (e) {
            dispatch(editPurchasesFailure(e))
            throw e
        }
    }

    const handleCancel = evt => {
        dispatch(editPurchaseCancel())
    }

    const handleChange = evt => {
        const { target: { name, value } } = evt
        dispatch(editPurchaseChangeField(name, value))
    }
    const getFooter = () => {
        if (editedPurchase.loading) {
            return <Loader />
        }
        if (editedPurchase.error) {
            return (
                <>
                    Fatal Error, retry?
                    <button>Yes</button>
                    <button type='reset'>Cancel</button>
                </>
            )
        }
        return (
            <>
                <button className= "addbtn">{editedPurchase.item.id === 0 ? 'Add' : 'Save'}</button>
                <button className= "cabtn" type='reset'>Cancel</button>
            </>
        )
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleCancel} className='neon'>
            <div className='inputForms'>
                <select className="select" onChange={handleChange} name="category" value={editedPurchase.item.category}> 
                {/* TO DO ISPRAVIT COD TUT */}
                    <option value="Cars">Cars</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Politics">Politics</option>
                    <option value="Programming">Programming</option>
                    <option value="Games">Games</option>
                </select>
                <input className="summma" placeholder='Enter sum' onChange={handleChange} type="number" name="amount" value={editedPurchase.item.amount} />
                <textarea className= "descript" placeholder='Enter description' name="description" onChange={handleChange} value={editedPurchase.item.description}></textarea>
            </div>
            <div className='Formofbuttons'>
            {getFooter()}
            </div>
        </form>
    )
}
