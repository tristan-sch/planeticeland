import { useState } from "react";
import tw from "twin.macro";
// import { useRouter } from "next/router";
import { sendMail } from "../lib/api";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = tw.div`p-10 sm:p-12 md:p-16 bg-secondary-dark text-gray-100 rounded-lg relative`;
const Form = tw.div`mt-4`;
const Headline2 = tw.h2`text-3xl sm:text-4xl font-bold font-primary`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-primary-dark focus:outline-none transition duration-200`;
const TextArea = tw.textarea`h-0 sm:h-full resize-none w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-primary-dark focus:outline-none transition duration-200`;

const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-secondary-dark rounded font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-primary-dark hover:text-gray-100 hocus:-translate-y-px hocus:shadow-xl`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const router = useRouter();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const emailContent = `
      Message received from <strong>${name}</strong>. 
      Their email address is <strong>${email}</strong>. <br />
      They'd like to know about...
      ${message}
    `;
    const data = await sendMail(
      "New message from website contact form",
      emailContent
    );

    if (data.sent) {
      // email was sent successfully!
      ("Thanks you");
    }
  };

  return (
    <Container id="contact">
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <Headline2>Contact us</Headline2>
            <Form>
              <form action="#" onSubmit={handleSubmit}>
                <TwoColumn>
                  <Column>
                    <InputContainer>
                      <Label htmlFor="name-input">Your Name</Label>
                      <Input
                        id="name-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="E.g. John Doe"
                        required
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="email-input">Your Email Address</Label>
                      <Input
                        id="email-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E.g. john@mail.com"
                        required
                      />
                    </InputContainer>
                  </Column>
                  <Column>
                    <InputContainer tw="flex-1">
                      <Label htmlFor="name-input">Your Message</Label>
                      <TextArea
                        id="message-input"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="E.g. Details about your event"
                      />
                    </InputContainer>
                  </Column>
                </TwoColumn>

                <SubmitButton type="submit" value="Submit">
                  Submit
                </SubmitButton>
              </form>
            </Form>
          </div>
        </FormContainer>
      </Content>
    </Container>
  );
};
export default Contact;
