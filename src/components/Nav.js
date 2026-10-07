import React, { useState, useEffect }  from 'react';
import "../Nav.css"

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);}
    };
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAQ4TXm1OaapkwYRGseWYrT2HFpAFV7IX9bgV76BxLOD_049HTkgqZ6zq3enQ0gxU1b-868yGZj1I99Ak9oRykNILYsbpT_0d-be9QKbwkD8OfaEdWL-FHZBiORJ9ppzVCM1-mVn63afS.svg"
        alt="NetFlix Logo"
      />

      <img
        className="nav__avatar"
        src="https://occ-0-999-448.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABXKjT1j556gaGwGR9ohiHfsB7QIr3z3ntqxddT4YkNsHEq6u5MgadQa31VYdoVbIB1B51YxET6VnCSjQabMaQ2695AA2sFWkdVcQ.png?r=a4b"
        alt="NetFlix Logo"
      />

    </div>
  );
}

export default Nav

