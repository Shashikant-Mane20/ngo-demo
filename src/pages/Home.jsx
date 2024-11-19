import React from 'react';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';
import { FaDonate, FaHandsHelping, FaHeart } from 'react-icons/fa';

const Section = ({ icon: Icon, title, description, iconColor }) => (
  <motion.div
    className="text-center bg-white p-6 rounded-lg shadow-lg"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <Icon className={`text-4xl ${iconColor} mb-4 mx-auto`} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Home = () => {
  const sections = [
    {
      icon: FaDonate,
      title: "Make Donation",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      iconColor: "text-blue-500",
    },
    {
      icon: FaHandsHelping,
      title: "Become A Volunteer",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      iconColor: "text-green-500",
    },
    {
      icon: FaHeart,
      title: "Sponsorship",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      iconColor: "text-red-500",
    },
  ];

  return (
    <div className="relative">
      {/* Banner */}
      <Banner text="Welcome to Our NGO" />

      {/* First Section with Cards */}
      <div className="flex flex-col items-center -mt-6 md:-mt-8 lg:-mt-10 px-4 relative z-10">
        <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-2/3 gap-0">
          {/* Cards */}
          {["Served Over", "Donate Money", "Be a Volunteer"].map((title, index) => (
            <motion.div
              key={index}
              className={`bg-${index % 2 === 0 ? 'gray-100' : 'gray-200'} flex-1 p-6 md:p-8 text-center border-b-2 border-gray-200`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-lg">Even the all-powerful Pointing has no control about the blind texts.</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Width Section for Donation, Volunteer, Sponsorship */}
      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Section
              key={index}
              icon={section.icon}
              title={section.title}
              description={section.description}
              iconColor={section.iconColor}
            />
          ))}
        </div>
      </div>

      {/* New Section - Our Causes */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Causes
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </motion.p>
          <motion.h3
            className="text-2xl sm:text-3xl font-semibold text-gray-800"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
         
          </motion.h3>
        </div>
      </div>
    </div>
  );
};

export default Home;


// import React, { useState } from "react";
// import { PDFDownloadLink, Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";

// const InvoiceGenerator = () => {
//   const [logo, setLogo] = useState(null);
//   const [invoiceNumber, setInvoiceNumber] = useState("");
//   const [invoiceDate, setInvoiceDate] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [billTo, setBillTo] = useState("");
//   const [address, setAddress] = useState("");
//   const [items, setItems] = useState([{ service: "", description: "", quantity: 1, price: 0 }]);

//   const handleLogoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setLogo(reader.result); // Save base64 string as logo
//       };
//       reader.readAsDataURL(file); // Read file as base64
//     }
//   };

//   const handleItemChange = (index, field, value) => {
//     const updatedItems = items.map((item, i) => (i === index ? { ...item, [field]: value } : item));
//     setItems(updatedItems);
//   };

//   const addItem = () => {
//     setItems([...items, { service: "", description: "", quantity: 1, price: 0 }]);
//   };

//   const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
//   const tax = subtotal * 0.1;
//   const total = subtotal + tax;

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-lg">
//         {/* Logo Upload and Preview */}
//         <div className="mb-6 text-center">
//           <label className="block text-gray-700 text-sm font-medium mb-2">Upload Logo</label>
//           <input type="file" onChange={handleLogoUpload} className="block mx-auto mb-4" />
//           {logo && <img src={logo} alt="Logo" className="mx-auto w-32 h-32 object-contain" />}
//         </div>

//         {/* Invoice Form */}
//         <div className="mb-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
//             {/* Invoice Details */}
//             <div>
//               <label className="block text-gray-700">Invoice Number</label>
//               <input
//                 type="text"
//                 value={invoiceNumber}
//                 onChange={(e) => setInvoiceNumber(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Invoice Date</label>
//               <input
//                 type="date"
//                 value={invoiceDate}
//                 onChange={(e) => setInvoiceDate(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Due Date</label>
//               <input
//                 type="date"
//                 value={dueDate}
//                 onChange={(e) => setDueDate(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded"
//               />
//             </div>
//           </div>

//           {/* Billing Details */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
//             <div>
//               <label className="block text-gray-700">Bill To</label>
//               <input
//                 type="text"
//                 value={billTo}
//                 onChange={(e) => setBillTo(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Address</label>
//               <textarea
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Items Table */}
//         <table className="w-full table-auto border-collapse mb-6">
//           <thead>
//             <tr>
//               <th className="border-b py-3 px-4">Service</th>
//               <th className="border-b py-3 px-4">Description</th>
//               <th className="border-b py-3 px-4">Quantity</th>
//               <th className="border-b py-3 px-4">Price</th>
//               <th className="border-b py-3 px-4">Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item, index) => (
//               <tr key={index}>
//                 <td className="border-b py-3 px-4">
//                   <input
//                     type="text"
//                     value={item.service}
//                     onChange={(e) => handleItemChange(index, "service", e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded"
//                   />
//                 </td>
//                 <td className="border-b py-3 px-4">
//                   <input
//                     type="text"
//                     value={item.description}
//                     onChange={(e) => handleItemChange(index, "description", e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded"
//                   />
//                 </td>
//                 <td className="border-b py-3 px-4">
//                   <input
//                     type="number"
//                     min="1"
//                     value={item.quantity}
//                     onChange={(e) => handleItemChange(index, "quantity", parseFloat(e.target.value))}
//                     className="w-full p-3 border border-gray-300 rounded"
//                   />
//                 </td>
//                 <td className="border-b py-3 px-4">
//                   <input
//                     type="number"
//                     min="0"
//                     value={item.price}
//                     onChange={(e) => handleItemChange(index, "price", parseFloat(e.target.value))}
//                     className="w-full p-3 border border-gray-300 rounded"
//                   />
//                 </td>
//                 <td className="border-b py-3 px-4">${(item.quantity * item.price).toFixed(2)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button
//           onClick={addItem}
//           className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
//         >
//           Add Item
//         </button>

//         {/* Totals */}
//         <div className="text-right mb-6">
//           <p className="font-bold">Subtotal: ${subtotal.toFixed(2)}</p>
//           <p className="font-bold">Tax (10%): ${tax.toFixed(2)}</p>
//           <h2 className="font-bold text-xl">Total: ${total.toFixed(2)}</h2>
//         </div>

//         {/* PDF Download Link */}
//         <PDFDownloadLink
//           document={
//             <PDFInvoice
//               logo={logo}
//               invoiceNumber={invoiceNumber}
//               invoiceDate={invoiceDate}
//               dueDate={dueDate}
//               billTo={billTo}
//               address={address}
//               items={items}
//               subtotal={subtotal}
//               tax={tax}
//               total={total}
//             />
//           }
//           fileName="invoice.pdf"
//         >
//           <button className="bg-green-500 text-white px-4 py-2 rounded">Download PDF</button>
//         </PDFDownloadLink>
//       </div>
//     </div>
//   );
// };

// // PDFInvoice component for PDF-only content
// const PDFInvoice = ({ logo, invoiceNumber, invoiceDate, dueDate, billTo, address, items, subtotal, tax, total }) => {
//   const styles = StyleSheet.create({
//     page: { padding: 30, fontFamily: "Helvetica", fontSize: 12 },
//     section: { marginBottom: 20 },
//     logo: { width: 100, height: 100, marginBottom: 20, alignSelf: "center" },
//     header: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
//     text: { fontSize: 12, marginBottom: 6 },
//     bold: { fontWeight: "bold" },
//     table: { width: "100%", border: "1px solid black", marginTop: 10 },
//     tableHeader: { fontWeight: "bold", padding: 5, border: "1px solid black" },
//     itemRow: { display: "flex", flexDirection: "row" },
//     tableCell: { padding: 5, border: "1px solid black" },
//   });

//   return (
//     <Document>
//       <Page style={styles.page}>
//         {logo && <Image src={logo} style={styles.logo} />}
//         <Text style={styles.header}>Invoice</Text>
//         <View style={styles.section}>
//           <Text style={styles.text}><Text style={styles.bold}>Invoice Number:</Text> {invoiceNumber}</Text>
//           <Text style={styles.text}><Text style={styles.bold}>Invoice Date:</Text> {invoiceDate}</Text>
//           <Text style={styles.text}><Text style={styles.bold}>Due Date:</Text> {dueDate}</Text>
//           <Text style={styles.text}><Text style={styles.bold}>Bill To:</Text> {billTo}</Text>
//           <Text style={styles.text}><Text style={styles.bold}>Address:</Text> {address}</Text>
//         </View>
//         <View style={styles.section}>
//           <Text style={styles.tableHeader}>Service Description</Text>
//           <Text style={styles.tableHeader}>Quantity</Text>
//           <Text style={styles.tableHeader}>Price</Text>
//         </View>
//         {items.map((item, index) => (
//           <View style={styles.itemRow} key={index}>
//             <Text style={styles.tableCell}>{item.service}</Text>
//             <Text style={styles.tableCell}>{item.quantity}</Text>
//             <Text style={styles.tableCell}>${(item.quantity * item.price).toFixed(2)}</Text>
//           </View>
//         ))}
//         <View style={styles.section}>
//           <Text style={styles.bold}>Subtotal: ${subtotal.toFixed(2)}</Text>
//           <Text style={styles.bold}>Tax: ${tax.toFixed(2)}</Text>
//           <Text style={styles.bold}>Total: ${total.toFixed(2)}</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// export default InvoiceGenerator;
