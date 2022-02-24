import React from "react";
const Recipeitem = (props) => {
    const { label, image, ingredientLines, url} = props;
    return( 
                 <div class="col-md-3 my-2">
                    <div class= "card py-2 text-center">
                        <img src={image} class="img-fluid w-50 mx-auto rounded-circle"/> 
                        <div class= "card-body"> 
                        <h5>{label}</h5>
                        </div>
                        <table>
                        <thead>
                        <th>Ingredient</th>
                        </thead>
                        <tbody>
                        {ingredientLines.map((ingredient, index) => (
                            <tr key={index} className="list-group-item">
                            <td>{ingredient}</td>
                            </tr>
                        ))}
                        </tbody>
                        </table>
                        {/* <div>{url}</div> */}
                        <div class="input-group-append">
                            <button className="btn btn-success" onClick={() => window.open(url)}>
                                Recipe Link
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
             

export default  Recipeitem;