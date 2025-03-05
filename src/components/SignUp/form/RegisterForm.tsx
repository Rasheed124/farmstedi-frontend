'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const RegisterSchema = z
  .object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

interface RegisterFormProps {
  setStep: (step: number) => void;
  setEmail: (email: string) => void;
}

export default function RegisterForm({ setStep, setEmail }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const onRegister = (data: { email: string }) => {
    setEmail(data.email);
    console.log('Sending OTP to:', data.email);
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onRegister)}>
      <h2 className="text-xl font-semibold text-center mb-4">Create an Account</h2>

      <Label>First Name</Label>
      <Input {...register('firstName')} placeholder="First Name" />
      <p className="text-red-500 text-sm">{errors.firstName?.message}</p>

      <Label>Last Name</Label>
      <Input {...register('lastName')} placeholder="Last Name" />
      <p className="text-red-500 text-sm">{errors.lastName?.message}</p>

      <Label>Email Address</Label>
      <Input {...register('email')} placeholder="Email" />
      <p className="text-red-500 text-sm">{errors.email?.message}</p>

      <Label>Password</Label>
      <Input type="password" {...register('password')} placeholder="Password" />
      <p className="text-red-500 text-sm">{errors.password?.message}</p>

      <Label>Confirm Password</Label>
      <Input type="password" {...register('confirmPassword')} placeholder="Confirm Password" />
      <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>

      <Button className="w-full mt-4" type="submit">
        Create Account
      </Button>
    </form>
  );
}
