/* eslint-disable jsx-a11y/iframe-has-title */
import styled from "styled-components";
import {IoLocation,} from 'react-icons/io5'
import {BsTelephoneOutboundFill} from 'react-icons/bs'
import {MdOutlineFax} from 'react-icons/md'
import {IoIosMail} from 'react-icons/io'
// import {useFilterContext} from './Context/Filter_Context'
const Contact = () => {
  // const name=useFilterContext();
  // console.log('name1',name);
  return <Wrapper>
    {/* <h2 className="common-heading">Contact Page</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9697.8
    57315559695!2d73.94217709735693!3d18.55234576186301!2m3!1f0!2f0!3f0!3
    m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c3288ba495%3A0x38e833613a63004a!2sKh
    aradi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1683873737097!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xpzenpwd" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete='off' />
          <input type="email" placeholder="Email" name="Email" autoComplete="off" required />
          <textarea name="Message" cols='30' rows='10' required autoComplete="off" placeholder="Enter your message" />
          <input type="submit" value='send'></input>
        </form>
      </div>
    </div> */}
    <div className="container">
      <div className="kd">
      <div className="main-box">
      <div className="box1">
        <IoLocation className="icons"/>
        <p className="para">Our main office</p>
        <p>Soho 94 Brodway St New York NY 1001</p>
      </div>
      <div className="box1 ">
        <BsTelephoneOutboundFill className="icons"/>
        <p className="para">phone number</p>
        <p>777-0097-742</p>
        <p>992-3999-948(Toll Free)</p>
      </div>
      <div className="box1">
        <MdOutlineFax className="icons"/>
        <p className="para">fax</p>
        <p>1-234-567-8900</p>
      </div>
      <div className="box1">
      <IoIosMail className="icons"/>
        <p className="para">Email</p>
        <p className="para1">kartikdongare2000@gmail.com</p>
      </div>
    </div>
    <div className="main-form">
      <h3>Contact Us</h3>
      <form action="https://formspree.io/f/xpzenpwd" method="POST" className="form">
        <input type="text" placeholder="Enter Your Name" required autoComplete="off"/>
        <input type="email" placeholder="Enter valid email address" required autoComplete="off"/>
        <textarea name="Message" placeholder="Write something....." rows='5' cols='50' required autoComplete="off"/>
        <button type="submit" value='send'>Submit</button>
      </form>
    
    </div>
    </div>
      </div>

    
  </Wrapper>;
};

export default Contact;

const Wrapper = styled.section`
/* height: 100vh;
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  } */
  margin: 0;
  padding: 0;
 
  /* background-color: blue; */
  .container{
    position: relative;
    .kd{
      position: relative;
    }
  }

  .main-box{
    /* border: 1px solid black; */
    margin-top:5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
   gap: 20px;
 
  }
  .box1{
    /* border: 1px solid red; */
    /* padding: 0 5rem 0 5rem ; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height:250px;
    text-align: center;
    box-shadow: 0 0 10px #e6ebe7;
    .para{
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .para1{
      color: blue;
      border-bottom: 1px solid blue;
    }
    .icons{
      font-size:70px;
      color: #52def7;
    }
  }

  .main-form{
    width: 50%;

    margin: auto;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #52def7;
    margin-top: 10px;
    border-radius: 10px;
    /* position: absolute;
    z-index: 0;
    top: -20px; */
    h3{
      font-size: 40px;
      color: blue;
    }
    button{
      border: 1px solid white;
      background-color: transparent;
      padding: 8px 25px 8px 25px;
      font-weight:bold;
      margin-top: 20px;
    }
    .form{
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 0;
   
    input{
      width: 100%;
    }
    }
  }

  @media screen and (max-width:${({theme})=>theme.media.mobile}){
    .main-box{
      flex-direction: column;
    }
    .main-form{
      width: 100%;
      .form {
        input{
          width: 70%;
        }
        textarea{
      width: 70%;
    }
      }
    }
    
    }
  
`;