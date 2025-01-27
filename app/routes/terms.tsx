import type { Route } from "./+types/home";
import React from "react";
import {TextSection, TextHeading, TextSubHeading, TextParagraph} from "~/components/layout/common";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Research React Router - Terms of Service" },
    { name: "description", content: "Welcome to Research React Router Terms of Service!" },
  ];
}

export default function TermsOfService() {

  return (
      <div>
        <div className="container px-4">
          <TextSection>
            <TextHeading>Terms of Service</TextHeading>
            <TextParagraph>Welcome to [ACME inc.]. By using our online or mobile application (the "App"), you agree to the
              following Terms of Service. Please read them carefully before proceeding.</TextParagraph>
          </TextSection>

          <TextSection>
            <TextSubHeading>1. General Use</TextSubHeading>
            <TextParagraph>The App is provided for general informational purposes only and is not intended to provide professional,
              legal, financial, medical, or any other type of advice. You should use independent tools, resources, and
              professionals to make informed decisions and achieve your goals.</TextParagraph>
            <TextParagraph>Your use of the App is entirely at your own risk. We reserve the right to modify or discontinue the App at
              any time without prior notice.</TextParagraph>
          </TextSection>

          <TextSection>
            <TextSubHeading>2. No Guarantees or Warranties</TextSubHeading>
            <TextParagraph>The App is provided on an "as-is" and "as-available" basis. While we strive to ensure the App is accurate,
              reliable, and up-to-date, we do not guarantee that it will meet your expectations, be error-free, or achieve
              any specific results.</TextParagraph>
            <TextParagraph>We disclaim all warranties, express or implied, including but not limited to warranties of merchantability,
              fitness for a particular purpose, or non-infringement.</TextParagraph>
          </TextSection>

          <TextSection>
            <TextSubHeading>3. Limitations of Liability</TextSubHeading>
            <TextParagraph>Under no circumstances shall Odinium Ltd or its affiliates, employees, or partners be liable for
              any indirect, incidental, consequential, or punitive damages, including but not limited to loss of profits,
              data, or decision-making, arising out of your use of the App.</TextParagraph>
            <TextParagraph>In jurisdictions where such limitations are not allowed, our liability shall be limited to the maximum
              extent permitted by law.</TextParagraph>
          </TextSection>

          <TextSection>
            <TextSubHeading>4. User Responsibilities</TextSubHeading>
            <TextParagraph>You agree to use the App responsibly and not to rely solely on the App for making important decisions or
              achieving your goals. Use other tools, resources, or professional guidance to make informed choices.</TextParagraph>
            <TextParagraph>You are solely responsible for your actions and any consequences resulting from the use of the App.</TextParagraph>
          </TextSection>

          <TextSection>
            <TextSubHeading>5. Changes to These Terms</TextSubHeading>
            <TextParagraph>We may update these Terms of Service from time to time. Continued use of the App constitutes your
              acceptance of the updated terms. It is your responsibility to review these terms periodically.</TextParagraph>
          </TextSection>

          <TextSection>
            <TextSubHeading>6. Governing Law</TextSubHeading>
            <TextParagraph>These Terms of Service are governed by and construed in accordance with the laws of England, United Kingdom,
              without regard to its conflict of law provisions.</TextParagraph>
          </TextSection>

          <TextSection>
            <TextSubHeading>7. Contact Us</TextSubHeading>
            <TextParagraph>If you have any questions or concerns about these Terms of Service, please contact us at
              [CONTACT US].</TextParagraph>
          </TextSection>

          <TextParagraph>Last Updated: January 2025</TextParagraph>
        </div>
      </div>
  );
}
