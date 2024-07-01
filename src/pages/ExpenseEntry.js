import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import db from '../firebase/firebase'

function ExpenseEntry( {purchases}) {
    const [purchaseLog, setPurchaseLog] = useState({
        'name': '',
        'date': '',
        'paymentCard': '',
        'category': '',
        'subCategory': '',
        'amount': '',
        'isEssential': ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPurchaseLog({
          ...purchaseLog,
          [name]: value
        });
    };

    const handleNewPurchaseSubmit = async() => {
        const collectionRef = collection(db, "purchases");
        console.log(purchaseLog.isEssential);
        await addDoc(collectionRef, purchaseLog);
    }

  return (
    <div className='new-entry'>
        <form className="p-10 new-entry-form" onSubmit={handleNewPurchaseSubmit}>
            <h2 className="text-xl mb-3">Log your Purchase</h2>
            <div className="flex justify-between mb-10">
                <div>
                    <label htmlFor="name" className="block text-blue-600">Purchase Name</label>
                    <input type='text' id='name' 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2" 
                        placeholder="Shopping"
                        name='name'
                        value={purchaseLog.name}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="date" className="block text-blue-600">Date of Purchase</label>
                    <input id='date' type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Select date"
                        name='date'
                        value={purchaseLog.date}
                        onChange={handleChange}
                    >

                    </input>
                </div>
                <div>
                    <label htmlFor="payment-card" className="block text-blue-600">Payment Card Bank</label>
                    <input type='text' id='payment-card' 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="Scotia"
                        name='paymentCard'
                        value={purchaseLog.paymentCard}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="entry-category" className="block text-blue-600">Category</label>
                    <input type='text' id='entry-category'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="Self Investment"
                        name='category'
                        value={purchaseLog.category}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="entry-sub-category" className="block text-blue-600">Sub Category</label>
                    <input type='text' id='entry-sub-category' 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="Books"
                        name='subCategory'
                        value={purchaseLog.subCategory}
                        onChange={handleChange}
                        ></input>
                </div>
                <div>
                    <label htmlFor="entry-amount" className="block text-blue-600">Purchase Amount</label>
                    <input type='text' id='entry-amount' 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="e.g. 5.15"
                        name='amount'
                        value={purchaseLog.amount}
                        onChange={handleChange}
                        ></input>
                </div>
                <div>
                    <label htmlFor="entry-essential-check" className="block text-blue-600">Essential Purchase?</label>
                    <input type='text' id='entry-essential-check' 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="Yes/ No"
                        name='isEssential'
                        value={purchaseLog.isEssential}
                        onChange={handleChange}
                        ></input>
                </div>
            </div>
            <button type="submit" className="text-white bg-blue-600 hover:bg-blue-800 p-2 rounded-md">
                Log Purchase
            </button>
        </form>
        <div className="p-10">
            <h2 className="text-xl mb-3">Your Previous Purchases</h2>
            <table className="w-full text-sm text-left text-gray-500 mb-10">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr className="">
                        <th className="px-6 py-3">Purchase Name</th>
                        <th className="px-6 py-3">Purchase Date</th>
                        <th className="px-6 py-3">Payment Card Bank</th>
                        <th className="px-6 py-3">Category</th>
                        <th className="px-6 py-3">Sub Category</th>
                        <th className="px-6 py-3">Purchase Amount</th>
                        <th className="px-6 py-3">Essential Purchase</th>

                    </tr>
                </thead>
                <tbody>
                    {purchases.map((purchase) => (
                        <tr>
                            <td className="name px-6 py-4">{purchase.name}</td>
                            <td className="date px-6 py-4">{purchase.date}</td>
                            <td className="card px-6 py-4">{purchase.paymentCard}</td>
                            <td className="category px-6 py-4">{purchase.category}</td>
                            <td className="sub-category px-6 py-4">{purchase.subCategory}</td>
                            <td className="amount px-6 py-4">{purchase.amount}</td>
                            <td className="px-6 py-4">{purchase.isEssential === true? 'Yes': 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ExpenseEntry