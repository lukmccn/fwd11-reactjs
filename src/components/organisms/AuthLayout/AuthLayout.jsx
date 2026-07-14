import Logo from '../../atoms/Logo/Logo';

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center px-4">
      <div className="mb-8">
        <Logo />
      </div>
      <div className="w-full max-w-md bg-dark-light rounded-card p-8 shadow-lg border border-gray-600">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
