
const apiUrl = "http://api.login2explore.com:5577/api/iml";
const token = "90934580|-31949213035443175|90956623";
const dbName = "DELIVERY-DB";
const relName = "SHIPMENT-TABLE";

function getRecordIdByShipmentNo(shipmentNo, callback) {
    const getReq = {
        token,
        dbName,
        rel: relName,
        cmd: "GET_BY_KEY",
        key: JSON.stringify({ "Shipment-No": shipmentNo })
    };

    fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(getReq)
    })
    .then(res => res.json())
    .then(data => callback(data));
}

function saveData() {
    const shipmentNo = document.getElementById("shipmentNo").value;
    const description = document.getElementById("description").value;
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const shippingDate = document.getElementById("shippingDate").value;
    const expectedDeliveryDate = document.getElementById("expectedDeliveryDate").value;

    if (!shipmentNo || !description || !source || !destination || !shippingDate || !expectedDeliveryDate) {
        alert("Please fill all fields");
        return;
    }

    getRecordIdByShipmentNo(shipmentNo, (res) => {
        if (res.data) {
            alert("Shipment already exists. Use Update.");
        } else {
            const data = {
                "Shipment-No": shipmentNo,
                Description: description,
                Source: source,
                Destination: destination,
                "Shipping-Date": shippingDate,
                "Expected-Delivery-Date": expectedDeliveryDate
            };

            const putReq = {
                token,
                dbName,
                rel: relName,
                cmd: "PUT",
                data: data
            };

            fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(putReq)
            })
            .then(res => res.json())
            .then(() => {
                alert("Data saved successfully");
                document.getElementById("shipmentForm").reset();
            });
        }
    });
}

function updateData() {
    const shipmentNo = document.getElementById("shipmentNo").value;

    getRecordIdByShipmentNo(shipmentNo, (res) => {
        if (!res.data || res.data.length === 0) {
            alert("Shipment not found. Use Save to create.");
            return;
        }

        const recordId = res.data[0]["_id"];
        const data = {
            "Shipment-No": shipmentNo,
            Description: document.getElementById("description").value,
            Source: document.getElementById("source").value,
            Destination: document.getElementById("destination").value,
            "Shipping-Date": document.getElementById("shippingDate").value,
            "Expected-Delivery-Date": document.getElementById("expectedDeliveryDate").value
        };

        const updateReq = {
            token,
            dbName,
            rel: relName,
            cmd: "UPDATE",
            data,
            recordId
        };

        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateReq)
        })
        .then(res => res.json())
        .then(() => {
            alert("Data updated successfully");
            document.getElementById("shipmentForm").reset();
        });
    });
}
