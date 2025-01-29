import type { Route } from './+types/home'
import React from 'react'
import {
    TextSection,
    TextHeading,
    TextSubHeading,
    TextParagraph,
} from '~/components/layout/common'

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Research React Router - Privacy Policy' },
        {
            name: 'description',
            content: 'Welcome to Research React Router Privacy Policy!',
        },
    ]
}

export default function PrivacyPolicy() {
    return (
        <div>
            <TextSection>
                <TextHeading>Privacy Policy</TextHeading>
                <TextParagraph>
                    At Odinium Ltd, we respect your privacy and are committed to
                    protecting your personal information. This Privacy Policy
                    explains how we collect, use, and protect your data when you
                    use our online or mobile application (the "App").
                </TextParagraph>
            </TextSection>

            <TextSection>
                <TextSubHeading>1. Information We Collect</TextSubHeading>
                <TextParagraph>
                    The only personal information we collect and store is your
                    email address. No other personal information (such as name,
                    address, phone number, or payment details) is stored.
                </TextParagraph>
            </TextSection>

            <TextSection>
                <TextSubHeading>2. How We Use Your Information</TextSubHeading>
                <TextParagraph>
                    We use your email address for the following purposes:
                </TextParagraph>
                <ul className="ml-8 list-disc">
                    <li className="text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-300">
                        To communicate with you regarding updates, support, and
                        important notifications about the App.
                    </li>
                    <li className="text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-300">
                        To diagnose technical issues and improve the
                        functionality and user experience of the App.
                    </li>
                </ul>
            </TextSection>

            <TextSection>
                <TextSubHeading>3. Sharing of Information</TextSubHeading>
                <TextParagraph>
                    We do not sell, rent, or share your email address with third
                    parties for marketing purposes.
                </TextParagraph>
                <TextParagraph>
                    Your personal data may be shared with trusted partner
                    companies, but only in the following ways:
                </TextParagraph>
                <ul className="ml-8 list-disc">
                    <li className="text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-300">
                        **Anonymously:** Personal data may be anonymized before
                        sharing to ensure it cannot identify you.
                    </li>
                    <li className="text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-300">
                        **At an Aggregate Level:** Data may be aggregated with
                        that of other users to analyze trends, diagnose issues,
                        or enhance the App.
                    </li>
                </ul>
            </TextSection>

            <TextSection>
                <TextSubHeading>4. Data Security</TextSubHeading>
                <TextParagraph>
                    We implement appropriate security measures to protect your
                    email address from unauthorized access, disclosure, or
                    alteration. However, no system can be 100% secure, and we
                    cannot guarantee the absolute security of your data.
                </TextParagraph>
            </TextSection>

            <TextSection>
                <TextSubHeading>5. Your Privacy Rights</TextSubHeading>
                <TextParagraph>
                    You have the right to request access to, correction of, or
                    deletion of your email address stored by us. To exercise
                    these rights, please [CONTACT US].
                </TextParagraph>
            </TextSection>

            <TextSection>
                <TextSubHeading>
                    6. Changes to This Privacy Policy
                </TextSubHeading>
                <TextParagraph>
                    We may update this Privacy Policy from time to time. If we
                    make significant changes, we will notify you by email or
                    through the App. Your continued use of the App constitutes
                    your acceptance of the updated Privacy Policy.
                </TextParagraph>
            </TextSection>

            <TextSection>
                <TextSubHeading>7. Contact Us</TextSubHeading>
                <TextParagraph>
                    If you have any questions or concerns about this Privacy
                    Policy, please reach out to us at{' '}
                    <a href="mailto:support@yourcompany.com">
                        support@yourcompany.com
                    </a>
                    .
                </TextParagraph>
            </TextSection>

            <TextParagraph>Last Updated: January 2025</TextParagraph>
        </div>
    )
}
