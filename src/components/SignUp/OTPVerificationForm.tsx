'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const OTPSchema = z.object({
  otp: z.string().length(6, 'OTP must be 6 digits'),
});

interface OTPVerificationProps {
  email: string;
}

export default function OTPVerificationForm({ email }: OTPVerificationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(OTPSchema),
  });

  const onVerifyOTP = (data: { otp: string }) => {
    console.log('Verifying OTP:', data.otp);
    alert('Account created successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onVerifyOTP)}>
      <h2 className="text-xl font-semibold text-center mb-4">Verify Your Email</h2>
      <p className="text-sm text-center mb-2">A message was sent to {email}. Enter the OTP to continue.</p>

      <Input {...register('otp')} placeholder="Enter OTP" />
      <p className="text-red-500 text-sm">{errors.otp?.message}</p>

      <Button className="w-full mt-4" type="submit">
        Verify & Complete Signup
      </Button>
    </form>
  );
}
