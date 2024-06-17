import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import db from '../firebase/firebase'

function ExpenseEntry( {purchases}) {
    const [entryName, setEntryName] = useState({});
    const [entryDate, setEntryDate] = useState({});
    const [entryBankCard, setEntryBankCard] = useState({});
    const [entryCategory, setEntryCategory] = useState({});
    const [entrySubCategory, setEntrySubCategory] = useState({});
    const [entryAmount, setEntryAmount] = useState({});
    const [entryEssentialCheck, setEntryEssentialCheck] = useState({});

    function handleNewPurchaseName(event) {
        setEntryName(event.target.value);
        console.log(entryName)
    }

    function handleNewPurchaseDate(event) {
        setEntryDate(event.target.value);
    }

    function handleNewPurchaseBankCard(event) {
        setEntryBankCard(event.target.value);
    }

    function handleNewPurchaseCategory(event) {
        setEntryCategory(event.target.value);
    }

    function handleNewPurchaseSubCategory(event) {
        setEntrySubCategory(event.target.value);
    }

    function handleNewPurchaseAmount(event) {
        setEntryAmount(event.target.value);
    }

    function handleNewPurchaseEssentialCheck(event) {
        if((event.target.value).toLowerCase() === 'yes') {
            setEntryEssentialCheck(true);
        }
        else {
            setEntryEssentialCheck(false);
        }
    }

    const handleNewPurchaseLog = async() => {
        const collectionRef = collection(db, "purchases");
        const payload = {
            "name": entryName,
            "date": entryDate,
            "paymentCard": entryBankCard,
            "category": entryCategory,
            "subCategory": entrySubCategory,
            "amount": entryAmount,
            "wasEssential": entryEssentialCheck
        }
        await addDoc(collectionRef, payload);
    }

  return (
    <div>
        <form className="p-10">
            <h2 className="text-xl mb-3">Log your Purchase</h2>
            <div className="flex justify-between mb-10">
                <div>
                    <label htmlFor="entry-name" className="block text-blue-600">Purchase Name</label>
                    <input type='text' id='entry-name' 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2" 
                        placeholder="Shopping"
                        onChange={handleNewPurchaseName}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="entry_date" className="block text-blue-600">Date of Purchase</label>
                    <input id='entry-date' datepicker type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Select date"
                        onChange={handleNewPurchaseDate}
                    >

                    </input>
                </div>
                <div>
                    <label htmlFor="payment-card" className="block text-blue-600">Payment Card Bank</label>
                    <input type='text' id='payment-card' 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="Scotia"
                        OnChange={handleNewPurchaseBankCard}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="entry-category" className="block text-blue-600">Category</label>
                    <input type='text' id='entry-category'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="Self Investment"
                        OnChange={handleNewPurchaseCategory}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="entry-sub-category" className="block text-blue-600">Sub Category</label>
                    <input type='text' id='entry-sub-category' 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="Books"
                        OnChange={handleNewPurchaseSubCategory}
                        ></input>
                </div>
                <div>
                    <label htmlFor="entry-amount" className="block text-blue-600">Purchase Amount</label>
                    <input type='text' id='entry-amount' 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="e.g. 5.15"
                        OnChange={handleNewPurchaseAmount}
                        ></input>
                </div>
                <div>
                    <label htmlFor="entry-essential-check" className="block text-blue-600">Essential Purchase?</label>
                    <input type='text' id='entry-essential-check' 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="Yes/ No"
                        OnChange={handleNewPurchaseEssentialCheck}
                        ></input>
                </div>
            </div>
            <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 p-2 rounded-md"
                onClick={handleNewPurchaseLog}
            >
                Log Purchase
            </button>
        </form>
        <div className="p-10">
            <h2 className="text-xl mb-3">Your Purchases</h2>
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
                            <td className="date px-6 py-4">{purchase.name}</td>
                            <td className="card px-6 py-4">{purchase.paymentCard}</td>
                            <td className="category px-6 py-4">{purchase.category}</td>
                            <td className="sub-category px-6 py-4">{purchase.subCategory}</td>
                            <td className="amount px-6 py-4">{purchase.amount}</td>
                            <td className="px-6 py-4">{purchase.wasEssential === true? 'Yes': 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ExpenseEntry