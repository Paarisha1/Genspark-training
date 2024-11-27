function* processOrders(orders) {
    for (let order of orders) {
        yield new Promise((resolve) => {
            const orderLog = document.getElementById('order-log');
            const startLog = document.createElement('p');
            startLog.innerText = `Order ${order.orderId} started: ${order.items.join(", ")}`;
            startLog.classList.add('text-blue-500', 'font-semibold');
            orderLog.appendChild(startLog);

            setTimeout(() => {
                const endLog = document.createElement('p');
                endLog.innerText = `Order ${order.orderId} completed in ${order.timeToPrepare} seconds`;
                endLog.classList.add('text-green-500');
                orderLog.appendChild(endLog);

                resolve();
            }, order.timeToPrepare * 1000); 
        });
    }
}


const orders = [
    { orderId: 1, items: ['Burger', 'Fries'], timeToPrepare: Math.floor(Math.random() * 5) + 1 },
    { orderId: 2, items: ['Pizza'], timeToPrepare: Math.floor(Math.random() * 5) + 1 },
    { orderId: 3, items: ['Pasta', 'Garlic Bread'], timeToPrepare: Math.floor(Math.random() * 5) + 1 },
];

document.getElementById('start-btn').addEventListener('click', async () => {
    const orderGen = processOrders(orders);

    for await (let order of orderGen) {
      
    }
});
