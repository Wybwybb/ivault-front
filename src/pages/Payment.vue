<template>
    <section class="bg-gray-900 flex justify-center items-center h-screen">
        <div class="relative">
            <div class="w-full max-w-lg rounded-lg shadow-lg bg-gray-700 border-gray-700 overflow-hidden pt-5 pb-5">
                <!-- Avatar positioned at the top center of the card -->
                <img class="w-20 h-20 rounded-full shadow-lg absolute -top-10 left-1/2 transform -translate-x-1/2" src="C:\Users\Marianne Leigh Reyes\Desktop\ambot\ivault-front\src\assets\image.png" alt="Bonnie image"/>
                <div class="flex justify-end px-4 pt-4">
                </div>
                <div class="px-5 py-8">
                    <h5 class="mb-4 font-semibold text-white text-center">PAYMENT INFORMATION</h5>
                    <h5 class="mb-4 font-semibold text-white text-start">Payment Method:</h5>
                    <div>
                        <div class="flex items-center mb-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-white">Gcash</label>
                        </div>
                        <div class="mb-4">
                            <label for="card-number" class="block text-sm font-medium text-white mb-2">Name</label>
                            <input type="text" name="card-number" id="card-number" placeholder="Enter Full Name" class="w-full py-4 px-10 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
                        </div>
                        <div class="mb-4">
                            <label for="card-holder" class="block text-sm font-medium text-white mb-2">Mobile Number</label>
                            <input type="text" name="card-holder" id="card-holder" placeholder="1234 567 8910" class="w-full py-4 px-10 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
                        </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button type="submit" class="bg-green-500 hover:bg-blue-600 text-white font-medium py-3 px-10 rounded-lg focus:outline-none">Submit</button>
                    </div>
                </div>
            </div>
    </section>
 </template>