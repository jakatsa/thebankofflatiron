import React from "react";
import AddTransactionForm from "./AddTransactionForm";

function AddTransaction(){

    const addTransaction = async (newTransaction) => {
        try {
            const response = await fetch("https://json-server-vercel-seven-tau.vercel.app/transactions", {
               method: 'POST',
               headers: {
                'Content-Type' : 'application/json'
               },
               body: JSON.stringify(newTransaction)
            });
            if(response.ok){
                  //re render 
                  fetchTransaction(); 
            }else {
                 console.log('Error adding transaction ' , response.statusText)
            }
        }catch(error) {
          console.error("error adding transaction " , error)
        }
    }

    return (
        <div>
            <AddTransactionForm onAdd={addTransaction}/>
        </div>
    )
}

export default AddTransaction;
