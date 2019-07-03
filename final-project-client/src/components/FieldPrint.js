import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export default function MyDocument() {
  return (
    <PDFViewer style={{ width: '100%' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View className="d-flex justify-content-between mt-5 mb-3">
            <View style={{ width: '90px' }}></View>
            <Text style={{ fontWeight: 'bold' }}>MATCH SUMARRY</Text>
            <View className="navbar-brand" style={{ color: "black", jus: 'center', alignSelf: 'right' }}>
              {/* <View style={{backgroundImage:"url('https://i.imgur.com/Iz42FEQ.png')",backgroundPosition: 'center', height:100, backgroundSize:'cover',}} ></View> */}
              <Image src={"https://i.imgur.com/Iz42FEQ.png"} alt="Not found" style={{
                width: "40px"
              }} />
              <Image src="https://i.imgur.com/v6EfffO.png" alt="Not found" style={{
                width: "65px", marginLeft: "10px"
              }} />
            </View>
          </View>
          <View style={styles.section}>
            <div>TESTING</div>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
          <Image src="https://i.imgur.com/v6EfffO.png" alt="Not found" style={{
            width: "50%", marginLeft: "10px"
          }} />
        </Page>
      </Document></PDFViewer>
  )
};

// import React, { useState, useEffect } from "react";
// import ReactToPdf from "react-to-pdf";
// import axios from "axios";
// import ReactToPrint from 'react-to-print';
// import { Page, Text, View, Document, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer';

// const ref = React.createRef();

// export default function Print({ match }) {
//   const [data, setData] = useState({ company: {} });
//   const [candidates, setCandidates] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:3000/job/${match.params.id}`, { headers: { 'authorization': localStorage.getItem('token') } })
//       .then(async ({ data }) => {
//         setData(data);
//         console.log("sukses");
//         let matching = await axios.get(
//           `http://localhost:3000/match/${data.matching}`,
//           { headers: { authorization: localStorage.getItem("token") } }
//         );
//         setCandidates(
//           matching.data.items.map(x => {
//             return { _id: x._id, idCandidate: x.candidate._id, name: x.candidate.name, score: x.score };
//           })
//         );
//       });
//   }, [match.params.id]);

//   return (
//     // <div>
//     //   <ReactToPdf targetRef={ref} filename="div-blue.pdf">
//     //     {({ toPdf }) => (
//     //       <button onClick={toPdf}>Generate pdf</button>
//     //     )}
//     //   </ReactToPdf>
//     //   <View>
//         <PDFViewer style={{ width: '100%', height:500}}>
//           <Document><Page size="A4">
//           <View className="border" style={{ width: '130vh', height: 'auto', padding: '50px' }}>
//             <View className="d-flex justify-content-between mt-5 mb-3">
//               <View style={{ width: '90px' }}></View>
//               <Text style={{ fontWeight: 'bold' }}>MATCH SUMARRY</Text>
//               <View className="navbar-brand" style={{ color: "black", jus: 'center', alignSelf: 'right' }}>
//                 {/* <View style={{backgroundImage:"url('https://i.imgur.com/Iz42FEQ.png')",backgroundPosition: 'center', height:100, backgroundSize:'cover',}} ></View> */}
//                 <Image src={"https://i.imgur.com/Iz42FEQ.png"} alt="Not found" style={{
//                   width: "40px"
//                 }} />
//                 <Image src="https://i.imgur.com/v6EfffO.png" alt="Not found" style={{
//                   width: "65px", marginLeft: "10px"
//                 }} />
//               </View>
//             </View>
//             <View className="d-flex ">
//               <View className="d-flex mb-3">
//                 <Image
//                   alt="Not found"
//                   src={data.company.logo}
//                   style={{
//                     height: "90px",
//                     width: "90px"
//                   }}
//                 />
//                 <View style={{ alignItems: 'center' }}>
//                   <Text style={{ marginLeft: '10px', fontWeight: 'bold' }}>{data.company.name}</Text>
//                   <Text style={{ marginLeft: '10px' }}>{data.title}</Text>
//                   <Text style={{ marginLeft: '10px' }}>{data.company.address}</Text>
//                 </View>
//               </View>
//               <View style={{ textAlign: 'right' }}>
//                 <Text>{Date()}</Text>
//               </View>
//             </View>
//             <View className="table-responsive">

//             </View>
//           </View> 
//           </Page></Document>
//         </PDFViewer>
//     //   </View>
//     // </View>
//   );
// }

// import React, { useState, useEffect } from "react";
// import ReactToPdf from "react-to-pdf";
// import axios from "axios";
// import ReactToPrint from 'react-to-print';
// const ref = React.createRef();

// export default function Print({ match }) {
//   const [data, setData] = useState({ company: {} });
//   const [candidates, setCandidates] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:3000/job/${match.params.id}`, { headers: { 'authorization': localStorage.getItem('token') } })
//       .then(async ({ data }) => {
//         setData(data);
//         console.log("sukses");
//         let matching = await axios.get(
//           `http://localhost:3000/match/${data.matching}`,
//           { headers: { authorization: localStorage.getItem("token") } }
//         );
//         setCandidates(
//           matching.data.items.map(x => {
//             return { _id: x._id, idCandidate: x.candidate._id, name: x.candidate.name, score: x.score };
//           })
//         );
//       });
//   }, [match.params.id]);

//   return (
//     <div>
//       {/* <ReactToPdf targetRef={ref} filename="div-blue.pdf">
//         {({ toPdf }) => (
//           <button onClick={toPdf}>Generate pdf</button>
//         )}
//       </ReactToPdf> */}
//       <div>
//         <ReactToPrint
//           trigger={() => <a href="#">Print this out!</a>}
//           content={() => componentRef}
//         />



//         <div className="border" style={{ width: '130vh', height: 'auto', padding: '50px' }} ref={el => (componentRef = el)}>
//           <div className="d-flex justify-content-between mt-5 mb-3">
//             <div style={{ width: '90px' }}></div>
//             <h3 style={{ fontWeight: 'bold' }}>MATCH SUMARRY</h3>
//             <div className="navbar-brand" style={{ color: "black", jus: 'center', alignSelf: 'right' }}>
//               {/* <div style={{backgroundImage:"url('https://i.imgur.com/Iz42FEQ.png')",backgroundPosition: 'center', height:100, backgroundSize:'cover',}} ></div> */}
//               <img src={"https://i.imgur.com/Iz42FEQ.png"} alt="Not found" style={{
//                 width: "40px"
//               }} />
//               <img src="https://i.imgur.com/v6EfffO.png" alt="Not found" style={{
//                 width: "65px", marginLeft: "10px"
//               }} />
//             </div>
//           </div>
//           <div className="d-flex ">
//             <div className="d-flex mb-3">
//               <img
//                 alt="Not found"
//                 src={data.company.logo}
//                 style={{
//                   height: "90px",
//                   width: "90px"
//                 }}
//               />
//               <div style={{ alignItems: 'center' }}>
//                 <h5 style={{ marginLeft: '10px', fontWeight: 'bold' }}>{data.company.name}</h5>
//                 <h5 style={{ marginLeft: '10px' }}>{data.title}</h5>
//                 <h6 style={{ marginLeft: '10px' }}>{data.company.address}</h6>
//               </div>
//             </div>
//             <div style={{ textAlign: 'right' }}>
//               <p>{Date()}</p>
//             </div>
//           </div>
//           <div className="table-responsive">
//             <table className="table table-hover">
//               <thead style={{
//                 backgroundColor: "#9ED6D2"
//               }}>
//                 <tr>
//                   <th scope="col">No</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Experience Score</th>
//                   <th scope="col">About Score</th>
//                   <th scope="col">Current Position Score</th>
//                   <th scope="col">Education Score</th>
//                   <th scope="col">Total Score</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {candidates.map((el, index) => {
//                   return (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>{el.name}</td>
//                       <td>exp</td>
//                       <td>abt</td>
//                       <td>CR</td>
//                       <td>Edu</td>
//                       <td><p>{(Number(el.score) * 100).toFixed(2)} %</p></td>
//                     </tr>
//                   )
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // class ComponentToPrint extends React.Component {
// //   render() {
// //     return (
// //       <table>
// //         <thead>
// //           <th>column 1</th>
// //           <th>column 2</th>
// //           <th>column 3</th>
// //         </thead>
// //         <tbody>
// //           <tr>
// //             <td>data 1</td>
// //             <td>data 2</td>
// //             <td>data 3</td>
// //           </tr>
// //           <tr>
// //             <td>data 1</td>
// //             <td>data 2</td>
// //             <td>data 3</td>
// //           </tr>
// //           <tr>
// //             <td>data 1</td>
// //             <td>data 2</td>
// //             <td>data 3</td>
// //           </tr>
// //         </tbody>
// //       </table>
// //     );
// //   }
// // }

