import { useEffect } from "react";
import Cookies from "js-cookie";
import './signup.css'


function SubscriberInfo() {

  useEffect(() => {
    const token = Cookies.get('token');

    if (token) {
      console.log('Token:', token);
    } else {
      console.log('Token cookie does not exist or is not accessible.');
      console.log(document.cooke)
    }
  }, []);


  // const [location, setlocation] = useState('');
  // const [TeleId, setTeleId] = useState('');
  // const [Notification, setNotification] = useState('');
  // const [username, setUsername] = useState('');


  // const handleLogin = (e) => {
  //   console.log("hi")
  //   console.log(location,TeleId,Notification,username)
  //   e.preventDefault();
  //   console.log("clicked here")
  //    const SignUpData = {
  //     location : location,
  //     TeleId : TeleId,
  //     Notification : Notification,
  //     username : username
  //   };
  //     axios.post(`https://nestjs-backend-1y31.onrender.com/api/signupdata`, SignUpData)
  //     .then((response)=> {
  //       console.log(process.env.BACK_END_URL);
  //         console.log('Success', response)
  //         if(response.status === 200){
  //               console.log("Success");
  //         }
  //       })
  //     .catch((err) => {
  //         console.log('There is an error',err)

  //         if(err.response.status === 409){
  //             console.log("not found");
  //         }
  //         else if(err.response.status === 400){
  //           console.log("fail")
  //         }
  //     })
  //   }
  
  return (
    <>
    <div className="note">
    <h7>Note: Subscription Can be easily done from the telegram itself.</h7>
    </div>
     <div className='center'>
     <p className="title-weather"><h1>Daily Weahter</h1> 
     <div className="noteTwo">
     <h7>This module is being stoped from development as of now and due to time constraints.</h7> <br/>
     <h7> Recommended way to sign in via: Bot's Telegram Handle<a href="https://t.me/Weather_Kamal_bot"> Bot's Telegram </a></h7>
     </div>
     </p>

 <form action="#" 
//  onSubmit={handleLogin}
 >
        <div class="txt_field">
        <input type="text" name="location"
          // value={location}
          // onChange={(e)=>setlocation(e.target.value)}
          required
          />
          <span></span>
          <label>Location</label>
          </div>
          <div class="txt_field">
          <input type="text" name="TeleId" 
          // value={TeleId}
          // onChange={(e)=>setTeleId(e.target.value)}
          required
          />
           <span></span>
          <label>Telegram Chat_Id</label>
          </div>
          <div class="txt_field">
          <input type="text" name="Notification" 
          // value={Notification}
          // onChange={(e)=>setNotification(e.target.value)}
          required
          />
           <span></span>
          <label>Notification Preferences</label>
          </div>
          <div class="txt_field">
          <input type="text" name="username" id="username"
          // value={username}
          // onChange={(e)=>setUsername(e.target.value)}
          required
          />
           <span></span>
          <label>Username: How We should call you</label>
          </div>
          <button type="submit" className="sub-btn">Subscribe</button>
        </form>
        </div>
    </>
  );
}
export default SubscriberInfo;
