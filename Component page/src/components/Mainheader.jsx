function Mainheader (){

    let satuts =  true ;

        // let userInfo = [
        //     {
        //         name: "Amit",
        //         email:"Amit@gmail.com"
        //     },
        //     {
        //         name: "Sumit",
        //         email:"Sumit@gmail.com"
        //     },
        //     {
        //         name: "Raj",
        //         email:  "aa@gmail.com"
        //     },
        //     {
        //         name: "SuTAlmit",
        //         email:"RA@gmail.com"
        //     }
        // ]
        //     let finalData = userInfo.map((v,i)=>{
        //         return(

        //             <>
        //             {i+1}.{v.name}{<br></br>}
        //             {i+1}.{v.email}{<br></br>}
        //             </>
        //         )

        //     })


    return(<>
    {
        (satuts)?<center style={{fontWeight:'bold', fontSize:'25px'}}> This Is My React Component page </center> : ''
    }
    
    {/* {
        finalData
    } */}

    <p style={{display:`${satuts?'block':'none'}`, textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam maxime aspernatur distinctio sint eum velit hic soluta, quos magnam numquam, nesciunt quod architecto. Inventore optio placeat fugiat maiores, consectetur recusandae!</p>
    
    
    
    </>
    )
}

export default Mainheader