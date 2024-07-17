// BS1.js
import React from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon from React Icons
const BS1 = ({ isOpen1, toggleSheet }) => {
  // Sample data (replace with your actual data)
  const cardData = [
    { name: "Aviral", image: "https://i.postimg.cc/mrhyZWYz/avv-img.jpg", tags: ["cricket", "doctor"] },
    { name: "Lakshay", image: "https://i.postimg.cc/mrhyZWYz/avv-img.jpg", tags: ["student", "coder"] }
    // Add more objects as needed
  ];

  return (
    <div
      className={`bottom-sheet ${isOpen1 ? "open" : ""}`}
      style={{
        position: "fixed",
        bottom: isOpen1 ? 0 : "-60vh",
        left: 0,
        width: "100%",
        height: "60vh",
        backgroundColor: "#f6f5ee",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        boxShadow: "0 -10px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "bottom 0.5s ease",
        zIndex: 1000,
        display: "flex",
        flexDirection: 'column',
        // padding: '20px',
        paddingLeft:'20px',paddingRight:"20px",paddingBottom:'20px',paddingTop:"12px",
        backgroundImage: 'url("https://st5.depositphotos.com/22224476/65559/i/450/depositphotos_655599578-stock-photo-nice-yellow-color-gradient-design.jpg")', backgroundSize: 'cover', 
      }}
    >
        <div style={{height:'0.7rem',backgroundColor:"#7b7b77",width:'30%',borderRadius:'10rem',alignSelf:'center'}}></div>
     <h1 style={{ fontFamily: 'ACB', fontSize: '1.7rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,marginTop:'1.2rem',color:"#191818",marginLeft:"8px"}}>
        Available Peeps
        <FaTimes onClick={toggleSheet} style={{ cursor: 'pointer',fontSize:'2rem',color:'#191818',marginRight:"5px" }} />
      </h1>

      {/* Additional div with image */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '170px', width: '100%',marginBottom:"0.7rem" }}>
        <div style={{ height: '160px', width: '160px', backgroundImage: 'url("https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' ,borderRadius:"20px"}}></div>
      </div>

      {/* Cards section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {cardData.map((card, index) => (
          <div key={index} style={{ backgroundColor: '#efeee9', borderRadius: '1.2rem', padding: '10px', width: "calc(50% - 20px)",  display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' ,borderLeft:'0.5rem solid #171717',borderBottom:'0.5rem solid #171717',borderRight:'0.1rem solid #171717',borderTop:'0.1rem solid #171717'}}>
            <div style={{ height: 85, width: 85, borderRadius: '50%', border: '0.001rem solid black', backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <h1 style={{ fontSize: '1.2rem', fontFamily: 'ACB', marginTop: '1px', marginBottom: '5px' }}>{card.name} 👋</h1>
            <div style={{ display: 'flex', flexDirection: "row", alignSelf: 'flex-start', gap: "0.3rem" }}>
              {card.tags.map((tag, idx) => (
                <span key={idx} style={{ backgroundColor: idx % 2 === 0 ? "#e07676" : "#385aeb", color: 'white', fontFamily: 'ACB', paddingLeft: '0.2rem', paddingRight: '0.2rem', fontSize: '0.8rem', borderRadius: '20px' }}>{tag}</span>
              ))}
            </div>
            <div style={{ width: "100%", height: "0.7rem", background: "linear-gradient(to right, #fb575e, #9353f6)", borderRadius: "50px", marginTop: '1rem' }}></div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default BS1;
