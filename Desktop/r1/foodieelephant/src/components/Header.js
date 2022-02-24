import React from "react";
const Header = (props) => {
    const {search, onInputChange, onSearchClick} = props;
    return(

      <nav class= "navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><b>FOODIE ELEPHANT</b></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active"  href="./components/Header">Home</a>
                </li>
            </ul>
            <div class="input-group w-50 mx-auto">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search Your Recipe..."
                    value={search}
                    onChange={onInputChange}
                />
                <div class="input-group-append">
                <button className="btn btn-success" onClick={onSearchClick}>
                    Search Recipe
                </button>
                </div>
            </div>
        </div>
        </nav>
        
    )
}

export default  Header;



