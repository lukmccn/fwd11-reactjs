import { forwardRef } from 'react';

const Input = forwardRef(({ label, id, error, type = 'text', className = '', ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        type={type}
        className={`w-full px-4 py-2 bg-dark-light border rounded-card text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary ${
          error ? 'border-red-500' : 'border-gray-600'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
