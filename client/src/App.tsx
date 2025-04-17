import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string()
});

type LoginFormData = z.infer<typeof loginSchema>;

const App: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginFormData) => {
      const response = await axios.post('http://localhost:3000/login', data);
      return response.data;

    },
    onSuccess: (data) => {    
      alert("Welcome "+data.user.email.split("@")[0]); 
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || 'Something went wrong';
        alert(message);
      }
    },
  });
  
  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-md">
        <h2 className="text-2xl font-bold text-center mb-10">Welcome back!</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 ">
          <input
            type="email"
            placeholder="UID"
            {...register('email')}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          <button
            type="submit"
            className="bg-[#2B3A67] text-white py-2 rounded-lg hover:bg-blue-700 transition mt-8"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};



export default App
