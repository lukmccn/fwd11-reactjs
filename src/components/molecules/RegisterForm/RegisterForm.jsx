import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import FormError from '../../atoms/FormError/FormError';
import { useAuth } from '../../../hooks/useAuth';

const schema = yup.object({
  email: yup.string().email('Format email tidak valid').required('Email wajib diisi'),
  password: yup.string().min(6, 'Password minimal 6 karakter').required('Password wajib diisi'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password tidak cocok')
    .required('Konfirmasi password wajib diisi'),
});

function RegisterForm() {
  const { register: registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
    } catch (err) {
      setError('root.serverError', {
        message: err.message || 'Registrasi gagal. Silakan coba lagi.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-white">Daftar Akun</h2>
      <FormError message={errors.root?.serverError?.message} />
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="eve.holt@reqres.in"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        placeholder="Min. 6 karakter"
        {...register('password')}
        error={errors.password?.message}
      />
      <Input
        label="Konfirmasi Password"
        id="confirmPassword"
        type="password"
        placeholder="Masukkan ulang password"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
      <Button type="submit" disabled={isSubmitting} size="md">
        {isSubmitting ? 'Mendaftarkan...' : 'Daftar'}
      </Button>
      <p className="text-sm text-gray-muted text-center">
        Sudah punya akun?{' '}
        <a href="/login" className="text-primary-light hover:underline">
          Login
        </a>
      </p>
    </form>
  );
}

export default RegisterForm;
