// /* eslint-disable @typescript-eslint/no-unused-vars */
// import emailjs from "@emailjs/browser";
// import { Dispatch, SetStateAction } from "react";

// interface FormState {
//   user_name: string;
//   user_email: string;
//   user_phone: string;
//   message: string;
// }

// export const handleMessageForm = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 
//   setState: Dispatch<SetStateAction<FormState>>
//   ) => {
//   setState((prevInput) => ({
//     ...prevInput,
//     [e.target.name]: e.target.value,
//   }));
// };

// export const resetInputForm = (setState: Dispatch<SetStateAction<FormState>>) => {
//   setState({
//     user_name: "",
//     user_email: "",
//     user_phone: "",
//     message: "",
//   });
// };

// export const validationEmail = (input: FormState) => {
//   return input.user_email.includes("@");
// }

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const handleSubmitForm = (input: { user_name: any; user_email: any; user_phone: any; message: any; }, form: { current: string | HTMLFormElement; }, resetInput: () => void) => {
//   if (input.user_name && input.user_email && input.user_phone && input.message) {
//     emailjs.sendForm("service_72e0gbq", "template_84cgwze", form.current, "bf7EoOQF0mJdThjgC")
//       .then((result) => {
//         console.log(result.text);
//       }, (error) => {
//         console.log(error.text)
//       });
//       console.log("se envio el correo")
//     // Swal.fire({
//     //   title: "Gracias por contactarnos!",
//     //   text: "Responderemos tu mail a la brevedad!",
//     //   icon: "success",
//     //   confirmButtonText: "OK"
//     // });

//     resetInput();
//   } else {
//     console.log("no se envio el correo")
//     // Swal.fire({
//     //   title: "Error al enviar el formulario",
//     //   text: "Campos faltantes",
//     //   icon: "error",
//     //   confirmButtonText: "OK"
//     // });
//   }
// };