# 🚀 NiajeMarket – Kenya's Hustler Ecosystem Platform  

**A MERN stack digital marketplace connecting vendors & buyers with Maasai/Matatu-inspired UX.**  
*(By Davis Wabwile | davewabwile@gmail.com | +254707559957)*  

![NiajeMarket Screenshot](client/public/images/preview.png) *Maasai beadwork UI + Matatu graffiti elements*  

## 🔥 Key Features  
- **Vendor-Buyer Marketplace** – Listings for cars, mitumba, fundis, etc.  
- **M-Pesa Integration** – Seamless payments via Daraja API  
- **AI-Powered Search** – Voice & text query support  
- **WhatsApp Notifications** – Real-time order alerts  
- **Verified Badge System** – KYC/biometric checks  
- **Escrow Reviews** – Trustless rating system  

## 🛠 Tech Stack  
| Layer        | Tech Used                          |  
|--------------|------------------------------------|  
| **Frontend** | React.js (Vite), TailwindCSS, Framer Motion |  
| **Backend**  | Node.js, Express.js, TypeScript    |  
| **Database** | MongoDB Atlas (Cloud)              |  
| **Auth**     | JWT, Google OAuth                  |  
| **Payments** | M-Pesa STK Push, PayPal            |  
| **DevOps**   | Docker, AWS EC2, GitHub Actions    |  

## 🚀 Quick Start  
### Prerequisites  
- Node.js ≥18.x  
- MongoDB Atlas URI  
- Safaricom Daraja API credentials  

```bash
# Clone repo  
git clone https://github.com/Alphadavethedon/Niajemarket-Frontend 
cd NiajeMarket  

# Install dependencies  
npm run setup  # Installs client + server deps  

# Configure environment  
cp .env.example .env  
# Fill in your M-Pesa keys, MongoDB URI, etc.  

# Run dev mode (client + server)  
npm run dev  

# Build for production  
npm run build  
