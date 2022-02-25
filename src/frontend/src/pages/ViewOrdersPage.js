import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function ViewOrdersPage() {
    const [orders, setOrders] = useState([])
    async function getOrders () {
        const response = await fetch("/api/v1/orders")
        const data = await response.json()
        setOrders(data)
    }
    useEffect(() =>{
        getOrders()
    },[])
    return (
        <div>
            On the ViewOrdersPage
            <ul>
            {
                orders.map(o => {
                    return <li>{o.id}</li>
                })
            }
            </ul>
        </div>
    )
}