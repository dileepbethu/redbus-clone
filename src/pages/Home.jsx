import React, { useRef } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Home.css";

const Home = () => {
  const handleCopy = (code) => {
  navigator.clipboard.writeText(code);
  toast.success(`Copied code: ${code}`);
};

  const trendingScrollRef = useRef(null);
  const governmentScrollRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (ref) => {
    ref.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    
    <div>

      <Header />

      {/* 🔻 Banner Section with overlayed search form */}
            <ToastContainer position="top-center" autoClose={1500} hideProgressBar />

      <div className="banner-container position-relative text-white text-center d-flex align-items-center justify-content-center">
        <div className="banner-overlay-content text-white">
          <h1 className="mb-3">Welcome to RedBus Clone</h1>
          <p className="mb-4">India's No. 1 Online Bus Ticket Booking Site</p>
          <SearchForm />
        </div>

        {/* 🔻 Trending Offers positioned at bottom of banner */}
        <div className="trending-offers-wrapper container-fluid position-absolute bottom-0 start-50 translate-middle-x">
          <div className="trending-box bg-white rounded shadow px-3 py-4 position-relative">
            <h5 className="fw-bold text-body-secondary mb-0">TRENDING OFFERS</h5>
            <button className="scroll-btn modern left" onClick={() =>scrollLeft (trendingScrollRef)}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <div className="trending-scroll d-flex overflow-auto" ref={trendingScrollRef}>
              <div className="offer-card bg-primary text-white">
                <p className="mb-0 fw-bold">Save up to ₹250 on bus tickets</p>
                <small>Valid till 31 May</small>
                <div className="OfferCard__OfferCode-sc-1f27jzb-11 iWrqRd">FIRST</div>

                <img
                src="https://s2.rdbuz.com/web/images/homeV2/copy.svg"
                alt="copy"
               className="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"
               onClick={() => handleCopy("FIRST")} // replace with the actual code
              style={{ cursor: "pointer" }}
              />

              </div>
              <div className="offer-card bg-success text-white">
                <p className="mb-0 fw-bold">save up to ₹300 off - Telangana</p>
                <small>valid till 31 may</small>
                <div className="OfferCard__OfferCode-sc-1f27jzb-11 iWrqRd">SUPERHIT</div>
              <img
                src="https://s2.rdbuz.com/web/images/homeV2/copy.svg"
                alt="copy"
               className="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"
               onClick={() => handleCopy("SUPERHIT")} // replace with the actual code
              style={{ cursor: "pointer" }}
              />              
               </div>
              <div className="offer-card bg-danger text-white">
                <p className="mb-0 fw-bold">Save up to ₹200 off on Primo</p>
                <small>valid till 31 may</small>
                <div className="OfferCard__OfferCode-sc-1f27jzb-11 iWrqRd">PRIMODAY</div>
                <img
                src="https://s2.rdbuz.com/web/images/homeV2/copy.svg"
                alt="copy"
               className="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"
               onClick={() => handleCopy("PRIMODAY")} // replace with the actual code
              style={{ cursor: "pointer" }}
              />                           
               </div>
              <div className="offer-card bg-warning text-dark">
                <p className="mb-0 fw-bold">Flat ₹150 Cashback</p>
                <small>New User Only</small>
                <div className="OfferCard__OfferCode-sc-1f27jzb-11 iWrqRd">NEW</div>
               <img
                src="https://s2.rdbuz.com/web/images/homeV2/copy.svg"
                alt="copy"
               className="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"
               onClick={() => handleCopy("NEW")} // replace with the actual code
              style={{ cursor: "pointer" }}
              />              
              </div>
              <div className="offer-card bg-info text-white">
                <p className="mb-0 fw-bold">Monsoon Offer ₹100 Off</p>
                <small>valid till 31 may</small>
                <div className="OfferCard__OfferCode-sc-1f27jzb-11 iWrqRd">OFFER</div>
               <img
                src="https://s2.rdbuz.com/web/images/homeV2/copy.svg"
                alt="copy"
               className="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"
               onClick={() => handleCopy("OFFER")} // replace with the actual code
              style={{ cursor: "pointer" }}
              />              
              </div>
              <div className="offer-card bg-secondary text-dark">
                <p className="mb-0 fw-bold">Flat ₹50 Cashback</p>
                <small>New User Only</small>
                <div className="OfferCard__OfferCode-sc-1f27jzb-11 iWrqRd">NEWBUS</div>
                <img
                src="https://s2.rdbuz.com/web/images/homeV2/copy.svg"
                alt="copy"
               className="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"
               onClick={() => handleCopy("NEWBUS")} // replace with the actual code
              style={{ cursor: "pointer" }}
              />              
              </div>
              <div className="offer-card bg-warning text-dark">
                <p className="mb-0 fw-bold">Flat ₹100 Cashback</p>
                <small>New User Only</small>
                <div className="OfferCard__OfferCode-sc-1f27jzb-11 iWrqRd">NEWUSER</div>
                <img
                src="https://s2.rdbuz.com/web/images/homeV2/copy.svg"
                alt="copy"
               className="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"
               onClick={() => handleCopy("NEWUSER")} // replace with the actual code
              style={{ cursor: "pointer" }}
              />              
              </div>              
            </div>
            <button className="scroll-btn modern right" onClick={() => scrollRight (trendingScrollRef)}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          
        </div>
        
      </div>
      
        

      {/* 🔻 government buses positioned at bottom of banner */}
        <div className="government-offers-wrapper container-fluid position-absolute bottom-0 start-50 translate-middle-x">
          <div className="government-box bg-white rounded shadow px-3 py-4 position-relative">
            <h5 className="fw-bold text-body-secondary  mb-10">Government Buses</h5>
            <button className="scroll-btn modern left" onClick={() => scrollLeft(governmentScrollRef)}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <div className="government-scroll d-flex overflow-auto" ref={governmentScrollRef}>
              <div className="offer-card bg-light text-dark " >
                <img src="https://s3.rdbuz.com/web/images/homeV2/10283.png" alt="copy" className="OfferCard__OfferCopyIcon-sc-1f27jzb-9 kcXuio"></img>

                <h5 className="card-title mb-0 fw-bold">APTRTC</h5>
                  <h6 className="card-subtitle mb-2 text-muted">ఆంధ్రప్రదేశ్ రాష్ట్ర రోడ్డు రవాణా</h6>
                
                <small className="card-text " >1539 services including Garuda,Garuda Plus and more</small>
                
              </div>
              <div className="offer-card bg-light text-dark " >
                <img src="https://s3.rdbuz.com/web/images/homeV2/18491.png" alt="copy" className="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"></img>

                <h5 className="card-title mb-0 fw-bold">TGSRTC</h5>
                  <h6 className="card-subtitle mb-2 text-muted">తెలంగాణ రాష్ట్ర రోడ్డు రవాణా </h6>
                
                <small className="card-text " >1450 services including Garuda,Rajdhani and more</small>
                
              </div>
              <div className="offer-card bg-light text-dark " >
                <img src="https://s3.rdbuz.com/web/images/homeV2/28011.png" alt="copy" className="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"></img>
                <h5 className="card-title mb-0 fw-bold">KERALA RTC</h5>
                  <h6 className="card-subtitle mb-2 text-muted">കേരള സ്റ്റേറ്റ് റോഡ് ട്രാൻ</h6>
                
                <small className="card-text " >950 services including swift, AC and more</small>
                
              </div>
              <div className="offer-card bg-light text-dark " >
                <img src="https://s3.rdbuz.com/web/images/homeV2/7115.png" alt="copy" className="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"></img>
                <h5 className="card-title mb-0 fw-bold">KTCL</h5>
                  <h6 className="card-subtitle mb-2 text-muted">कदंब येरादारी म्हामंडळ</h6>
                
                <small className="card-text " >60 services including volvo bus, AC & Non AC buses and more</small>
                
              </div>
              <div className="offer-card bg-light text-dark " >
                <img src="https://s3.rdbuz.com/web/images/homeV2/15499.png" alt="copy" className="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"></img>
                <h5 className="card-title mb-0 fw-bold">RSRTC</h5>
                  <h6 className="card-subtitle mb-2 text-muted">राजस्थान स्टेट रोड ट्रांसपोर्ट कॉर्पोरशन</h6>
                
                <small className="card-text " >6000 services including Deluxe, ordinary and more</small>
                
              </div>
              <div className="offer-card bg-light text-dark " >
                <img src="https://s3.rdbuz.com/web/images/homeV2/16227.png" alt="copy" className="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"></img>
                <h5 className="card-title mb-0 fw-bold">HRTC</h5>
                  <h6 className="card-subtitle mb-2 text-muted">हिमाचल रोड ट्रान्सपोर्ट कॉर्पोरेशन</h6>
                
                <small className="card-text " >480 services including Himgaurav, Himmani and more</small>
                
              </div>
              <div className="offer-card bg-light text-dark " >
                <img src="https://s3.rdbuz.com/web/images/homeV2/16374.png" alt="copy" className="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"></img>
                <h5 className="card-title mb-0 fw-bold">SBSTC</h5>
                  <h6 className="card-subtitle mb-2 text-muted">দক্ষিণবঙ্গ রাষ্ট্রীয় পরিবহণ সংস্থা</h6>
                
                <small className="card-text " >480 services including volvo bus, AC & Non AC and more</small>
                
              </div>         
            </div>
            <button className="scroll-btn modern right" onClick={() => scrollRight(governmentScrollRef)}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          
     </div>
     </div>
  );
};

export default Home;
