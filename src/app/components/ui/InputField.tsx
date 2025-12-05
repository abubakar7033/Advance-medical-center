import React from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  id, 
  type = 'text', 
  required = false, 
  placeholder, 
  value, 
  onChange, 
  className = '' 
}) => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm leading-none font-semibold text-gray-900" htmlFor={id}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className={`file:text-foreground placeholder:text-gray-400 border-gray-300 flex h-11 w-full min-w-0 rounded-lg border-2 px-4 py-2 text-sm bg-white transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 ${className}`}
    />
  </div>
);
