<script setup>
import { ref, reactive, computed } from "vue";
import MainLayout from "@/components/Layout/Main.vue";
import emailjs from "@emailjs/browser";
import sgMail from "@sendgrid/mail";
import axios from "axios";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const messageData = ref({
  user_name: "",
  user_email: "",
  subject: "",
  message: "",
});
const contactForm = ref(null);
const submit = () => {
  console.log(messageData.value);
  // emailjs
  //   .sendForm(
  //     "service_aypm30r",
  //     "template_s9ghhyk",
  //     contactForm.value,
  //     "NXsOFWKYkWP5wFwVD"
  //   )
  //   .then(
  //     (result) => {
  //       console.log("SUCCESS!", result.text);
  //     },
  //     (error) => {
  //       console.log("FAILED...", error.text);
  //     }
  //   );

  sgMail.setApiKey(
    "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"
  );
  const message = {
    to: "ayomide2405@gmail.com",
    from: "signatorco@gmail.com",
    subject: "Test email",
    text: "This is a test email sent using SendGrid",
  };
  sgMail
    .send(message)
    .then(() => {
      console.log("Email sent successfully");
    })
    .catch((error) => {
      console.error(error.toString());
    });
};

let api =
  "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";
async function sendEmail() {
  try {
    const response = await axios.post(
      "https://api.sendgrid.com/v3/mail/send",
      {
        personalizations: [
          {
            to: [
              {
                email: "ayomide2405@gmail.com",
              },
            ],
          },
        ],
        from: {
          email: "signatorco@gmail.com",
        },
        subject: "subject TO udge",
        content: [
          {
            type: "text/plain",
            value: "This is a test email sent using SendGrid",
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
      }
    );

    console.log("Email sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
</script>

<template>
  <MainLayout>
    <button @click="sendEmail()">SEND MAIL</button>
    <section class="min-h-screen">
      <div class="pb-8 px-4 mb-24">
        <div
          class="bg-white max-w-[450px] mx-auto mt-12 py-8 px-6 rounded-2xl shadow-lg border"
        >
          <h2 class="text-2xl text-center mb-6">Contact Us</h2>
          <form @submit.prevent="submit()" ref="contactForm">
            <div class="flex items-center mb-4">
              <div class="field p-1 w-full">
                <div class="mb-1 pl-2">Name</div>
                <input
                  type="text"
                  placeholder="Name"
                  class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
                  required
                  name="user_name"
                  v-model="messageData.user_name"
                />
              </div>
              <div class="field p-1 w-full">
                <div class="mb-1 pl-2">Email</div>
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
                  required
                  name="user_email"
                  v-model="messageData.user_email"
                />
              </div>
            </div>

            <div class="field mb-4">
              <div class="mb-1 pl-2">Subject</div>
              <input
                type="text"
                placeholder="Subject"
                class="w-full h-10 bg-white border rounded-lg px-4 outline-none focus:border-primary-color"
                required
                name="subject"
                v-model="messageData.subject"
              />
            </div>
            <div class="field mb-4">
              <div class="mb-1 pl-2">Message</div>
              <textarea
                cols="30"
                rows="5"
                class="w-full bg-white border rounded-lg p-2 text-sm outline-none focus:border-primary-color"
                name="message"
                v-model="messageData.message"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-1 text-lg text-white bg-primary-color border-2 border-primary-color rounded-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
