
//  stateless functional component

const Navbar= ({ totalCounters }) =>{
    console.log ("nav bar - rendered")
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
             Navbar{" "} <span className="badge badge-pill badge-secondary">
                 {totalCounters}
             </span>
            </a>
          
        </nav>
      );
};

export default Navbar;
