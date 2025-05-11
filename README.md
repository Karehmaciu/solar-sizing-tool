# Solar Sizing Tool

---

## **Description**  
The **Solar Sizing Tool** calculates solar energy requirements, battery capacity, module sizing, and charge controller specifications for domestic solar systems. The tool is designed to ensure calculations are rounded up to the nearest **market-available product size**, making the results both realistic and practical.

---

## **Features**  
- **Load Inputs**: Allows users to enter room loads, quantities, power ratings, and daily usage hours.  
- **Battery Sizing**: Automatically calculates battery capacity and selects the nearest available size.  
- **Module Sizing**: Calculates module requirements and rounds up to available **Small/Portable** and **Mid-Range/Residential** module sizes.  
- **Charge Controller Sizing**: Incorporates a safety margin to recommend the appropriate controller current.  
- **Error Handling**: Ensures all inputs are valid, with clear error messages for invalid entries.  

---

## **How to Use**

### 1. **Run the Application**  
Start the Flask server:
```bash
python app.py
