import React from 'react';

interface TextAreaFieldProps {
  label: string;
  id: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ 
  label, 
  id, 
  required = false, 
  placeholder, 
  value, 
  onChange, 
  rows = 2 
}) => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm leading-none font-semibold text-gray-900" htmlFor={id}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      rows={rows}
      className="resize-none border-gray-300 placeholder:text-gray-400 flex field-sizing-content min-h-16 w-full rounded-lg border-2 bg-white px-4 py-2 text-sm transition-all outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
    />
  </div>
);
