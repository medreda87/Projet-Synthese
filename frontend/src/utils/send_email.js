import emailjs from "emailjs-com";


export const sendEmail = (props)=>{
    console.log("mmmm")
    return emailjs.send(
        "service_da54p3l",     // Service ID
        "template_dlr8gz6",    // Template ID
        {
          from_name: "Imran",
          from_email: "test@email.com",
          message: "Hello EmailJS!",
        },
        "uM2iqvzCE2eGYXlPP"        // Public Key
      );
}

 