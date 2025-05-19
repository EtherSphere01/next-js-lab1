import React from 'react';

const Data = () => {
    return (
        <div>
            <form action="">
                <div className="mb-4">
                    <label htmlFor="coupon_code" className="block text-gray-700 font-bold mb-2">
                        Coupon Code
                    </label>
                    <input
                        type="text"
                        id="coupon_code"
                        name="coupon_code"
                        placeholder="Enter coupon code"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="discount" className="block text-gray-700 font-bold mb-2">
                        Discount
                    </label>
                    <input
                        type="text"
                        id="discount"
                        name="discount"
                        placeholder="Enter discount amount"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="expiry_date" className="block text-gray-700 font-bold mb-2">
                        Expiry Date
                    </label>
                    <input
                        type="date"
                        id="expiry_date"
                        name="expiry_date"
                        placeholder="Select expiry date"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Data;