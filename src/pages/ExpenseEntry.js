import React from 'react'

function ExpenseEntry() {
  return (
    <div>
        <form class="p-10">
            <h2 class="text-xl mb-3">Log your Purchase</h2>
            <div class="flex justify-between mb-10">
                <div>
                    <label for="entry_name" class="block text-blue-600">Purchase Name</label>
                    <input type='text' id='entry_name' 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2" placeholder="Shopping">
                    </input>
                </div>
                <div>
                    <label for="entry_date" class="block text-blue-600">Date of Purchase</label>
                    {/* <input type='text' id='entry_date' class="border-solid border-2" placeholder="1/1/2024"></input> */}
                    <input datepicker type="text" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Select date"></input>
                </div>
                <div>
                    <label for="payment_card_bank" class="block text-blue-600">Payment Card Bank</label>
                    <input type='text' id='payment_card_bank' 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="Scotia"></input>
                </div>
                <div>
                    <label for="entry_name" class="block text-blue-600">Category</label>
                    <input type='text' id='entry_name'
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="Self Investment"></input>
                </div>
                <div>
                    <label for="entry_date" class="block text-blue-600">Sub Category</label>
                    <input type='text' id='entry_date' 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="Books"></input>
                </div>
                <div>
                    <label for="payment_card_bank" class="block text-blue-600">Purchase Amount</label>
                    <input type='text' id='payment_card_bank' 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="e.g. 5.15"></input>
                </div>
                <div>
                    <label for="payment_card_bank" class="block text-blue-600">Essential Purchase?</label>
                    <input type='text' id='payment_card_bank' 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2"
                        placeholder="Yes, No"></input>
                </div>
            </div>
            <button type="button" class="text-white bg-blue-600 hover:bg-blue-800 p-2 rounded-md">Log Purchase</button>
        </form>
        <div class="p-10">
            <h2 class="text-xl mb-3">Your Purchases</h2>
            <table class="w-full text-sm text-left text-gray-500 mb-10">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr class="">
                        <th class="px-6 py-3">Purchase Name</th>
                        <th class="px-6 py-3">Purchase Date</th>
                        <th class="px-6 py-3">Payment Card Bank</th>
                        <th class="px-6 py-3">Category</th>
                        <th class="px-6 py-3">Sub Category</th>
                        <th class="px-6 py-3">Purchase Amount</th>
                        <th class="px-6 py-3">Essential Purchase</th>

                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b">
                        <td class="px-6 py-4">Grocery</td>
                        <td class="px-6 py-4">March 26 2024</td>
                        <td class="px-6 py-4">Triangle</td>
                        <td class="px-6 py-4">Basic Expenses</td>
                        <td class="px-6 py-4">Grocery</td>
                        <td class="px-6 py-4">50</td>
                        <td class="px-6 py-4">Yes</td>
                    </tr>
                    <tr class="bg-white border-b">
                        <td class="px-6 py-4">Online Shopping</td>
                        <td class="px-6 py-4">Jan 8 2024</td>
                        <td class="px-6 py-4">CIBC</td>
                        <td class="px-6 py-4">Shopping</td>
                        <td class="px-6 py-4">Amazon Online Shopping</td>
                        <td class="px-6 py-4">100</td>
                        <td class="px-6 py-4">No</td>
                    </tr>
                    <tr class="bg-white border-b">
                        <td class="px-6 py-4">Gym Membership</td>
                        <td class="px-6 py-4">Jul 8 2023</td>
                        <td class="px-6 py-4">Scotia</td>
                        <td class="px-6 py-4">Self Investment</td>
                        <td class="px-6 py-4">Grocery</td>
                        <td class="px-6 py-4">25</td>
                        <td class="px-6 py-4">Yes</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ExpenseEntry