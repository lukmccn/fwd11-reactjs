import { useMemo } from 'react';

function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const baseClasses = 'inline-flex items-center justify-center font-bold border-none cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark focus:ring-primary';
  
  const variantClasses = useMemo(() => ({
    primary: 'bg-primary text-white',
    secondary: 'bg-transparent text-white border border-white',
  }), []);

  const sizeClasses = useMemo(() => ({
    sm: 'px-4 py-1.5 text-sm rounded-2xl',
    md: 'px-6 py-2.5 text-sm rounded-[20px]',
  }), []);

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
