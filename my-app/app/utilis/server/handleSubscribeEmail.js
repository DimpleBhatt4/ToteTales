"use server"


async function handleSubscribeEmail(formData) {

  const email = formData.get("email");
  console.log(email);
}

export default handleSubscribeEmail;
