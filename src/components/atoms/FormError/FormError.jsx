function FormError({ message }) {
  if (!message) return null;
  return (
    <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-card text-sm" role="alert">
      {message}
    </div>
  );
}

export default FormError;
