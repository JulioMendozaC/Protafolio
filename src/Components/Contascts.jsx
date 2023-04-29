// import React,{ useState } from 'react'
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";

// const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   }

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value
//     })
// }



// const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code == 200) {
//       setStatus({ succes: true, message: 'Message sent successfully'});
//     } else {
//       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//     }
//   };






//  const Contascts = () => {
//   return (

//         <Container>
//             <Row className="aling-items-center">
//                 <Col md={6}>
//                     <img src={contactImg} alt="Contact" />
//                 </Col>
//                 <Col md={6}>
//                     <h2>get in touch</h2>
//                     <form onSubmit={handleSubmit}>
//                         <Row>
//                             <Col sm={6} className="px-1">
//                                 <input type="text" value={formDetails.firstName} placeholder="Fits Name" onClick={(e) => onFormUpdate('firstName', e.target.value)} />
//                             </Col>
//                             <Col sm={6} className="px-1">
//                                 <input type="text" value={formDetails.firstName} placeholder="Last Name" onClick={(e) => onFormUpdate('lastName', e.target.value)} />
//                             </Col>
//                             <Col sm={6} className="px-1">
//                                 <input type="email" value={formDetails.firstName} placeholder="Email" onClick={(e) => onFormUpdate('Email', e.target.value)} />
//                             </Col>
//                             <Col sm={6} className="px-1">
//                                 <input type="tel" value={formDetails.firstName} placeholder="No.phone" onClick={(e) => onFormUpdate('phone', e.target.value)} />
//                             </Col>
//                             <Col>
//                                 <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) =>  onFormUpdate('message', e.target.value)}>
//                                     <button type="submit"><span>{}buttonText</span></button>
//                                 </textarea>
//                             </Col>
//                             {
//                       status.message &&
//                       <Col>
//                         <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
//                       </Col>
//                     }
//                         </Row>
//                     </form>
//                 </Col>
//             </Row>
//         </Container>

//     )
// }

// export default Contascts