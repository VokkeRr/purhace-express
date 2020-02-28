import React, { useContext } from 'react'
import PurchaseContext from '../../contexts/PurchaseContext'
import { getPurchases, fetchPurchasesFailure } from '../../actions/actionCreators'
import { useEffect } from 'react'

import Loader from '../Loader/Loader'
import Purchase from '../Purchase/Purchase'
import PurchaseEditForm from '../PurchaseEditForm/PurchaseEditForm'

export default function PurchasesList() 
{
    const {state, dispatch} = useContext(PurchaseContext)
    const {purchases: {purchase, loading, error}} = state


    useEffect(()=>{
        (async ()=>{
            try{
                await getPurchases(dispatch);
            }catch(e){
                dispatch(fetchPurchasesFailure(e))
            }
        })()
    }, [dispatch])

    const retryHandle = async ()=>{
       try{
           await  getPurchases(dispatch);
       }catch (e){
            dispatch(fetchPurchasesFailure(e))
       }
    }

    const errorEl = ()=>{
        return<>
                <p>FATAL ERROR!!! UNINSTAL WINDOWS!


                </p>
                <button onClick={retryHandle}>Reload!</button>    
            </>
    }

   const amounts = purchase.map(o => o.amount).reduce((a,c)=> a + parseInt( c, 10) ,0)

    return (
        <div className='Purchaseslist'>
            <PurchaseEditForm />
            {error && errorEl()}
            {loading && <Loader/> }
            {purchase.map(p => <Purchase key={p.id} purchaseItem={p} /> )}
            <p className="Sum">Total sum: {amounts}</p>
        </div>
    )
}


