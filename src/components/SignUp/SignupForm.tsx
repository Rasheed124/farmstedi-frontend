'use client';

import { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import RegisterForm from './form/RegisterForm';
import OTPVerificationForm from './form/OTPVerificationForm';

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px] p-4 shadow-lg">
        <CardContent>
          {step === 1 ? (
            <RegisterForm setStep={setStep} setEmail={setEmail} />
          ) : (
            <OTPVerificationForm email={email} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
