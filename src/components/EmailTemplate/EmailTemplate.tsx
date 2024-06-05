// src/components/email-template.tsx
import * as React from 'react';

interface EmailTemplateProps {
  name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name }) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>This is a short email message.</p>
  </div>
);