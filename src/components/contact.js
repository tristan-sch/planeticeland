import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import tw from "twin.macro";
// import ReCAPTCHA from "react-google-recaptcha";
import { Wrapper, Container } from "../misc/Layouts.js";

const FormContainer = tw.div`p-10 sm:p-12 md:p-16 bg-secondary-dark text-gray-100 sm:rounded-lg relative`;
const Form = tw.div`mt-4`;
const Headline2 = tw.h2`text-3xl sm:text-4xl font-bold font-primary`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-primary-dark focus:outline-none transition duration-200`;
const TextArea = tw.textarea`h-full resize-none w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-primary-dark focus:outline-none transition duration-200`;

const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-secondary-dark rounded font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-primary-dark hover:text-gray-100 hocus:-translate-y-px hocus:shadow-xl`;

export default function Contact({ homepage }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_MAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_MAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_MAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Wrapper id="contact">
      <Container css={[tw`pb-0 sm:mb-20`]}>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <Headline2>{homepage.contact.contactHeading}</Headline2>
            <Form>
              <form ref={form} onSubmit={sendEmail}>
                <TwoColumn>
                  <Column>
                    <InputContainer>
                      <Label>{homepage.contact.nameLabel}</Label>
                      <Input
                        type="text"
                        name="from_name"
                        id="from_name"
                        placeholder={homepage.contact.namePlaceholder}
                        required
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label>{homepage.contact.emailLabel}</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={homepage.contact.emailPlaceholder}
                        required
                      />
                    </InputContainer>
                  </Column>
                  <Column>
                    <InputContainer tw="flex-1">
                      <Label>{homepage.contact.messageLabel}</Label>
                      <TextArea
                        name="message"
                        id="emmessageail"
                        placeholder={homepage.contact.messagePlaceholder}
                      />
                    </InputContainer>
                  </Column>
                </TwoColumn>
                {/* <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
                /> */}
                <SubmitButton type="submit" value="Send">
                  {homepage.contact.submitLabel}
                </SubmitButton>
              </form>
            </Form>
          </div>
        </FormContainer>
      </Container>
    </Wrapper>
  );
}
