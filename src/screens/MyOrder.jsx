import React, { useEffect, useState } from 'react'

export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        await fetch("http://localhost:4000/api/v1/myOrderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            setorderData(response)
        })
    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>

            <div className='container'>
                <div className='row'>

                    {Object.keys(orderData).length != 0 ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <>
                                                    {arrayData.Order_date ?
                                                        <div className='m-auto mt-5 fs-3'>
                                                            Order Date: {data = arrayData.Order_date}
                                                            <hr />
                                                        </div>
                                                        :
                                                        <div className='w-25 d-flex'>
                                                            <div className="card mt-3" style={{ "width": "17rem", "minHeight": "200px" }}>
                                                                <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "100px", objectFit: "cover" }} />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className="w-100">
                                                                        <div className='fs-6'>Quantity: {arrayData.qty}</div>
                                                                        <div className='fs-6 text-capitalize'>Size: {arrayData.size}</div>
                                                                        <div className='fs-6'>Date: {data}</div>
                                                                        <div className='fs-6'>Total: ₹ {arrayData.price}/-</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }

                                                </>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>


            </div>
        </div>
    )
}
// {"orderData":{"_id":"63024fd2be92d0469bd9e31a","email":"mohanDas@gmail.com","order_data":[[[{"id":"62ff20fbaed6a15f800125e9","name":"Chicken Fried Rice","qty":"4","size":"half","price":520},{"id":"62ff20fbaed6a15f800125ea","name":"Veg Fried Rice","qty":"4","size":"half","price":440}],"2022-08-21T15:31:30.239Z"],[[{"id":"62ff20fbaed6a15f800125f4","name":"Mix Veg Pizza","qty":"4","size":"medium","price":800},{"id":"62ff20fbaed6a15f800125f3","name":"Chicken Doub;e Cheeze Pizza","qty":"4","size":"regular","price":480}],"2022-08-21T15:32:38.861Z"]],"__v":0}}
