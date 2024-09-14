
import courseImage from '../assets/img1.png'
import courseImage2 from '../assets/img2.jpg'

function Blogitem() {
  return (
    <>
      <div className="section">
      <Item/>
      <Item/>
      <Item/>
       
      
       </div>
    </>
  );
}


function Item(){
    return(

       <><div id="courseitem">
        <img src={courseImage} />
        <h1>Photoshop</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor facilis obcaecati eos. Possimus impedit sapiente quasi eum unde harum provident, necessitatibus blanditiis similique itaque obcaecati inventore quibusdam quam, aspernatur quod natus quaerat?</p>
      </div> 
      <div id="courseitem">
        <img src={courseImage2} />
        <h1>Photoshop</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor facilis obcaecati eos. Possimus impedit sapiente quasi eum unde harum provident, necessitatibus blanditiis similique itaque obcaecati inventore quibusdam quam, aspernatur quod natus quaerat?</p>
      </div>
      <div id="courseitem">
        <img src={courseImage} />
        <h1>Photoshop</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor facilis obcaecati eos. Possimus impedit sapiente quasi eum unde harum provident, necessitatibus blanditiis similique itaque obcaecati inventore quibusdam quam, aspernatur quod natus quaerat?</p>
      </div>
       
    </> 
    )
}

export default Blogitem;
