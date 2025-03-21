'use client';

import { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import RegisterForm from '@/components/SignUp/RegisterForm';
import OTPVerificationForm from '@/components/SignUp/OTPVerificationForm';


export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  return (
    <div className="flex justify-center items-center h-screen mx-4">
      <Card className="w-[350px]  py-10 shadow-lg">
        <CardContent>
        {/* <Progress value={step === 1 ? 50 : 100} className="mb-4" /> */}
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
