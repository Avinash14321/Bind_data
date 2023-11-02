

export function Users() 
{
    let name="Avinash";
    let email = "avinash@gmail.com";   
    let phone = 7569788575; 
    let gender = "Male";      
    let dob = "02/11/2023";
    return <>
    <div className="margin-20">
        <div className="margin-10"> 
        <label>Name:</label>
        <label>Avinash</label>
        </div>
        <div className="margin-10">    
        <label>Email:</label> 
        <label>avinash@gmail.com</label>   
        </div>  
        <div className="margin-10">
        <label>Phone:</label>
        <label>7569788575</label>    
        </div>
        <div className="margin-10">   
        <label>Gender:</label>
        <label>Male</label>
        </div>
        <div className="margin-10">
        <label>DOB:</label>
        <label>02/11/2023</label>
        </div>
    </div>

   </>
}    