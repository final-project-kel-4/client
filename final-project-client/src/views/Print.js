import React, { useState, useEffect } from "react";
import { Page, Text, View, Document, StyleSheet, Image, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import dateFormat  from 'dateformat'
const now = new Date();

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  section: {
    margin: 50,
    padding: 10,
    flexGrow: 1,
  },
  tableTitle: {
    borderTop: 0.8,
    borderBottom: 0.8,
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: 'center'
  },
  tableBody: {
    borderBottom: 0.3,
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: 'center'
  },
});

const Documents = ({ data, candidates }) => (
  <Document>
    <Page size="A4" style={{ padding: '30px', paddingBottom: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

      <View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10px', marginBottom: '10px' }}>
          <View style={{ width: '100px' }}></View>
          <Text style={{ fontWeight: 'bold' }}>MATCH SUMMARY</Text>
          <View style={{ color: "black", display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Image src={"https://i.imgur.com/Iz42FEQ.png"} alt="Not found" style={{
              width: "40px"
            }} />
            <Image src="https://i.imgur.com/v6EfffO.png" alt="Not found" style={{
              width: "63px", marginLeft: "10px", height: '15px'
            }} />
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Image
              alt="Not found"
              src={data.company.logo}
              style={{
                height: "60px",
                width: "60px"
              }}
            />
            <View style={{ width: '60%', display: 'flex' }}>
              <Text style={{ marginLeft: '10px', fontSize: 15, marginBottom: '5px', marginTop: '5px' }}>{data.company.name}</Text>
              <Text style={{ marginLeft: '10px', fontSize: 13, marginBottom: '5px' }}>{data.title}</Text>
              <Text style={{ marginLeft: '10px', fontSize: 12, marginBottom: '5px' }}>{data.company.address}</Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize:11}}>{dateFormat(now)}</Text>
          </View>
        </View>
        <View style={{ marginTop: '20px' }}>
          <View id="title" style={{ display: 'flex', flexDirection: 'row', fontSize: 13 }}>
            <View style={{ ...styles.tableTitle, width: 25 }}>
              <Text>No</Text>
            </View>
            <View style={{ ...styles.tableTitle, width: 170 }}>
              <Text>Name</Text>
            </View>
            <View style={{ ...styles.tableTitle, width: 50 }}>
              <Text>AS</Text>
            </View>
            <View style={{ ...styles.tableTitle, width: 50 }}>
              <Text>CPS</Text>
            </View>
            <View style={{ ...styles.tableTitle, width: 50 }}>
              <Text>EduS</Text>
            </View>
            <View style={{ ...styles.tableTitle, width: 50 }}>
              <Text>ExpS</Text>
            </View>
            <View style={{ ...styles.tableTitle, width: 50 }}>
              <Text>SS</Text>
            </View>
            <View style={{ ...styles.tableTitle, width: 90 }}>
              <Text>Total Score</Text>
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            {
              candidates.map((el, index) => {
                return (
                  <View key={index} style={{ displat: 'flex', flexDirection: 'row', fontSize: 12 }}>
                    <View style={{ ...styles.tableBody, width: 25 }}>
                      <Text>{index + 1}</Text>
                    </View>
                    <View style={{ ...styles.tableBody, width: 170, textAlign: 'left' }}>
                      <Text>{el.name}</Text>
                    </View>
                    <View style={{ ...styles.tableBody, width: 50 }}>
                      <Text>{(Number(el.scoreDetails.about) * 100).toFixed(2)} %</Text>
                    </View>
                    <View style={{ ...styles.tableBody, width: 50 }}>
                      <Text>{(Number(el.scoreDetails.currentPosition) * 100).toFixed(2)} %</Text>
                    </View>
                    <View style={{ ...styles.tableBody, width: 50 }}>
                      <Text>{(Number(el.scoreDetails.educations) * 100).toFixed(2)} %</Text>
                    </View>
                    <View style={{ ...styles.tableBody, width: 50 }}>
                      <Text>{(Number(el.scoreDetails.experience) * 100).toFixed(2)} %</Text>
                    </View>
                    <View style={{ ...styles.tableBody, width: 50 }}>
                      <Text>{(Number(el.scoreDetails.skill) * 100).toFixed(2)} %</Text>
                    </View>
                    <View style={{ ...styles.tableBody, width: 90 }}>
                      <Text>{(Number(el.score) * 100).toFixed(2)} %</Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
          <View style={{ fontSize: 10 }}>
            <Text>Information</Text>
            <Text>1. AS = About Score</Text>
            <Text>2. CPS = Current Position Score</Text>
            <Text>3. EduS = Education Score</Text>
            <Text>4. ExpS = Experience Score</Text>
            <Text>5. SS = Skill Score</Text>
          </View>
        </View>
      </View>
      <View style={{ textAlign: 'center', fontSize: 9, marginTop: '20px' }}>
        <Text>© 2019 matchIn</Text>
      </View>

    </Page>
  </Document>
)

// Create Document Component
export default function MyDocument({ match, location }) {
  const [data, setData] = useState(location.state.dataReport);
  const [candidates, setCandidates] = useState(location.state.candidates);

  useEffect(() => {
    // console.log("match ", match.params.id);
    // console.log(location.state.dataReport)
    console.log(location.state.candidates)
  }, [match.params.id]);

  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <Documents data={data} candidates={candidates} fileName={`${data.company.name}-${data.title}.pdf`}/>
      </PDFViewer>
      {/* <PDFDownloadLink document={<Documents data={data} candidates={candidates} />} fileName={`${data.company.name}-${data.title}.pdf`}>
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now! '+url )}
      </PDFDownloadLink> */}
    </div>
  )
};

