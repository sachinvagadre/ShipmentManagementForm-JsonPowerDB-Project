# Shipment Management Form (HTML, CSS, JS + JsonPowerDB)

This is a micro project built using *HTML, CSS, and JavaScript* that integrates with *JsonPowerDB* to manage shipment data.

## 🔧 Features

- Save new shipment entries
- Update existing shipment records
- Uses Shipment-No as Primary Key
- JSONPowerDB integration using REST API

## 🗃 Database Configuration

- *Database Name:* DELIVERY-DB
- *Relation/Table:* SHIPMENT-TABLE
- *Primary Key:* Shipment-No

## 🔗 API Details

- *API URL:* http://api.login2explore.com:5577/api/iml
- *Token:* 90934580|-31949213035443175|90956623

## 📁 Project Structure


ShipmentManagementForm/
│
├── index.html       # Main Form UI
├── style.css        # Styling for the form
├── script.js        # JS logic to interact with JsonPowerDB
└── README.md        # Project Info (this file)


## 🚀 How to Run

1. Open index.html in any browser.
2. Fill the form and use *Save* / *Update* as needed.
3. Data will be stored or updated in your JsonPowerDB backend.

## ✅ Requirements

- Internet connection (for accessing JsonPowerDB)
- Web browser (Chrome, Firefox, etc.)

## 📌 Note

Make sure the table (SHIPMENT-TABLE) exists in DELIVERY-DB with Shipment-No as primary key before running the form.
